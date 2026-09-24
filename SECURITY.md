# Security policy and delivery contract

## Phase 1 controls

- Static-first output minimizes runtime exposure.
- Public headers provide HSTS, MIME sniffing protection, a restrictive permissions policy, framing controls, and a content security policy.
- CMS project and dataset values have no source-code fallback. Production builds stop when application values are absent; Studio stops when its own values are absent.
- The contact endpoint accepts JSON POSTs only, validates origin and fields, limits input lengths, uses a honeypot and minimum completion time, avoids caching, and contains no email address in source.
- Automated checks use Wrangler dry-run only. They do not send email, publish Studio, deploy the website, or write external data.

The JSON-LD block requires an inline script allowance in the current CSP. It contains escaped JSON and no user-submitted content. Revisit a nonce/hash strategy before production if the hosting layer can generate per-response headers.

## Manual configuration before launch

1. Create a new KULT360-owned Sanity project and dataset.
2. Set application and Studio variables in local/CI/hosting environments.
3. Restrict Sanity CORS to approved editor and production origins.
4. Configure Cloudflare email routing, `CONTACT_EMAIL`, destination/sender variables, and approved origins only if the form is enabled.
5. Review CSP media/connect sources against the final embeds and CMS host.
6. Enable an environment-protected deployment workflow only after explicit approval.

Report suspected security problems privately to the repository owner; no public security address is asserted here because it has not been verified.
