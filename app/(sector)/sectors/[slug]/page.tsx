import type { Metadata } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContactForm from '@/components/site/ContactForm'
import Icon from '@/components/site/Icon'
import { company, getSector, sectorHref, sectorOrigin, sectors, type FeaturedProduct } from '@/lib/site'
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
    openGraph: {
      title: sector.seoTitle,
      description: sector.seoDescription,
      url,
      siteName: sector.brand,
      images: [sector.image],
    },
  }
}

// Commodity names in the sector list that have their own detail page ("Cashew nuts" -> 'cashew').
const detailPage = (name: string) => PRODUCTS.find(p => name.toLowerCase().startsWith(p.id))?.id

function ProductCard({ item, href, delay }: { item: FeaturedProduct; href?: string; delay: number }) {
  const body = (
    <>
      <div className="commodity__img">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="commodity__body">
        <h3 className="commodity__name">{item.name}</h3>
        <p className="commodity__spec">{item.spec}</p>
      </div>
    </>
  )
  const style = { ['--delay' as string]: `${delay}s` }
  return href ? (
    <Link href={href} className="commodity reveal" style={style}>
      {body}
    </Link>
  ) : (
    <div className="commodity reveal" style={style}>
      {body}
    </div>
  )
}

// Everything on this page is about one sector; it is served as that sector's subdomain home.
export default async function SectorPage({ params }: { params: Promise<Params> }) {
  const sector = getSector((await params).slug)
  if (!sector) notFound()

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sector.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  // Sectors with a photo for every product show cards; agro shows its featured grid plus the full list.
  const productCards = sector.products.every(p => p.image)
    ? sector.products.map(p => ({ id: p.name, name: p.name, spec: p.detail, image: p.image! }))
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ---------- Hero ---------- */}
      <section className="hero hero--sector on-dark">
        <div className="hero__media">
          <img src={sector.image} alt="" fetchPriority="high" />
        </div>
        <div className="wrap">
          <div className="hero__content">
            <p className="eyebrow">{sector.brand}</p>
            {/* The ampersand in "Food & Consumer Goods" is set in brass italic as an accent. */}
            <h1 className="display hero__title--sector">
              {sector.name.split(' & ').map((part, i) => (
                <Fragment key={part}>
                  {i > 0 && <em> &amp; </em>}
                  {part}
                </Fragment>
              ))}
            </h1>
            <p className="hero__lead">{sector.summary}</p>
            <div className="hero__ctas">
              <a href="#quote" className="btn btn--primary">
                Request a quote <Icon name="arrow" size={18} strokeWidth={2} />
              </a>
              <a href="#products" className="btn btn--ghost">
                View products
              </a>
            </div>
          </div>
        </div>
        <div className="hero__stats">
          <div className="wrap">
            <ul className="hero-points" aria-label="Products">
              {sector.products.slice(0, 4).map(p => (
                <li key={p.name}>
                  <span>{p.name}</span>
                  {p.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">About {sector.brand}</p>
            <h2 className="h2">
              Sourced, inspected <em>and delivered.</em>
            </h2>
            <div className="prose" style={{ marginTop: 24, fontSize: 17 }}>
              {sector.intro.map(p => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="checklist">
              {sector.capabilities.map(c => (
                <li key={c}>
                  <span className="checklist__dot">
                    <Icon name="check" size={14} strokeWidth={2.6} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <a href="#quote" className="link-arrow">
              Talk to {sector.brand} <Icon name="arrow" size={16} strokeWidth={2} />
            </a>
          </div>
          <div className="collage reveal" style={{ ['--delay' as string]: '0.12s' }}>
            <div className="collage__main">
              <img src={sector.collage[0]} alt="" loading="lazy" />
            </div>
            <div className="collage__inset">
              <img src={sector.collage[1]} alt="" loading="lazy" />
            </div>
            <div className="collage__badge">
              <strong>{sector.products.length}</strong>
              <span>product lines from vetted suppliers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Products ---------- */}
      <section className="section section--sand" id="products">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">{sector.featured ? 'Featured exports' : 'Products'}</p>
              <h2 className="h2">
                {sector.featured ? (
                  <>
                    West African commodities, <em>graded to spec.</em>
                  </>
                ) : (
                  <>
                    What we <em>supply.</em>
                  </>
                )}
              </h2>
            </div>
            <p className="lead">
              {sector.featured
                ? 'Cleaned, dried, graded and independently inspected at origin, then packed for the long haul.'
                : 'Every order is checked against your specification before it ships. Ask for the grade, brand or model you need.'}
            </p>
          </div>

          {sector.featured && (
            <div className="commodity-grid">
              {sector.featured.map((c, i) => (
                <ProductCard key={c.id} item={c} href={c.page ? sectorHref(sector, c.page) : undefined} delay={i * 0.06} />
              ))}
            </div>
          )}

          {productCards && (
            <div className={`commodity-grid commodity-grid--wide${productCards.length === 4 ? ' commodity-grid--four' : ''}`}>
              {productCards.map((c, i) => (
                <ProductCard key={c.id} item={c} delay={(i % 3) * 0.08} />
              ))}
            </div>
          )}

          {!productCards && (
            <>
              <h3 className="h3 reveal" style={{ margin: '64px 0 20px', color: 'var(--ink)' }}>
                Full commodity list
              </h3>
              <div className="product-table reveal">
                {sector.products.map(p => (
                  <div className="product-row" key={p.name}>
                    <div className="product-row__name">{p.name}</div>
                    <div className="product-row__detail">
                      {p.detail}
                      {detailPage(p.name) && <Link href={sectorHref(sector, detailPage(p.name))}>View process →</Link>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ---------- Who we supply ---------- */}
      <section className="section section--white" id="clients">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Who we supply</p>
              <h2 className="h2">
                Built around <em>your project.</em>
              </h2>
            </div>
          </div>
          <div className="values values--3 reveal">
            {sector.audiences.map((a, i) => (
              <div className="value" key={a.title}>
                <div className="value__num">0{i + 1}</div>
                <h3 className="value__title">{a.title}</h3>
                <p className="value__text">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQs ---------- */}
      <section className="section" id="faqs">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">FAQs</p>
            <h2 className="h2">
              Questions buyers <em>ask us.</em>
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              Something else you need to know? Ask in the form below and the {sector.brand} team will reply within
              one business day.
            </p>
          </div>
          <div className="faq reveal" style={{ ['--delay' as string]: '0.1s' }}>
            {sector.faqs.map(f => (
              <details className="faq__item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section className="section section--white" id="quote">
        <div className="wrap contact-layout">
          <div className="reveal">
            <p className="eyebrow">Request a quote</p>
            <h2 className="h3" style={{ color: 'var(--ink)', marginBottom: 16 }}>
              Talk to {sector.brand}
            </h2>
            <p style={{ color: 'var(--muted)', margin: '0 0 28px' }}>
              Tell us the product, quantity and delivery location. We reply within one business day with
              availability, pricing and lead times. You can also email{' '}
              <a href={`mailto:${company.email}`} style={{ color: 'var(--ink)', fontWeight: 600 }}>
                {company.email}
              </a>
              .
            </p>
            {company.offices.map(o => (
              <div className="office" key={o.id}>
                <div className="office__label">{o.label}</div>
                <div className="office__city">{o.city}</div>
                <div className="office__links">
                  <a href={o.phoneHref}>
                    <Icon name="phone" size={16} />
                    {o.phone}
                  </a>
                  <a href={`https://wa.me/${o.phoneHref.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                    <Icon name="chat" size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ ['--delay' as string]: '0.1s' }}>
            <ContactForm enquiryType={`${sector.brand} quote request`} subjectExample={sector.quoteExample} />
          </div>
        </div>
      </section>
    </>
  )
}
