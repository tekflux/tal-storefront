// Single source of truth for Talcora brand content.
// Update company details, sectors, services and markets here.

export const company = {
  name: 'Talcora',
  legalName: 'Talcora',
  domain: 'talcoraexim.com',
  url: 'https://talcoraexim.com',
  email: 'info@talcoraexim.com',
  tagline: 'Global import & export, done properly.',
  description:
    'Talcora is an international import and export company sourcing, inspecting and delivering quality goods between Africa, Europe, the Middle East, Asia and the Americas.',
  offices: [
    {
      id: 'uk',
      label: 'Head Office',
      city: 'London, United Kingdom',
      address: '167–169 Great Portland Street, London W1W 5PF',
      phone: '+44 7926 534581',
      phoneHref: 'tel:+447926534581',
      mapQuery: '167-169 Great Portland Street, London, W1W 5PF',
    },
    {
      id: 'ng',
      label: 'West Africa Office',
      city: 'Kano, Nigeria',
      address: 'Dawanau International Market, Kano, Nigeria',
      phone: '+234 813 969 1739',
      phoneHref: 'tel:+2348139691739',
      mapQuery: 'Dawanau International Market, Kano, Nigeria',
    },
  ],
  // Add profile URLs once the Talcora accounts exist; empty entries are hidden.
  socials: [] as { label: string; href: string }[],
}

export const stats = [
  { value: 15, suffix: '+', label: 'Export markets served' },
  { value: 500, suffix: '+', label: 'Clients supplied' },
  { value: 98, suffix: '%', label: 'On-time fulfilment' },
  { value: 6, suffix: '', label: 'Product sectors' },
]

export const credentials = [
  'NEPC-registered exporter',
  'SGS & Bureau Veritas inspection',
  'UK-registered trading company',
  'FOB · CFR · CIF terms',
  'Full export documentation',
]

export type TradeDirection = 'Export' | 'Import' | 'Import & Export'

export type Sector = {
  slug: string
  name: string
  short: string
  direction: TradeDirection
  image: string
  summary: string
  intro: string[]
  products: { name: string; detail: string }[]
  capabilities: string[]
}

