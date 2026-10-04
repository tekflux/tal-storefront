import type { MetadataRoute } from 'next'
import { company, sectors } from '@/lib/site'
import { PRODUCTS } from '@/lib/agrocomm'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const paths = [
    '',
    '/about',
    '/services',
    '/sectors',
    ...sectors.map(s => `/sectors/${s.slug}`),
    ...PRODUCTS.map(p => `/sectors/agricultural-commodities/${p.id}`),
    '/careers',
    '/contact',
  ]
  return paths.map(p => ({ url: `${company.url}${p}`, lastModified: now }))
}
