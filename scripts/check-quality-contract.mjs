import {readdir, readFile, stat} from 'node:fs/promises';
import {extname, join, relative} from 'node:path';

const roots = ['src', 'studio'];
const files = [];
const collect = async (path) => {
  const info = await stat(path);
  if (info.isDirectory()) for (const entry of await readdir(path)) await collect(join(path, entry));
  else files.push(path);
};
for (const root of roots) await collect(root);

const failures = [];
for (const file of files) {
  const body = await readFile(file, 'utf8').catch(() => '');
  const extension = extname(file);
  const lines = body.split('\n').length;
  if (extension !== '.css' && lines > 500) {
    failures.push(`${relative('.', file)} is ${lines} lines (non-style source limit 500)`);
  }
}

const styleBudgets = {
  'src/styles/experience.css': {lines: 7950, important: 560},
  'src/styles/refinement-v3.css': {lines: 1760, important: 95},
  'src/styles/foundation-v2.css': {lines: 800, important: 0},
  'src/styles/global.css': {lines: 520, important: 0},
  'src/styles/reset.css': {lines: 100, important: 0},
  'src/styles/tokens.css': {lines: 100, important: 0},
  'src/styles/typography.css': {lines: 100, important: 0},
  'src/styles/utilities.css': {lines: 100, important: 0}
};

for (const [path, budget] of Object.entries(styleBudgets)) {
  const body = await readFile(path, 'utf8');
  const lines = body.split('\n').length;
  const important = (body.match(/!important/g) || []).length;
  if (lines > budget.lines) failures.push(`${path} is ${lines} lines (regression budget ${budget.lines})`);
  if (important > budget.important) failures.push(`${path} has ${important} !important declarations (regression budget ${budget.important})`);
}

const experience = await readFile('src/styles/experience.css', 'utf8');
const refinement = await readFile('src/styles/refinement-v3.css', 'utf8');
for (const [selector, source, expected] of [
  ['.program-detail__hero', experience, 'experience.css'],
  ['.theme-detail__hero', experience, 'experience.css'],
  ['.place-essay__hero', experience, 'experience.css'],
  ['.project-detail-v2__hero', experience, 'experience.css'],
  ['.journal-detail-v2__header', experience, 'experience.css'],
  ['.team-profile-hero', refinement, 'refinement-v3.css']
]) {
  if (!source.includes(selector)) failures.push(`${selector} must remain in ${expected}`);
}

if (failures.length) {
  console.error(failures.map((item) => `✗ ${item}`).join('\n'));
  process.exit(1);
}
console.log(`✓ Quality contract passed (${files.length} files; detail style growth is regression-capped)`);
