# KULT360 Phase 2 Migration Package

Prepared from the public KULT360 website on **2026-09-24**.

This package is intended to be copied into the root of the existing KULT360 repository after Phase 1.

## What is included

- structured page, people, project, program, event, Journal, partner, testimonial, SEO and relationship manifests
- public legacy URL / redirect proposals
- Wix image asset URL inventory
- public media embed inventory
- content-review and duplicate-asset reports
- a safe asset fetcher for public Wix static media
- a JSON validation script

## What is intentionally NOT included

- no Sanity import
- no final design
- no deployment
- no CMS write
- no invented biographies/translations
- no full Journal article-body copy
- no private Wix/CMS access

## After copying this package into `/workspaces/Kult360`

Validate the manifests:

```bash
node migration/scripts/validate-phase-2.mjs
```

Fetch the discovered public Wix assets into `migration/source-assets/`:

```bash
node migration/scripts/fetch-public-assets.mjs
```

The fetcher only allows `static.wixstatic.com` and `video.wixstatic.com`, writes SHA-256 values into `migration/manifests/assets-downloaded.json`, and does not access private Wix APIs.

Then inspect:

```bash
git status --short
```

Do **not** start Sanity import until `migration/reports/content-review-flags.md` has been reviewed.

## Source boundaries

The public Wix site is treated as a source of migration evidence, not as the new visual design. The Phase 1 Astro/Sanity/Cloudflare architecture remains the technical foundation.
