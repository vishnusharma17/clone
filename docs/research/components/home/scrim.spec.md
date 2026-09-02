---
component: ScrimSection
target: src/components/ScrimSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/scrim-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# ScrimSection Specification

## DOM Structure
- div.scrim [1440×900]

## Computed Styles
- **div.scrim** [1440×900]: bg rgba(20, 12, 10, 0.5); fixed z90; opacity 0

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
None — no text nodes in this section.

## Responsive Behavior
- phone 390: section 390×844px; body 16px
- ipad 768: section 768×1024px; body 16px
- pc 1440: section 1440×900px; body 16px
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-scrim.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
