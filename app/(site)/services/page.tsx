import type { Metadata } from 'next'
import PageHero from '@/components/site/PageHero'
import CtaBand from '@/components/site/CtaBand'
import Icon from '@/components/site/Icon'
import { process, services } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Export trading, import and procurement, freight and logistics, documentation, quality inspection and trade finance facilitation from Talcora.',
  alternates: { canonical: '/services' },
}

const documents = [
  'Commercial invoice & packing list',
  'Certificate of origin',
  'Phytosanitary certificate',
  'Fumigation certificate',
  'SGS / Bureau Veritas inspection report',
  'Weight & quality certificates',
  'Bill of lading / air waybill',
  'Form M & customs declarations',
  'Letter of credit documentation',
]

const incoterms = [
  { code: 'FOB', name: 'Free on Board', body: 'We deliver goods loaded on your nominated vessel at the port of origin.' },
  { code: 'CFR', name: 'Cost & Freight', body: 'We arrange and pay ocean freight to your destination port.' },
  { code: 'CIF', name: 'Cost, Insurance & Freight', body: 'As CFR, with marine cargo insurance arranged in your favour.' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            End-to-end trade services, <em>one accountable team.</em>
          </>
        }
        lead="Use a single service or hand us the whole chain. Either way you get a dedicated trade manager, clear written terms and regular updates."
        image="/img/vessel-berth.jpg"
        crumbs={[{ label: 'Services' }]}
      />

      <section className="section">
        <div className="wrap">
          <div className="service-grid service-grid--light reveal">
            {services.map(s => (
              <article className="service" key={s.id} id={s.id}>
                <span className="service__icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <h2 className="service__title">{s.title}</h2>
                <p className="service__text">{s.description}</p>
                <ul className="service__points">
                  {s.points.map(p => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Our process</p>
              <h2 className="h2">
                How a trade runs <em>with Talcora.</em>
              </h2>
            </div>
            <p className="lead">
              Each step has a named owner on our side and a written record you can check, from first enquiry to
              final delivery.
            </p>
          </div>
          <ol className="steps">
            {process.map((step, i) => (
              <li className="step reveal" key={step.title} style={{ ['--delay' as string]: `${i * 0.08}s` }}>
                <div className="step__num" />
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Documentation &amp; compliance</p>
            <h2 className="h2">
              Paperwork done right, <em>the first time.</em>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Missing or incorrect documents are among the most common causes of delayed cargo and demurrage. We
              prepare the full set for both origin and destination, checked against your bank and customs
              requirements.
            </p>
            <ul className="checklist" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
              {documents.map(d => (
                <li key={d}>
                  <span className="checklist__dot">
                    <Icon name="check" size={14} strokeWidth={2.6} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ ['--delay' as string]: '0.12s' }}>
            <p className="eyebrow">Incoterms we offer</p>
            <div className="stack-sm">
              {incoterms.map(t => (
                <div className="panel" key={t.code} style={{ background: 'var(--ink-2)', borderColor: 'var(--line-dark)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                    <span className="h3" style={{ color: 'var(--brass)' }}>{t.code}</span>
                    <span style={{ color: 'var(--white)', fontWeight: 600 }}>{t.name}</span>
                  </div>
                  <p style={{ margin: '10px 0 0', color: 'var(--on-dark-muted)', fontSize: 15 }}>{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--reverse">
          <div className="reveal">
            <p className="eyebrow">Quality assurance</p>
            <h2 className="h2">
              Verified by independent <em>inspection bodies.</em>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Before goods ship, accredited inspectors such as SGS and Bureau Veritas sample, test and certify each
              lot against the contract specification. You receive the reports before you pay the balance.
            </p>
            <ul className="checklist">
              {['Sampling and lab analysis', 'Moisture, purity and grade testing', 'Weight and quantity verification', 'Container and loading supervision'].map(item => (
                <li key={item}>
                  <span className="checklist__dot">
                    <Icon name="check" size={14} strokeWidth={2.6} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="media-tall reveal" style={{ ['--delay' as string]: '0.12s' }}>
            <img src="/img/quality-lab.jpg" alt="Quality inspector in a laboratory" loading="lazy" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
