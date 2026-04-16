# AI Restro 360 (Next.js + CMS)

Next.js 15 site with **SSR** for blog, legal, and CMS pages.

## Locales & URLs

| Locale | URLs | CMS locale |
|--------|------|------------|
| English (default) | `/`, `/blog`, `/contact`, `/page/...`, `/legal/...` | `en` |
| Indonesian | `/id`, `/id/blog`, `/id/contact`, … | `id` |

## Setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Dev server: **http://localhost:3002**.

### Environment

Same as other SEO apps: **`NEXT_PUBLIC_SITE_ORIGIN`** (no trailing slash) for canonical URLs, sitemap, and OG. Rebuild after changing **`NEXT_PUBLIC_*`**.

## Scripts

- `npm run build` / `npm run build:clean` — production build
- `npm run start:plesk` — `server.js` entry for Plesk

## Accidental nested copy

If you see a **`compressedpdf-next/`** folder inside this project, delete it (it duplicates an old app and bloats the tree). `tsconfig.json` excludes it from typecheck.
