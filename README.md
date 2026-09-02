# ai-site-cloner

Template for cloning any multi-page website into this Next.js codebase, then rebranding it as your own.

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
