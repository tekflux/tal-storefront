# Talcora — Website

Marketing site for **Talcora** (talcoraexim.com), an international import & export company.
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
| Job adverts on /careers | `lib/jobs.ts` |
| Commodity process content (e.g. cocoa) | `lib/agrocomm.ts` |
| Design system (colours, type, components) | `app/globals.css` |
| Header, footer, logo, shared sections | `components/site/` |
| Pages | `app/(site)/` |
| Optimised site images | `public/img/` |

Most content changes only need an edit to `lib/site.ts`.

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
