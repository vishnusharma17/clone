---
component: ShopifySectionTemplate22545883889905CelebritySection
target: src/components/ShopifySectionTemplate22545883889905CelebritySection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-template--22545883889905__celebrity-pc.png
interaction_model: <!-- AGENT: fill — one of: static | click-driven | scroll-driven | hover-driven | time-driven | mixed -->
states: default
assets: icons only (icons.tsx)
responsive: phone, ipad, pc
---

# ShopifySectionTemplate22545883889905CelebritySection Specification

## DOM Structure
- div.shopify-section > section.sec.wrap [1360×770]
  - div.sec-head [1360×123]
    - span.kicker — "As Seen On"
    - h2 — "Worn by the Stars"
    - p — "Celebrities & creators in their Gulabo — tap an…"
  - div.rail-wrap [1360×309]
    - button.rail-nav.prev > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - button.rail-nav.next > svg.[object.SVGAnimatedString] > path.[object.SVGAnimatedString]
    - div.rail
      - ×14 a.celeb-card
        - img
        - div.celeb-info
  - div.rail-foot > a.btn.btn-ink [233×44] — "View All Celebrities"

## Computed Styles
- **div.sec-head > span.kicker ("As Seen On")** [1360×16]: 11.52px/500/- 3.9168px rgb(174, 63, 88); center; uppercase; mb 14px
- **div.sec-head > h2 ("Worn by the Stars")** [1360×57]: 54.4px/400/57.12px rgb(42, 32, 27); center
- **div.sec-head > p ("Celebrities & creator…")** [540×22]: 15.36px/300/- rgb(128, 112, 100); center; mt 14px mr 410px ml 410px; max-w 540px
- **div.rail-wrap > button.rail-nav.prev** ×2 [46×46]: bg rgb(251, 246, 239); radius 50%; shadow rgba(42, 32, 27, 0.16) 0px 6px 24px 0px; grid cols [46px]; absolute z5 top 117.531px bottom 145.797px
- **div.rail-wrap > div.rail** [1360×309]: pad 0px 0px 8px 0px; flex row gap 22px
- **div.rail > a.celeb-card** ×14 [226×301]: bg rgb(243, 232, 220); relative
- **a.celeb-card > img** ×14 [226×301]: max-w 100%
- **div.rail-foot > a.btn.btn-ink ("View All Celebrities")** [233×44]: 11.84px/500/- 2.6048px rgb(42, 32, 27); center; uppercase; border 1px solid rgb(42, 32, 27); pad 12.432px 27.232px 12.432px 27.232px; flex row gap 7.104px items center

## States & Behaviors
<!-- AGENT: fill — per behavior: Trigger / State A / State B / Transition + implementation approach (CSS transition, IntersectionObserver, …). Mechanical capture data below is reference, not a substitute. -->
- No state captures on disk. Cross-check css.json interactiveStates — a :hover/:focus rule for this section with no capture means extraction is not done.

## Per-State Content
<!-- AGENT: fill — full content per state for tabbed/stateful sections; write "N/A — static" if the section has one state -->

## Assets
- img Untitleddesign_1_ccf8f776-795e-4558-a2a9-ed58589fbb5f.png (0×0) alt "Abaya White Kurta Set" → NOT DOWNLOADED — check assets.json
- img Untitleddesign_1_39ba4afa-8078-41c4-9751-946183ecd4d8.png (0×0) alt "Qala Peach Sharara Set" → NOT DOWNLOADED — check assets.json
- img Rasna-Bhasin-in-RaatRani-Black-Set-Gulabo-Jaipur-987.jpg (0×0) alt "Rasna Bhasin In Mirror Embellished Raat…" → NOT DOWNLOADED — check assets.json
- img Shamita-Shetty-in-Naaz-Green-Straight-Set-Gulabo-Jaipur-7732.jpg (0×0) alt "Shamita Shetty In Bhandej Georgette Naa…" → NOT DOWNLOADED — check assets.json
- img 1T7A8679.jpg (0×0) alt "Shri Off White Chanderi Anarkali Set Wi…" → NOT DOWNLOADED — check assets.json
- img ABAYA_TAMANNAH.jpg (0×0) alt "Abaya Black Kurta Set" → NOT DOWNLOADED — check assets.json
- img Kareena-Kapoor-in-Glorious-White-Kalidar-Set-Gulabo-Jaipur-7322.png (0×0) alt "Kareena Kapoor In Glorious White Kalida…" → NOT DOWNLOADED — check assets.json
- img TGP4576_7a70e819-ac00-403c-9395-2564f73f186c.jpg (0×0) alt "Wafa Red Anarkali Set" → NOT DOWNLOADED — check assets.json
- img Hairat-Green-Anarkali-Set-Gulabo-Jaipur-7622.png (0×0) alt "Hairat Green  Anarkali Set" → NOT DOWNLOADED — check assets.json
- img Deepika-Padukone-In-Hairat-Yellow-Anarkali-Set-Gulabo-Jaipur-5747.png (0×0) alt "Hairat Yellow  Anarkali Set" → NOT DOWNLOADED — check assets.json
- img Janhvi-Kapoor-in-Hairat-Yellow-Straight-Set-Gulabo-Jaipur-7465.jpg (0×0) alt "Hairat Yellow Straight kurta set" → NOT DOWNLOADED — check assets.json
- img DSC01062.jpg (0×0) alt "Dua Black Anarkali Set" → NOT DOWNLOADED — check assets.json
- img Shamita-Shetty-in-Naaz-Green-Straight-Set-Gulabo-Jaipur-9942.png (0×0) alt "Shamita Shetty In Bhandej Georgette Naa…" → NOT DOWNLOADED — check assets.json
- inline SVG ×2 — use/extend components in src/components/icons.tsx

## Text Content
- span: "As Seen On"
- h2: "Worn by the Stars"
- p: "Celebrities & creators in their Gulabo — tap any look to shop it."
- a: "View All Celebrities"

## Responsive Behavior
<!-- AGENT: fill — no responsive.json entry for "shopify-section-template--22545883889905__celebrity" — run probe.mjs --route / and fill measured values for phone/ipad/pc -->

## Notes
<!-- AGENT: fill — implementation notes for the builder: component split, data file shape for src/data/, gotchas. Delete this section if nothing to add. -->
