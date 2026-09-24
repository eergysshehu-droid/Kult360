import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const manifestPath = path.join(root, 'migration/manifests/saveweb2zip-assets.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const hash = (p) => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
let failures = 0;
for (const e of manifest.entries) {
  const p = path.join(root, e.local_path);
  if (!fs.existsSync(p)) { console.error(`MISSING ${e.local_path}`); failures++; continue; }
  const got = hash(p);
  if (got !== e.sha256) { console.error(`HASH FAIL ${e.local_path}`); failures++; }
}

function walk(dir, out=[]) {
  if (!fs.existsSync(dir)) return out;
  for (const d of fs.readdirSync(dir, {withFileTypes:true})) {
    const p=path.join(dir,d.name);
    if (d.isDirectory()) walk(p,out); else out.push(p);
  }
  return out;
}
const sourceRoot=path.join(root,'migration/source-assets');
const supplementalRoot=path.join(sourceRoot,'saveweb2zip');
const existing=walk(sourceRoot).filter(p=>!p.startsWith(supplementalRoot+path.sep));
const byHash=new Map();
for (const p of existing) {
  try { const h=hash(p); if(!byHash.has(h)) byHash.set(h,[]); byHash.get(h).push(path.relative(root,p)); } catch {}
}
const dedupe=[];
for (const e of manifest.entries.filter(x=>x.kind!=='html')) {
  dedupe.push({local_path:e.local_path,sha256:e.sha256,byte_identical_existing_files:byHash.get(e.sha256)||[],status:(byHash.get(e.sha256)||[]).length?'duplicate':'supplemental-new'});
}
const outPath=path.join(root,'migration/manifests/saveweb2zip-dedupe-result.json');
fs.writeFileSync(outPath, JSON.stringify(dedupe,null,2)+'\n');
console.log(`Validated ${manifest.entries.length-failures}/${manifest.entries.length} supplemental files.`);
console.log(`Byte-identical with existing Phase 2 assets: ${dedupe.filter(x=>x.status==='duplicate').length}`);
console.log(`Supplemental new media: ${dedupe.filter(x=>x.status==='supplemental-new').length}`);
console.log(`Wrote ${path.relative(root,outPath)}`);
if (failures) process.exit(1);
