---
component: Section1Section
target: src/components/Section1Section.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/section-1-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
---

# Section1Section Specification

## DOM Structure
- footer > div.wrap [1360×467]
  - div.foot-top [1232×289]
    - div.foot-brand
      - div.name — "GULABO"
      - div.sub — "Jaipur"
      - p — "Hand-block printed ethnic wear, slow-made in th…"
      - div.foot-soc > a > svg
    - ×3 div.foot-col
      - h5 — "Shop"
      - ×6 a — "New In"
  - div.foot-news [1232×103]
    - div
      - div.fn-k — "Join the Gulabo Family"
      - p — "New drops, private sales & 15% off your first o…"
    - form.foot-news-form
      - ×4 input
      - button — "Subscribe"
  - div.foot-bot [1232×49]
- … truncated — full tree in the section JSON (ground truth)

## Computed Styles
- **footer** [1440×589]: bg rgb(42, 32, 27); pad 92px 0px 30px 0px
- **div.wrap > div.foot-top** [1232×289]: border 1px none none solid rgb(233, 220, 208) rgb(233, 220, 208) rgba(255, 255, 255, 0.12); pad 0px 0px 54px 0px; grid cols [386.781px 241.734px 241.734px 241.75px] gap 40px
- **div.foot-brand > div.name ("GULABO")** [387×41]: 33.6px/300/- 4.704px rgb(255, 255, 255)
- **div.foot-brand > div.sub ("Jaipur")** [387×13]: 9.28px/300/- 4.2688px rgb(203, 170, 114); uppercase; mt 4px mb 20px
- **div.foot-brand > p ("Hand-block printed et…")** [300×78]: 14.4px/300/25.92px rgb(185, 169, 156); max-w 300px
- **div.foot-brand > div.foot-soc** [387×38]: mt 22px; flex row gap 16px
- **div.foot-soc > a** [38×38]: radius 50%; border 1px solid rgba(255, 255, 255, 0.2); grid cols [36px]
- **div.foot-col > h5 ("Shop")** ×3 [242×16]: 11.2px/500/- 2.688px rgb(255, 255, 255); uppercase; mb 20px
- **div.foot-col > a ("New In")** ×18 [242×20]: 14.08px/300/- rgb(185, 169, 156); mb 13px
- **div.wrap > div.foot-news** [1232×103]: border 1px solid none rgba(255, 255, 255, 0.12) rgb(233, 220, 208); pad 26px 0px 26px 0px; mb 26px; flex row gap 24px justify space-between items center
- **div > div.fn-k ("Join the Gulabo Family")** [289×27]: 22.4px/300/- rgb(255, 255, 255)
- **div > p ("New drops, private sa…")** [289×20]: 13.6px/300/- rgb(185, 169, 156); mt 2px
- **div.foot-news > form.foot-news-form** [280×45]: border 1px none none solid rgb(233, 220, 208) rgb(233, 220, 208) rgba(255, 255, 255, 0.4); flex row
- **form.foot-news-form > button ("Subscribe")** [95×44]: 11.2px/400/- 2.24px rgb(203, 170, 114); center; uppercase; pad 0px 10px 0px 10px
- **div.wrap > div.foot-bot** [1232×49]: pad 26px 0px 0px 0px; flex row gap 14px justify space-between items center
- **div.foot-bot > span ("© 2026 Gulabo Jaipur.…")** [336×18]: 12.16px/300/- 0.4864px rgb(156, 140, 127)
- **div.foot-bot > div.foot-policies** [144×18]: flex row gap 16px
- **div.foot-policies > a ("Privacy")** ×3 [38×18]: 12.16px/300/- 0.4864px rgb(156, 140, 127)
- **div.foot-bot > div.pays** [206×23]: flex row gap 10px
- **div.pays > span ("UPI")** ×4 [37×23]: 10.24px/300/- 1.024px rgb(156, 140, 127); radius 3px; border 1px solid rgba(255, 255, 255, 0.18); pad 3px 9px 3px 9px

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- div: "GULABO"
- div: "Jaipur"
- p: "Hand-block printed ethnic wear, slow-made in the Pink City — your everyday, from cotton kurtas to bridal couture. Featured on Shark Tank India."
- h5: "Shop"
- a: "New In"
- a: "Anarkali Sets"
- a: "Kurta Sets"
- a: "Wedding"
- a: "Kids · Barfi Jaipur"
- a: "Sale"
- h5: "The House"
- a: "About Us"
- a: "Our Story"
- a: "The Craft of Block Print"
- a: "Celebrities"
- a: "Journal"
- a: "Visit Our Stores"
- h5: "Help & Support"
- a: "Track Your Order"
- a: "Shipping Info"
- a: "Returns & Exchange"
- a: "Size Guide"
- a: "FAQs"
- a: "Contact Us"
- div: "Join the Gulabo Family"
- p: "New drops, private sales & 15% off your first order."
- button: "Subscribe"
- span: "© 2026 Gulabo Jaipur. Handcrafted with love in Jaipur, India."
- a: "Privacy"
- a: "Terms"
- a: "Refunds"
- span: "UPI"
- span: "VISA"
- span: "RuPay"
- span: "COD"

## Responsive Behavior
- phone 390: section 390×1490px; body 16px; 1 col (4 items, gap 40px)
- ipad 768: section 768×859px; body 16px; 2 cols (4 items, gap 40px)
- pc 1440: section 1440×589px; body 16px; 4 cols (4 items, gap 40px)
- change: columns: 4 (pc) → 1 (phone)
- change: grid-template columns: 4 (pc) → 1 (phone)
- ipad has its own intermediate layout
- exact per-property values: probe-section-1.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
