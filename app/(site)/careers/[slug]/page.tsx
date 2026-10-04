import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/site/PageHero'
import Icon from '@/components/site/Icon'
import ApplyForm from './ApplyForm'
import { company } from '@/lib/site'
import { getJob, openJobs } from '@/lib/jobs'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return openJobs.map(j => ({ slug: j.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const job = getJob((await params).slug)
  if (!job) return {}
  return {
    title: `${job.title} — ${job.location}`,
    description: job.summary,
    alternates: { canonical: `/careers/${job.slug}` },
  }
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default async function JobPage({ params }: { params: Promise<Params> }) {
  const job = getJob((await params).slug)
  if (!job) notFound()

  const office = company.offices.find(o => job.location.startsWith(o.city.split(',')[0]))
  const [city, country] = job.location.split(',').map(s => s.trim())

  // Structured data so the role can appear in Google's job search.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: [
      `<p>${job.summary}</p>`,
      `<h3>Responsibilities</h3><ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>`,
      `<h3>Requirements</h3><ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>`,
    ].join(''),
    datePosted: job.posted,
    ...(job.closes && { validThrough: `${job.closes}T23:59:59Z` }),
    employmentType: job.type.toUpperCase().replace('-', '_'),
    hiringOrganization: { '@type': 'Organization', name: company.name, sameAs: company.url, logo: `${company.url}/icon.svg` },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        ...(office && { streetAddress: office.address }),
        addressLocality: city,
        addressCountry: country,
      },
    },
  }

  const details = [
    { label: 'Department', value: job.department },
    { label: 'Location', value: job.location },
    { label: 'Job type', value: `${job.type} · ${job.workplace}` },
    { label: 'Posted', value: formatDate(job.posted) },
    ...(job.closes ? [{ label: 'Closing date', value: formatDate(job.closes) }] : []),
  ]

  const sections = [
    { title: 'What you will do', items: job.responsibilities },
    { title: 'What we are looking for', items: job.requirements },
    ...(job.niceToHave?.length ? [{ title: 'Nice to have', items: job.niceToHave }] : []),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={job.department}
        title={job.title}
        lead={job.summary}
        image="/img/meeting.jpg"
        crumbs={[{ label: 'Careers', href: '/careers' }, { label: job.title }]}
      >
        <div className="spec-chips">
          <span className="spec-chip">{job.location}</span>
          <span className="spec-chip">{job.type}</span>
          <span className="spec-chip">{job.workplace}</span>
        </div>
        <div className="hero__ctas" style={{ marginTop: 28 }}>
          <a href="#apply" className="btn btn--primary">
            Apply for this role <Icon name="arrow" size={18} strokeWidth={2} />
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="wrap sector-layout">
          <div>
            {sections.map(sec => (
              <div className="reveal" key={sec.title} style={{ marginBottom: 48 }}>
                <h2 className="h3" style={{ color: 'var(--ink)', marginBottom: 20 }}>
                  {sec.title}
                </h2>
                <ul className="checklist" style={{ margin: 0 }}>
                  {sec.items.map(item => (
                    <li key={item} style={{ fontWeight: 400 }}>
                      <span className="checklist__dot">
                        <Icon name="check" size={14} strokeWidth={2.6} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="panel reveal" id="apply" style={{ padding: 'clamp(24px, 4vw, 48px)', scrollMarginTop: 96 }}>
              <p className="eyebrow">Apply now</p>
              <h2 className="h3" style={{ color: 'var(--ink)', marginBottom: 8 }}>
                Apply for {job.title}
              </h2>
              <p style={{ color: 'var(--muted)', margin: '0 0 28px', fontSize: 15 }}>
                Fill in your details and attach your CV. We review every application and will contact shortlisted
                candidates.
              </p>
              <ApplyForm job={job.slug} />
            </div>
          </div>

          <aside className="sticky stack reveal" style={{ ['--delay' as string]: '0.1s' }}>
            <div className="panel panel--ink on-dark">
              <p className="eyebrow">Role details</p>
              <dl className="job-details">
                {details.map(d => (
                  <div key={d.label}>
                    <dt>{d.label}</dt>
                    <dd>{d.value}</dd>
                  </div>
                ))}
              </dl>
              <a href="#apply" className="btn btn--primary" style={{ width: '100%', marginTop: 28 }}>
                Apply now <Icon name="arrow" size={18} strokeWidth={2} />
              </a>
            </div>
            <Link href="/careers#open-positions" className="link-arrow">
              See all open positions <Icon name="arrow" size={16} strokeWidth={2} />
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}
