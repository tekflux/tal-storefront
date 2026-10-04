import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/site/PageHero'
import CtaBand from '@/components/site/CtaBand'
import InsightCard from '@/components/site/InsightCard'
import Icon from '@/components/site/Icon'
import { company } from '@/lib/site'
import { formatDate, getInsight, insights } from '@/lib/insights'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return insights.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const article = getInsight((await params).slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      images: [{ url: article.image }],
    },
  }
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const article = getInsight((await params).slug)
  if (!article) notFound()

  const related = insights.filter(a => a.slug !== article.slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${company.url}${article.image}`,
    datePublished: article.date,
    author: { '@type': 'Organization', name: article.author, url: company.url },
    publisher: { '@id': `${company.url}/#organization` },
    mainEntityOfPage: `${company.url}/insights/${article.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        lead={article.description}
        image={article.image}
        crumbs={[{ label: 'Insights', href: '/insights' }, { label: article.title }]}
      >
        <div className="article-meta">
          <span>{article.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden>·</span>
          <span>{article.readingMinutes} min read</span>
        </div>
      </PageHero>

      <section className="section section--white">
        <div className="wrap">
          <article className="article" dangerouslySetInnerHTML={{ __html: article.html }} />
          <div className="article" style={{ marginTop: 48 }}>
            <Link href="/insights" className="link-arrow">
              All insights <Icon name="arrow" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head reveal">
              <div>
                <p className="eyebrow">Keep reading</p>
                <h2 className="h2">
                  More <em>insights.</em>
                </h2>
              </div>
            </div>
            <div className="insight-grid">
              {related.map(a => (
                <InsightCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
