# KULT360 Phase 2B — saveweb2zip supplemental snapshot

## Purpose

This patch supplements the Phase 2 public-site inventory with files recovered from the user-provided `saveweb2zip-com-www-kult360-com.zip` snapshot. It does not replace the Phase 2 manifests and does not claim to be a complete backup of kult360.com.

## Recovered

- 31 unique Wix image media IDs, with one best non-blurred local rendition retained per ID.
- 2 Wix MP4 videos, highest rendition present in the snapshot retained.
- 1 local homepage HTML snapshot for provenance and later relationship/metadata review.
- SHA-256 checksums, byte sizes, source archive paths, responsive-variant counts, and selection metadata.

## Important boundary

The snapshot is homepage-heavy. It should be used as supplemental evidence for media/provenance and not as proof that every About, Journal, Project, People, Event, or opportunity page has been captured. Missing biographies, credits, dates, rights, translations, or relationships must remain missing/review-required unless another public source supports them.

## Integration

Run `node migration/scripts/validate-phase-2b.mjs` after extracting this patch into the KULT360 repository. The script validates hashes and compares recovered files against the existing `migration/source-assets` tree to identify byte-identical duplicates.
