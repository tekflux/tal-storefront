export interface ProcessStep {
  step: string
  icon: string
  title: string
  body: string
  images: string[]
  imageCaption: string
}

export interface Product {
  id: string
  name: string
  emoji: string
  tag: string
  category: string
  tagline: string
  color: string
  accentLight: string
  accentDark: string
  specs: string[]
  certifications: string[]
  process: ProcessStep[]
}

// ── FULL PRODUCT CATALOGUE ──────────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: 'cocoa',
    name: 'Cocoa Beans',
    emoji: '🫘',
    tag: 'High Demand',
    category: 'Soft Commodity',
    tagline: 'The heartbeat of West African agriculture',
    color: '#6B3A2A',
    accentLight: '#D4956B',
    accentDark: '#3D1F14',
    specs: ['Moisture: ≤7%', 'Fat Content: 55–58%', 'Fermentation: 5–7 days'],
    certifications: ['NAFDAC Approved', 'SGS Inspected', 'Phytosanitary Certified', 'NEPC Registered'],
    process: [
      {
        step: 'Harvesting',
        icon: '🌱',
        title: 'Cocoa Harvesting — From Tree to Basket',
        body: `The cocoa journey begins deep in the tropical belt of West Africa, where the Theobroma cacao tree flourishes under the canopy of taller shade trees. Harvesting is an art passed down through generations — each pod must be assessed individually for ripeness, judged by its colour shift from green to golden-yellow or deep crimson depending on the variety.

Skilled farmers use machetes and long-handled pruning hooks to detach pods without damaging the fragile flower cushions that will produce the next season's fruit. The pods are gathered into woven baskets and transported to a central breaking station, where they are split open by hand, revealing 30 to 50 wet, pulp-covered beans per pod. This manual, labour-intensive process is what gives West African cocoa its reputation for quality — no machines, no shortcuts, just experienced hands selecting only what meets the standard.

At this stage, the quality baseline for every export batch is established. Beans from different farms and micro-lots are assessed, and only those that show the right size, colour, and pulp coverage proceed to fermentation. It is this selectivity at origin that allows Talcora to consistently deliver cocoa that meets the exacting standards of European and Asian chocolatiers.`,
        images: [
          '/images-sectors/agric_commodities/cocoa/harvesting/1.jpg',
          '/images-sectors/agric_commodities/cocoa/harvesting/2.jpg',
          '/images-sectors/agric_commodities/cocoa/harvesting/3.jpg',
          '/images-sectors/agric_commodities/cocoa/harvesting/4.jpg',
          '/images-sectors/agric_commodities/cocoa/harvesting/5.jpg',
          '/images-sectors/agric_commodities/cocoa/harvesting/6.jpg',
        ],
        imageCaption: 'Freshly harvested cocoa pods collected in woven baskets, ready to be split open for their pulpy, cream-coloured beans.',
      },
      {
        step: 'Fermentation',
        icon: '⏱️',
        title: 'Fermentation — The Science of Flavour',
        body: `Fermentation is the single most critical post-harvest step in cocoa processing — it is where raw, bitter seeds are transformed into the aromatic, complex beans that the world's finest chocolate makers demand. Without proper fermentation, even the best-grown cocoa will taste flat, astringent, and unusable for premium products.

At our partner fermentation stations, freshly extracted beans are heaped onto banana-leaf-lined wooden boxes or traditional heap piles, then covered with additional leaves and jute sacking to trap heat. Over the next five to seven days, a cascade of biochemical reactions unfolds: yeasts convert the sugary pulp into alcohol, acetic acid bacteria raise internal temperatures above 45°C, and enzymatic changes within the bean develop the precursor compounds responsible for chocolate's signature flavour and aroma.

Turning the heap at precise 48-hour intervals is essential — it ensures aerobic conditions, even heat distribution, and uniform fermentation across the entire lot. Our field supervisors use calibrated thermometers and the cut test (slicing beans to check internal colour progression from purple to brown) to monitor every batch. This combination of traditional knowledge and modern quality assurance is what makes Talcora cocoa a preferred choice for specialty buyers who cannot afford inconsistency in their supply chain.`,
        images: [
          '/images-sectors/agric_commodities/cocoa/fermentation/1.jpg',
          '/images-sectors/agric_commodities/cocoa/fermentation/2.jpg',
          '/images-sectors/agric_commodities/cocoa/fermentation/3.jpg',
          '/images-sectors/agric_commodities/cocoa/fermentation/4.jpg',
          '/images-sectors/agric_commodities/cocoa/fermentation/5.jpg',
          '/images-sectors/agric_commodities/cocoa/fermentation/6.jpg',
        ],
        imageCaption: 'Cocoa beans fermenting in lined boxes under closely monitored heat and turning cycles.',
      },
      {
        step: 'Drying',
        icon: '☀️',
        title: 'Sun Drying — Preserving Quality for the Long Haul',
        body: `Once fermentation is complete, the beans must be dried quickly and evenly to bring moisture content down from approximately 55% to below 7% — the threshold required for safe international shipping and long-term storage. Drying too fast locks in acidity; drying too slowly invites mould and off-flavours.

At Talcora-affiliated drying stations, beans are spread in thin layers on raised bamboo or wire-mesh platforms that allow air circulation from below. Workers turn the beans by hand several times a day, removing any flat, broken, or germinated beans as they go. Sun drying typically takes 7 to 14 days, depending on weather conditions, and this is where the final flavour profile is locked in — slow, even drying allows residual acetic acid to evaporate, producing a cleaner, more rounded taste.

During the rainy season, solar tunnel dryers with transparent covers are used as a backup to prevent re-wetting. Every batch is monitored with portable moisture meters before it is approved for the next stage. The result is a clean, well-dried bean with excellent shelf stability — ready to travel from Lagos or Apapa port to factories in Amsterdam, Hamburg, or Singapore without quality degradation.`,
        images: [
          '/images-sectors/agric_commodities/cocoa/drying/1.jpg',
          '/images-sectors/agric_commodities/cocoa/drying/2.jpg',
          '/images-sectors/agric_commodities/cocoa/drying/3.jpg',
          '/images-sectors/agric_commodities/cocoa/drying/4.jpg',
          '/images-sectors/agric_commodities/cocoa/drying/5.jpg',
          '/images-sectors/agric_commodities/cocoa/drying/6.jpg',
        ],
        imageCaption: 'Cocoa beans spread out under the sun and turned consistently for even drying.',
      },
      {
        step: 'Grading',
        icon: '🔬',
        title: 'Quality Grading — Where Science Meets the Standard',
        body: `Grading is the gatekeeper stage — the point at which every batch is either approved for export or sent back for rework. At Talcora, we apply a grading protocol that combines internationally recognised standards (based on the ISO 2451 cocoa bean specification) with the specific quality benchmarks agreed upon with each buyer.

The cut test is the cornerstone: a random sample of 300 beans is sliced lengthwise, and each bean is classified as fully fermented, partly fermented, slaty, mouldy, insect-damaged, or germinated. For Grade 1 export cocoa, no more than 3% mouldy beans and no more than 3% slaty beans are permitted. Bean count — the number of beans per 100 grams — is also measured to confirm uniformity and size.

Moisture readings are taken with calibrated meters, and any batch above 7.5% is returned for additional drying. Foreign matter checks ensure no stones, twigs, or other debris have entered the lot. Only after all parameters are confirmed does the batch receive a grading certificate and proceed to packaging. This rigour is what gives buyers confidence that Talcora cocoa will perform consistently in their production lines.`,
        images: [
          '/images-sectors/agric_commodities/cocoa/grading/1.jpg',
          '/images-sectors/agric_commodities/cocoa/grading/2.jpg',
          '/images-sectors/agric_commodities/cocoa/grading/3.jpg',
          '/images-sectors/agric_commodities/cocoa/grading/4.jpg',
          '/images-sectors/agric_commodities/cocoa/grading/5.jpg',
        ],
        imageCaption: 'Bean sorting, cut testing, and quality inspection before approval for export.',
      },
      {
        step: 'Packaging',
        icon: '📦',
        title: 'Packaging & Documentation — Export-Ready',
        body: `Packaging for export is about far more than putting beans in bags — it is about preserving every element of quality that has been built up through harvesting, fermentation, drying, and grading, and ensuring that the product arrives at its destination in the same condition it left the warehouse.

Talcora cocoa is packed in food-grade, breathable jute bags with a standard net weight of 64 kg per bag — the international trading norm for cocoa. Each bag is stencilled with the lot number, origin mark (Nigeria), net weight, gross weight, tare, and the Talcora export reference. Inner polypropylene liners are used when specified by the buyer for additional moisture protection.

On the documentation side, every shipment is accompanied by a phytosanitary certificate issued by the Nigerian Agricultural Quarantine Service (NAQS), an SGS or equivalent inspection certificate, a certificate of origin, a weight note, and a bill of lading. Fumigation certificates are provided where required. The documentation package is assembled to meet the import requirements of the buyer's country — whether that is the EU, USA, Japan, or anywhere else in the world.`,
        images: [
          '/images-sectors/agric_commodities/cocoa/packaging/1.jpg',
          '/images-sectors/agric_commodities/cocoa/packaging/2.jpg',
          '/images-sectors/agric_commodities/cocoa/packaging/3.jpg',
          '/images-sectors/agric_commodities/cocoa/packaging/4.jpg',
          '/images-sectors/agric_commodities/cocoa/packaging/5.jpg',
          '/images-sectors/agric_commodities/cocoa/packaging/6.jpg',
        ],
        imageCaption: 'Cocoa beans packed into export-ready jute bags with traceable lot identification.',
      },
      {
        step: 'Shipping',
        icon: '🚢',
        title: 'Container Loading & Export Logistics',
        body: `The final stage of the cocoa export journey is perhaps the most logistically complex. Cocoa is hygroscopic — it absorbs moisture and odours from its surroundings — which means that container loading, transit conditions, and routing all need to be carefully managed to prevent quality loss.

At the port warehouse, bags are loaded into clean, dry, food-grade 20-foot containers that have been inspected for residual odours, holes, and contamination. Kraft paper or container liners are used to provide an additional moisture barrier. Loading follows a strict pattern to maximise airflow and prevent condensation — known in the trade as "container rain" — during the ocean crossing.

Talcora coordinates shipping with major lines operating out of Apapa and Tin Can Island ports in Lagos, as well as Onne port in Rivers State. We offer FOB, CIF, and CFR Incoterms depending on buyer preference. Transit times to major destinations typically range from 18 to 28 days. Throughout the process, our logistics team provides real-time updates, tracking numbers, and estimated arrival dates so that buyers can plan their production schedules with confidence.`,
        images: [
          '/images-sectors/agric_commodities/cocoa/shipping/1.jpg',
          '/images-sectors/agric_commodities/cocoa/shipping/2.jpg',
          '/images-sectors/agric_commodities/cocoa/shipping/3.jpg',
          '/images-sectors/agric_commodities/cocoa/shipping/4.jpg',
          '/images-sectors/agric_commodities/cocoa/shipping/5.jpg',
        ],
        imageCaption: 'Export logistics at the final stage, from container loading to international shipment.',
      },
    ],
  },
]

// Helper — look up a single product by id
export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}