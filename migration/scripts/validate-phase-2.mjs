#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const root = path.resolve(process.cwd(), "migration");
const files = [
  "pages.json","people.json","projects.json","programs.json","events.json",
  "journal.json","opportunities.json","testimonials.json","partners.json",
  "assets.json","documents.json","media-embeds.json","navigation.json",
  "seo.json","relationships.json","migration-master.json"
];
let failed = false;
for (const f of files) {
  const p = path.join(root, "manifests", f);
  try {
    JSON.parse(fs.readFileSync(p, "utf8"));
    console.log(`OK ${f}`);
  } catch (err) {
    failed = true;
    console.error(`FAIL ${f}: ${err.message}`);
  }
}
const rp = path.join(root, "redirects", "proposed-redirects.json");
try {
  JSON.parse(fs.readFileSync(rp, "utf8"));
  console.log("OK proposed-redirects.json");
} catch (err) {
  failed = true;
  console.error(`FAIL proposed-redirects.json: ${err.message}`);
}
if (failed) process.exit(1);
