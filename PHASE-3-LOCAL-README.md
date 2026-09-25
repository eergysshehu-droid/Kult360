# KULT360 Phase 3 — Local Content + Vercel

This patch removes the Phase 1 placeholder experience from the public Astro routes and renders KULT360 from local, versioned content extracted in Phases 2–3.

It does **not** connect to Sanity and performs **no external CMS write**.

## What changes

- Real KULT360 homepage from migrated public records.
- Local Projects, Programs, Events, Journal, People, Media, Get Involved and Contact views.
- Project, Journal and People detail routes.
- Curated migration assets copied into `public/media` by a deterministic local script.
- EN/SQ routing retained. Where the source archive does not contain an approved translation, source-language project copy is preserved rather than invented.
- Vercel preview builds no longer require Sanity environment variables.
- `SITE_URL` becomes optional for previews. Set it to the final canonical domain at production cutover.

## Important

This is the first **content-integrated preview**, not the final Phase 4 visual design. It intentionally uses only source-supported public information and flags incomplete archive material rather than fabricating missing biographies or article bodies.