export const sectors: Sector[] = [
  {
    slug: 'agricultural-commodities',
    name: 'Agricultural Commodities',
    short: 'Cocoa, cashew, sesame, ginger, hibiscus, soybeans and shea, sourced at origin.',
    direction: 'Export',
    image: '/img/agro.jpg',
    summary:
      'Premium West African agricultural commodities, sourced from trusted producer networks and graded to buyer specification.',
    intro: [
      'We work directly with growers, aggregators and processors across Nigeria and the wider West African region to secure dependable, traceable supply.',
      'Every lot is cleaned, dried, graded and inspected before it leaves origin, then packed and documented to meet the import requirements of the destination market.',
    ],
    products: [
      { name: 'Cocoa beans', detail: 'Fermented & sun-dried, moisture ≤7%' },
      { name: 'Cashew nuts', detail: 'RCN and W180 / W240 / W320 kernels' },
      { name: 'Sesame seeds', detail: 'White & mixed, purity up to 99.95%' },
      { name: 'Ginger', detail: 'Split dried and whole, high gingerol' },
      { name: 'Hibiscus flower', detail: 'Dried calyces, hand-sorted' },
      { name: 'Soybeans', detail: 'Non-GMO, protein 38–42%' },
      { name: 'Shea nuts & butter', detail: 'Grade A, refined and unrefined' },
      { name: 'Grains & pulses', detail: 'Maize, sorghum and more on request' },
    ],
    capabilities: [
      'Farm-gate and aggregator sourcing',
      'Cleaning, drying, sorting and grading',
      'Third-party inspection at origin',
      'Phytosanitary and origin certification',
      'Jute, PP and bulk container packing',
    ],
  },
  {
    slug: 'food-consumer-goods',
    name: 'Food & Consumer Goods',
    short: 'Staple foods, packaged goods and authentic African food products.',
    direction: 'Import & Export',
    image: '/img/food-market.jpg',
    summary:
      'Staple foods, packaged goods and authentic African food products for wholesalers, retailers and distributors.',
    intro: [
      'We supply authentic African food products to retailers, distributors and online grocers across the UK, Europe and beyond, and import staple foods and consumer goods into West Africa.',
      'Our team manages supplier vetting, labelling compliance, shelf-life planning and consolidated shipping so your stock arrives ready to sell.',
    ],
    products: [
      { name: 'Staple foods', detail: 'Rice, sugar, flour and edible oils' },
      { name: 'African specialty foods', detail: 'Flours, spices, dried and packaged goods' },
      { name: 'Packaged foods & beverages', detail: 'Branded and private-label lines' },
      { name: 'Household & personal care', detail: 'FMCG for retail and wholesale' },
    ],
    capabilities: [
      'Wholesale and retail supply programmes',
      'Supplier vetting and product sampling',
      'Labelling and food-safety documentation',
      'Mixed-load and consolidated shipments',
    ],
  },
  {
    slug: 'building-materials',
    name: 'Industrial & Building Materials',
    short: 'Steel, cement, tiles, roofing, fittings and hardware for projects.',
    direction: 'Import',
    image: '/img/trucking.jpg',
    summary:
      'Construction and industrial materials sourced from vetted manufacturers for contractors, developers and distributors.',
    intro: [
      'We procure construction and industrial materials from vetted manufacturers in Europe, Asia and the Middle East, consolidating orders to keep landed costs down.',
      'Pre-shipment inspection, standards conformity and customs documentation are handled end to end, so materials arrive on site to specification and on schedule.',
    ],
    products: [
      { name: 'Steel & metals', detail: 'Rebar, sections, sheets and pipes' },
      { name: 'Cement & aggregates', detail: 'Bagged and bulk supply' },
      { name: 'Tiles & finishes', detail: 'Ceramic, porcelain and sanitaryware' },
      { name: 'Roofing & cladding', detail: 'Sheets, panels and accessories' },
      { name: 'Fittings & hardware', detail: 'Plumbing, electrical and fixings' },
    ],
    capabilities: [
      'Manufacturer sourcing and price benchmarking',
      'Pre-shipment inspection and conformity',
      'Project-based scheduled deliveries',
      'Customs clearance support',
    ],
  },
  {
    slug: 'machinery-equipment',
    name: 'Machinery & Equipment',
    short: 'Agro-processing, construction and material-handling equipment.',
    direction: 'Import',
    image: '/img/warehouse.jpg',
    summary:
      'Processing, construction and material-handling equipment, with spare parts and after-sales coordination.',
    intro: [
      'From agro-processing lines to generators and warehouse equipment, we source machinery that matches your capacity, power and budget requirements.',
      'We coordinate factory inspections, crating, heavy-lift freight and installation support with the manufacturer, and keep spare-parts supply flowing after delivery.',
    ],
    products: [
      { name: 'Agro-processing machinery', detail: 'Cleaning, hulling, milling and packing lines' },
      { name: 'Construction equipment', detail: 'Mixers, compactors and site plant' },
      { name: 'Material handling', detail: 'Forklifts, racking and conveyors' },
      { name: 'Generators & power units', detail: 'Diesel and gas gensets' },
      { name: 'Spare parts', detail: 'OEM and approved equivalents' },
    ],
    capabilities: [
      'Technical specification and supplier matching',
      'Factory acceptance inspection',
      'Out-of-gauge and break-bulk freight',
      'Installation and after-sales coordination',
    ],
  },
  {
    slug: 'energy-power',
    name: 'Energy & Power Solutions',
    short: 'Solar, storage and electrical infrastructure equipment.',
    direction: 'Import',
    image: '/img/energy.jpg',
    summary:
      'Solar, storage and electrical equipment for commercial, industrial and off-grid power projects.',
    intro: [
      'We source tier-one solar modules, inverters, batteries and electrical infrastructure for installers, developers and commercial users.',
      'Our team verifies certifications and warranties, manages shipping of sensitive equipment and supports documentation for duty and standards compliance.',
    ],
    products: [
      { name: 'Solar modules', detail: 'Mono PERC and bifacial panels' },
      { name: 'Inverters & storage', detail: 'Hybrid inverters and lithium batteries' },
      { name: 'Electrical infrastructure', detail: 'Transformers, cables and switchgear' },
      { name: 'Mounting & balance of system', detail: 'Structures, combiners and protection' },
    ],
    capabilities: [
      'Certification and warranty verification',
      'Project bills of materials',
      'Careful handling of sensitive cargo',
      'Standards and duty documentation',
    ],
  },
  {
    slug: 'healthcare-supplies',
    name: 'Healthcare & Laboratory Supplies',
    short: 'Medical consumables and laboratory equipment from licensed makers.',
    direction: 'Import',
    image: '/img/quality-lab.jpg',
    summary:
      'Medical consumables, laboratory equipment and health products from licensed manufacturers.',
    intro: [
      'We source medical consumables, diagnostic and laboratory equipment from licensed manufacturers for hospitals, clinics, laboratories and distributors.',
      'Product registration documents, batch traceability and appropriate storage in transit are planned from the outset.',
    ],
    products: [
      { name: 'Medical consumables', detail: 'Gloves, syringes, dressings and PPE' },
      { name: 'Laboratory equipment', detail: 'Analysers, glassware and reagents' },
      { name: 'Hospital equipment', detail: 'Beds, monitors and furniture' },
    ],
    capabilities: [
      'Licensed-manufacturer sourcing',
      'Registration document support',
      'Batch and expiry traceability',
      'Temperature-aware logistics',
    ],
  },
]

