# Talcora Exim — Website

Marketing site for **Talcora Exim** (talcoraexim.com), an international import & export company.
Next.js 15 (App Router), deployed to Cloudflare via OpenNext.

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
| Commodity process content (e.g. cocoa) | `lib/agrocomm.ts` |
| Design system (colours, type, components) | `app/globals.css` |
| Header, footer, logo, shared sections | `components/site/` |
| Pages | `app/(site)/` |
| Optimised site images | `public/img/` |

Most content changes only need an edit to `lib/site.ts`.

## Environment variables

| Variable | Used by |
| --- | --- |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Contact form (`/api/contact`) |
| `ANTHROPIC_API_KEY`, `NEXT_PUBLIC_PORTAL_PASSWORD` | Internal buyer finder (`/buyer-finder-ai-agent`) |
