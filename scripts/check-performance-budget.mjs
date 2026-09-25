import {readFile, readdir, stat} from 'node:fs/promises';
import {extname, join, relative} from 'node:path';
import {gzipSync} from 'node:zlib';

const assets = [];
const collect = async (path) => {
  for (const entry of await readdir(path, {withFileTypes: true})) {
    const target = join(path, entry.name);
    if (entry.isDirectory()) await collect(target);
    else if (['.js', '.css'].includes(extname(entry.name))) {
      const bytes = (await stat(target)).size;
      const gzipBytes = gzipSync(await readFile(target), {level: 9}).byteLength;
      assets.push({path: target, bytes, gzipBytes});
    }
  }
};
await collect('dist');

const total = (extension, field) =>
  assets
    .filter((asset) => extname(asset.path) === extension)
    .reduce((sum, asset) => sum + asset[field], 0);

const largestGzip = assets.reduce((value, asset) => Math.max(value, asset.gzipBytes), 0);
const rawCss = total('.css', 'bytes');

// Transfer-size budgets are gzip-based; raw CSS is separately regression-capped.
// This reflects what browsers actually download while preventing the current
// consolidated editorial stylesheet from growing without bound.
const limits = {
  jsGzip: 35_000,
  cssGzip: 55_000,
  largestGzip: 50_000,
  rawCss: 247_000,
  count: 12
};

const results = [
  ['JavaScript gzip bytes', total('.js', 'gzipBytes'), limits.jsGzip],
  ['CSS gzip bytes', total('.css', 'gzipBytes'), limits.cssGzip],
  ['Largest gzip asset', largestGzip, limits.largestGzip],
  ['Raw CSS regression cap', rawCss, limits.rawCss],
  ['JS/CSS asset count', assets.length, limits.count]
];

let failed = false;
for (const [label, actual, limit] of results) {
  const okay = actual <= limit;
  failed ||= !okay;
  console.log(`${okay ? '✓' : '✗'} ${label}: ${actual}/${limit}`);
}

if (failed) {
  console.error(
    assets
      .map((asset) => `${relative('.', asset.path)} raw=${asset.bytes} gzip=${asset.gzipBytes}`)
      .join('\n')
  );
  process.exit(1);
}
