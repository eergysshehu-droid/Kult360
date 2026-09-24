import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/styles/tokens.css',
  'src/styles/typography.css',
  'src/styles/global.css',
  'src/pages/index.astro',
  'src/pages/sq/index.astro',
  'src/components/content/ProjectCard.astro',
  'src/components/content/JournalCard.astro',
  'src/components/chrome/Header.astro',
  'src/components/chrome/Footer.astro'
];

for (const file of files) {
  const abs = path.join(root, file);
  if (!fs.existsSync(abs)) throw new Error(`Missing Phase 4B v2 file: ${file}`);
}

const css = fs.readFileSync(path.join(root, 'src/styles/global.css'), 'utf8');
const home = fs.readFileSync(path.join(root, 'src/pages/index.astro'), 'utf8');
const homeSq = fs.readFileSync(path.join(root, 'src/pages/sq/index.astro'), 'utf8');
const projectCard = fs.readFileSync(path.join(root, 'src/components/content/ProjectCard.astro'), 'utf8');
const journalCard = fs.readFileSync(path.join(root, 'src/components/content/JournalCard.astro'), 'utf8');

const checks = [
  ['no !important', !css.includes('!important')],
  ['hero image preserved', /hero__media img[\s\S]*object-fit:\s*contain/.test(css)],
  ['project images preserved', /project-card__media img[\s\S]*object-fit:\s*contain/.test(css)],
  ['detail images preserved', /detail-cover img[\s\S]*object-fit:\s*contain/.test(css)],
  ['no forced project-card aspect ratio', !/project-card__media\s*\{[^}]*aspect-ratio/s.test(css)],
  ['homepage projects limited to 4', home.includes('featuredProjects.slice(0,4)') && homeSq.includes('featuredProjects.slice(0,4)')],
  ['homepage journal limited to 3', home.includes('featuredJournal.slice(0,3)') && homeSq.includes('featuredJournal.slice(0,3)')],
  ['homepage people limited to 4', home.includes('people.slice(0,4)') && homeSq.includes('people.slice(0,4)')],
  ['homepage partners limited to 8', home.includes('partners.slice(0,8)') && homeSq.includes('partners.slice(0,8)')],
  ['project card has no index badge', !projectCard.includes('project-card__index')],
  ['journal card has no index badge', !journalCard.includes('String(index + 1)')],
  ['no Sanity', ![css, home, homeSq, projectCard, journalCard].join('\n').toLowerCase().includes('sanity')]
];

let failed = false;
for (const [name, ok] of checks) {
  console.log(`${ok ? '✅' : '❌'} ${name}`);
  if (!ok) failed = true;
}
if (failed) process.exit(1);
console.log('\n✅ PHASE 4B V2 CALM EDITORIAL CONTRACT PASSED');
