import {readFile} from 'node:fs/promises';

const files = [
  'src/styles/tokens.css',
  'src/styles/typography.css',
  'src/styles/global.css',
  'src/pages/index.astro',
  'src/pages/sq/index.astro',
  'src/components/chrome/Header.astro',
  'src/components/chrome/MobileNavigation.astro',
  'src/components/chrome/Footer.astro',
  'src/components/content/ProjectCard.astro',
  'src/components/content/JournalCard.astro'
];

const contents = Object.fromEntries(await Promise.all(files.map(async (file) => [file, await readFile(file, 'utf8')])));
const all = Object.values(contents).join('\n');
const failures = [];

const mustContain = [
  ['src/styles/global.css', '.partner-index'],
  ['src/styles/global.css', '.project-grid--featured'],
  ['src/styles/global.css', '@media(prefers-reduced-motion:no-preference)'],
  ['src/components/chrome/Header.astro', "aria-current={activeSlug === item.slug ? 'page' : undefined}"],
  ['src/pages/index.astro', 'Culture grows through participation.'],
  ['src/pages/sq/index.astro', 'Kultura rritet përmes pjesëmarrjes.']
];
for (const [file, needle] of mustContain) if (!contents[file].includes(needle)) failures.push(`${file}: missing ${needle}`);

for (const forbidden of ['PHASE 1','PUBLIC_SANITY_PROJECT_ID','46mghxoy','home-stack','mobile-stack']) {
  if (all.includes(forbidden)) failures.push(`public design files contain forbidden legacy marker: ${forbidden}`);
}
if (all.includes('!important')) failures.push('Phase 4 design files must not add !important');

if (failures.length) {
  console.error('Phase 4 design validation failed:');
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}
console.log(`✓ Phase 4 design contract passed across ${files.length} files`);
console.log('✓ No Sanity/legacy markers in public design layer');
console.log('✓ No !important declarations added');
