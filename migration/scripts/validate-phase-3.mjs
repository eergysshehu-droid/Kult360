import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const must = (cond,msg) => { if(!cond) throw new Error(msg); };

const requiredPhase2 = [
  'migration/manifests/pages.json','migration/manifests/people.json','migration/manifests/projects.json',
  'migration/manifests/programs.json','migration/manifests/events.json','migration/manifests/journal.json',
  'migration/manifests/opportunities.json','migration/manifests/testimonials.json','migration/manifests/partners.json',
  'migration/manifests/assets.json'
];
for (const p of requiredPhase2) must(fs.existsSync(path.join(root,p)), `Missing Phase 2 source: ${p}`);

const summary=read('migration/phase3/phase-3-summary.json');
const content=read('migration/phase3/content-map.json');
const assets=read('migration/phase3/asset-map.json');
const refs=read('migration/phase3/reference-map.json');
const review=read('migration/phase3/review-queue.json');
const plan=read('migration/phase3/sanity-import-plan.json');

must(plan.sanity_write_allowed === false, 'Phase 3 must not allow Sanity writes');
must(content.length === summary.phase3_mapping_counts.content_records, 'Content map count mismatch');
must(assets.length === summary.phase3_mapping_counts.canonical_media_candidates, 'Asset map count mismatch');
must(refs.length === summary.phase3_mapping_counts.reference_edges, 'Reference count mismatch');
must(review.length === summary.phase3_mapping_counts.review_queue_items, 'Review queue count mismatch');

const ids=new Set();
for(const r of content){
  must(r.target_id && r.target_type && r.readiness, `Invalid content mapping: ${JSON.stringify(r)}`);
  must(!ids.has(r.target_id), `Duplicate target id: ${r.target_id}`);
  ids.add(r.target_id);
}
for(const a of assets){
  must(a.canonical_asset_id && a.target_type === 'mediaAsset', `Invalid media map: ${JSON.stringify(a)}`);
}
for(const r of refs){
  must(['resolved','external_person_unmodeled','external_entity_unmodeled','external_author_unmodeled'].includes(r.status), `Unknown ref status: ${r.status}`);
}

console.log('✓ Phase 3 mapping validation passed');
console.log(`  content records: ${content.length}`);
console.log(`  reference edges: ${refs.length}`);
console.log(`  canonical media candidates: ${assets.length}`);
console.log(`  review queue: ${review.length}`);
console.log(`  high priority reviews: ${review.filter(x=>x.priority==='high').length}`);
console.log('  Sanity writes: DISABLED by Phase 3 contract');
console.log('  Next: compare mapping to actual Studio schemas before generating import data.');
