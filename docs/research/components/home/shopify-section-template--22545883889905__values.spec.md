---
component: ShopifySectionTemplate22545883889905ValuesSection
target: src/components/ShopifySectionTemplate22545883889905ValuesSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-template--22545883889905__values-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# ShopifySectionTemplate22545883889905ValuesSection Specification

## DOM Structure
- div.shopify-section > section.wrap.reveal > div.values [1232×241]
  - ×5 div.value [227×97]
    - svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - h4 — "Handcrafted"
    - p — "Block-printed by Jaipur karigars"

## Computed Styles
- **section.wrap.reveal > div.values** [1232×241]: pad 72px 0px 72px 0px; grid cols [227.188px 227.203px 227.203px 227.203px…] gap 24px
- **div.value > h4 ("Handcrafted")** ×5 [227×22]: 18.88px/500/- rgb(42, 32, 27); center; mb 6px
- **div.value > p ("Block-printed by Jaip…")** ×5 [227×19]: 12.48px/300/18.72px 0.2496px rgb(128, 112, 100); center

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×5 — use/extend components in src/components/icons.tsx

## Text Content
- h4: "Handcrafted"
- p: "Block-printed by Jaipur karigars"
- h4: "Pure Fabrics"
- p: "Cotton, mul, chanderi & silk"
- h4: "Handcrafted to Order"
- p: "Made to order in 10–15 days"
- h4: "Easy Returns"
- p: "24-hour returns & exchange"
- h4: "Secure Checkout"
- p: "UPI, cards & COD"

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "shopify-section-template--22545883889905__values" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
