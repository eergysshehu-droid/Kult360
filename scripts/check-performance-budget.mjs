import {readdir, stat} from 'node:fs/promises';
import {extname, join, relative} from 'node:path';

const assets = [];
const collect = async (path) => {
  for (const entry of await readdir(path, {withFileTypes: true})) {
    const target = join(path, entry.name);
    if (entry.isDirectory()) await collect(target);
    else if (['.js', '.css'].includes(extname(entry.name))) assets.push({path: target, bytes: (await stat(target)).size});
  }
};
await collect('dist');

const totals = (extension) => assets.filter((asset) => extname(asset.path) === extension).reduce((sum, asset) => sum + asset.bytes, 0);
const largest = assets.reduce((value, asset) => Math.max(value, asset.bytes), 0);
const limits = {js: 35_000, css: 35_000, largest: 25_000, count: 12};
const results = [
  ['JavaScript bytes', totals('.js'), limits.js],
  ['CSS bytes', totals('.css'), limits.css],
  ['Largest asset', largest, limits.largest],
  ['JS/CSS asset count', assets.length, limits.count]
];
let failed = false;
for (const [label, actual, limit] of results) {
  const okay = actual <= limit;
  failed ||= !okay;
  console.log(`${okay ? '✓' : '✗'} ${label}: ${actual}/${limit}`);
}
if (failed) {
  console.error(assets.map((asset) => `${relative('.', asset.path)} ${asset.bytes}`).join('\n'));
  process.exit(1);
}
