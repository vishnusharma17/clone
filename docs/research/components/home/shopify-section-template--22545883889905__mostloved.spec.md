---
component: ShopifySectionTemplate22545883889905MostlovedSection
target: src/components/ShopifySectionTemplate22545883889905MostlovedSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-template--22545883889905__mostloved-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# ShopifySectionTemplate22545883889905MostlovedSection Specification

## DOM Structure
- div.shopify-section > section.sec.wrap [1360×944]
  - div.sec-head [1360×87]
    - span.kicker — "Tried, Tested, Adored"
    - h2 — "Most Loved"
  - div.rail-wrap [1360×519]
    - button.rail-nav.prev > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - button.rail-nav.next > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - div.rail
      - ×10 article.card
        - a.card-media
        - div.card-info
  - div.rail-foot > a.btn.btn-ink [212×44] — "Shop Best Sellers"

## Computed Styles
- **div.sec-head > span.kicker ("Tried, Tested, Adored")** [1360×16]: 11.52px/500/- 3.9168px rgb(174, 63, 88); center; uppercase; mb 14px
- **div.sec-head > h2 ("Most Loved")** [1360×57]: 54.4px/400/57.12px rgb(42, 32, 27); center
- **div.rail-wrap > button.rail-nav.prev** ×2 [46×46]: bg rgb(251, 246, 239); radius 50%; shadow rgba(42, 32, 27, 0.16) 0px 6px 24px 0px; grid cols [46px]; absolute z5 top 197.031px bottom 275.5px
- **div.rail-wrap > div.rail** [1360×519]: pad 0px 0px 8px 0px; flex row gap 22px
- **article.card > a.card-media** ×10 [300×400]: bg rgb(243, 232, 220); relative
- **div.rail-foot > a.btn.btn-ink ("Shop Best Sellers")** [212×44]: 11.84px/500/- 2.6048px rgb(42, 32, 27); center; uppercase; border 1px solid rgb(42, 32, 27); pad 12.432px 27.232px 12.432px 27.232px; flex row gap 7.104px items center

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×2 — use/extend components in src/components/icons.tsx

## Text Content
- span: "Tried, Tested, Adored"
- h2: "Most Loved"
- a: "Shop Best Sellers"

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "shopify-section-template--22545883889905__mostloved" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
