---
component: CatSection
target: src/components/CatSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/cat-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# CatSection Specification

## DOM Structure
- a.cat [439×1192]
  - img [439×1192]
  - div.cat-label [439×139]
    - div.ct — "The Anarkali"
    - h3 — "Anarkali Sets"
    - div.go — "Shop Now →"

## Computed Styles
- **a.cat** [439×1192]: bg rgb(243, 232, 220); relative
- **a.cat > img** [439×1192]: max-w 100%
- **div.cat-label > div.ct ("The Anarkali")** [387×15]: 10.24px/300/- 2.8672px rgb(255, 255, 255); uppercase; opacity 0.85
- **div.cat-label > h3 ("Anarkali Sets")** [387×41]: 33.6px/500/- rgb(255, 255, 255); mt 4px
- **div.cat-label > div.go ("Shop Now →")** [95×15]: 10.56px/300/- 2.5344px rgb(255, 255, 255); uppercase; mt 10px; flex row gap 8px items center; opacity 0; transform matrix(1, 0, 0, 1, 0, 8)

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img cat-anarkali.jpg (900×1200) alt "Anarkali Sets" → NOT DOWNLOADED — check assets.json

## Text Content
- div: "The Anarkali"
- h3: "Anarkali Sets"
- div: "Shop Now →"

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "cat" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
