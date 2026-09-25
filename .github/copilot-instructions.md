# KULT360 repository instructions

- This repository is KULT360-only. Never restore portfolio branding, photography-specific route models, legacy stack scripts, or retired CMS identifiers.
- Treat `Ergysshehuportofolio-main (3).zip` as immutable baseline evidence. Do not edit, extract into production paths, or delete it.
- Do not access or migrate the public Wix site until an extraction phase is explicitly authorized.
- Do not invent biographies, roles, dates, partners, contact details, legal identity, social links, image credits, or rights information.
- English routes live at `/`; Albanian routes live at `/sq/`. Render languages server-side and add alternate links only for real translations.
- Read public identity and CMS configuration through `src/lib/site-config.ts`. Production builds must fail when required values are absent.
- Use the modular Sanity types in `studio/schemaTypes/`. Keep asset provenance, relationships, rights, dimensions, and migration status intact.
- Keep styles inside the five reviewed files in `src/styles/`; do not add numbered refinement layers or `!important` declarations.
- Run `npm run verify` and `npm run quality:browser` before proposing a merge. CI builds once and browser-tests that exact artifact.
- Do not deploy, write to external CMS projects, or send real email during automated testing.
