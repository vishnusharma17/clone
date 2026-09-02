---
component: ShopifySectionSections22545884053745HeaderSection
target: src/components/ShopifySectionSections22545884053745HeaderSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-sections--22545884053745__header-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: none
responsive: phone, ipad, pc
---

# ShopifySectionSections22545884053745HeaderSection Specification

## DOM Structure
- div.shopify-section.shopify-section-group-header-group [1440×102]
  - div.site-top [1440×102]
    - div.announce — "Free Shipping in India  ·  Made to Order – Hand…"
    - header.head.solid > div.wrap.head-row
      - button.burger
        - ×3 span
      - a.brand
        - div.name — "GULABO"
        - div.sub — "Jaipur"
      - nav.gnav
        - div.gnav-item > a
        - div.gnav-item.rts-nav > a
        - ×4 div.gnav-item.has-mega
        - div.gnav-item.has-mega
        - div.gnav-item.has-mega
      - div.icons
        - ×2 a > svg
        - ×2 a.cart-c
- … truncated — full tree in the section JSON (ground truth)

## Computed Styles
- **div.shopify-section.shopify-section-group-header-group** [1440×102]: sticky z60
- **div.shopify-section.shopify-section-group-header-group > div.site-top** [1440×102]: bg rgb(251, 246, 239); sticky z60
- **div.site-top > div.announce ("Free Shipping in Indi…")** [1440×34]: 10.88px/300/- 3.0464px rgb(251, 246, 239); center; uppercase; bg rgb(42, 32, 27); pad 9px 16px 9px 16px
- **div.site-top > header.head.solid** [1440×68]: bg rgb(251, 246, 239); shadow rgba(42, 32, 27, 0.14) 0px 1px 0px 0px; pad 14px 0px 14px 0px; relative z1
- **header.head.solid > div.wrap.head-row** [1360×40]: pad 0px 64px 0px 64px; mr 40px ml 40px; flex row gap 24px justify space-between items center; max-w 1360px
- **button.burger > span** ×3 [0×0]: bg rgb(42, 32, 27)
- **a.brand > div.name ("GULABO")** [135×24]: 27.2px/500/24.48px 4.352px rgb(42, 32, 27); center
- **a.brand > div.sub ("Jaipur")** [135×13]: 8.96px/300/- 4.48px rgb(42, 32, 27); center; uppercase; pad 0px 0px 0px 4.48px; mt 3px
- **div.wrap.head-row > nav.gnav** [903×40]: flex row gap 2px justify center
- **div.wrap.head-row > div.icons** [140×26]: flex row gap 20px items center
- **div.shopify-section.shopify-section-group-header-group > div.gj-drawer** [1440×900]: bg rgb(251, 246, 239); pad 18px 22px 60px 22px; fixed z200; opacity 0; transform matrix(1, 0, 0, 1, 0, -12)
- **div.gj-drawer > div.gj-md-top** [1396×38]: mb 12px; flex row justify space-between items center
- **div.gj-md-top > span.name ("GULABO")** [107×27]: 22.4px/300/- 3.136px rgb(42, 32, 27)
- **div.gj-md-top > button.mclose ("×")** [38×38]: 30.4px/400/30.4px rgb(42, 32, 27); center; pad 4px 10px 4px 10px
- **div.gj-md-item > a ("New In")** ×4 [1396×57]: 20.8px/300/- rgb(42, 32, 27); pad 16px 2px 16px 2px; flex row justify space-between items center
- **div.gj-md-item > a.hot ("Ready to Ship · Expre…")** ×2 [1396×57]: 20.8px/300/- rgb(174, 63, 88); pad 16px 2px 16px 2px; flex row justify space-between items center
- **div.gj-md-item > button ("Women")** ×5 [1396×57]: 20.8px/400/- rgb(42, 32, 27); pad 16px 2px 16px 2px; flex row justify space-between items center
- **button > span.pm ("+")** ×5 [8×24]: 19.2px/400/- rgb(174, 63, 88)
- **div.gj-md-group > h6 ("Shop by Type")** ×10 [1396×14]: 9.6px/500/- 2.304px rgb(174, 63, 88); uppercase; mt 10px mb 6px
- **div.gj-md-group > a ("Anarkali Sets")** ×48 [1396×36]: 15.2px/300/- rgb(42, 32, 27); pad 7px 0px 7px 10px
- **div.gj-md-group > a ("View all Women →")** [1396×36]: 15.2px/300/- rgb(174, 63, 88); pad 7px 0px 7px 10px

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
None — text and CSS only.

## Text Content
- div: "Free Shipping in India  ·  Made to Order – Handcrafted in Jaipur  ·  Express Shipping Available"
- div: "GULABO"
- div: "Jaipur"
- span: "GULABO"
- button: "×"
- a: "New In"
- a: "Ready to Ship · Express"
- button: "Women"
- span: "+"
- h6: "Shop by Type"
- a: "Anarkali Sets"
- a: "Kurta Sets"
- a: "Straight Sets"
- a: "Co-ord Sets"
- a: "Suits"
- a: "Dresses"
- a: "The Curve Edit (XL & above)"
- h6: "Fabrics & Crafts"
- a: "Cotton"
- a: "Organza"
- a: "Doriya"
- a: "Chanderi Silk"
- a: "Block Print"
- a: "Gota Patti"
- h6: "Shop by Collection"
- a: "Desert Rose"
- a: "Nazara"
- a: "Raanibagh"
- a: "Musalsal"
- a: "Gulposh"
- a: "Jugni"
- a: "Mashoor"
- a: "View all Women →"
- button: "Kids"
- span: "+"
- h6: "Shop by Type"
- … +44 more text nodes — verbatim in the section JSON

## Responsive Behavior
- phone 390: section 390×134px; body 16px; 1 col (2 items, gap normal); 1 hidden children
- ipad 768: section 768×118px; body 16px; 1 col (2 items, gap normal); 1 hidden children
- pc 1440: section 1440×102px; body 16px; 4 cols (4 items, gap 43.2px); 1 hidden children
- change: columns: 4 (pc) → 1 (phone)
- ipad matches phone layout
- exact per-property values: probe-shopify-section-sections-22545884053745-header.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
