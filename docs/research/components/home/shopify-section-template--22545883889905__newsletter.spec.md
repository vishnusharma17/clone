---
component: ShopifySectionTemplate22545883889905NewsletterSection
target: src/components/ShopifySectionTemplate22545883889905NewsletterSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-template--22545883889905__newsletter-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# ShopifySectionTemplate22545883889905NewsletterSection Specification

## DOM Structure
- div.shopify-section > section.news.reveal > div.wrap [1360×222]
  - h2 [1232×66] — "Join the Gulabo Family"
  - p [1232×23] — "Be first to new drops, private sales & block-pr…"
  - form.news-form [480×51]
    - ×4 input
    - button — "Subscribe"
  - p.fine [1232×16] — "By subscribing you agree to receive Gulabo emai…"

## Computed Styles
- **div.shopify-section > section.news.reveal** [1440×496]: bg rgb(243, 232, 220); pad 120px 0px 120px 0px; opacity 0; transform matrix(1, 0, 0, 1, 0, 28)
- **div.wrap > h2 ("Join the Gulabo Family")** [1232×66]: 54.4px/400/- rgb(42, 32, 27); center; mb 14px
- **div.wrap > p ("Be first to new drops…")** [1232×23]: 16px/300/- rgb(128, 112, 100); center; mb 34px
- **div.wrap > form.news-form** [480×51]: border 1px none none solid rgb(42, 32, 27); mr 376px ml 376px; flex row; max-w 480px
- **form.news-form > button ("Subscribe")** [116×50]: 11.52px/500/- 2.304px rgb(174, 63, 88); center; uppercase; pad 0px 18px 0px 18px
- **div.wrap > p.fine ("By subscribing you ag…")** [1232×16]: 11.52px/300/- 0.4608px rgb(128, 112, 100); center; mt 18px mb 34px

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- h2: "Join the Gulabo Family"
- p: "Be first to new drops, private sales & block-print stories — and enjoy 15% off your first order."
- button: "Subscribe"
- p: "By subscribing you agree to receive Gulabo emails. Unsubscribe anytime."

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "shopify-section-template--22545883889905__newsletter" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
