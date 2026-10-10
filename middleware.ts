import { NextResponse, type NextRequest } from 'next/server'
import { company, getSector, sectorOrigin, sectors } from '@/lib/site'
import { getProduct } from '@/lib/agrocomm'

// Routes each sector subdomain to its pages:
//   energy.talcoraexim.com        -> /sectors/energy-power
//   agro.talcoraexim.com/cocoa    -> /sectors/agricultural-commodities/cocoa
// Old /sectors/... addresses on the main site redirect to the matching subdomain, and
// corporate pages requested on a subdomain (/contact, /about, ...) redirect to the main site.
// Hosts outside talcoraexim.com (localhost, *.pages.dev previews) are left alone.
export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase()
  if (host !== company.domain && !host.endsWith(`.${company.domain}`)) return NextResponse.next()

  const { pathname, search } = request.nextUrl
  const subdomain = host === company.domain ? '' : host.slice(0, -(company.domain.length + 1))

  if (subdomain === '' || subdomain === 'www') {
    const [, slug, page] = pathname.match(/^\/sectors\/([^/]+)(?:\/([^/]+))?\/?$/) ?? []
    const sector = slug ? getSector(slug) : undefined
    if (!sector) return NextResponse.next()
    return NextResponse.redirect(`${sectorOrigin(sector)}${page ? `/${page}` : ''}`, 301)
  }

  const sector = sectors.find(s => s.subdomain === subdomain)
  if (!sector) return NextResponse.redirect(company.url, 302)

  const page = pathname.replace(/^\/+|\/+$/g, '')
  const isCommodity = sector.slug === 'agricultural-commodities' && !page.includes('/') && getProduct(page)
  if (page === '' || isCommodity) {
    const url = request.nextUrl.clone()
    url.pathname = page ? `/sectors/${sector.slug}/${page}` : `/sectors/${sector.slug}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.redirect(`${company.url}${pathname}${search}`, 301)
}

export const config = {
  // Skip Next.js internals, API routes and static files (images, robots.txt, sitemap.xml).
  matcher: ['/((?!_next/|api/|.*\\.[a-zA-Z0-9]+$).*)'],
}
