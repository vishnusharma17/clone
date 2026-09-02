# ai-site-cloner

Template for cloning any multi-page website into this Next.js codebase, then rebranding it as your own. Two skills drive everything: `/clone-website <url>` and `/restyle`.

## Tech Stack

| Layer | Decision |
| --- | --- |
| Frontend | **Next.js + TypeScript** |
| UI | **Tailwind + shadcn/ui** |
| API | **Next.js API initially** |
| Database | **PostgreSQL** |
| ORM | **Drizzle** |
| Cache | **Redis** |
| Storage | **Cloudflare R2** |
| CDN | **Cloudflare** |
| Images | **Next/Image + CDN transformations** |
| Search | **Meilisearch initially** |
| Payments | **Razorpay + Stripe abstraction** |
| Auth | **Auth.js initially** |
| Jobs | **BullMQ + Redis** |
| Monitoring | **Sentry** |
| Deployment | **Vercel + Cloudflare** |
| Analytics | **PostHog** |

## Commands

- `npm run dev` / `npm run build` / `npm run lint` / `npm run typecheck`
- `npm run check` — lint + typecheck + build (must pass before any commit)

## Architecture Rules

- **Content lives in `src/data/*.ts`, never hardcoded in components.** Components take props. This is what makes `/restyle` possible — copy swaps without touching layout.
- Pages: `src/app/<route>/page.tsx` wires data → components. Shared header/footer mount in layouts.
- `docs/research/` holds extraction artifacts (JSON, specs, manifest) — auditable, never hand-edited except spec files.
- `docs/research/manifest.json` is the pipeline state. The extraction/spec/QA scripts self-report their stage transitions; update `built`/`merged` manually. Check it first on any clone-related task (`node scripts/manifest.mjs status`).
- Specs (`docs/research/components/**/*.spec.md`) must pass `node scripts/lint-spec.mjs` before any builder agent is dispatched.
- All extraction numbers come from `scripts/` (computed styles, real column counts, pixel diffs) — never estimated by eye.

## Code Style

- TypeScript strict, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes; arbitrary values (`text-[17px]`) when the extracted value doesn't match Tailwind's scale
- 2-space indentation

## Ethics

Clone sites you own or have permission to rebuild (platform migration, lost source, learning). Never for phishing, impersonation, or passing off someone's design as your own.
