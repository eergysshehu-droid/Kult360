# KULT360 Phase 4B v2 — Calm Editorial Reset

This patch replaces the visually busy Phase 4 homepage treatment with a calmer editorial system while preserving Astro, local content, bilingual routes and Vercel deployment.

Key changes:
- no asymmetric project mosaic on the homepage;
- 4 selected projects, 3 journal items, 4 people and 8 partner references;
- photography is shown without forced cropping: natural dimensions + `object-fit: contain` where constrained;
- no fixed aspect ratio on project/journal image frames;
- focus areas move from a large black block to a quiet ruled 2×2 index;
- yellow becomes an accent rather than a large background field;
- typography, spacing, footer and mobile density are reduced;
- no Sanity dependency.

Validate with:
`node migration/scripts/validate-phase-4b-v2-design.mjs`
then run the existing local validation, Astro check and build commands.
