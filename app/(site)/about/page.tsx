import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import CtaBand from '@/components/site/CtaBand'
import Icon from '@/components/site/Icon'
import { company, regions, values } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Talcora is a trading company with offices in London and Kano, exporting West African agricultural commodities and supplying energy, construction and industrial goods.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Talcora"
        title={
          <>
            A trading house built on <em>integrity and precision.</em>
          </>
        }
        lead="We connect quality producers and manufacturers with buyers across five continents, and take responsibility for every step in between."
        image="/img/port-aerial.jpg"
        crumbs={[{ label: 'About' }]}
      />

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Our story</p>
            <h2 className="h2">
              Making cross-border trade <em>simple and dependable.</em>
            </h2>
            <div className="prose" style={{ marginTop: 28 }}>
              <p>
                Talcora was founded on a simple observation: good products and willing buyers are often kept
                apart by complexity. Unclear specifications, unreliable suppliers, missing documents and opaque
                logistics turn promising trades into costly delays.
              </p>
              <p>
                We close that gap. Our team in London works alongside buyers in their markets, and our operations
                base in Kano works directly with producers, aggregators and processors at origin. Together we
                manage sourcing, quality, paperwork, payment security and freight as one joined-up service.
              </p>
              <p>
                Today we export West African agricultural commodities to buyers in Europe, Asia, the Middle East and
                North America, and import machinery, energy equipment, construction supplies, general supplies and
                consumer goods for growing businesses.
              </p>
            </div>
          </div>
          <div className="collage reveal" style={{ ['--delay' as string]: '0.12s' }}>
            <div className="collage__main">
              <img src="/img/meeting.jpg" alt="Talcora trade team meeting with partners" loading="lazy" />
            </div>
            <div className="collage__inset">
              <img src="/img/vessel-berth.jpg" alt="Container vessel at berth" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <div className="grid-2">
            <div className="reveal">
              <p className="eyebrow">Our mission</p>
              <h2 className="h3" style={{ fontSize: 'clamp(26px, 2.6vw, 36px)' }}>
                To move quality goods across borders with integrity, transparency and lasting value for every party
                in the trade.
              </h2>
            </div>
            <div className="reveal" style={{ ['--delay' as string]: '0.1s' }}>
              <p className="eyebrow">Our vision</p>
              <h2 className="h3" style={{ fontSize: 'clamp(26px, 2.6vw, 36px)' }}>
                To be the most trusted bridge between African production and global demand, and between global
                supply and African growth.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">What we stand for</p>
              <h2 className="h2">
                Principles we <em>trade by.</em>
              </h2>
            </div>
            <p className="lead">
              These principles shape how we choose suppliers, write contracts, inspect goods and treat our partners.
            </p>
          </div>
          <div className="values reveal" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {values.map((v, i) => (
              <div className="value" key={v.title}>
                <div className="value__num">0{i + 1}</div>
                <h3 className="value__title">{v.title}</h3>
                <p className="value__text">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Where we operate</p>
            <h2 className="h2">
              On the ground at origin, <em>present in your market.</em>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Our two offices give buyers and suppliers a local point of contact, backed by partner networks across
              {` ${regions.length} `}trading regions.
            </p>
            <div style={{ marginTop: 36 }}>
              {company.offices.map(o => (
                <div className="office" key={o.id}>
                  <div className="office__label">{o.label}</div>
                  <div className="office__city">{o.city}</div>
                  <p>{o.address}</p>
                  <div className="office__links">
                    <a href={o.phoneHref}>{o.phone}</a>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn--dark" style={{ marginTop: 36 }}>
              Contact our team <Icon name="arrow" size={18} strokeWidth={2} />
            </Link>
          </div>
          <div className="media-tall reveal" style={{ ['--delay' as string]: '0.12s' }}>
            <img src="/img/region-europe.jpg" alt="London skyline at dusk" loading="lazy" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
