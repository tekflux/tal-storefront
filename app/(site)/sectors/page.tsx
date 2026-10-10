import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/site/PageHero'
import CtaBand from '@/components/site/CtaBand'
import Icon from '@/components/site/Icon'
import { sectorHref, sectors } from '@/lib/site'

export const metadata: Metadata = {
  title: 'What We Trade',
  description:
    'Agricultural commodities, food and consumer goods, machinery, energy, construction and general supply: the sectors Talcora trades in.',
  alternates: { canonical: '/sectors' },
}

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we trade"
        title={
          <>
            Quality goods, <em>in both directions.</em>
          </>
        }
        lead="We export West African commodities to global buyers and import the materials, equipment and goods that growing markets need."
        image="/img/port-aerial.jpg"
        crumbs={[{ label: 'What We Trade' }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="sector-grid">
            {sectors.map((s, i) => (
              <Link
                href={sectorHref(s)}
                className="sector-card reveal"
                key={s.slug}
                style={{ ['--delay' as string]: `${(i % 3) * 0.08}s` }}
              >
                <img src={s.image} alt="" loading="lazy" />
                <h2 className="sector-card__title">{s.name}</h2>
                {/* `summary` is the lead on the sector's own subdomain; use the short line here so it isn't duplicated. */}
                <p className="sector-card__text">{s.short}</p>
                <span className="sector-card__more">
                  Explore sector <Icon name="arrow" size={16} strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight section--white">
        <div className="wrap text-center reveal" style={{ maxWidth: 760 }}>
          <p className="eyebrow">Something else?</p>
          <h2 className="h2">
            Can&apos;t see your product? <em>Ask us.</em>
          </h2>
          <p className="lead" style={{ margin: '20px auto 32px' }}>
            Our procurement team regularly sources goods outside these categories. Tell us what you need and we will
            confirm whether we can supply it.
          </p>
          <Link href="/contact" className="btn btn--dark">
            Send a sourcing request <Icon name="arrow" size={18} strokeWidth={2} />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
