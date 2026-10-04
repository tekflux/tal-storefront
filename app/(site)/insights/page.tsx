import type { Metadata } from 'next'
import PageHero from '@/components/site/PageHero'
import CtaBand from '@/components/site/CtaBand'
import InsightCard from '@/components/site/InsightCard'
import { insights } from '@/lib/insights'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Trade guides, compliance checklists and commodity insights from the Talcora trade desk, for importers and exporters.',
  alternates: { canonical: '/insights' },
}

export default function InsightsPage() {
  const [featured, ...rest] = insights

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Trade knowledge from <em>our desk to yours.</em>
          </>
        }
        lead="Practical guides on Incoterms, export documentation, commodity quality and the markets we trade in."
        image="/img/port-aerial.jpg"
        crumbs={[{ label: 'Insights' }]}
      />

      <section className="section">
        <div className="wrap">
          {featured ? (
            <>
              <InsightCard article={featured} featured />
              {rest.length > 0 && (
                <div className="insight-grid" style={{ marginTop: 32 }}>
                  {rest.map(a => (
                    <InsightCard key={a.slug} article={a} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="lead text-center">New articles are on the way. Check back soon.</p>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
