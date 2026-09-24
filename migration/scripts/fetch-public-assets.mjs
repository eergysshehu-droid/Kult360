#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const migrationRoot = path.resolve(here, "..");
const manifestPath = path.join(migrationRoot, "manifests", "assets.json");
const outManifestPath = path.join(migrationRoot, "manifests", "assets-downloaded.json");

const assets = JSON.parse(await fs.readFile(manifestPath, "utf8"));
const allowedHosts = new Set(["static.wixstatic.com", "video.wixstatic.com"]);

function extFromUrl(url) {
  const pathname = new URL(url).pathname;
  const base = pathname.split("/v1/")[0].split("/").pop() || "";
  const m = base.match(/(\.[A-Za-z0-9]{2,5})$/);
  return m ? m[1].toLowerCase() : ".bin";
}

async function fetchOne(url) {
  const u = new URL(url);
  if (!allowedHosts.has(u.hostname)) {
    throw new Error(`Host not allowed: ${u.hostname}`);
  }
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return Buffer.from(await res.arrayBuffer());
}

const results = [];
for (const asset of assets) {
  const dir = path.join(migrationRoot, "source-assets", asset.category);
  await fs.mkdir(dir, { recursive: true });
  const ext = extFromUrl(asset.original_url || asset.rendition_url);
  const dest = path.join(dir, `${asset.id}${ext}`);

  let data = null;
  let downloadedFrom = null;
  let lastError = null;

  for (const candidate of [asset.original_url, asset.rendition_url].filter(Boolean)) {
    try {
      data = await fetchOne(candidate);
      downloadedFrom = candidate;
      break;
    } catch (err) {
      lastError = String(err?.message || err);
    }
  }

  if (!data) {
    results.push({ ...asset, download_status: "failed", error: lastError });
    console.error(`FAIL ${asset.id}: ${lastError}`);
    continue;
  }

  await fs.writeFile(dest, data);
  const sha256 = crypto.createHash("sha256").update(data).digest("hex");
  results.push({
    ...asset,
    local_path: path.relative(migrationRoot, dest).replaceAll("\\", "/"),
    bytes: data.length,
    sha256,
    downloaded_from: downloadedFrom,
    download_status: "downloaded"
  });
  console.log(`OK   ${asset.id} -> ${path.relative(migrationRoot, dest)} (${data.length} bytes)`);
}

await fs.writeFile(outManifestPath, JSON.stringify(results, null, 2) + "\n", "utf8");
const ok = results.filter(x => x.download_status === "downloaded").length;
const failed = results.length - ok;
console.log(`\nDownloaded ${ok}/${results.length}. Failed: ${failed}`);
if (failed) process.exitCode = 2;
