import type { MetadataRoute } from 'next'
import { company, sectorOrigin, sectors } from '@/lib/site'
import { PRODUCTS } from '@/lib/agrocomm'
import { openJobs } from '@/lib/jobs'
import { insights } from '@/lib/insights'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const paths = [
    '',
    '/about',
    '/services',
    '/sectors',
    '/insights',
    ...insights.map(a => `/insights/${a.slug}`),
    '/careers',
    ...openJobs.map(j => `/careers/${j.slug}`),
    '/contact',
  ]
  // Sector pages live on their own subdomains (energy.talcoraexim.com, agro.talcoraexim.com/cocoa, ...).
  const agro = sectors.find(s => s.slug === 'agricultural-commodities')!
  const sectorUrls = [
    ...sectors.map(s => sectorOrigin(s)),
    ...PRODUCTS.map(p => `${sectorOrigin(agro)}/${p.id}`),
  ]
  return [...paths.map(p => `${company.url}${p}`), ...sectorUrls].map(url => ({ url, lastModified: now }))
}
