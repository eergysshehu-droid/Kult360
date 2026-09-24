import {copyFile, mkdir, stat} from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const target = path.join(root, 'public', 'media');

const mappings = [
  ['brand/kult360-logo.png', ['migration/source-assets/brand/brand-logo.png']],
  ['projects/terminal.jpg', ['migration/source-assets/projects/project-terminal-card.jpg']],
  ['projects/qyteti-brenda-oborrit.jpg', ['migration/source-assets/saveweb2zip/media/b6f73a_2d3fa7b7d15d48318df597a3e3d16766~mv2.jpg','migration/source-assets/events/home-media-08.jpg']],
  ['projects/luzatart.jpg', ['migration/source-assets/projects/project-luzatart-card.jpg']],
  ['projects/artist-hub.jpg', ['migration/source-assets/projects/project-artist-hub-card.jpg']],
  ['projects/literary-voices.jpg', ['migration/source-assets/projects/project-literary-voices-card.jpg']],
  ['projects/open-spaces.jpg', ['migration/source-assets/projects/project-open-spaces-card.jpg']],
  ['projects/blue-heart.jpg', ['migration/source-assets/projects/project-blue-heart-card.jpg']],
  ['projects/chemical-waste.jpg', ['migration/source-assets/projects/project-chemical-waste-card.jpg']],
  ['projects/jazz-wine-2017.jpg', ['migration/source-assets/projects/project-jazz-wine-2017-card.jpg']],
  ['projects/jazz-wine-2014.jpg', ['migration/source-assets/projects/project-jazz-wine-2014-card.jpg']],
  ['projects/recognition-herbie.jpg', ['migration/source-assets/projects/project-recognition-herbie.jpg']],
  ['projects/terminal-gallery-01.jpg', ['migration/source-assets/projects/terminal-06.jpg']],
  ['projects/terminal-gallery-02.jpg', ['migration/source-assets/projects/terminal-07.jpg']],
  ['projects/terminal-gallery-03.jpg', ['migration/source-assets/projects/terminal-13.jpeg']],
  ['journal/kosovo.jpeg', ['migration/source-assets/journal/journal-kosovo.jpeg']],
  ['journal/skanderbeg.webp', ['migration/source-assets/journal/journal-skanderbeg.webp']],
  ['journal/robot.webp', ['migration/source-assets/journal/journal-robot.webp']],
  ['journal/bossa.jpg', ['migration/source-assets/journal/journal-bossa.jpg']],
  ['partners/collage.jpg', ['migration/source-assets/partners/partner-collage.jpg']],
  ['home/community.jpg', ['migration/source-assets/uncategorized/footer-community-image.jpg']]
];

const exists = async (file) => {try {await stat(file); return true;} catch {return false;}};
let copied = 0;
const missing = [];
for (const [destRel, candidates] of mappings) {
  const sourceRel = (await Promise.all(candidates.map(async (candidate) => (await exists(path.join(root,candidate))) ? candidate : null))).find(Boolean);
  if (!sourceRel) {missing.push({destRel,candidates});continue;}
  const dest = path.join(target,destRel);
  await mkdir(path.dirname(dest),{recursive:true});
  await copyFile(path.join(root,sourceRel),dest);
  copied++;
  console.log(`✓ ${sourceRel} -> public/media/${destRel}`);
}
console.log(`\nCopied ${copied}/${mappings.length} curated assets.`);
if (missing.length) {
  console.warn(`Missing ${missing.length} optional/expected assets:`);
  for (const item of missing) console.warn(`- ${item.destRel}`);
}
if (copied < 15) process.exitCode = 1;
