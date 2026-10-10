import Link from 'next/link'
import Logo from './Logo'
import { company, sectorHref, siteHref, type Sector } from '@/lib/site'

// Footer for a sector subdomain: that sector's products and contact details only,
// with a single link back to the Talcora corporate site.
export default function SectorFooter({ sector }: { sector: Sector }) {
  const year = new Date().getFullYear()
  const home = sectorHref(sector)

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo href={home} name={sector.brand} />
            <p className="site-footer__about">{sector.summary}</p>
            <p style={{ marginTop: 22 }}>
              <a href={`mailto:${company.email}`} style={{ color: 'var(--white)', fontWeight: 500 }}>
                {company.email}
              </a>
            </p>
          </div>

          <div>
            <h4>Products</h4>
            <ul>
              {sector.products.map(p => (
                <li key={p.name}>
                  <Link href={`${home}#products`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{sector.brand}</h4>
            <ul>
              <li><Link href={`${home}#clients`}>Who we supply</Link></li>
              <li><Link href={`${home}#faqs`}>FAQs</Link></li>
              <li><Link href={`${home}#quote`}>Request a quote</Link></li>
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
          <span>
            {sector.brand} is part of <Link href={siteHref('/')}>Talcora</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
