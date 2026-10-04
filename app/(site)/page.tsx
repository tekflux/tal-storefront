import Link from 'next/link'
import Icon from '@/components/site/Icon'
import CountUp from '@/components/site/CountUp'
import CtaBand from '@/components/site/CtaBand'
import { commodities, credentials, process, regions, sectors, services, stats, values } from '@/lib/site'

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero on-dark">
        <div className="hero__media">
          <img src="/img/hero-port.jpg" alt="Container vessel at port at sunset" fetchPriority="high" />
        </div>
        <div className="wrap">
          <div className="hero__content">
            <p className="eyebrow">International import &amp; export</p>
            <h1 className="display">
              Trusted trade between Africa <em>and the world.</em>
            </h1>
            <p className="hero__lead">
              Talcora sources, inspects and delivers quality goods across borders. We handle everything from
              agricultural commodities to industrial supplies, with one accountable partner from origin to your door.
            </p>
            <div className="hero__ctas">
              <Link href="/contact" className="btn btn--primary">
                Request a quote <Icon name="arrow" size={18} strokeWidth={2} />
              </Link>
              <Link href="/sectors" className="btn btn--ghost">
                Explore what we trade
              </Link>
            </div>
          </div>
        </div>
        <div className="hero__stats">
          <div className="wrap stat-row">
            {stats.map(s => (
              <div className="stat" key={s.label}>
                <div className="stat__value">
                  <CountUp value={s.value} />
                  <span>{s.suffix}</span>
                </div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Credentials ---------- */}
      <div className="creds">
        <div className="wrap">
          <ul className="creds__list" aria-label="Credentials">
            {credentials.map(c => (
              <li key={c}>
                <Icon name="check" size={18} strokeWidth={2.2} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Intro ---------- */}
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Who we are</p>
            <h2 className="h2">
              One partner for the <em>entire trade cycle.</em>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              From our head office in London and our operations base in Kano, we connect producers and manufacturers
              with buyers on five continents. We take on the hard parts of cross-border trade so you can focus on
              your business.
            </p>
            <ul className="checklist">
              {[
                'Vetted suppliers and traceable origin',
                'Independent inspection before every shipment',
                'Documentation and customs handled end to end',
                'Secure payment structures for both sides',
              ].map(item => (
                <li key={item}>
                  <span className="checklist__dot">
                    <Icon name="check" size={14} strokeWidth={2.6} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="link-arrow">
              More about Talcora <Icon name="arrow" size={16} strokeWidth={2} />
            </Link>
          </div>
          <div className="collage reveal" style={{ ['--delay' as string]: '0.12s' }}>
            <div className="collage__main">
              <img src="/img/warehouse.jpg" alt="Warehouse team preparing palletised goods for export" loading="lazy" />
            </div>
            <div className="collage__inset">
              <img src="/img/farmer-cocoa.jpg" alt="Cocoa farmer holding freshly harvested pods" loading="lazy" />
            </div>
            <div className="collage__badge">
              <strong>2</strong>
              <span>offices: London &amp; Kano, at origin and in market</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- What we trade ---------- */}
      <section className="section section--white">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">What we trade</p>
              <h2 className="h2">
                Six sectors. <em>One standard.</em>
              </h2>
            </div>
            <p className="lead">
              We export West African commodities to global buyers and import the materials, equipment and goods that
              growing markets need, all to the same standard of quality and compliance.
            </p>
          </div>
          <div className="sector-grid">
            {sectors.map((s, i) => (
              <Link
                href={`/sectors/${s.slug}`}
                className="sector-card reveal"
                key={s.slug}
                style={{ ['--delay' as string]: `${(i % 3) * 0.08}s` }}
              >
                <img src={s.image} alt="" loading="lazy" />
                <h3 className="sector-card__title">{s.name}</h3>
                <p className="sector-card__text">{s.short}</p>
                <span className="sector-card__more">
                  Explore sector <Icon name="arrow" size={16} strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="h2">
                Everything between <em>supplier and buyer.</em>
              </h2>
            </div>
            <div>
              <p className="lead" style={{ marginBottom: 24 }}>
                Use one service or the whole chain. Every engagement gets a dedicated trade manager and clear,
                written terms.
              </p>
              <Link href="/services" className="link-arrow">
                View all services <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="service-grid reveal">
            {services.map(s => (
              <article className="service" key={s.id}>
                <span className="service__icon">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="service__title">{s.title}</h3>
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

      {/* ---------- Process ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 className="h2">
                A clear path from <em>enquiry to delivery.</em>
              </h2>
            </div>
            <p className="lead">
              Five steps, with no surprises. You know the specification, the price, the paperwork and the shipping
              date before anything leaves the warehouse.
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

      {/* ---------- Commodities ---------- */}
      <section className="section section--sand">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <p className="eyebrow">Featured exports</p>
              <h2 className="h2">
                West African commodities, <em>graded to spec.</em>
              </h2>
            </div>
            <div>
              <p className="lead" style={{ marginBottom: 24 }}>
                Cleaned, dried, graded and independently inspected at origin, then packed for the long haul.
              </p>
              <Link href="/sectors/agricultural-commodities" className="link-arrow">
                Full commodity list <Icon name="arrow" size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="commodity-grid">
            {commodities.map((c, i) => (
              <Link
                href={c.href ?? '/sectors/agricultural-commodities'}
                className="commodity reveal"
                key={c.id}
                style={{ ['--delay' as string]: `${i * 0.06}s` }}
              >
                <div className="commodity__img">
                  <img src={c.image} alt={c.name} loading="lazy" />
                </div>
                <div className="commodity__body">
                  <h3 className="commodity__name">{c.name}</h3>
                  <p className="commodity__spec">{c.spec}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Global reach ---------- */}
      <section className="section section--white">
        <div className="wrap">
          <div className="section-head section-head--center reveal">
            <p className="eyebrow">Global reach</p>
            <h2 className="h2">
              Trade lanes across <em>five regions.</em>
            </h2>
            <p className="lead" style={{ marginTop: 20 }}>
              We ship from Apapa, Tin Can Island and Onne to major ports in Europe, Asia, the Middle East and North
              America. Sea freight transit typically takes 18 to 28 days.
            </p>
          </div>
          <div className="region-grid">
            {regions.map((r, i) => (
              <div className="region reveal" key={r.name} style={{ ['--delay' as string]: `${i * 0.06}s` }}>
                <img src={r.image} alt="" loading="lazy" />
                <span className="region__role">{r.role}</span>
                <h3 className="region__name">{r.name}</h3>
                <p className="region__places">{r.places.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why Talcora ---------- */}
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Why Talcora</p>
            <h2 className="h2" style={{ marginBottom: 40 }}>
              Built on trust, <em>proven in every shipment.</em>
            </h2>
            <div className="values">
              {values.map((v, i) => (
                <div className="value" key={v.title}>
                  <div className="value__num">0{i + 1}</div>
                  <h3 className="value__title">{v.title}</h3>
                  <p className="value__text">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="media-tall media-tall--landscape reveal" style={{ ['--delay' as string]: '0.12s' }}>
            <img src="/img/handshake.jpg" alt="Talcora team agreeing terms with a trade partner" loading="lazy" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
