import type { Metadata } from 'next'
import PageHero from '@/components/site/PageHero'
import Icon from '@/components/site/Icon'
import ContactForm from './ContactForm'
import OfficeMap from './OfficeMap'
import { company } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Request a quote or speak to the Talcora trade desk. Offices in London, United Kingdom and Kano, Nigeria.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about <em>your next shipment.</em>
          </>
        }
        lead="Tell us what you want to buy, sell or move. Our trade desk replies within one business day."
        image="/img/vessel-sea.jpg"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section">
        <div className="wrap contact-layout">
          <div className="reveal">
            <p className="eyebrow">Get in touch</p>
            <h2 className="h3" style={{ color: 'var(--ink)', marginBottom: 16 }}>
              Speak to our trade desk
            </h2>
            <p style={{ color: 'var(--muted)', margin: '0 0 28px' }}>
              Email us at{' '}
              <a href={`mailto:${company.email}`} style={{ color: 'var(--ink)', fontWeight: 600 }}>
                {company.email}
              </a>{' '}
              or call either office.
            </p>
            {company.offices.map(o => (
              <div className="office" key={o.id}>
                <div className="office__label">{o.label}</div>
                <div className="office__city">{o.city}</div>
                <p>{o.address}</p>
                <div className="office__links">
                  <a href={o.phoneHref}>
                    <Icon name="phone" size={15} /> {o.phone}
                  </a>
                  <a href={`https://wa.me/${o.phoneHref.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="panel reveal" style={{ ['--delay' as string]: '0.1s', padding: 'clamp(24px, 4vw, 48px)' }}>
            <h2 className="h3" style={{ color: 'var(--ink)', marginBottom: 8 }}>
              Request a quote
            </h2>
            <p style={{ color: 'var(--muted)', margin: '0 0 28px', fontSize: 15 }}>
              Include product, grade, quantity, packaging and destination where you can. It helps us reply faster.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <OfficeMap offices={company.offices} />
        </div>
      </section>
    </>
  )
}
