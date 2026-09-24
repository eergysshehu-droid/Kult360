# KULT360 — Duplicate / derivative asset report

The following records share the same underlying Wix media ID and are different rendered derivatives rather than distinct originals:

- `f4598e_a59deff3cdf94f44830bb1404ee5460e~mv2.jpeg` → `journal-kosovo-blur`, `journal-kosovo`
- `f4598e_693f2a8ed6c84b9b9c2ab685532259e1~mv2.webp` → `journal-skanderbeg-blur`, `journal-skanderbeg`
- `f4598e_09acb84ca6a64f09bc00a1c0d0080193~mv2.webp` → `journal-robot-blur`, `journal-robot`
- `f4598e_aa1821a525c14d5a868e63c2e28998c4~mv2.jpg` → `journal-bossa-blur`, `journal-bossa`

## Migration rule

Download the original media object once where possible, compute SHA-256 after download, and keep the derivative records only as provenance/usage references. Do not delete anything automatically until the reviewed asset manifest confirms the canonical file.
