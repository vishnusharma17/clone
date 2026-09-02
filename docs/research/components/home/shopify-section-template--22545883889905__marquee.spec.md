---
component: ShopifySectionTemplate22545883889905MarqueeSection
target: src/components/ShopifySectionTemplate22545883889905MarqueeSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-template--22545883889905__marquee-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
---

# ShopifySectionTemplate22545883889905MarqueeSection Specification

## DOM Structure
- div.shopify-section > div.marquee > div.marquee-track [2341×16]
  - ×2 span [1146×16]
    - i — "Hand-Block Printed"
    - b.dot — "✦"
    - i — "Slow-Made in Jaipur"
    - b.dot — "✦"
    - i — "Pure Natural Fabrics"
    - b.dot — "✦"
    - i — "Worn Across the World"
    - b.dot — "✦"

## Computed Styles
- **div.shopify-section > div.marquee** [1440×51]: bg rgb(110, 36, 51); pad 14px 0px 14px 0px
- **div.marquee > div.marquee-track** [2341×16]: flex row gap 48px; transform matrix(1, 0, 0, 1, -475.173, 0)
- **div.marquee-track > span** ×2 [1146×16]: flex row gap 48px items center
- **span > i ("Hand-Block Printed")** ×8 [176×16]: 11.52px/300/- 3.456px rgb(251, 246, 239); uppercase
- **span > b.dot ("✦")** ×8 [13×16]: 11.52px/400/- 3.456px rgb(203, 170, 114); uppercase

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- i: "Hand-Block Printed"
- b: "✦"
- i: "Slow-Made in Jaipur"
- b: "✦"
- i: "Pure Natural Fabrics"
- b: "✦"
- i: "Worn Across the World"
- b: "✦"
- i: "Hand-Block Printed"
- b: "✦"
- i: "Slow-Made in Jaipur"
- b: "✦"
- i: "Pure Natural Fabrics"
- b: "✦"
- i: "Worn Across the World"
- b: "✦"

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "shopify-section-template--22545883889905__marquee" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
