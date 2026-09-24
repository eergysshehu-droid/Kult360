# KULT360 — Phase 2 Content Review Flags

## Must review before migration

- **Heritage page contains Wix placeholder copy.** `/general-6` currently includes repeated “Small Title” / “Click on Edit Text…” template text. Do not migrate those blocks as real content.
- **Team biographies are missing from the indexed public profile output.** Do not fabricate biographies for Eda Zari, Ergys Shehu, Eda Elbasani, Eros Dibra or Teufik Bashi.
- **Eda Elbasani profile URL was not discovered.** Her role is verified from the public team roster, but a dedicated profile should not be invented.
- **Contact street address is incomplete.** The source exposes “Rr. Kavajes” without a street number. Keep as-is or verify internally.
- **Footer social labels are inconsistent.** The old site labels Instagram/Facebook/YouTube links as “Youtube Kult360” in crawler output even though they resolve to different platforms.
- **Legacy gallery and Lab bodies need a second source pass.** Their URLs are known, but body content did not resolve in the crawler.
- **Partner-logo identities must not be inferred from image appearance.** Two individual partner-logo images and one collage URL were captured, but names should be matched only after manual visual review or an owned source export.
- **Historical impact claims need verification.** The Save the Blue Heart and chemical-waste project text contains causal/policy-impact claims and attendance figures. Preserve as source claims until independently verified.
- **Marketing superlatives need editorial review.** Phrases such as “premier festival” or “only festival of its kind” should be verified or softened before institutional publication.
- **Journal scope needs editorial decision.** A large portion of the legacy Wix blog consists of Eda Zari essays, translations and personal music/culture writing predating KULT360. Decide which items belong in the foundation’s new Journal rather than automatically importing all.
- **Rights/credits are incomplete.** Asset URLs were preserved, but many images lack explicit public credit/rights metadata. Do not assume ownership from presence on the Wix site.
- **Date display normalization is needed.** One indexed article shows only “Feb 11” without a year; its ISO date is intentionally left unset.
- **Qyteti Brenda Oborrit page is bilingual.** Preserve language boundaries rather than machine-filling missing translations during import.
