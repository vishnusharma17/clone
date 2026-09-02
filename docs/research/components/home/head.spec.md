---
component: HeadSection
target: src/components/HeadSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/head-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# HeadSection Specification

## DOM Structure
- header.head.solid > div.wrap.head-row [1360×40]
  - button.burger [0×0]
    - ×3 span
  - a.brand [221×40]
    - div.name — "GULABO"
    - div.sub — "Jaipur"
  - nav.gnav [903×40]
    - div.gnav-item > a — "New In"
    - div.gnav-item.rts-nav > a — "Ready to Ship"
      - span.rts-flag — "Express"
    - ×4 div.gnav-item.has-mega
      - a — "Women"
        - span.caret — "▾"
      - div.gj-mega > div.gj-mega-inner
    - div.gnav-item.has-mega
      - a — "Sale"
        - span.caret — "▾"
      - div.gj-mega > div.gj-mega-inner > div
- … truncated — full tree in the section JSON (ground truth)

## Computed Styles
- **header.head.solid** [1440×68]: bg rgb(251, 246, 239); shadow rgba(42, 32, 27, 0.14) 0px 1px 0px 0px; pad 14px 0px 14px 0px; relative z1
- **header.head.solid > div.wrap.head-row** [1360×40]: pad 0px 64px 0px 64px; mr 40px ml 40px; flex row gap 24px justify space-between items center; max-w 1360px
- **button.burger > span** ×3 [0×0]: bg rgb(42, 32, 27)
- **a.brand > div.name ("GULABO")** [135×24]: 27.2px/500/24.48px 4.352px rgb(42, 32, 27); center
- **a.brand > div.sub ("Jaipur")** [135×13]: 8.96px/300/- 4.48px rgb(42, 32, 27); center; uppercase; pad 0px 0px 0px 4.48px; mt 3px
- **div.wrap.head-row > nav.gnav** [903×40]: flex row gap 2px justify center
- **div.gnav-item > a ("New In")** ×6 [79×40]: 11.52px/400/- 1.8432px rgb(42, 32, 27); uppercase; pad 12px 13px 12px 13px; relative
- **div.gnav-item.rts-nav > a ("Ready to Ship")** [189×40]: 11.52px/400/- 1.8432px rgb(42, 32, 27); uppercase; pad 12px 13px 12px 13px; flex row gap 7px items center; relative
- **a > span.rts-flag ("Express")** [54×14]: 8px/500/8px 1.28px rgb(255, 255, 255); uppercase; bg rgb(174, 63, 88); radius 2px; pad 3px 6px 3px 6px
- **a > span.caret ("▾")** ×5 [8×13]: 9.28px/400/- 1.8432px rgb(42, 32, 27); uppercase; ml 4px; opacity 0.6
- **div.gnav-item.has-mega > div.gj-mega** ×2 [1440×419]: bg rgb(251, 246, 239); border 1px solid none none rgba(42, 32, 27, 0.14) rgb(42, 32, 27) rgb(42, 32, 27); shadow rgba(42, 32, 27, 0.16) 0px 30px 60px 0px; absolute z99 top 68.4688px bottom -418.5px; opacity 0; transform matrix(1, 0, 0, 1, 0, -8)
- **div.gj-mega > div.gj-mega-inner** ×2 [1360×418]: pad 32px 56px 36px 56px; mr 40px ml 40px; grid cols [279.609px 279.609px 279.609px 279.609px] gap 43.2px; max-w 1360px
- **div.gnav-item.has-mega > div.gj-mega** [1440×203]: bg rgb(251, 246, 239); border 1px solid none none rgba(42, 32, 27, 0.14) rgb(42, 32, 27) rgb(42, 32, 27); shadow rgba(42, 32, 27, 0.16) 0px 30px 60px 0px; absolute z99 top 68.4688px bottom -203px; opacity 0; transform matrix(1, 0, 0, 1, 0, -8)
- **div.gj-mega > div.gj-mega-inner** ×2 [1360×202]: pad 32px 56px 36px 56px; mr 40px ml 40px; grid cols [387.203px 387.203px 387.219px] gap 43.2px; max-w 1360px
- **div.gnav-item.has-mega > div.gj-mega** [1440×267]: bg rgb(251, 246, 239); border 1px solid none none rgba(42, 32, 27, 0.14) rgb(42, 32, 27) rgb(42, 32, 27); shadow rgba(42, 32, 27, 0.16) 0px 30px 60px 0px; absolute z99 top 68.4688px bottom -267px; opacity 0; transform matrix(1, 0, 0, 1, 0, -8)
- **div.gnav-item.has-mega > a ("Sale")** [77×40]: 11.52px/500/- 1.8432px rgb(174, 63, 88); uppercase; pad 12px 13px 12px 13px; relative
- **a > span.caret ("▾")** [8×13]: 9.28px/500/- 1.8432px rgb(174, 63, 88); uppercase; ml 4px; opacity 0.6
- **div.gnav-item.has-mega > div.gj-mega** [1440×561]: bg rgb(251, 246, 239); border 1px solid none none rgba(42, 32, 27, 0.14) rgb(42, 32, 27) rgb(42, 32, 27); shadow rgba(42, 32, 27, 0.16) 0px 30px 60px 0px; absolute z99 top 68.4688px bottom -561px; opacity 0; transform matrix(1, 0, 0, 1, 0, -8)
- **div.gj-mega > div.gj-mega-inner** [1360×560]: pad 32px 56px 36px 56px; mr 40px ml 40px; grid cols [1248px] gap 43.2px; max-w 1360px
- **div.gnav-item.has-mega > div.gj-mega** [1440×437]: bg rgb(251, 246, 239); border 1px solid none none rgba(42, 32, 27, 0.14) rgb(42, 32, 27) rgb(42, 32, 27); shadow rgba(42, 32, 27, 0.16) 0px 30px 60px 0px; absolute z99 top 68.4688px bottom -436.953px; opacity 0; transform matrix(1, 0, 0, 1, 0, -8)
- **div.gj-mega > div.gj-mega-inner** [1360×436]: pad 32px 56px 36px 56px; mr 40px ml 40px; grid cols [301.203px 903.609px] gap 43.2px; max-w 1360px
- **div.wrap.head-row > div.icons** [140×26]: flex row gap 20px items center
- **a.cart-c > span.dot ("0")** ×2 [0×0]: 8.8px/500/- rgb(255, 255, 255); bg rgb(174, 63, 88); radius 50%; absolute top -6px

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- inline SVG ×4 — use/extend components in src/components/icons.tsx

## Text Content
- div: "GULABO"
- div: "Jaipur"
- a: "New In"
- a: "Ready to Ship"
- span: "Express"
- a: "Women"
- span: "▾"
- a: "Kids"
- span: "▾"
- a: "Wedding"
- span: "▾"
- a: "Accessories"
- span: "▾"
- a: "Sale"
- span: "▾"
- a: "Celebrities"
- span: "▾"
- span: "0" ×2

## Responsive Behavior
- phone 390: section 390×68px; body 16px
- ipad 768: section 768×68px; body 16px
- pc 1440: section 1440×68px; body 16px; 4 cols (4 items, gap 43.2px)
- change: no layout change across viewports
- ipad matches phone layout
- exact per-property values: probe-head.json + responsive.json (ground truth)

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
