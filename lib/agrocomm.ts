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
  // Background photo for the page hero
  heroImage: string
  specs: string[]
  certifications: string[]
  // A stage with no images renders as text only
  process: ProcessStep[]
}

const img = (product: string, stage: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images-sectors/agric_commodities/${product}/${stage}/${i + 1}.jpg`)

// Port and vessel photos that are not specific to any one commodity
const SHIPPING_IMAGES = ['/images-sectors/agric_commodities/cocoa/shipping/1.jpg', '/images-sectors/agric_commodities/cocoa/shipping/2.jpg']

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
    heroImage: '/img/cocoa-farm.jpg',
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
  {
    id: 'cashew',
    name: 'Cashew Nuts',
    emoji: '🥜',
    tag: 'High Demand',
    category: 'Tree Nut',
    tagline: 'Raw cashew nuts and graded kernels from Nigeria’s cashew belt',
    color: '#8A5A2B',
    accentLight: '#E2B77E',
    accentDark: '#4A2E14',
    heroImage: '/images-sectors/agric_commodities/_page_image/cashew.jpg',
    specs: ['KOR: 46–52 lbs', 'Nut count: 180–210/kg', 'Moisture: ≤10%', 'Kernels: W180 / W240 / W320'],
    certifications: ['SGS Inspected', 'Phytosanitary Certified', 'NEPC Registered'],
    process: [
      {
        step: 'Harvesting',
        icon: '🌱',
        title: 'Harvesting — Collecting Only Fully Ripe Nuts',
        body: `Nigeria’s cashew season runs from roughly February to May, with the main growing areas spread across Kogi, Oyo, Enugu, Kwara and neighbouring states. Unlike most tree crops, cashew is not picked from the branch. The nut hangs beneath a fleshy cashew apple, and both fall to the ground once fully mature — which is exactly the point at which the kernel inside has reached its best size and oil content.

Farmers walk their plantations every few days to gather fallen fruit, twist the nut away from the apple by hand and bag the raw nuts. Collecting frequently matters: nuts that lie on damp ground for too long start to absorb moisture, discolour and lose kernel quality.

Our aggregators buy from farmer groups and village collection points, checking each delivery for immature, shrivelled or mouldy nuts before it is accepted. Building quality in at the farm gate is far cheaper than trying to grade it out later.`,
        images: ['/images-sectors/agric_commodities/_page_image/cashew.jpg'],
        imageCaption: 'Raw cashew nuts bagged and weighed at a collection point.',
      },
      {
        step: 'Drying',
        icon: '☀️',
        title: 'Sun Drying — Bringing Moisture Down for Storage',
        body: `Freshly collected raw cashew nuts (RCN) carry too much moisture to be stored or shipped safely. They are spread in thin layers on clean tarpaulins or concrete drying floors and turned regularly for two to three days of full sun, until moisture falls to 10% or below.

Drying is checked with moisture meters rather than by eye. Under-dried nuts sweat in the bag and develop mould; over-dried nuts become brittle, which leads to more broken kernels when they are later shelled. Nuts are kept off bare earth and covered at night and during rain to stop them re-absorbing moisture.

Once dry, the nuts can be stored for many months in ventilated warehouses, raised on pallets and away from walls — giving buyers and processors flexibility over when they take delivery.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Grading',
        icon: '🔬',
        title: 'Outturn Testing — Measuring What Is Inside the Shell',
        body: `The value of raw cashew nuts lies in the kernel, so RCN is traded on its outturn. A representative sample is cut and the good kernels weighed to give the KOR (kernel outturn ratio), expressed as pounds of usable kernel per 80 kg bag. Nigerian RCN typically outturns between 46 and 52 lbs, depending on the origin and the season.

Alongside KOR we measure nut count (the number of nuts per kilogram — fewer means bigger nuts), moisture content and the percentage of defective, immature or spotted kernels. Lots are sampled across many bags rather than from the top layer, so the result reflects the whole consignment.

These figures go on the contract and are verified again by an independent inspector before loading, so the buyer knows exactly what they are paying for.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Processing',
        icon: '⚙️',
        title: 'Kernel Processing — From Raw Nut to W-Grade Kernel',
        body: `For buyers who want kernels rather than raw nuts, the RCN goes through processing. Nuts are steamed or roasted to make the shell brittle and neutralise the caustic shell liquid, then shelled to release the kernel. The kernels are dried in ovens to loosen the thin brown skin (the testa), which is then peeled away.

Peeled kernels are sorted by size, colour and wholeness into the internationally recognised grades: W180, W240 and W320 for whole white kernels, where the number is the approximate count of kernels per pound, followed by butts, splits and pieces. Sorting combines machines with careful hand inspection.

Throughout processing, hygiene is controlled to food-grade standards, and finished kernels are tested for moisture, foreign matter and microbiology before they are released for packing.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Packaging',
        icon: '📦',
        title: 'Packaging — Jute for Raw Nuts, Vacuum Packs for Kernels',
        body: `Raw cashew nuts are packed in 80 kg jute bags, which let the nuts breathe and are the standard unit the RCN trade is priced in. Bags are stencilled with the lot number, origin and weights so each one can be traced back to its grading results.

Kernels are far more delicate. They are vacuum-packed or nitrogen-flushed in foil laminate pouches or tins — usually two 25 lb packs to a carton — which protects them from oxygen, moisture and insects and keeps them fresh for well over a year.

Every shipment carries a phytosanitary certificate, certificate of origin, independent inspection report, weight and quality certificates and, for kernels, a laboratory analysis, assembled to meet the requirements of the destination market.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Shipping',
        icon: '🚢',
        title: 'Container Loading & Export Logistics',
        body: `Raw cashew nuts are loaded into clean, dry 20ft or 40ft containers lined with kraft paper, with desiccants added to absorb moisture during the voyage. A 40ft container typically carries around 25 to 27 tonnes of RCN. Kernel cartons are palletised and loaded to avoid crushing.

We ship from Apapa, Tin Can Island and Onne on FOB, CFR or CIF terms. The main destinations for raw nuts are processing hubs in Vietnam and India, while kernels go to roasters and food manufacturers in Europe, North America and the Middle East.

Transit times typically run from 18 to 35 days depending on the destination, and our logistics team shares booking details, tracking and arrival estimates throughout.`,
        images: SHIPPING_IMAGES,
        imageCaption: 'Containers loaded at port for export.',
      },
    ],
  },
  {
    id: 'sesame',
    name: 'Sesame Seeds',
    emoji: '🌾',
    tag: 'Top Export',
    category: 'Oilseed',
    tagline: 'Cleaned, export-grade sesame from Nigeria’s northern growing belt',
    color: '#B08A4E',
    accentLight: '#E8D3A6',
    accentDark: '#5C4422',
    heroImage: '/images-sectors/agric_commodities/_page_image/sesame.jpg',
    specs: ['Purity: up to 99.95%', 'Oil content: 50–55%', 'FFA: ≤2%', 'Moisture: ≤6%'],
    certifications: ['SGS Inspected', 'Phytosanitary Certified', 'NEPC Registered'],
    process: [
      {
        step: 'Farming',
        icon: '🌱',
        title: 'Farming & Harvesting — Timing the Cut',
        body: `Nigeria is one of the world’s leading sesame producers, with most of the crop grown by smallholders across Nasarawa, Benue, Jigawa, Kano, Katsina and neighbouring states. Sesame is planted with the rains around June and July and harvested from roughly September to December.

Harvest timing is critical. Sesame seeds sit in capsules along the stem that split open when they are fully dry, so if the crop is cut too late, the seed simply falls to the ground and is lost. Farmers cut the plants by hand as the leaves yellow and the lower capsules begin to turn, before they open.

We buy from farmer groups and aggregators in these growing areas, checking seed colour, maturity and cleanliness at collection so that only sound seed enters our supply chain.`,
        images: img('sesame', 'farming', 3),
        imageCaption: 'Checking sesame capsules for maturity before the harvest.',
      },
      {
        step: 'Drying',
        icon: '☀️',
        title: 'Drying & Threshing',
        body: `Cut sesame stalks are tied into bundles and stood upright in stooks to dry in the sun for one to two weeks. Standing them upright lets the capsules open while keeping the seed off the ground, away from soil, stones and moisture.

When the capsules have opened, the bundles are turned upside down over clean tarpaulins and gently tapped so the seed falls out. This simple threshing method is repeated over several days to recover as much seed as possible without crushing it.

The threshed seed is then dried further on tarpaulins until moisture falls to a safe level for storage, which protects it against mould and keeps its free fatty acid content low.`,
        images: img('sesame', 'drying', 3),
        imageCaption: 'Sesame drying on tarpaulins after threshing.',
      },
      {
        step: 'Cleaning',
        icon: '🧹',
        title: 'Cleaning & Sortexing — From Farm Grade to Export Grade',
        body: `Farm-gate sesame usually arrives at around 98% purity, carrying dust, sand, stalk pieces, shrivelled seed and seed of other colours. Buyers in Asia, Europe and the Middle East expect far more than that, so every lot goes through cleaning.

The seed passes through destoners, sieves and aspirators to remove stones, dust and light material, then through optical colour sorters (sortex machines) that reject discoloured and foreign seeds one by one. Depending on the buyer’s specification, we supply machine-cleaned sesame at 99.5% to 99.9% purity and sortexed sesame at up to 99.95%.

Cleaning is done in food-safe facilities, and cleaned seed is kept separate from uncleaned stock to prevent recontamination.`,
        images: img('sesame', 'cleaning', 3),
        imageCaption: 'Hand inspection of cleaned sesame seed.',
      },
      {
        step: 'Grading',
        icon: '🔬',
        title: 'Grading & Laboratory Testing',
        body: `Each cleaned lot is sampled and tested against the agreed specification: purity, moisture (typically 6% or below), oil content (usually 50–55%), free fatty acids (2% or below) and colour, white or mixed.

Sesame bound for the EU and other regulated markets is also tested for food safety, including salmonella and pesticide residues, so that it clears import controls without delay. Results are recorded against the lot number and shared with the buyer.

An independent inspector such as SGS or Bureau Veritas then draws samples for confirmation before loading, giving the buyer a third-party check that the sesame matches the contract.`,
        images: img('sesame', 'grading', 3),
        imageCaption: 'Sampling sesame seed for quality checks.',
      },
      {
        step: 'Packaging',
        icon: '📦',
        title: 'Packaging & Documentation',
        body: `Export sesame is packed in new 25 kg or 50 kg polypropylene bags, or in paper bags where the buyer specifies them. Each bag is marked with the lot number, origin and weights for full traceability.

Bags are stored on pallets in clean, dry warehouses and fumigated before shipment where the destination requires it, with a fumigation certificate issued.

The documentation package includes the phytosanitary certificate, certificate of origin, independent inspection and analysis reports, fumigation certificate, bill of lading, commercial invoice and packing list.`,
        images: img('sesame', 'packaging', 3),
        imageCaption: 'Bagged sesame stacked in the warehouse ahead of loading.',
      },
      {
        step: 'Shipping',
        icon: '🚢',
        title: 'Container Loading & Export Logistics',
        body: `Sesame is loaded into clean, dry, food-grade containers lined with kraft paper to protect against condensation. A 20ft container typically carries around 18 to 20 tonnes of bagged sesame.

We ship from Apapa, Tin Can Island and Onne on FOB, CFR or CIF terms. Major destinations include China, Japan, Turkey, Israel and the European Union.

Our logistics team shares booking confirmations, tracking and arrival estimates so buyers can plan their production with confidence.`,
        images: SHIPPING_IMAGES,
        imageCaption: 'Containers loaded at port for export.',
      },
    ],
  },
  {
    id: 'ginger',
    name: 'Dried Ginger',
    emoji: '🫚',
    tag: 'Specialty',
    category: 'Spice',
    tagline: 'Pungent, high-gingerol split ginger from Southern Kaduna',
    color: '#A8742F',
    accentLight: '#E9C98F',
    accentDark: '#5A3C15',
    heroImage: '/images-sectors/agric_commodities/_page_image/ginger.jpg',
    specs: ['Gingerol: 1.8–2.5%', 'Moisture: ≤12%', 'Split, sun-dried'],
    certifications: ['SGS Inspected', 'Phytosanitary Certified', 'NEPC Registered'],
    process: [
      {
        step: 'Harvesting',
        icon: '🌱',
        title: 'Harvesting — Mature Rhizomes for Maximum Pungency',
        body: `Nigeria is among the world’s largest ginger producers, and Southern Kaduna — around Kafanchan, Kachia and Jaba — is the heart of the crop. Nigerian ginger is prized internationally for its strong aroma and high pungency, which comes from its gingerol and essential oil content.

Ginger for drying is left in the ground for eight to ten months after planting, until the leaves yellow and wither. Fully mature rhizomes have more fibre, more oil and more flavour than younger ginger harvested for the fresh market.

Farmers lift the rhizomes carefully by hand to avoid bruising, shake off the soil and remove roots and stems. Harvest runs from around November to February.`,
        images: ['/images-sectors/agric_commodities/_page_image/ginger.jpg'],
        imageCaption: 'Freshly harvested ginger rhizomes.',
      },
      {
        step: 'Splitting',
        icon: '🔪',
        title: 'Washing & Splitting',
        body: `The rhizomes are washed in clean water to remove soil, then split lengthwise by hand. Splitting exposes the inner flesh so the ginger dries evenly and quickly, which is what gives split ginger its pale colour and keeps its oils intact.

Some buyers prefer whole dried ginger, or peeled ginger with the outer skin scraped off. We prepare each lot to the form the buyer has specified before it goes on to dry.

Any rhizomes that are diseased, damaged or shrivelled are removed at this stage.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Drying',
        icon: '☀️',
        title: 'Sun Drying — Locking In Flavour',
        body: `Split ginger is spread on clean mats or raised platforms and dried in the sun for one to two weeks, losing most of its water as moisture falls from around 80% to 12% or below.

The ginger is turned regularly so it dries evenly, and it is covered at night and during any rain. Drying too slowly invites mould, while keeping it off the ground keeps out sand and dirt.

Well-dried ginger is hard and snaps cleanly. It can then be stored for many months without losing its pungency.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Grading',
        icon: '🔬',
        title: 'Cleaning, Grading & Testing',
        body: `Dried ginger is cleaned to remove dust, sand and loose skin, then hand-sorted to remove mouldy, insect-damaged or poorly dried pieces. Lots are graded by size and colour.

Samples are tested for moisture (12% or below), gingerol and essential oil content, and ash. For food markets we also test for aflatoxins and other contaminants, so the ginger meets EU and other import limits.

An independent inspector confirms the results before loading, and the reports travel with the shipment.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Packaging',
        icon: '📦',
        title: 'Packaging & Documentation',
        body: `Dried ginger is packed in new jute or polypropylene bags, typically 30 to 50 kg each, marked with the lot number, origin and weights.

Bags are stored on pallets in dry, ventilated warehouses and fumigated where the destination requires it.

Every shipment is accompanied by a phytosanitary certificate, certificate of origin, independent inspection and analysis reports, fumigation certificate, bill of lading, commercial invoice and packing list.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Shipping',
        icon: '🚢',
        title: 'Container Loading & Export Logistics',
        body: `Ginger is loaded into clean, dry containers lined with kraft paper, with desiccants to absorb moisture during the voyage.

We ship from Apapa, Tin Can Island and Onne on FOB, CFR or CIF terms, with spice processors and traders in Europe, the Middle East, India and North America among our main destinations.

Our logistics team shares booking details, tracking and arrival estimates throughout the voyage.`,
        images: SHIPPING_IMAGES,
        imageCaption: 'Containers loaded at port for export.',
      },
    ],
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus Flower',
    emoji: '🌺',
    tag: 'Specialty',
    category: 'Botanical',
    tagline: 'Deep-red, hand-sorted hibiscus calyces from northern Nigeria',
    color: '#8E1F2F',
    accentLight: '#E38A97',
    accentDark: '#4A0F18',
    heroImage: '/images-sectors/agric_commodities/_page_image/hibiscus.jpg',
    specs: ['Moisture: ≤12%', 'Admixture: ≤1%', 'Dried calyces, hand-sorted'],
    certifications: ['SGS Inspected', 'Phytosanitary Certified', 'NEPC Registered'],
    process: [
      {
        step: 'Harvesting',
        icon: '🌱',
        title: 'Harvesting — Picking the Calyces by Hand',
        body: `The hibiscus traded internationally — Hibiscus sabdariffa, known in Nigeria as zobo — is grown widely across the north, in Kano, Jigawa, Katsina and neighbouring states. It is used around the world in herbal teas, beverages, food colouring and supplements.

The valuable part is not the petals but the calyx: the fleshy, deep-red cup that surrounds the seed pod after the flower fades. Calyces are picked by hand from around October to December, once they are plump and fully coloured.

Picking at the right time gives the deep colour and acidity buyers look for. Calyces left too long become woody and pale.`,
        images: ['/images-sectors/agric_commodities/_page_image/hibiscus.jpg'],
        imageCaption: 'Dried hibiscus calyces ready for sorting.',
      },
      {
        step: 'Separating',
        icon: '✋',
        title: 'Separating the Calyx from the Seed Pod',
        body: `Each calyx wraps around a green seed pod, which must be removed. This is done by hand, usually by pushing the pod out with a short stick or by splitting the calyx open.

It is slow, careful work, but it is what separates premium hibiscus from lower grades. Pods left in the lot add weight and dilute the colour and flavour.

The separated calyces go straight to drying while they are fresh.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Drying',
        icon: '☀️',
        title: 'Drying — Preserving Colour',
        body: `Calyces are spread in thin layers on clean mats or raised racks and dried for several days until moisture falls to 12% or below. They are turned regularly and kept off the ground.

Drying protects the calyces from mould and preserves their colour. Hibiscus dried too slowly or left damp turns dark and dull, while well-dried calyces stay bright red and brittle.

The dried calyces are then moved to a clean store, away from moisture, until they are sorted.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Sorting',
        icon: '🔬',
        title: 'Hand Sorting & Grading',
        body: `Dried hibiscus is sifted to remove sand and dust, then hand-sorted to remove leaves, stems, seed pods, stones and any discoloured or mouldy calyces. Our export grades contain no more than 1% admixture.

Each lot is graded by colour, calyx size and cleanliness, and tested for moisture. For food and tea markets we also test for microbiology, pesticide residues and other contaminants to meet the destination’s import limits.

An independent inspector confirms the results before loading.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Packaging',
        icon: '📦',
        title: 'Packaging & Documentation',
        body: `Hibiscus is light and bulky, so it is packed in polypropylene bags, typically 20 to 25 kg each, or pressed into bales to fit more into each container. Every bag is marked with the lot number and origin.

Bags are stored in dry warehouses and fumigated before shipment where required.

The documentation package includes the phytosanitary certificate, certificate of origin, independent inspection and analysis reports, fumigation certificate, bill of lading, commercial invoice and packing list.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Shipping',
        icon: '🚢',
        title: 'Container Loading & Export Logistics',
        body: `Hibiscus is loaded into clean, dry containers lined with kraft paper to keep out moisture during the voyage.

We ship from Apapa, Tin Can Island and Onne on FOB, CFR or CIF terms. Mexico, the United States and Europe are major destinations, where hibiscus is used for beverages and herbal teas.

Our logistics team shares booking details, tracking and arrival estimates throughout.`,
        images: SHIPPING_IMAGES,
        imageCaption: 'Containers loaded at port for export.',
      },
    ],
  },
  {
    id: 'soybeans',
    name: 'Soybeans',
    emoji: '🫛',
    tag: 'Bulk',
    category: 'Oilseed',
    tagline: 'Clean, high-protein soybeans from Nigeria’s Middle Belt',
    color: '#9C8A3E',
    accentLight: '#E5D89A',
    accentDark: '#4F4518',
    heroImage: '/images-sectors/agric_commodities/_page_image/agricom-footer-image.jpg',
    specs: ['Protein: 38–42%', 'Moisture: ≤13%', 'Foreign matter: ≤2%', 'Non-GMO'],
    certifications: ['SGS Inspected', 'Phytosanitary Certified', 'NEPC Registered'],
    process: [
      {
        step: 'Harvesting',
        icon: '🌱',
        title: 'Harvesting — Before the Pods Shatter',
        body: `Nigeria is one of Africa’s largest soybean producers, with the crop grown mainly across Benue, Kaduna, Niger, Nasarawa and Plateau states. Soybeans are planted with the rains and harvested from around October to November.

The crop is ready when the leaves have dropped and the pods have turned brown and rattle when shaken. Harvest has to be timely: if the pods are left too long they shatter and scatter the beans on the ground.

Plants are cut by hand or by machine and gathered for threshing.`,
        images: ['/images-sectors/agric_commodities/_page_image/soybeans.jpg'],
        imageCaption: 'Harvested soybeans checked for size and colour.',
      },
      {
        step: 'Threshing',
        icon: '☀️',
        title: 'Threshing & Drying',
        body: `The harvested plants are dried in the sun for a few days, then threshed by hand or with mechanical threshers to separate the beans from the pods and stalks.

The beans are then dried further on clean tarpaulins until moisture falls to 13% or below, which is safe for storage and shipment. Threshing is done carefully to avoid cracking the beans.

Dried beans are stored in clean, ventilated warehouses, raised on pallets and protected from pests.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Cleaning',
        icon: '🧹',
        title: 'Cleaning',
        body: `Threshed soybeans contain pod fragments, stalks, sand, stones and broken or shrivelled beans. They are cleaned with sieves, aspirators and destoners, and sorted to remove damaged and discoloured beans.

Our export lots contain no more than 2% foreign matter, or less where the buyer specifies it.

Clean beans are kept apart from uncleaned stock until they are bagged.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Grading',
        icon: '🔬',
        title: 'Grading & Testing',
        body: `Each lot is sampled and tested for protein (typically 38–42% on a dry basis), oil content, moisture, foreign matter and the proportion of split and damaged beans.

Soybeans sold as non-GMO can be tested by PCR on request, and we test for aflatoxins and pesticide residues for food markets.

An independent inspector confirms the results before loading, and the reports travel with the shipment.`,
        images: [],
        imageCaption: '',
      },
      {
        step: 'Packaging',
        icon: '📦',
        title: 'Packaging & Documentation',
        body: `Soybeans are packed in new 50 kg polypropylene bags, or shipped in bulk in containers fitted with liner bags for larger volumes. Bags are marked with the lot number, origin and weights.

Bagged stock is stored on pallets in dry warehouses and fumigated before shipment where the destination requires it.

The documentation package includes the phytosanitary certificate, certificate of origin, independent inspection and analysis reports, fumigation certificate, bill of lading, commercial invoice and packing list.`,
        images: img('sesame', 'packaging', 1),
        imageCaption: 'Bagged stock stacked in the warehouse ahead of loading.',
      },
      {
        step: 'Shipping',
        icon: '🚢',
        title: 'Container Loading & Export Logistics',
        body: `Soybeans are loaded into clean, dry containers lined with kraft paper to protect against condensation. A 20ft container typically carries around 22 to 25 tonnes.

We ship from Apapa, Tin Can Island and Onne on FOB, CFR or CIF terms to buyers across Asia, Europe and the Middle East, including feed mills and oil processors.

Our logistics team shares booking details, tracking and arrival estimates throughout.`,
        images: SHIPPING_IMAGES,
        imageCaption: 'Containers loaded at port for export.',
      },
    ],
  },
]

// Helper — look up a single product by id
export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}