import {readdir, readFile, stat} from 'node:fs/promises';
import {join, relative} from 'node:path';

const root = process.cwd();
const scanRoots = ['src', 'studio', 'public', 'astro.config.mjs', 'sanity.config.ts', 'sanity.cli.ts', 'wrangler.jsonc', 'package.json'];
const forbidden = [
  [/46mghxoy/gi, 'retired Sanity project id'],
  [/home-stack/gi, 'legacy home stack'],
  [/data-home-stack/gi, 'legacy stack attribute'],
  [/ergyss?\s*shehu/gi, 'portfolio identity'],
  [/ergysshehu/gi, 'portfolio identity'],
  [/\/portfolio\//gi, 'photography portfolio route']
];

const files = [];
const collect = async (path) => {
  const info = await stat(path);
  if (info.isDirectory()) {
    for (const entry of await readdir(path)) await collect(join(path, entry));
  } else files.push(path);
};
for (const entry of scanRoots) await collect(join(root, entry));

const failures = [];
for (const file of files) {
  const body = await readFile(file, 'utf8').catch(() => '');
  for (const [pattern, label] of forbidden) {
    if (pattern.test(body)) failures.push(`${relative(root, file)} contains ${label}`);
    pattern.lastIndex = 0;
  }
}

const styleEntries = (await readdir(join(root, 'src/styles'))).sort();
const expectedStyles = ['global.css', 'reset.css', 'tokens.css', 'typography.css', 'utilities.css'];
if (JSON.stringify(styleEntries) !== JSON.stringify(expectedStyles)) {
  failures.push(`src/styles must contain only ${expectedStyles.join(', ')}`);
}

for (const removed of ['src/scripts', 'src/styles/refinements', 'src/styles/system-theme']) {
  if (await stat(join(root, removed)).then(() => true).catch(() => false)) failures.push(`${removed} must not exist`);
}

if (failures.length) {
  console.error(failures.map((item) => `✗ ${item}`).join('\n'));
  process.exit(1);
}
console.log(`✓ Architecture isolation passed across ${files.length} executable/configuration files`);
