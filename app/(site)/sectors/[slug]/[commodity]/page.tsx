import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/site/PageHero'
import CtaBand from '@/components/site/CtaBand'
import Icon from '@/components/site/Icon'
import { getProduct, PRODUCTS } from '@/lib/agrocomm'

type Params = { slug: string; commodity: string }

const SECTOR = 'agricultural-commodities'

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return PRODUCTS.map(p => ({ slug: SECTOR, commodity: p.id }))
}

async function load(params: Promise<Params>) {
  const { slug, commodity } = await params
  return slug === SECTOR ? getProduct(commodity) : undefined
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const product = await load(params)
  if (!product) return {}
  return {
    title: `${product.name} Export`,
    description: `${product.tagline}. How Talcora sources, processes, grades and ships ${product.name.toLowerCase()} from West Africa.`,
    alternates: { canonical: `/sectors/${SECTOR}/${product.id}` },
  }
}

export default async function CommodityPage({ params }: { params: Promise<Params> }) {
  const product = await load(params)
  if (!product) notFound()

  return (
    <>
      <PageHero
        eyebrow={`${product.category} · Export`}
        title={
          <>
            {product.name}: <em>from farm to port.</em>
          </>
        }
        lead={`${product.tagline}. Follow each stage of how we source, process, grade and ship ${product.name.toLowerCase()} to buyers worldwide.`}
        image="/img/cocoa-farm.jpg"
        crumbs={[
          { label: 'What We Trade', href: '/sectors' },
          { label: 'Agricultural Commodities', href: `/sectors/${SECTOR}` },
          { label: product.name },
        ]}
      >
        <div className="spec-chips">
          {[...product.specs, ...product.certifications].map(s => (
            <span className="spec-chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {product.process.map((stage, i) => (
            <article className="process-block" key={stage.step}>
              <div className="reveal">
                <p className="eyebrow">
                  Stage 0{i + 1} · {stage.step}
                </p>
                <h2 className="h3" style={{ color: 'var(--ink)', fontSize: 'clamp(26px, 2.4vw, 34px)', marginBottom: 24 }}>
                  {stage.title}
                </h2>
                <div className="prose">
                  {stage.body.split('\n\n').map(p => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </div>
              <figure className="process-block__media reveal" style={{ margin: 0, ['--delay' as string]: '0.1s' }}>
                {stage.images.slice(0, 3).map((src, j) => (
                  <img key={src} src={src} alt={j === 0 ? stage.imageCaption : ''} loading="lazy" />
                ))}
                <figcaption>{stage.imageCaption}</figcaption>
              </figure>
            </article>
          ))}

          <div style={{ marginTop: 24 }}>
            <Link href={`/sectors/${SECTOR}`} className="link-arrow">
              Back to agricultural commodities <Icon name="arrow" size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Ready to source <em>{product.name.toLowerCase()}?</em>
          </>
        }
        lead="Tell us your grade, volume, packaging and destination port. We will come back with availability, pricing and shipment dates."
      />
    </>
  )
}
