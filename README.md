# KULT360 foundation

This branch contains the Phase 1 technical foundation for a new KULT360 website. It is a clean, static Astro shell with separate English and Albanian routes, migration-ready Sanity schemas, centralized SEO, accessibility checks, a small Cloudflare Worker boundary, and build-once CI. It is not the final visual design and contains no content copied from the public KULT360 website.

## Local setup

Use Node 22 (see `.nvmrc`), then install the lockfile:

```sh
npm ci
```

For local development, copy `.env.example` to an ignored `.env` and provide only values you control. Development can render the placeholder shell without CMS values. Production builds require:

- `SITE_URL`
- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`

Sanity Studio additionally requires `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET`. There are no fallback project IDs.

```sh
npm run dev
npm run check
npm run verify
npm run quality:browser
```

`npm run verify` performs architecture, security, type, production-build, performance, built-content, and Wrangler dry-run checks. It does not deploy. Browser installation is an explicit one-time Playwright setup when needed.

## Phase boundary

The public KULT360 Wix website is a future migration source, not a design template. Phase 1 does not download, index, import, or write any external content or assets. The original uploaded ZIP remains at the repository root as immutable baseline evidence and is excluded from executable architecture checks.

See [ARCHITECTURE.md](./ARCHITECTURE.md), [SECURITY.md](./SECURITY.md), and the reports in `migration/reports/`.