export function getSector(slug: string) {
  return sectors.find(s => s.slug === slug)
}

export type ServiceIcon =
  | 'export'
  | 'import'
  | 'ship'
  | 'document'
  | 'inspect'
  | 'finance'

export const services: {
  id: string
  icon: ServiceIcon
  title: string
  description: string
  points: string[]
}[] = [
  {
    id: 'export',
    icon: 'export',
    title: 'Export Trading',
    description:
      'We source, process and export quality goods from West Africa to buyers in Europe, Asia, the Middle East and the Americas.',
    points: ['Origin sourcing & aggregation', 'Grading to buyer specification', 'FOB, CFR and CIF contracts'],
  },
  {
    id: 'import',
    icon: 'import',
    title: 'Import & Procurement',
    description:
      'We find, vet and buy from manufacturers worldwide on your behalf, then manage every step to delivery.',
    points: ['Supplier search & vetting', 'Price negotiation', 'Order consolidation'],
  },
  {
    id: 'logistics',
    icon: 'ship',
    title: 'Freight & Logistics',
    description:
      'Sea freight (FCL and LCL), air freight and road haulage with established carriers and real-time shipment updates.',
    points: ['Container booking & stuffing', 'Port & warehouse handling', 'Door-to-door delivery'],
  },
  {
    id: 'documentation',
    icon: 'document',
    title: 'Documentation & Compliance',
    description:
      'Every certificate, permit and declaration prepared correctly the first time, for the origin and destination country.',
    points: ['Certificates of origin', 'Phytosanitary & fumigation', 'Bills of lading & customs'],
  },
  {
    id: 'inspection',
    icon: 'inspect',
    title: 'Quality Inspection',
    description:
      'Independent inspection and grading through SGS, Bureau Veritas and other recognised bodies before goods ship.',
    points: ['Pre-shipment inspection', 'Lab analysis & cut tests', 'Weight & quantity checks'],
  },
  {
    id: 'finance',
    icon: 'finance',
    title: 'Trade Finance Facilitation',
    description:
      'We structure secure payment terms that protect both sides of the trade, working alongside your bank.',
    points: ['Letters of credit', 'Cash against documents', 'Escrow and staged payments'],
  },
]

