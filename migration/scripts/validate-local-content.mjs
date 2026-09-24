import {readFile, stat} from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const jsonFiles = ['projects','programs','events','journal','people','partners','testimonials','opportunities'];
let failed = false;

for (const name of jsonFiles) {
  const file = path.join(root,'src','content','data',`${name}.json`);
  try {
    const data = JSON.parse(await readFile(file,'utf8'));
    if (!Array.isArray(data) || data.length === 0) throw new Error('expected non-empty array');
    console.log(`✓ ${name}: ${data.length}`);
  } catch (error) {
    console.error(`✗ ${name}: ${error.message}`);
    failed = true;
  }
}

const requiredAssets = [
  'public/media/projects/terminal.jpg',
  'public/media/projects/luzatart.jpg',
  'public/media/projects/artist-hub.jpg',
  'public/media/projects/literary-voices.jpg',
  'public/media/projects/open-spaces.jpg',
  'public/media/journal/kosovo.jpeg',
  'public/media/journal/skanderbeg.webp',
  'public/media/journal/robot.webp',
  'public/media/journal/bossa.jpg'
];
for (const rel of requiredAssets) {
  try {await stat(path.join(root,rel)); console.log(`✓ ${rel}`);} catch {console.error(`✗ missing ${rel}`); failed = true;}
}

const siteConfig = await readFile(path.join(root,'src','lib','site-config.ts'),'utf8');
if (/PUBLIC_SANITY|SANITY_STUDIO|siteConfig\.cms/.test(siteConfig)) {
  console.error('✗ Sanity configuration is still present in src/lib/site-config.ts');
  failed = true;
} else {
  console.log('✓ public site config has no Sanity dependency');
}

if (failed) process.exit(1);
console.log('\n✓ Local-content contract passed');
