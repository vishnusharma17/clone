---
component: WaFloatSection
target: src/components/WaFloatSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/wa-float-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
tier: light
---

# WaFloatSection Specification

## DOM Structure
- a.wa-float > svg.[object.SVGAnimatedString] [32×32]
  - ×2 path.[object.SVGAnimatedString] [27×27]

## Computed Styles
- **a.wa-float** [56×56]: bg rgb(37, 211, 102); radius 50%; shadow rgba(20, 12, 10, 0.28) 0px 8px 24px 0px; flex row justify center items center; fixed z120 top 824px bottom 20px

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×1 — use/extend components in src/components/icons.tsx

## Text Content
None — no text nodes in this section.

## Responsive Behavior
- phone 390: section 52×52px; body 16px
- ipad 768: section 56×56px; body 16px
- pc 1440: section 56×56px; body 16px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-wa-float.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