export const process = [
  {
    title: 'Enquiry & specification',
    body: 'Share the product, grade, volume, destination and timeline. We confirm specifications and requirements.',
  },
  {
    title: 'Sourcing & quotation',
    body: 'We source from vetted suppliers and send a clear quotation with Incoterms, lead time and samples where needed.',
  },
  {
    title: 'Contract & payment terms',
    body: 'A written contract with agreed payment structure (LC, CAD or staged), so both sides are protected.',
  },
  {
    title: 'Inspection & documentation',
    body: 'Independent quality inspection, then the full export and import document set prepared for your market.',
  },
  {
    title: 'Shipment & delivery',
    body: 'Container loading, tracking and updates until goods arrive at your port or door.',
  },
]

export const regions = [
  {
    name: 'West Africa',
    role: 'Origin & operations hub',
    image: '/img/region-westafrica.jpg',
    places: ['Nigeria', 'Ghana', "Côte d'Ivoire", 'Benin'],
  },
  {
    name: 'Europe',
    role: 'Headquarters & key buyers',
    image: '/img/region-europe.jpg',
    places: ['United Kingdom', 'Netherlands', 'Germany', 'Belgium'],
  },
  {
    name: 'Middle East',
    role: 'Trade hubs & re-export',
    image: '/img/region-middleeast.jpg',
    places: ['UAE', 'Saudi Arabia', 'Turkey', 'Qatar'],
  },
  {
    name: 'Asia',
    role: 'Processing & manufacturing',
    image: '/img/region-asia.jpg',
    places: ['China', 'India', 'Vietnam', 'Singapore'],
  },
  {
    name: 'North America',
    role: 'Growing specialty demand',
    image: '/img/region-northamerica.jpg',
    places: ['United States', 'Canada'],
  },
]

export const commodities: { id: string; name: string; spec: string; image: string; href?: string }[] = [
  { id: 'cocoa', name: 'Cocoa Beans', spec: 'Moisture ≤7% · Fat 55–58%', image: '/img/commodity-cocoa.jpg', href: '/sectors/agricultural-commodities/cocoa' },
  { id: 'cashew', name: 'Cashew Nuts', spec: 'RCN · W180 / W240 / W320', image: '/img/commodity-cashew.jpg' },
  { id: 'sesame', name: 'Sesame Seeds', spec: 'Purity 99.95% · Oil 50–55%', image: '/img/commodity-sesame.jpg' },
  { id: 'ginger', name: 'Dried Ginger', spec: 'Gingerol 1.8–2.5% · Moisture ≤12%', image: '/img/commodity-ginger.jpg' },
  { id: 'hibiscus', name: 'Hibiscus Flower', spec: 'Dried calyces · Hand-sorted', image: '/img/commodity-hibiscus.jpg' },
  { id: 'soybeans', name: 'Soybeans', spec: 'Non-GMO · Protein 38–42%', image: '/img/commodity-soybeans.jpg' },
]

export const values = [
  {
    title: 'Integrity in every contract',
    body: 'Clear specifications, honest quotations and written terms. What we agree is what we deliver.',
  },
  {
    title: 'Quality verified, not promised',
    body: 'Independent inspection before shipment, with reports and certificates shared with you.',
  },
  {
    title: 'Two continents, one team',
    body: 'Offices in London and Kano give you a partner on the ground at origin and in your market.',
  },
  {
    title: 'Long-term relationships',
    body: 'Dedicated account support and consistent supply, built for repeat trade rather than one-off deals.',
  },
]

export const navigation = [
  { label: 'About', href: '/about' },
  {
    label: 'What We Trade',
    href: '/sectors',
    children: sectors.map(s => ({ label: s.name, href: `/sectors/${s.slug}`, note: s.direction })),
  },
  { label: 'Services', href: '/services' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]
