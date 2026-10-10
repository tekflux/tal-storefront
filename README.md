# Talcora — Website

Corporate site for **Talcora** (talcoraexim.com), with each sector on its own subdomain.
Next.js 15 (App Router), deployed to Cloudflare via OpenNext.

## Subdomains

One app serves every host. `middleware.ts` routes each sector subdomain to its page:

| Address | Page |
| --- | --- |
| talcoraexim.com, www.talcoraexim.com | Corporate site |
| agro.talcoraexim.com (and /cocoa) | Agricultural Commodities |
| foods.talcoraexim.com | Food & Consumer Goods |
| machinery.talcoraexim.com | Machinery & Equipment |
| energy.talcoraexim.com | Energy & Power Solutions |
| construction.talcoraexim.com | Construction & Infrastructure |
| supply.talcoraexim.com | General Supply |

Each subdomain is branded as its own site (`Talcora Energy`, ...): its header, menu, footer, "who we supply",
FAQs and quote form only cover that sector (`app/(sector)/sectors/[slug]/layout.tsx`). Old `/sectors/<slug>` addresses redirect (301) to the subdomain. A sector's subdomain, Google title,
description and keywords are set in `lib/site.ts`. Each subdomain must also be added as a custom domain
on the Cloudflare project. In `npm run dev` sectors stay on localhost under `/sectors/<slug>`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run deploy     # build + deploy to Cloudflare
```

## Where things live

| What | Where |
| --- | --- |
| Company details, offices, sectors, services, markets, stats | `lib/site.ts` |
| Job adverts on /careers | `lib/jobs.ts` |
| Insights articles on /insights | `content/insights/*.md` |
| Commodity process content (e.g. cocoa) | `lib/agrocomm.ts` |
| Design system (colours, type, components) | `app/globals.css` |
| Header, footer, logo, shared sections | `components/site/` |
| Pages | `app/(site)/` |
| Optimised site images | `public/img/` |

Most content changes only need an edit to `lib/site.ts`.

### Publishing an insights article

Add a Markdown file to `content/insights/`. The file name becomes the web address, so
`content/insights/sesame-market-update.md` is published at `/insights/sesame-market-update`.
Start the file with this header, then write the article below it:

```markdown
---
title: Your article title
description: One or two sentences shown in Google results and on the article card.
date: 2026-10-04
category: Market Updates
image: /img/vessel-sea.jpg
author: Talcora Trade Desk
---

Your opening paragraph...

## A section heading

- A bullet point
- **Bold text** and [a link](/contact)
```

Push to `main`. The newest articles appear first, on /insights and on the homepage. Add
`draft: true` to the header to hide an article while you work on it. Article images go in
`public/img/` and are referenced as `/img/your-image.jpg`.

### Posting a job

Open `lib/jobs.ts`, copy an existing entry, give it a unique `slug`, fill in the details and set
`published: true`. Push to `main` and the role appears on /careers (with its own page and application
form) once Cloudflare redeploys. Set `published: false` to close a role.

## Environment variables

| Variable | Used by |
| --- | --- |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Contact form (`/api/contact`) and job applications |
| `CAREERS_TO_EMAIL` (optional) | Where job applications go; defaults to `CONTACT_TO_EMAIL` |
| `ANTHROPIC_API_KEY`, `NEXT_PUBLIC_PORTAL_PASSWORD` | Internal buyer finder (`/buyer-finder-ai-agent`) |
