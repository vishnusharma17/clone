---
component: CartdrawerSection
target: src/components/CartdrawerSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/cartdrawer-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
---

# CartdrawerSection Specification

## DOM Structure
- aside.drawer [420×900]
  - div.drawer-head [420×78]
    - h3 — "Your Bag"
    - button.drawer-x — "×"
  - div.drawer-body > p.empty [372×119] — "Your bag is empty."
  - div.drawer-foot [420×299]
    - div.sub-row
      - ×2 span — "Subtotal"
    - div.sub-row.ship-row
      - ×2 span — "Shipping"
    - div.sub-row.ship-total
      - ×2 span — "Total"
    - p.ship-progress
    - form > button.btn.btn-fill — "Proceed to Checkout"
    - a.btn.btn-ink — "View Bag"
    - ×2 p.drawer-note — "Estimated shipping. Final amount is confirmed a…"

## Computed Styles
- **aside.drawer** [420×900]: bg rgb(251, 246, 239); shadow rgba(20, 12, 10, 0.16) -12px 0px 44px 0px; flex column; fixed z100; transform matrix(1, 0, 0, 1, 420, 0)
- **aside.drawer > div.drawer-head** [420×78]: border 1px none none solid rgb(42, 32, 27) rgb(42, 32, 27) rgba(42, 32, 27, 0.14); pad 24px 24px 24px 24px; flex row justify space-between items center
- **div.drawer-head > h3 ("Your Bag")** [85×29]: 24px/500/- rgb(42, 32, 27)
- **div.drawer-head > button.drawer-x ("×")** [16×27]: 27.2px/400/27.2px rgb(42, 32, 27); center
- **div.drawer-body > p.empty ("Your bag is empty.")** [372×119]: 14.4px/300/23.04px rgb(128, 112, 100); center; pad 48px 12px 48px 12px
- **div.drawer-foot > div.sub-row** [372×24]: mb 16px; flex row justify space-between
- **div.sub-row > span ("Subtotal")** ×3 [55×24]: 16px/300/- 0.32px rgb(42, 32, 27)
- **div.sub-row > span ("₹0")** ×2 [19×24]: 20px/300/- 0.32px rgb(42, 32, 27)
- **div.drawer-foot > div.sub-row.ship-row** [372×24]: mb 10px; flex row justify space-between
- **div.sub-row.ship-row > span ("Free")** [34×24]: 20px/300/- 0.32px rgb(174, 63, 88)
- **div.drawer-foot > div.sub-row.ship-total** [372×37]: border 1px solid none none rgba(42, 32, 27, 0.14) rgb(42, 32, 27) rgb(42, 32, 27); pad 12px 0px 0px 0px; mb 16px; flex row justify space-between
- **form > button.btn.btn-fill ("Proceed to Checkout")** [372×44]: 11.84px/500/- 2.6048px rgb(255, 255, 255); center; uppercase; bg rgb(174, 63, 88); border 1px solid; pad 12.432px 27.232px 12.432px 27.232px; flex row gap 7.104px justify center items center
- **div.drawer-foot > a.btn.btn-ink ("View Bag")** [372×44]: 11.84px/500/- 2.6048px rgb(42, 32, 27); uppercase; border 1px solid rgb(42, 32, 27); pad 12.432px 27.232px 12.432px 27.232px; mt 10px; flex row gap 7.104px justify center items center
- **div.drawer-foot > p.drawer-note ("Estimated shipping. F…")** ×2 [0×0]: 11.52px/300/17.28px rgb(128, 112, 100); center; mt 12px

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- h3: "Your Bag"
- button: "×"
- p: "Your bag is empty."
- span: "Subtotal"
- span: "₹0"
- span: "Shipping"
- span: "Free"
- span: "Total"
- span: "₹0"
- button: "Proceed to Checkout"
- a: "View Bag"
- p: "Estimated shipping. Final amount is confirmed at checkout."
- p: "Shipping & taxes calculated at checkout."

## Responsive Behavior
- phone 390: section 359×844px; heading 24px; body 16px; 1 col (3 items, gap normal)
- ipad 768: section 420×1024px; heading 24px; body 16px; 1 col (3 items, gap normal)
- pc 1440: section 420×900px; heading 24px; body 16px; 1 col (3 items, gap normal)
- change: no layout change across viewports
- ipad matches pc layout
- exact per-property values: probe-cartdrawer.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
