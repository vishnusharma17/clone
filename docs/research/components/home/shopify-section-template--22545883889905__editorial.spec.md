---
component: ShopifySectionTemplate22545883889905EditorialSection
target: src/components/ShopifySectionTemplate22545883889905EditorialSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-template--22545883889905__editorial-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# ShopifySectionTemplate22545883889905EditorialSection Specification

## DOM Structure
- div.shopify-section > section.split.reveal [1440×900]
  - div.split-img > img [720×900]
  - div.split-txt [720×502]
    - span.kicker — "The Gulabo Craft"
    - h2 — "The Slow Art of the Block"
    - div.rte > p — "Every Gulabo print begins with a teakwood block…"
    - a.btn.btn-ink — "Discover Our Story"

## Computed Styles
- **div.shopify-section > section.split.reveal** [1440×900]: grid cols [720px 720px]; opacity 0; transform matrix(1, 0, 0, 1, 0, 28)
- **div.split-img > img** [720×900]: max-w 100%
- **div.split-txt > span.kicker ("The Gulabo Craft")** [528×16]: 11.52px/500/- 3.9168px rgb(174, 63, 88); uppercase; mb 20px
- **div.split-txt > h2 ("The Slow Art of the B…")** [528×55]: 51.2px/400/55.296px rgb(42, 32, 27); mb 22px
- **div.rte > p ("Every Gulabo print be…")** [480×121]: 16.32px/300/30.192px rgb(128, 112, 100); mb 18px; max-w 480px
- **div.split-txt > a.btn.btn-ink ("Discover Our Story")** [228×44]: 11.84px/500/- 2.6048px rgb(42, 32, 27); uppercase; border 1px solid rgb(42, 32, 27); pad 12.432px 27.232px 12.432px 27.232px; mt 14px; flex row gap 7.104px items center

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img 306c6ecc-328b-4a82-95e0-54c07d12b14e.png (0×0) alt "The Slow Art of the Block" → NOT DOWNLOADED — check assets.json

## Text Content
- span: "The Gulabo Craft"
- h2: "The Slow Art of the Block"
- p: "Every Gulabo print begins with a teakwood block carved by hand and a single pigment tray. Our karigars press each motif individually — a rose here, a marigold there — so no two metres of fabric are ever identical."
- a: "Discover Our Story"

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "shopify-section-template--22545883889905__editorial" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
