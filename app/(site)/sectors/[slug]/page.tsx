import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/site/PageHero'
import CtaBand from '@/components/site/CtaBand'
import Icon from '@/components/site/Icon'
import { getSector, sectorHref, sectorOrigin, sectors, siteHref } from '@/lib/site'
import { PRODUCTS } from '@/lib/agrocomm'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return sectors.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const sector = getSector((await params).slug)
  if (!sector) return {}
  const url = sectorOrigin(sector)
  return {
    title: { absolute: sector.seoTitle },
    description: sector.seoDescription,
    keywords: sector.keywords,
    alternates: { canonical: url },
    openGraph: { title: sector.seoTitle, description: sector.seoDescription, url, images: [sector.image] },
  }
}

// Commodity names in the sector list that have their own detail page.
const detailPages: Record<string, string> = Object.fromEntries(
  PRODUCTS.map(p => [p.name.toLowerCase(), p.id])
)

export default async function SectorPage({ params }: { params: Promise<Params> }) {
  const sector = getSector((await params).slug)
  if (!sector) notFound()

  const others = sectors.filter(s => s.slug !== sector.slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow={`${sector.direction} · Sector`}
        title={sector.name}
        lead={sector.summary}
        image={sector.image}
        crumbs={[{ label: 'What We Trade', href: siteHref('/sectors') }, { label: sector.name }]}
      />

      <section className="section">
        <div className="wrap sector-layout">
          <div>
            <div className="prose reveal" style={{ fontSize: 17 }}>
              {sector.intro.map(p => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h2 className="h3 reveal" style={{ margin: '48px 0 20px', color: 'var(--ink)' }}>
              Products we supply
            </h2>
            <div className="product-table reveal">
              {sector.products.map(p => (
                <div className="product-row" key={p.name}>
                  <div className="product-row__name">{p.name}</div>
                  <div className="product-row__detail">
                    {p.detail}
                    {detailPages[p.name.toLowerCase()] && (
                      <Link href={sectorHref(sector, detailPages[p.name.toLowerCase()])}>View process →</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="sticky stack reveal" style={{ ['--delay' as string]: '0.1s' }}>
            <div className="panel panel--ink on-dark">
              <p className="eyebrow">What we handle</p>
              <ul className="checklist" style={{ margin: '0 0 28px' }}>
                {sector.capabilities.map(c => (
                  <li key={c}>
                    <span className="checklist__dot">
                      <Icon name="check" size={14} strokeWidth={2.6} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <Link href={siteHref('/contact')} className="btn btn--primary" style={{ width: '100%' }}>
                Request a quote <Icon name="arrow" size={18} strokeWidth={2} />
              </Link>
            </div>
            <div className="panel">
              <p style={{ margin: 0, fontSize: 15, color: 'var(--muted)' }}>
                Need specifications, samples or a different grade? Our team will confirm availability and lead
                times within one business day.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Other sectors</p>
              <h2 className="h2">
                More of what <em>we trade.</em>
              </h2>
            </div>
            <div>
              <Link href={siteHref('/sectors')} className="link-arrow">
                All sectors <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="sector-grid">
            {others.map(s => (
              <Link href={sectorHref(s)} className="sector-card reveal" key={s.slug} style={{ minHeight: 360 }}>
                <img src={s.image} alt="" loading="lazy" />
                <h3 className="sector-card__title">{s.name}</h3>
                <p className="sector-card__text">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
