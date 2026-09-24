import {readdir, readFile, stat} from 'node:fs/promises';
import {join, relative} from 'node:path';

const roots = ['src', 'studio'];
const files = [];
const collect = async (path) => {
  const info = await stat(path);
  if (info.isDirectory()) for (const entry of await readdir(path)) await collect(join(path, entry));
  else files.push(path);
};
for (const root of roots) await collect(root);

const failures = [];
let importantCount = 0;
for (const file of files) {
  const body = await readFile(file, 'utf8');
  const lines = body.split('\n').length;
  if (lines > 500) failures.push(`${relative('.', file)} is ${lines} lines (limit 500)`);
  importantCount += (body.match(/!important/g) || []).length;
}
if (importantCount > 0) failures.push(`Found ${importantCount} !important declarations (Phase 1 limit: 0)`);

if (failures.length) {
  console.error(failures.map((item) => `✗ ${item}`).join('\n'));
  process.exit(1);
}
console.log(`✓ Quality contract passed (${files.length} files, ${importantCount} !important declarations)`);
