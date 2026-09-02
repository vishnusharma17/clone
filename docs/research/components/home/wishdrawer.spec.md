---
component: WishdrawerSection
target: src/components/WishdrawerSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/wishdrawer-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# WishdrawerSection Specification

## DOM Structure
- aside.drawer [420×900]
  - div.drawer-head [420×78]
    - h3 — "Your Wishlist"
    - button.drawer-x — "×"
  - div.drawer-body > p.empty [372×119] — "No saved items yet. Tap the ♥ on any product."
  - div.drawer-foot > p.drawer-note [372×35] — "Saved items stay in your browser and can sync t…"

## Computed Styles
- **aside.drawer** [420×900]: bg rgb(251, 246, 239); shadow rgba(20, 12, 10, 0.16) -12px 0px 44px 0px; flex column; fixed z100; transform matrix(1, 0, 0, 1, 420, 0)
- **aside.drawer > div.drawer-head** [420×78]: border 1px none none solid rgb(42, 32, 27) rgb(42, 32, 27) rgba(42, 32, 27, 0.14); pad 24px 24px 24px 24px; flex row justify space-between items center
- **div.drawer-head > h3 ("Your Wishlist")** [127×29]: 24px/500/- rgb(42, 32, 27)
- **div.drawer-head > button.drawer-x ("×")** [16×27]: 27.2px/400/27.2px rgb(42, 32, 27); center
- **div.drawer-body > p.empty ("No saved items yet. T…")** [372×119]: 14.4px/300/23.04px rgb(128, 112, 100); center; pad 48px 12px 48px 12px
- **div.drawer-foot > p.drawer-note ("Saved items stay in y…")** [372×35]: 11.52px/300/17.28px rgb(128, 112, 100); center; mt 12px

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- h3: "Your Wishlist"
- button: "×"
- p: "No saved items yet. Tap the ♥ on any product."
- p: "Saved items stay in your browser and can sync to your CRM for reminder emails & WhatsApp."

## Responsive Behavior
- phone 390: section 359×844px; heading 24px; body 16px; 1 col (3 items, gap normal)
- ipad 768: section 420×1024px; heading 24px; body 16px; 1 col (3 items, gap normal)
- pc 1440: section 420×900px; heading 24px; body 16px; 1 col (3 items, gap normal)
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-wishdrawer.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
