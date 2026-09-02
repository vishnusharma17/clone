---
component: ShopifySectionTemplate22545883889905BridalSection
target: src/components/ShopifySectionTemplate22545883889905BridalSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-template--22545883889905__bridal-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# ShopifySectionTemplate22545883889905BridalSection Specification

## DOM Structure
- div.shopify-section > section.feature.reveal [1440×720]
  - img [1440×720]
  - div.wrap > div.feature-inner [560×336]
    - span.kicker — "The Wedding Atelier"
    - h2 — "For the Days You'll Never Forget"
    - p — "Shararas, lehengas and gota-patti sets for the …"
    - a.btn.btn-out — "Explore Bridal"

## Computed Styles
- **div.shopify-section > section.feature.reveal** [1440×720]: flex row items center; relative; opacity 0; transform matrix(1, 0, 0, 1, 0, 28)
- **section.feature.reveal > img** [1440×720]: max-w 100%; absolute z0
- **div.feature-inner > span.kicker ("The Wedding Atelier")** [560×16]: 11.52px/500/- 3.9168px rgb(203, 170, 114); uppercase; mb 18px
- **div.feature-inner > h2 ("For the Days You'll N…")** [560×144]: 70.4px/400/71.808px rgb(255, 255, 255); mb 20px
- **div.feature-inner > p ("Shararas, lehengas an…")** [560×60]: 16.8px/300/30.24px rgb(255, 255, 255); mb 34px; opacity 0.92
- **div.feature-inner > a.btn.btn-out ("Explore Bridal")** [185×44]: 11.84px/500/- 2.6048px rgb(255, 255, 255); uppercase; border 1px solid rgba(255, 255, 255, 0.65); pad 12.432px 27.232px 12.432px 27.232px; flex row gap 7.104px items center

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img Rati-Jaal-Lehenga-Gulabo-Jaipur-8860.jpg (0×0) alt "For the Days You'll Never Forget" → NOT DOWNLOADED — check assets.json

## Text Content
- span: "The Wedding Atelier"
- h2: "For the Days You'll Never Forget"
- p: "Shararas, lehengas and gota-patti sets for the bride, her sisters and every celebration in between — crafted to be passed down, not packed away."
- a: "Explore Bridal"

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "shopify-section-template--22545883889905__bridal" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
