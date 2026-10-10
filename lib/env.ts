// Kept separate from lib/site.ts, whose `process` export (the trade steps) shadows Node's `process`.
// True on the deployed site; sector links then point at subdomains (energy.talcoraexim.com).
export const onLiveSite = process.env.NODE_ENV === 'production'
