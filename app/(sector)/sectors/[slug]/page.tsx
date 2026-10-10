import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/site/PageHero'
import ContactForm from '@/components/site/ContactForm'
import Icon from '@/components/site/Icon'
import { company, getSector, sectorHref, sectorOrigin, sectors } from '@/lib/site'
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

// Commodity names in the sector list that have their own detail page.
const detailPages: Record<string, string> = Object.fromEntries(
  PRODUCTS.map(p => [p.name.toLowerCase(), p.id])
)

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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero eyebrow={sector.brand} title={sector.name} lead={sector.summary} image={sector.image} />

      {/* ---------- Products ---------- */}
      <section className="section" id="products">
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
              <a href="#quote" className="btn btn--primary" style={{ width: '100%' }}>
                Request a quote <Icon name="arrow" size={18} strokeWidth={2} />
              </a>
            </div>
          </aside>
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
