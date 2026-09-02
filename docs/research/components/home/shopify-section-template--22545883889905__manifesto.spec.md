---
component: ShopifySectionTemplate22545883889905ManifestoSection
target: src/components/ShopifySectionTemplate22545883889905ManifestoSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-template--22545883889905__manifesto-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# ShopifySectionTemplate22545883889905ManifestoSection Specification

## DOM Structure
- div.shopify-section > section.manifesto.wrap [1360×579]
  - div.rose-mark [1360×39] — "❀"
  - h2 > p [920×238] — "Born in the gullies of the Pink City, Gulabo is…"

## Computed Styles
- **section.manifesto.wrap > div.rose-mark ("❀")** [1360×39]: 32px/300/- rgb(174, 63, 88); center; mb 22px
- **h2 > p ("Born in the gullies o…")** [920×238]: 46.4px/400/59.392px 0.232px rgb(42, 32, 27); center

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- div: "❀"
- p: "Born in the gullies of the Pink City, Gulabo is a love letter to the hand — block prints pressed one petal at a time, dyed in rose and marigold, and stitched into ethnic wear made to be lived in."

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "shopify-section-template--22545883889905__manifesto" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
