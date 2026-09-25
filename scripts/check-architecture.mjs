import {readdir, readFile, stat} from 'node:fs/promises';
import {join, relative} from 'node:path';

const root = process.cwd();
const scanRoots = ['src', 'studio', 'public', 'astro.config.mjs', 'sanity.config.ts', 'sanity.cli.ts', 'wrangler.jsonc', 'package.json'];
const forbidden = [
  [/46mghxoy/gi, 'retired Sanity project id'],
  [/home-stack/gi, 'legacy home stack'],
  [/data-home-stack/gi, 'legacy stack attribute'],
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
const expectedStyles = [
  'experience.css',
  'foundation-v2.css',
  'global.css',
  'refinement-v3.css',
  'reset.css',
  'tokens.css',
  'typography.css',
  'utilities.css'
].sort();
if (JSON.stringify(styleEntries) !== JSON.stringify(expectedStyles)) {
  failures.push(`src/styles must match the established style layers: ${expectedStyles.join(', ')}`);
}

for (const removed of ['src/scripts', 'src/styles/refinements', 'src/styles/system-theme']) {
  if (await stat(join(root, removed)).then(() => true).catch(() => false)) failures.push(`${removed} must not exist`);
}

const sourceChecks = [
  ['src/styles/experience.css', ['program-detail__hero', 'theme-detail__hero', 'place-essay__hero', 'project-detail-v2__hero', 'journal-detail-v2__header']],
  ['src/styles/refinement-v3.css', ['team-profile-hero', 'team-profile-core', 'team-profile-work__rail']]
];
for (const [path, markers] of sourceChecks) {
  const body = await readFile(join(root, path), 'utf8');
  for (const marker of markers) {
    if (!body.includes(marker)) failures.push(`${path} is missing established detail-system marker ${marker}`);
  }
}
const refinement = await readFile(join(root, 'src/styles/refinement-v3.css'), 'utf8');
if (refinement.includes('.person-detail')) failures.push('src/styles/refinement-v3.css contains obsolete .person-detail rules');

if (failures.length) {
  console.error(failures.map((item) => `✗ ${item}`).join('\n'));
  process.exit(1);
}
console.log(`✓ Architecture isolation passed across ${files.length} executable/configuration files`);
