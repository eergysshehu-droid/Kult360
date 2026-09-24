# Phase 1 baseline report

Date: 2026-09-24 UTC  
Branch created for isolation: `rebuild/kult360-foundation`  
Starting commit: `dd38214c5adde5babcdceb98f6f80712e959871a`

## Immutable source evidence

- Uploaded ZIP: `Ergysshehuportofolio-main (3).zip`
- ZIP SHA-256: `e74be4f8b130b703aa953dcb4783cb436ee90dc88620f4e61a0be1d7ebb66f91`
- Original lockfile SHA-256: `75f197d3dc9f014a9149f8e6e1dfbea199bf2b3fa675d27292ffab20dea5c6aa`
- The ZIP was not modified. The extracted source had no nested Git repository.

## Environment and install

- Required runtime selected: Node `22.23.2`, npm `10.9.8`.
- First sandboxed `npm ci` could not use the default npm log directory and then could not reach the registry (`EAI_AGAIN`).
- Approved locked install succeeded: 1,156 packages, 13 audit findings (10 moderate, 3 high).
- Install warned that `sanity@6.13.2` had a Portable Text data-loss defect; Phase 1 pins the minimal fixed `6.14.1` release.

## Untouched checks

- `npm run check` initially hit the sandboxed Astro telemetry directory; with telemetry disabled it passed: 89 files, 0 errors/warnings/hints.
- `npm run verify` passed the original architecture, CSS debt, quality, security, type, build, performance, and built-content stages.
- The original static build produced 77 pages and attempted a network request to the retired Sanity project ID before falling back. Network isolation blocked the request. This confirmed an unsafe identity/runtime coupling.
- The verification command then failed at Wrangler dry-run because its default user config/log directory was not writable.
- The original browser quality command failed because its configured web server did not start; there was no general `test:e2e` script.

## Debt observed before replacement

- 36,501 CSS lines, 8,517 `!important` lines, 27 refinement layers, and 18 system-theme layers.
- Project-specific worker email routing and portfolio route/identity assumptions.
- One global layout/runtime architecture, a mobile stack override system, embedded retired Sanity defaults, and 49 executable/configuration files matching legacy identity/stack terms.
- 643 files under the extracted `src`, `studio`, and `public` trees.

These failures and warnings are baseline observations, not results of the KULT360 changes.
