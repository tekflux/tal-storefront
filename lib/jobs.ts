// Job adverts shown on /careers.
//
// To post a job: copy one of the entries below, give it a unique `slug`,
// fill in the details and set `published: true`.
// To close a job: set `published: false` (or delete the entry).
//
// NOTE: the roles below are starter examples written for Talcora. Review
// and edit them, or set `published: false`, before going live.

export type Job = {
  slug: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  workplace: 'On-site' | 'Hybrid' | 'Remote'
  posted: string // YYYY-MM-DD
  closes?: string // YYYY-MM-DD
  summary: string
  responsibilities: string[]
  requirements: string[]
  niceToHave?: string[]
  published: boolean
}

export const jobs: Job[] = [
  {
    slug: 'trade-sales-executive-london',
    title: 'Trade Sales Executive',
    department: 'Trade & Sales',
    location: 'London, United Kingdom',
    type: 'Full-time',
    workplace: 'Hybrid',
    posted: '2026-10-01',
    closes: '2026-11-15',
    summary:
      'Grow our buyer base in the UK and Europe for West African agricultural commodities, and manage trades from first enquiry through to delivery.',
    responsibilities: [
      'Identify and develop relationships with importers, processors and distributors',
      'Prepare quotations and negotiate contracts on FOB, CFR and CIF terms',
      'Coordinate with our Kano team on availability, specifications and shipment dates',
      'Keep buyers updated through inspection, documentation and shipping',
      'Maintain an accurate pipeline and report on sales performance',
    ],
    requirements: [
      '2+ years in B2B sales, ideally in commodities, food ingredients or international trade',
      'Working knowledge of Incoterms and export documentation',
      'Confident communicator, comfortable negotiating with senior buyers',
      'Right to work in the United Kingdom',
    ],
    niceToHave: ['Experience with cocoa, cashew, sesame or other soft commodities', 'A second European language'],
    published: true,
  },
  {
    slug: 'procurement-quality-officer-kano',
    title: 'Procurement & Quality Officer',
    department: 'Sourcing & Quality',
    location: 'Kano, Nigeria',
    type: 'Full-time',
    workplace: 'On-site',
    posted: '2026-10-01',
    closes: '2026-11-15',
    summary:
      'Source agricultural commodities from farmers and aggregators across Northern Nigeria and make sure every lot meets buyer specification before it ships.',
    responsibilities: [
      'Build and manage a network of reliable farmers, aggregators and processors',
      'Inspect, sample and grade produce for moisture, purity and quality',
      'Coordinate cleaning, drying, bagging and warehouse storage',
      'Work with SGS, Bureau Veritas and other inspectors on pre-shipment checks',
      'Keep accurate purchase, stock and quality records',
    ],
    requirements: [
      'HND or degree in Agriculture, Food Science or a related field',
      '2+ years in commodity procurement, quality control or warehousing',
      'Good knowledge of local markets around Kano and Northern Nigeria',
      'Fluent in English and Hausa',
    ],
    niceToHave: ['Experience with sesame, ginger, hibiscus or soybeans'],
    published: true,
  },
  {
    slug: 'logistics-documentation-coordinator-kano',
    title: 'Logistics & Documentation Coordinator',
    department: 'Logistics & Documentation',
    location: 'Kano, Nigeria',
    type: 'Full-time',
    workplace: 'On-site',
    posted: '2026-10-01',
    closes: '2026-11-15',
    summary:
      'Plan and track export shipments from warehouse to port, and prepare a complete, accurate document set for every container.',
    responsibilities: [
      'Book haulage and containers and coordinate loading at warehouse and port',
      'Prepare commercial invoices, packing lists, certificates of origin and phytosanitary applications',
      'Liaise with shipping lines, freight forwarders, NEPC and NAQS',
      'Track shipments and keep buyers and the sales team updated',
    ],
    requirements: [
      '2+ years in freight forwarding, shipping or export documentation',
      'Working knowledge of Nigerian export procedures and port operations',
      'Highly organised with strong attention to detail',
    ],
    published: true,
  },
]

export const openJobs = jobs.filter(j => j.published)

export function getJob(slug: string) {
  return openJobs.find(j => j.slug === slug)
}
