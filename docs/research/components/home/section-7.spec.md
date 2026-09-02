---
component: Section7Section
target: src/components/Section7Section.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/section-7-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# Section7Section Specification

## DOM Structure
- article.card [286×470]
  - a.card-media [286×382]
    - img.img-a
    - img.img-b
    - span.badge — "30% Off"
    - button.wish.js-wish > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - button.quick.js-quick-add — "Add to Bag"
  - div.card-info [286×88]
    - p.card-cat — "Dresses"
    - h3.card-title > a — "Ruby Yellow  Dress"
    - p.card-price
      - span.now — "₹3,360.00"
      - span.was — "₹4,800.00"

## Computed Styles
- **article.card > a.card-media** [286×382]: bg rgb(243, 232, 220); relative
- **a.card-media > img.img-a** [286×382]: max-w 100%; absolute
- **a.card-media > img.img-b** [286×382]: max-w 100%; absolute; opacity 0
- **a.card-media > span.badge ("30% Off")** [66×23]: 9.28px/500/- 1.2992px rgb(255, 255, 255); uppercase; bg rgb(42, 32, 27); pad 5px 9px 5px 9px; absolute z3 top 42px bottom 316.875px
- **a.card-media > button.wish.js-wish** [38×38]: bg rgba(255, 255, 255, 0.92); radius 50%; shadow rgba(42, 32, 27, 0.14) 0px 2px 12px 0px; grid cols [38px]; absolute z4 top 42px bottom 301.875px
- **a.card-media > button.quick.js-quick-add ("Add to Bag")** [262×39]: 10.56px/500/- 2.112px rgb(42, 32, 27); center; uppercase; bg rgba(251, 246, 239, 0.95); pad 12px 12px 12px 12px; absolute z3 top 330.875px bottom 12px; opacity 0; transform matrix(1, 0, 0, 1, 0, 14)
- **div.card-info > p.card-cat ("Dresses")** [282×14]: 9.6px/300/- 2.112px rgb(128, 112, 100); center; uppercase
- **h3.card-title > a ("Ruby Yellow  Dress")** [138×22]: 18.88px/500/22.2784px rgb(42, 32, 27); center
- **div.card-info > p.card-price** [282×20]: flex row gap 9px justify center items baseline
- **p.card-price > span.now ("₹3,360.00")** [71×20]: 14.4px/400/- 0.576px rgb(42, 32, 27); center
- **p.card-price > span.was ("₹4,800.00")** [62×19]: 12.8px/300/- 0.576px rgb(128, 112, 100); center

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img Ruby-Yellow-Dress-Gulabo-Jaipur-9664.jpg (640×960) alt "Ruby Yellow  Dress" → NOT DOWNLOADED — check assets.json
- img Ruby-Yellow-Dress-Gulabo-Jaipur-7267.jpg (640×843) alt "Ruby Yellow  Dress" → NOT DOWNLOADED — check assets.json
- inline SVG ×1 — use/extend components in src/components/icons.tsx

## Text Content
- span: "30% Off"
- button: "Add to Bag"
- p: "Dresses"
- a: "Ruby Yellow  Dress"
- span: "₹3,360.00"
- span: "₹4,800.00"

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "section-7" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
