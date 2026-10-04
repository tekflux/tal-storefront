import Link from 'next/link'

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  crumbs = [],
  children,
}: {
  eyebrow: string
  title: React.ReactNode
  lead?: string
  image: string
  crumbs?: { label: string; href?: string }[]
  children?: React.ReactNode
}) {
  return (
    <section className="page-hero on-dark">
      <div className="page-hero__media">
        <img src={image} alt="" />
      </div>
      <div className="wrap">
        <div className="page-hero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {crumbs.map(c => (
              <span key={c.label} style={{ display: 'contents' }}>
                <span aria-hidden>/</span>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              </span>
            ))}
          </nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1">{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}
