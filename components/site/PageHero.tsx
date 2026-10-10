import Link from 'next/link'
import { siteHref } from '@/lib/site'

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumbs = [],
  home = { label: 'Home', href: siteHref('/') },
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: string
  image: string
  crumbs?: { label: string; href?: string }[]
  // First breadcrumb; sector subdomains point it at their own home page.
  home?: { label: string; href: string }
  children?: React.ReactNode
}) {
  return (
    <section className="page-hero on-dark">
      <div className="page-hero__media">
        <img src={image} alt="" />
      </div>
      <div className="wrap">
        <div className="page-hero__inner">
          {crumbs.length > 0 && (
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href={home.href}>{home.label}</Link>
              {crumbs.map(c => (
                <span key={c.label} style={{ display: 'contents' }}>
                  <span aria-hidden>/</span>
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
                </span>
              ))}
            </nav>
          )}
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1">{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
