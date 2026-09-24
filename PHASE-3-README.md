# KULT360 Phase 3 — Content Review + CMS Mapping

This patch overlays the existing KULT360 repository after Phase 2.

It does **not** connect to Sanity, upload assets, deploy, or publish content. It converts the Phase 2 inventory into a deterministic review/mapping layer so the next step can compare the plan to the actual Studio schemas.

## Install

Unzip into the repository root, then run:

```bash
node migration/scripts/validate-phase-3.mjs
```

## Important

Do not generate or run a Sanity import until the actual Phase 1 schema field names have been checked against `migration/phase3/schema-contract.json`.
