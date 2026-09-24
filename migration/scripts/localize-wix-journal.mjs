import {createHash} from 'node:crypto';
import {mkdir, readFile, readdir, writeFile} from 'node:fs/promises';
import {gunzipSync} from 'node:zlib';

const root = new URL('../../', import.meta.url);
const chunksDirectory = new URL('src/content/wix-blog/', root);
const outputDirectory = new URL('public/media/journal/archive/', root);
const manifestFile = new URL('src/content/data/wix-media-map.json', root);

const chunkFiles = (await readdir(chunksDirectory))
  .filter((name) => name.endsWith('.b64'))
  .sort();
const encoded = (await Promise.all(
  chunkFiles.map((name) => readFile(new URL(name, chunksDirectory), 'utf8'))
)).map((value) => value.trim()).join('');
const posts = JSON.parse(gunzipSync(Buffer.from(encoded, 'base64')).toString('utf8'));

const sources = new Map();

const addSource = (source) => {
  if (!source) return;
  const raw = typeof source === 'string' ? source : source.id || source.url;
  if (!raw || typeof raw !== 'string') return;

  if (raw.includes('i.ytimg.com')) {
    sources.set(raw, {key: raw, url: raw, extension: '.jpg'});
    return;
  }

  if (/^(video\/|https?:\/\/video\.)/i.test(raw)) return;
  const match = raw.match(/(?:static\.wixstatic\.com\/media\/)?([^/?#]+\.(?:jpe?g|png|webp|avif|gif))(?:\/v1\/[^?#]*)?/i);
  if (!match) return;
  const id = match[1];
  const url = `https://static.wixstatic.com/media/${id}/v1/fit/w_1600,h_1600,q_82/${id}.webp`;
  sources.set(id, {key: id, url, extension: '.webp'});
};

const walkRichContent = (value) => {
  if (!value || typeof value !== 'object') return;
  if (value.imageData?.image?.src) addSource(value.imageData.image.src);
  if (value.videoData?.thumbnail?.src) addSource(value.videoData.thumbnail.src);
  if (Array.isArray(value.galleryData?.items)) {
    value.galleryData.items.forEach((item) => addSource(item?.image?.media?.src));
  }
  Object.values(value).forEach((child) => {
    if (child && typeof child === 'object') walkRichContent(child);
  });
};

for (const post of posts) {
  addSource(post.heroImage);
  addSource(post.media?.wixMedia?.image);
  walkRichContent(post.richContent);
}

await mkdir(outputDirectory, {recursive: true});
const manifest = {};
const queue = [...sources.values()];
const total = queue.length;
let completed = 0;
const skipped = [];

const download = async ({key, url, extension}) => {
  const stem = key.includes('://')
    ? `external-${createHash('sha256').update(key).digest('hex').slice(0, 18)}`
    : key.replace(/\.[^.]+$/, '').replace(/[^a-z0-9_-]+/gi, '-');
  const filename = `${stem}${extension}`;
  const localPath = `/media/journal/archive/${filename}`;
  let response = await fetch(url, {headers: {'User-Agent': 'KULT360 migration archive/1.0'}});
  if (!response.ok && url.includes('i.ytimg.com') && url.includes('/maxresdefault.jpg')) {
    response = await fetch(url.replace('/maxresdefault.jpg', '/hqdefault.jpg'), {
      headers: {'User-Agent': 'KULT360 migration archive/1.0'}
    });
  }
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  await writeFile(new URL(filename, outputDirectory), Buffer.from(await response.arrayBuffer()));
  manifest[key] = localPath;
  completed += 1;
  process.stdout.write(`\rJournal media ${completed}/${total}`);
};

const workers = Array.from({length: Math.min(6, queue.length)}, async () => {
  while (queue.length) {
    const source = queue.shift();
    if (!source) continue;
    try {
      await download(source);
    } catch (error) {
      skipped.push({key: source.key, reason: error instanceof Error ? error.message : String(error)});
      completed += 1;
      process.stdout.write(`\rJournal media ${completed}/${total}`);
    }
  }
});

await Promise.all(workers);
await writeFile(manifestFile, `${JSON.stringify(Object.fromEntries(
  Object.entries(manifest).sort(([left], [right]) => left.localeCompare(right))
), null, 2)}\n`);

process.stdout.write(`\nLocalized ${Object.keys(manifest).length} media files for ${posts.length} Journal posts.\n`);
if (skipped.length) {
  process.stdout.write(`Skipped ${skipped.length} unavailable remote thumbnails:\n`);
  skipped.forEach(({key, reason}) => process.stdout.write(`- ${key}: ${reason}\n`));
}
