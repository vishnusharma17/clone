---
component: SearchoverlaySection
target: src/components/SearchoverlaySection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/searchoverlay-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
tier: light
---

# SearchoverlaySection Specification

## DOM Structure
- div.search-overlay > div.search-inner [1120×256]
  - form.search-bar [1000×59]
    - svg.[object.SVGAnimatedString]
      - circle.[object.SVGAnimatedString]
      - path.[object.SVGAnimatedString]
    - input
    - button.drawer-x — "×"
  - div.search-results [1000×0]

## Computed Styles
- **div.search-overlay** [1440×900]: bg rgb(251, 246, 239); fixed z100; opacity 0; transform matrix(1, 0, 0, 1, 0, -14)
- **div.search-inner > form.search-bar** [1000×59]: border 2px none none solid rgb(42, 32, 27); pad 0px 0px 14px 0px; flex row gap 14px items center
- **form.search-bar > button.drawer-x ("×")** [16×27]: 27.2px/400/27.2px rgb(42, 32, 27); center
- **div.search-inner > div.search-results** [1000×0]: mt 38px; grid cols [232px 232px 232px 232px] gap 24px

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×1 — use/extend components in src/components/icons.tsx

## Text Content
- button: "×"

## Responsive Behavior
- phone 390: section 390×844px; body 16px; 1 hidden children
- ipad 768: section 768×1024px; body 16px; 1 hidden children
- pc 1440: section 1440×900px; body 16px; 1 hidden children
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-searchoverlay.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
