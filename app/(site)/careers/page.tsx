import type { Metadata } from 'next'
import PageHero from '@/components/site/PageHero'
import Icon from '@/components/site/Icon'
import { company } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Build a career in international trade with Talcora in London and Kano.',
  alternates: { canonical: '/careers' },
}

const areas = [
  { title: 'Trade & Sales', body: 'Develop buyer relationships, negotiate contracts and manage trades from enquiry to delivery.' },
  { title: 'Sourcing & Quality', body: 'Work with producers and manufacturers at origin, and own inspection and grading standards.' },
  { title: 'Logistics & Documentation', body: 'Plan shipments, coordinate carriers and prepare export and import documentation.' },
  { title: 'Finance & Operations', body: 'Support trade finance, payments, compliance and the systems that keep trades moving.' },
]

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build a career in <em>global trade.</em>
          </>
        }
        lead="We are a growing team across London and Kano. We look for people who are rigorous, take ownership, and care about doing things properly."
        image="/img/meeting.jpg"
        crumbs={[{ label: 'Careers' }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Where you could work</p>
              <h2 className="h2">
                Teams across the <em>trade cycle.</em>
              </h2>
            </div>
            <p className="lead">
              We have no advertised openings right now, but we always welcome applications from talented people in
              these areas.
            </p>
          </div>
          <div className="values reveal">
            {areas.map((a, i) => (
              <div className="value" key={a.title}>
                <div className="value__num">0{i + 1}</div>
                <h3 className="value__title">{a.title}</h3>
                <p className="value__text">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap">
          <div className="panel panel--ink on-dark reveal" style={{ display: 'grid', gap: 24, padding: 'clamp(32px, 5vw, 64px)' }}>
            <p className="eyebrow" style={{ margin: 0 }}>Open application</p>
            <h2 className="h2" style={{ color: 'var(--white)' }}>
              Send us your CV and <em>tell us where you fit.</em>
            </h2>
            <p className="lead" style={{ maxWidth: 620 }}>
              Email your CV with a short note on the area that interests you and your preferred location. We will be
              in touch when a suitable role opens.
            </p>
            <div>
              <a
                href={`mailto:${company.email}?subject=${encodeURIComponent('Career application')}`}
                className="btn btn--primary"
              >
                Email {company.email} <Icon name="arrow" size={18} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: 'clamp(48px, 6vw, 96px)' }} />
    </>
  )
}
