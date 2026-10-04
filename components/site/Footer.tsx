import Link from 'next/link'
import Logo from './Logo'
import { company, sectors } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p className="site-footer__about">{company.description}</p>
            <p style={{ marginTop: 22 }}>
              <a href={`mailto:${company.email}`} style={{ color: 'var(--white)', fontWeight: 500 }}>
                {company.email}
              </a>
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              {company.socials.map(s => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>What we trade</h4>
            <ul>
              {sectors.map(s => (
                <li key={s.slug}>
                  <Link href={`/sectors/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Offices</h4>
            {company.offices.map(o => (
              <address key={o.id}>
                <strong>{o.city}</strong>
                {o.address}
                <br />
                <a href={o.phoneHref}>{o.phone}</a>
              </address>
            ))}
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} {company.legalName}. All rights reserved.</span>
          <span>{company.domain}</span>
        </div>
      </div>
    </footer>
  )
}
