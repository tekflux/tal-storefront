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
  // Name the sector trades under on its subdomain, e.g. 'Talcora Energy'.
  brand: string
  audiences: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
  // Example shown in the quote form's subject field.
  quoteExample: string
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
    brand: 'Talcora Agro',
    quoteExample: 'e.g. 2 × 40ft sesame seeds, CIF Rotterdam',
    audiences: [
      { title: 'Processors & manufacturers', body: 'Chocolate makers, oil mills, spice processors and food manufacturers buying to a fixed specification.' },
      { title: 'Importers & trading houses', body: 'Commodity importers and traders in Europe, Asia, the Middle East and North America.' },
      { title: 'Wholesalers & distributors', body: 'Distributors supplying the ingredient, health-food and specialty food markets.' },
    ],
    faqs: [
      {
        q: 'What is your minimum order?',
        a: 'Most commodities ship in full 20ft or 40ft containers. Tell us the volume you need and we will confirm what we can supply.',
      },
      {
        q: 'Which Incoterms do you ship on?',
        a: 'FOB, CFR and CIF from Apapa, Tin Can Island and Onne. Sea freight to major ports in Europe, Asia, the Middle East and North America typically takes 18 to 28 days.',
      },
      {
        q: 'How is quality checked?',
        a: 'Every lot is cleaned, dried, graded and checked at origin, then inspected by SGS, Bureau Veritas or another recognised body before it ships. You receive the reports and certificates.',
      },
      {
        q: 'Which documents come with a shipment?',
        a: 'Certificate of origin, phytosanitary and fumigation certificates, the inspection report, bill of lading, commercial invoice and packing list, plus anything your market requires.',
      },
      {
        q: 'Can I get samples first?',
        a: 'Yes. We can send samples of most commodities before you commit to an order.',
      },
    ],
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
    brand: 'Talcora Foods',
    quoteExample: 'e.g. Mixed pallet of African flours and spices, delivered London',
    audiences: [
      { title: 'Retailers & online grocers', body: 'Shops, supermarkets and online grocers stocking African food lines in the UK and Europe.' },
      { title: 'Wholesalers & distributors', body: 'Cash-and-carry and distribution businesses buying by the pallet or container.' },
      { title: 'Importers in West Africa', body: 'Businesses importing rice, sugar, flour, edible oils and household goods into West Africa.' },
    ],
    faqs: [
      {
        q: 'Do you supply African food products in the UK?',
        a: 'Yes. Our head office is in London, and we supply African flours, spices and packaged foods to retailers, wholesalers and online grocers in the UK and Europe.',
      },
      {
        q: 'Can you meet UK and EU labelling rules?',
        a: 'We check labelling, ingredients and food-safety documents against the destination market before goods ship, so stock arrives ready to sell.',
      },
      {
        q: 'Can I order several products in one shipment?',
        a: 'Yes. We consolidate mixed loads so several product lines can travel in one container.',
      },
      {
        q: 'Do you offer private-label products?',
        a: 'We supply both branded and private-label lines. Tell us the product and volumes and we will confirm the options.',
      },
    ],
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
    brand: 'Talcora Supply',
    quoteExample: 'e.g. IT equipment and office consumables for a new branch',
    audiences: [
      { title: 'Businesses & factories', body: 'Operations that need consumables, packaging and spare parts kept in stock.' },
      { title: 'Institutions & public bodies', body: 'Schools, hospitals and government bodies buying against an item list or tender.' },
      { title: 'Contractors', body: 'Contractors equipping new sites and offices for a project.' },
    ],
    faqs: [
      {
        q: 'What can you supply?',
        a: 'Industrial consumables, packaging, office and IT equipment, vehicle and machinery parts, hardware and electrical goods. If an item is not listed, send it to us and we will confirm whether we can source it.',
      },
      {
        q: 'Can you quote against a tender or item list?',
        a: 'Yes. Send the list or tender document and we will price each line, benchmarked across suppliers.',
      },
      {
        q: 'Will I get one invoice?',
        a: 'Yes. We consolidate the order and invoice it as one supply, however many suppliers it came from.',
      },
      {
        q: 'Do you deliver to our site?',
        a: 'We deliver to your warehouse, office or project site, and handle customs clearance where goods are imported.',
      },
    ],
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
    brand: 'Talcora Machinery',
    quoteExample: 'e.g. 2 tonne/hour maize milling line, delivered Kano',
    audiences: [
      { title: 'Agro-processors', body: 'Businesses setting up or expanding cleaning, hulling, milling and packing lines.' },
      { title: 'Construction firms', body: 'Contractors adding mixers, compactors and other site plant.' },
      { title: 'Warehouses & factories', body: 'Operations that need forklifts, racking, conveyors and backup power.' },
    ],
    faqs: [
      {
        q: 'How do you choose the right machine?',
        a: 'We start from your capacity, power supply and budget, then shortlist manufacturers whose equipment fits and compare the options with you.',
      },
      {
        q: 'Is equipment inspected before it ships?',
        a: 'Yes. We arrange a factory acceptance inspection so each machine is checked against the agreed specification before it is crated.',
      },
      {
        q: 'Can you ship large or heavy equipment?',
        a: 'Yes. We handle crating, out-of-gauge and break-bulk freight, and heavy-lift coordination.',
      },
      {
        q: 'What happens after delivery?',
        a: 'We coordinate installation support with the manufacturer and keep OEM or approved spare parts supplied.',
      },
    ],
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
    brand: 'Talcora Energy',
    quoteExample: 'e.g. 200 × 550W bifacial panels and 50kWh storage, delivered Lagos',
    audiences: [
      { title: 'Solar installers', body: 'Installers who need dependable supply of panels, inverters and batteries.' },
      { title: 'Developers & EPC contractors', body: 'Teams building commercial, industrial and off-grid power projects.' },
      { title: 'Businesses & estates', body: 'Factories, offices and estates cutting generator costs with solar and storage.' },
    ],
    faqs: [
      {
        q: 'Which solar brands do you supply?',
        a: 'We source tier-one modules, hybrid inverters and lithium batteries from established manufacturers, and confirm the brand and model in every quotation.',
      },
      {
        q: 'Do products come with manufacturer warranties?',
        a: 'Yes. We verify certifications and warranties before purchase and pass the documents on to you.',
      },
      {
        q: 'Can you supply everything for a project?',
        a: 'Yes. Send your design or load requirements and we will supply the full bill of materials: panels, inverters, batteries, mounting, cables and protection.',
      },
      {
        q: 'How are lithium batteries shipped?',
        a: 'Lithium batteries travel as regulated cargo. We handle the packaging, labelling and carrier documents they require.',
      },
    ],
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
    brand: 'Talcora Construction',
    quoteExample: 'e.g. Rebar, cement and formwork for a 3-storey build, Abuja',
    audiences: [
      { title: 'Contractors', body: 'Main contractors and subcontractors who need materials on site to programme.' },
      { title: 'Developers', body: 'Residential and commercial developers procuring for a whole scheme.' },
      { title: 'Infrastructure projects', body: 'Road, drainage and public works that need civil materials in volume.' },
    ],
    faqs: [
      {
        q: 'Can you procure from a bill of quantities?',
        a: 'Yes. Send the BoQ and we will price each line from vetted manufacturers, benchmarked to keep landed costs down.',
      },
      {
        q: 'Can deliveries follow our construction programme?',
        a: 'Yes. We phase orders so materials reach site when each stage needs them, rather than all at once.',
      },
      {
        q: 'Do you also supply building materials?',
        a: 'Yes: steel, cement, tiles and roofing sheets, alongside prefabricated buildings, formwork, scaffolding and civil works materials.',
      },
      {
        q: 'Who handles customs and delivery?',
        a: 'We do. Customs clearance and delivery to site are part of the service.',
      },
    ],
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

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] }

export const navigation: NavItem[] = [
  { label: 'About', href: siteHref('/about') },
  {
    label: 'What We Trade',
    href: siteHref('/sectors'),
    children: sectors.map(s => ({ label: s.name, href: sectorHref(s) })),
  },
  { label: 'Services', href: siteHref('/services') },
  { label: 'Insights', href: siteHref('/insights') },
  { label: 'Careers', href: siteHref('/careers') },
  { label: 'Contact', href: siteHref('/contact') },
]

/** Menu shown on a sector's subdomain: only that sector's own sections. */
export function sectorNavigation(sector: Sector): NavItem[] {
  const home = sectorHref(sector)
  return [
    { label: 'Products', href: `${home}#products` },
    { label: 'Who we supply', href: `${home}#clients` },
    { label: 'FAQs', href: `${home}#faqs` },
    { label: 'Contact', href: `${home}#quote` },
  ]
}
