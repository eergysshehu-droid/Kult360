# KULT360 architecture

## Runtime

Astro statically renders the public website. English is canonical at root paths and Albanian is rendered independently under `/sq/`; there is no client-side language text swapping. `src/lib/site-config.ts` is the single identity/configuration boundary and validates required production values. `src/lib/cms/` is the only future Sanity client boundary and is not called by the Phase 1 shell.

The component system is intentionally small:

- `components/chrome/`: header, navigation, language switcher, footer
- `components/seo/`: head metadata and structured data output
- `components/ui/`: reusable interface primitives
- `components/media/`: media rendering boundary
- `layouts/`: base, editorial, listing, and detail composition
- `styles/`: tokens, reset, global, typography, utilities only

## Content model

Sanity schemas are grouped into reusable objects, singleton-like organization/configuration documents, and documents. The model represents pages, people and governance, programs, projects, events, editorial work, opportunities, lab initiatives, galleries, media, partners, impact, testimonials, resources, legal pages, and redirects.

`mediaAsset` keeps the migration fields required for Phase 2: original/source URLs, filenames, dimensions, MIME type, localized alt/caption, credit, usage rights, asset role, associated records, status, and notes. Relationships use references instead of copied labels.

## Rendering and SEO

Every route passes a language, canonical path, verified translations, title, and description through `BaseLayout`. Alternate links are emitted only for languages supplied by the route. JSON-LD builders support the future content types but the shell emits only `Organization`, `WebSite`, and accurate page-level `WebPage`/`AboutPage` data. Unknown legal/contact/social facts are omitted.

## Delivery

Cloudflare serves `dist`; the Worker runs first only for `/api/*`. The generic contact boundary has no embedded addresses or project-specific choices and returns unavailable until its binding and two email variables are configured. CI builds once, uploads `dist`, and browser-tests that exact artifact. Deployment is deliberately absent in Phase 1.
