---
component: ShopifySectionTemplate22545883889905HeroSection
target: src/components/ShopifySectionTemplate22545883889905HeroSection.tsx
page: /
screenshot: docs/design-references/gulabojaipur.com/shopify-section-template--22545883889905__hero-pc.png
interaction_model: static
states: default
assets: none
responsive: phone, ipad, pc
tier: light
---

# ShopifySectionTemplate22545883889905HeroSection Specification

## DOM Structure
- div.shopify-section > section.hero [1440×900]
  - img.poster [1440×900]
  - video > source [0×0]
  - div.hero-inner [840×407]
    - div.kicker — "Handcrafted in Jaipur — The Pink City"
    - h1 — "Bloom in Block Print"
    - p.lede — "Hand-block printed Anarkalis, kurta sets, co-or…"
    - div.hero-cta
      - a.btn.btn-fill — "Shop New In"
      - a.btn.btn-out — "The Bridal Atelier"
  - div.scrollcue [52×67]
    - span — "Scroll"
    - span.ln

## Computed Styles
- **div.shopify-section > section.hero** [1440×900]: flex row justify center items center; relative
- **section.hero > img.poster** [1440×900]: max-w 100%; absolute z0
- **div.hero-inner > div.kicker ("Handcrafted in Jaipur…")** [792×16]: 11.52px/500/- 3.9168px rgb(255, 255, 255); center; uppercase; mb 26px; opacity 0.92
- **div.hero-inner > h1 ("Bloom in Block Print")** [792×207]: 105.6px/400/103.488px 1.056px rgb(255, 255, 255); center
- **div.hero-inner > p.lede ("Hand-block printed An…")** [560×52]: 17.92px/300/- 0.3584px rgb(255, 255, 255); center; mt 24px mr 116px mb 38px ml 116px; max-w 560px; opacity 0.95
- **div.hero-inner > div.hero-cta** [792×44]: flex row gap 16px justify center
- **div.hero-cta > a.btn.btn-fill ("Shop New In")** [165×44]: 11.84px/500/- 2.6048px rgb(255, 255, 255); center; uppercase; bg rgb(174, 63, 88); border 1px solid; pad 12.432px 27.232px 12.432px 27.232px; flex row gap 7.104px items center
- **div.hero-cta > a.btn.btn-out ("The Bridal Atelier")** [214×44]: 11.84px/500/- 2.6048px rgb(255, 255, 255); center; uppercase; border 1px solid rgba(255, 255, 255, 0.65); pad 12.432px 27.232px 12.432px 27.232px; flex row gap 7.104px items center
- **section.hero > div.scrollcue** [52×67]: flex column gap 10px items center; absolute z2 top 805px bottom 28px; opacity 0.85; transform matrix(1, 0, 0, 1, -25.7969, 0)
- **div.scrollcue > span ("Scroll")** [52×15]: 9.92px/300/- 2.976px rgb(255, 255, 255); center; uppercase
- **div.scrollcue > span.ln** [1×15]: bg-img linear-gradient(rgb(255, 255, 255), rgba(…; transform matrix(1, 0, 0, 0.367126, 0, 0)

## States & Behaviors
N/A — static hero. The poster remains fixed behind the overlay; links navigate to the extracted collection routes.

## Per-State Content
N/A — static.

## Assets
- img hero-poster.jpg (1080×1920) → NOT DOWNLOADED — check assets.json

## Text Content
- div: "Handcrafted in Jaipur — The Pink City"
- h1: "Bloom in Block Print"
- p: "Hand-block printed Anarkalis, kurta sets, co-ords & bridal — pressed one bloom at a time on pure cotton, mul & chanderi."
- a: "Shop New In"
- a: "The Bridal Atelier"
- span: "Scroll"

## Responsive Behavior
- phone: 390px wide × 844px high, 0px padding.
- ipad: 768px wide × 1024px high, 0px padding.
- pc: 1440px wide × 900px high, 0px padding; heading is 105.6px with 103.488px line-height.

## Notes
Use `public/images/hero-poster.jpg` with `object-fit: cover`, the extracted three-stop overlay, centered Cormorant Garamond heading, and the exact two CTA labels. The component is composed in `src/components/home.tsx`; live content stays in `src/data/` or the source product feed.
