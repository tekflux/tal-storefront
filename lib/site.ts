// Single source of truth for Talcora brand content.
// Update company details, sectors, services and markets here.

import { onLiveSite } from './env'

export const company = {
  name: 'Talcora',
  legalName: 'Talcora',
  domain: 'talcoraexim.com',
  url: 'https://talcoraexim.com',
  email: 'info@talcoraexim.com',
  tagline: 'Agro export, energy, construction and industrial supply.',
  description:
    'Talcora exports West African agricultural commodities and supplies energy, construction, machinery, food products and general supplies to businesses across Africa, Europe, the Middle East and Asia.',
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
  // Each sector is served on its own subdomain, e.g. energy.talcoraexim.com.
  subdomain: string
  name: string
  // Title and description shown in Google results for the sector's subdomain.
  seoTitle: string
  seoDescription: string
  keywords: string[]
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
    subdomain: 'agro',
    name: 'Agricultural Commodities',
    seoTitle: 'Cocoa, Cashew, Sesame & Ginger Exporter from Nigeria | Talcora Agro',
    seoDescription:
      'Export-grade cocoa beans, cashew nuts, sesame seeds, dried ginger, hibiscus, soybeans and shea from Nigeria and West Africa. Inspected at origin, shipped FOB, CFR or CIF.',
    keywords: [
      'cocoa beans exporter Nigeria',
      'cashew nut supplier',
      'sesame seed exporter',
      'dried split ginger exporter',
      'hibiscus flower supplier',
      'soybean exporter Nigeria',
      'shea butter supplier',
      'agro commodity export West Africa',
    ],
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
    subdomain: 'foods',
    name: 'Food & Consumer Goods',
    seoTitle: 'African Food Products & Staple Foods Wholesale Supplier | Talcora Foods',
    seoDescription:
      'Wholesale African food products, staple foods and FMCG for retailers, distributors and online grocers in the UK, Europe and West Africa. Vetted suppliers, compliant labelling.',
    keywords: [
      'African food wholesale supplier UK',
      'African food products distributor',
      'staple foods supplier Nigeria',
      'rice sugar flour edible oil importer',
      'FMCG import West Africa',
    ],
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
    slug: 'general-supply',
    subdomain: 'supply',
    name: 'General Supply',
    seoTitle: 'General Supply & Procurement Company, UK and Nigeria | Talcora Supply',
    seoDescription:
      'One supplier for the goods your business runs on: industrial consumables, packaging, office and IT equipment, vehicle parts and hardware, sourced from vetted manufacturers and delivered.',
    keywords: [
      'general supply company',
      'general contractor supplies Nigeria',
      'procurement company UK',
      'industrial consumables supplier',
      'packaging materials supplier',
      'office and IT equipment supplier',
    ],
    short: 'Industrial consumables, packaging, office equipment, parts and hardware from one supplier.',
    direction: 'Import & Export',
    image: '/img/trucking.jpg',
    summary:
      'Everyday goods and consumables for businesses, institutions and contractors, sourced from vetted manufacturers and delivered as one consolidated order.',
    intro: [
      'Not everything fits a single category. We take on general supply contracts for businesses, government bodies, schools and contractors, sourcing whatever is on the list from vetted manufacturers and distributors.',
      'Orders are consolidated, checked against specification before shipment and delivered with full documentation, so you deal with one supplier and one invoice instead of many.',
    ],
    products: [
      { name: 'Industrial consumables', detail: 'Lubricants, chemicals, tools and workwear' },
      { name: 'Packaging materials', detail: 'Bags, cartons, pallets and stretch film' },
      { name: 'Office & IT equipment', detail: 'Computers, printers, furniture and stationery' },
      { name: 'Vehicle & machinery parts', detail: 'Tyres, filters, batteries and spares' },
      { name: 'Hardware & electrical', detail: 'Fixings, cables, lighting and fittings' },
      { name: 'Anything else on your list', detail: 'Tell us the item and quantity' },
    ],
    capabilities: [
      'Sourcing against your item list or tender',
      'Price benchmarking across suppliers',
      'Consolidated shipping and single invoicing',
      'Delivery to your warehouse or site',
    ],
  },
  {
    slug: 'machinery-equipment',
    subdomain: 'machinery',
    name: 'Machinery & Equipment',
    seoTitle: 'Agro-Processing Machinery, Generators & Forklifts Supplier | Talcora',
    seoDescription:
      'Agro-processing lines, construction plant, forklifts, generators and spare parts sourced from vetted manufacturers, with factory inspection, freight and after-sales support.',
    keywords: [
      'agro processing machinery supplier',
      'generator supplier Nigeria',
      'forklift supplier',
      'construction equipment importer',
      'machinery spare parts supplier',
    ],
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
    subdomain: 'energy',
    name: 'Energy & Power Solutions',
    seoTitle: 'Solar Panels, Inverters & Lithium Batteries Supplier | Talcora Energy',
    seoDescription:
      'Tier-one solar panels, hybrid inverters, lithium batteries, transformers and cables for installers, developers and businesses. Certified equipment, shipped to site.',
    keywords: [
      'solar panel supplier Nigeria',
      'solar inverter supplier',
      'lithium battery supplier',
      'solar equipment importer Africa',
      'transformer and cable supplier',
    ],
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
    slug: 'construction',
    subdomain: 'construction',
    name: 'Construction & Infrastructure',
    seoTitle: 'Construction Project Procurement & Site Supply | Talcora Construction',
    seoDescription:
      'Procurement and delivery for construction and infrastructure projects: prefabricated buildings, formwork, scaffolding, civil works materials and MEP packages, phased to your programme.',
    keywords: [
      'construction procurement company',
      'construction materials supplier Nigeria',
      'prefabricated buildings supplier',
      'scaffolding and formwork supplier',
      'infrastructure project supply',
    ],
    short: 'Project procurement, prefabricated buildings, formwork and civil works supply.',
    direction: 'Import',
    image: '/img/construction.jpg',
    summary:
      'Procurement and site delivery for contractors, developers and infrastructure projects, from a single package to a full bill of quantities.',
    intro: [
      'We act as the procurement arm for contractors and developers, sourcing everything a project needs from vetted manufacturers and consolidating it into scheduled deliveries.',
      'Orders are phased to your construction programme, inspected before shipment and cleared through customs, so materials reach site when the work needs them.',
    ],
    products: [
      { name: 'Building materials', detail: 'Steel, cement, tiles and roofing sheets' },
      { name: 'Prefabricated & modular buildings', detail: 'Site offices, housing units and steel structures' },
      { name: 'Formwork & scaffolding', detail: 'Steel, aluminium and system formwork' },
      { name: 'Civil & road works', detail: 'Bitumen, culverts, geotextiles and drainage' },
      { name: 'MEP packages', detail: 'Mechanical, electrical and plumbing supply' },
      { name: 'Site safety & PPE', detail: 'Helmets, harnesses, barriers and signage' },
    ],
    capabilities: [
      'Bill-of-quantities procurement',
      'Deliveries phased to the project programme',
      'Pre-shipment inspection and conformity',
      'Customs clearance and delivery to site',
    ],
  },
]

