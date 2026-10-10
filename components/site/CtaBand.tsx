import Link from 'next/link'
import Icon from './Icon'
import { company, siteHref } from '@/lib/site'

export default function CtaBand({
  title = (
    <>
      Tell us what you need <em>to move.</em>
    </>
  ),
  lead = 'Share the product, volume and destination. Our trade desk replies within one business day with availability, pricing and lead times.',
  href = siteHref('/contact'),
}: {
  title?: React.ReactNode
  lead?: string
  href?: string
}) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta-band on-dark reveal">
          <div className="cta-band__media">
            <img src="/img/vessel-sea.jpg" alt="" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">Start a trade</p>
            <h2 className="h2">{title}</h2>
            <p className="lead" style={{ marginTop: 20, maxWidth: 520 }}>
              {lead}
            </p>
          </div>
          <div className="cta-band__actions">
            <Link href={href} className="btn btn--primary">
              Request a quote <Icon name="arrow" size={18} strokeWidth={2} />
            </Link>
            <div className="cta-band__contact">
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={company.offices[0].phoneHref}>{company.offices[0].phone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