export function getSector(slug: string) {
  return sectors.find(s => s.slug === slug)
}

// Sector pages live on subdomains on the live site (energy.talcoraexim.com).
// In development they stay on localhost under /sectors/<slug>.

export function sectorOrigin(sector: Sector) {
  return `https://${sector.subdomain}.${company.domain}`
}

/** Link to a sector's home page, or to a page inside it (e.g. 'cocoa'). */
export function sectorHref(sector: Sector, page?: string) {
  if (onLiveSite) return page ? `${sectorOrigin(sector)}/${page}` : sectorOrigin(sector)
  return page ? `/sectors/${sector.slug}/${page}` : `/sectors/${sector.slug}`
}

/** Link to a page on the corporate site. Absolute on the live site so it also works from subdomains. */
export function siteHref(path: string) {
  return onLiveSite ? `${company.url}${path}` : path
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

// `page` is the commodity's page on the agro subdomain, where one exists.
export const commodities: { id: string; name: string; spec: string; image: string; page?: string }[] = [
  { id: 'cocoa', name: 'Cocoa Beans', spec: 'Moisture ≤7% · Fat 55–58%', image: '/img/commodity-cocoa.jpg', page: 'cocoa' },
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
    children: sectors.map(s => ({ label: s.name, href: sectorHref(s) })),
  },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]
