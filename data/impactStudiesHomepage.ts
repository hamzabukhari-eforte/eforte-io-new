export type ImpactStat = {
  label: string;
  value: number;
  suffix: string;
};

export type ImpactHeroSlide = {
  id: string;
  name: string;
  headline: string;
  description: string;
  image: string;
  href: string;
  /** Right-pinned art sizing, mirrors Qubika mapright/vooks/youscience */
  artScale: "lg" | "md" | "xl";
  stats: ImpactStat[];
};

/**
 * Card layouts mapped to Qubika work-page compositions:
 * - splitLeft: dark panel, product image overflows left, text right (MyRow)
 * - colorFloat: solid brand color, text left, device floats right (Avant)
 * - photoBg: full-bleed photo, logo + headline left (OnePay)
 * - midProduct: half-width, text top-center, product overflows bottom (Wearables)
 * - midLogo: half-width, gradient, logo + centered copy (Ripple)
 * - photoFloat: photo/gradient bg, text left, devices float right (Celbrea/Brainfm)
 */
export type ImpactCardLayout =
  | "splitLeft"
  | "colorFloat"
  | "photoBg"
  | "midProduct"
  | "midLogo"
  | "photoFloat";

export type ImpactProjectCard = {
  id: string;
  name: string;
  headline: string;
  description?: string;
  href: string;
  size: "full" | "mid";
  layout: ImpactCardLayout;
  /** Solid / gradient base behind the card */
  accent: string;
  /** Optional full-bleed photo background */
  backgroundImage?: string;
  /** Product / scene mockup (overflowing) */
  productImage?: string;
  /** Secondary floating device (Avant phone) */
  productImageSecondary?: string;
};

export type ImpactTestimonial = {
  id: string;
  company: string;
  quote: string;
  attribution: string;
};

const CS = "/assets/images/case-study";
const IND = "/assets/images/industry";

export function impactStudyHref(slug: string): string {
  return `/case-studies/${slug}`;
}

export const impactStudiesHero: ImpactHeroSlide[] = [
  {
    id: "krank",
    name: "Krank",
    headline: "Reinventing heavy machinery trading with agentic marketplace intelligence",
    description: "Krank set out to modernize one of the most old fashioned corners of industrial commerce: the buying, selling, renting, and auctioning of heavy machinery. eForte partnered with Krank to build a private sales network where equipment owners could list machinery for sale, rent, or auction, while keeping their business contacts and listings protected within their own company network.",
    image: `${CS}/krank-banner.png`,
    href: impactStudyHref("krank"),
    artScale: "lg",
    stats: [
      { label: "Listings automated", value: 25, suffix: "K+" },
      { label: "Years of collaboration", value: 3, suffix: "+" },
    ],
  },
  {
    id: "sellsmart",
    name: "Sellsmart",
    headline: "Automating retail transactions with agentic point of sale intelligence",
    description: "Sellsmart is a sales platform that helps growing companies manage leads, follow ups, and pipeline progression. As sales teams scaled, keeping every lead moving through the pipeline consistently became harder to manage manually.",
    image: `${CS}/sellsMart4.png`,
    href: impactStudyHref("sellsmart"),
    artScale: "md",
    stats: [
      { label: "Transactions processed", value: 2, suffix: "M+" },
      { label: "Years of collaboration", value: 4, suffix: "+" },
    ],
  },
  {
    id: "meridian-pay",
    name: "Meridian Pay",
    headline: "Reinventing core payment functions with data and agentic AI",
    description: "Meridian Pay is a digital payments provider processing millions of consumer and merchant transactions every month. As transaction volume grew, so did the complexity of detecting fraud, resolving disputes, and keeping settlement operations running without delay.",
    image: `${IND}/banking-bg-hero.jpg`,
    href: impactStudyHref("meridian-pay"),
    artScale: "xl",
    stats: [
      { label: "Transactions optimized", value: 85, suffix: "M+" },
      { label: "Years of collaboration", value: 2, suffix: "+" },
    ],
  },
];

export const impactStudiesIntro = {
  eyebrow: "Impact Studies",
  heading:
    "We have been building intelligent, agent driven software for over a decade",
  teaser: {
    quote:
      "eForte didn't just modernize our platform, they gave it a set of agents that keep improving it every day.",
    attribution: "Jon Silvon, Reciprocity Health",
  },
};

/** Top band — mirrors Qubika: full, full, full, full, mid+mid, full */
export const impactStudiesProjectsTop: ImpactProjectCard[] = [
  {
    id: "oddysee",
    name: "Oddysee",
    headline: "Turning complex licensing paperwork into guided, agentic workflows",
    description: "Licensing documents generated: 10K+ · Years of collaboration: 2+",
    href: impactStudyHref("oddysee"),
    size: "full",
    layout: "splitLeft",
    accent: "#000000",
    productImage: `${CS}/oddysee1.png`,
  },
  {
    id: "investment-markets",
    name: "Investment Markets",
    headline: "Connecting high net worth investors through agentic discovery",
    description: "Investor connections facilitated: 8K+ · Years of collaboration: 3+",
    href: impactStudyHref("investment-markets"),
    size: "full",
    layout: "colorFloat",
    accent: "#2859f6",
    productImage: `${CS}/investment-Markets1.png`,
    productImageSecondary: `${CS}/investment-MarketsD1.png`,
  },
  {
    id: "prism",
    name: "Prism",
    headline: "Powering retail demand forecasting with intelligent trend modeling",
    description: "Forecasts generated: 30K+ · Years of collaboration: 2+",
    href: impactStudyHref("prism"),
    size: "full",
    layout: "splitLeft",
    accent: "#010101",
    productImage: `${CS}/prism1.png`,
  },
  {
    id: "scheduling-engine",
    name: "Scheduling Engine",
    headline: "Automating workforce scheduling across call centers and retail chains",
    description: "Shifts scheduled: 500K+ · Years of collaboration: 4+",
    href: impactStudyHref("scheduling-engine"),
    size: "full",
    layout: "photoBg",
    accent: "#0a1a2a",
    backgroundImage: `${CS}/scheduling1.png`,
  },
  {
    id: "validatr",
    name: "Validatr",
    headline: "Making rigorous startup validation accessible through guided AI research",
    description: "Validation reports generated: 15K+ · Years of collaboration: 2+",
    href: impactStudyHref("validatr"),
    size: "mid",
    layout: "midProduct",
    accent: "#000000",
    productImage: `${CS}/validatr1.png`,
  },
  {
    id: "tachignite",
    name: "TachIgnite",
    headline: "Accelerating Day Zero startups with agentic engineering velocity",
    description: "Startups accelerated: 10+ · Years of collaboration: 1+",
    href: impactStudyHref("tachignite"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(359.9deg, #013045 4.35%, #000 108.99%)",
    backgroundImage: `${IND}/accelerators-1.jpg`,
  },
  {
    id: "dostpay",
    name: "Dostpay",
    headline: "Powering digital banking payments with agentic financial workflows",
    description: "Digital transactions enabled: 5M+ · Years of collaboration: 5+",
    href: impactStudyHref("dostpay"),
    size: "full",
    layout: "photoFloat",
    accent: "linear-gradient(117.49deg, rgba(63,33,151,.85) 4.76%, rgba(123,63,143,.9) 64.77%)",
    backgroundImage: `${CS}/Dostpay-banner.png`,
    productImage: `${CS}/Dostpay1.png`,
  },
];

/** Bottom band — mid+mid, then fulls, then mid+mid */
export const impactStudiesProjectsBottom: ImpactProjectCard[] = [
  {
    id: "emerge-forward",
    name: "Emerge Forward",
    headline: "Building tomorrow's workforce through agentic soft skills training",
    description: "Students trained: 12K+ · Years of collaboration: 2+",
    href: impactStudyHref("emerge-forward"),
    size: "mid",
    layout: "midProduct",
    accent: "linear-gradient(180deg, #D34854 1.81%, #2A1176 100%)",
    productImage: `${CS}/emerge1.png`,
  },
  {
    id: "komb",
    name: "Komb",
    headline: "Automating salon operations with agentic scheduling and client intelligence",
    description: "Appointments managed: 100K+ · Years of collaboration: 3+",
    href: impactStudyHref("komb"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(180deg, #90BD55 -13.96%, #56763E 100%)",
    productImage: `${CS}/komb1.png`,
  },
  {
    id: "food-cast",
    name: "FoodCast",
    headline: "Forecasting household food supply with data driven precision",
    description: "Households supported: 20K+ · Years of collaboration: 1+",
    href: impactStudyHref("food-cast"),
    size: "full",
    layout: "photoFloat",
    accent: "rgba(61, 42, 237, 0.4)",
    backgroundImage: `${CS}/Food-castbanner.png`,
    productImage: `${CS}/foodCast1.png`,
  },
  {
    id: "crowd-check",
    name: "Crowdcheck",
    headline: "Delivering real time crowd intelligence for safer everyday decisions",
    description: "Locations tracked: 50K+ · Years of collaboration: 1+",
    href: impactStudyHref("crowd-check"),
    size: "full",
    layout: "photoBg",
    accent: "#101820",
    backgroundImage: `${CS}/CrowdCheck-bannner.png`,
  },
  {
    id: "instapp-deal",
    name: "InstApp Deal",
    headline: "Reinventing word of mouth marketing through agentic deal discovery",
    description: "Deals redeemed: 1M+ · Years of collaboration: 3+",
    href: impactStudyHref("instapp-deal"),
    size: "full",
    layout: "splitLeft",
    accent: "#12081f",
    productImage: `${CS}/InstApp-Dealbanner.png`,
  },
  {
    id: "iberian-ventures",
    name: "Iberian Ventures",
    headline: "Automating M&A deal matching with agentic process intelligence",
    description: "Revenue growth: 37% · Qualified matches: 3.2x increase",
    href: impactStudyHref("iberian-ventures"),
    size: "full",
    layout: "colorFloat",
    accent: "#1a3a6e",
    productImage: `${IND}/our-work-2.webp`,
  },
  {
    id: "globaltrade-solutions",
    name: "GlobalTrade Solutions",
    headline: "Streamlining global trade operations with agentic supplier orchestration",
    description: "Quote generation time: 91% faster · Documentation errors: 64% down",
    href: impactStudyHref("globaltrade-solutions"),
    size: "mid",
    layout: "midProduct",
    accent: "#000000",
    productImage: `${IND}/cloud.jpg`,
  },
  {
    id: "allied-insurance",
    name: "Allied Insurance",
    headline: "Transforming claims processing with agentic AI and computer vision",
    description: "Claims processing time: 9 days → 36 hours · Fraud detection accuracy: 94%",
    href: impactStudyHref("allied-insurance"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(359.9deg, #1a3050 4.35%, #000 108.99%)",
    backgroundImage: `${IND}/insurance-banner.jpg`,
  },
  {
    id: "bioresearch-labs",
    name: "BioResearch Labs",
    headline: "Ensuring compliant clinical trials with agentic data validation",
    description: "Data accuracy: 99.8% · Study completion: 42% faster",
    href: impactStudyHref("bioresearch-labs"),
    size: "full",
    layout: "photoBg",
    accent: "#142028",
    backgroundImage: `${IND}/bg-portfolio.jpg`,
  },
  {
    id: "global-manufacturing-corp",
    name: "Global Manufacturing Corp",
    headline: "Automating accounts payable with agentic invoice intelligence",
    description: "Invoice processing cost: $14.20 → $2.30 · Manual processing reduced: 94%",
    href: impactStudyHref("global-manufacturing-corp"),
    size: "full",
    layout: "splitLeft",
    accent: "#0d0d0d",
    productImage: `${IND}/app-modernization.jpg`,
  },
  {
    id: "brightwell-mutual",
    name: "Brightwell Mutual",
    headline: "Handling catastrophe level claims spikes with agentic triage",
    description: "Added headcount: None · Customer satisfaction: Rose during peak event",
    href: impactStudyHref("brightwell-mutual"),
    size: "full",
    layout: "splitLeft",
    accent: "#000000",
  },
  {
    id: "harborlight-recovery",
    name: "Harborlight Recovery",
    headline: "Deepening clinician client engagement with an agentic care companion",
    description: "Between visit engagement: Substantially increased · Clinician review time: Reduced",
    href: impactStudyHref("harborlight-recovery"),
    size: "full",
    layout: "photoFloat",
    accent: "linear-gradient(117.49deg, rgba(20,80,90,.85) 4.76%, rgba(10,40,50,.9) 64.77%)",
    backgroundImage: `${CS}/health.webp`,
    productImage: `${IND}/cardiex-machine.jpg`,
  },
  {
    id: "ironclad-manufacturing",
    name: "Ironclad Manufacturing",
    headline: "Predicting equipment failure days in advance with agentic monitoring",
    description: "Downtime: Reduced · Equipment lifespan: Extended",
    href: impactStudyHref("ironclad-manufacturing"),
    size: "full",
    layout: "splitLeft",
    accent: "#000000",
  },
  {
    id: "altura-motors",
    name: "Altura Motors",
    headline: "Catching mechanical issues before customers do with predictive agentic diagnostics",
    description: "Warranty claims: Reduced · Issue detection: Earlier",
    href: impactStudyHref("altura-motors"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(180deg, #222 0%, #000 100%)",
    backgroundImage: `${IND}/driving-1.jpg`,
  },
  {
    id: "lantern-hotel-collective",
    name: "Lantern Hotel Collective",
    headline: "Cutting front desk wait times with agentic guest request routing",
    description: "Front desk wait times: Reduced · Guest satisfaction: Improved",
    href: impactStudyHref("lantern-hotel-collective"),
    size: "full",
    layout: "photoBg",
    accent: "#1a1018",
    backgroundImage: `${IND}/media-entertainment-bg.jpg`,
  },
  {
    id: "meridian-outsourcing-solutions",
    name: "Meridian Outsourcing Solutions",
    headline: "Growing client base without growing headcount through agentic ticket triage",
    description: "Client base: Grew, no proportional hiring · Ticket resolution: Faster",
    href: impactStudyHref("meridian-outsourcing-solutions"),
    size: "full",
    layout: "splitLeft",
    accent: "#0a0a12",
    productImage: `${IND}/baas.jpg`,
  },
  {
    id: "cobalt-digital-bank",
    name: "Cobalt Digital Bank",
    headline: "Scaling digital banking support with an agentic assistance layer",
    description: "Active users supported: 200K+ · Support headcount: Flat through growth",
    href: impactStudyHref("cobalt-digital-bank"),
    size: "mid",
    layout: "midProduct",
    accent: "#0b3d5c",
    productImage: `${IND}/financial-service-hero.webp`,
  },
  {
    id: "fenwick-capital-markets",
    name: "Fenwick Capital Markets",
    headline: "Unifying trade settlement risk with real time agentic monitoring",
    description: "Risk visibility: Unified across asset classes · Alert speed: Real time",
    href: impactStudyHref("fenwick-capital-markets"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(359.9deg, #013045 4.35%, #000 108.99%)",
    backgroundImage: `${IND}/banking-bg-hero.jpg`,
  },
  {
    id: "coastal-assurance-group",
    name: "Coastal Assurance Group",
    headline: "Launching usage based insurance on a telematics powered Foundational Data Layer",
    description: "New product line: Launched · Customer segment: Meaningfully younger",
    href: impactStudyHref("coastal-assurance-group"),
    size: "mid",
    layout: "midProduct",
    accent: "#000000",
    productImage: `${IND}/insurance-banner.jpg`,
  },
  {
    id: "anchor-point-insurance",
    name: "Anchor Point Insurance",
    headline: "Speeding up commercial underwriting with agentic pre screening",
    description: "Quote turnaround: Substantially faster · Underwriting headcount: Flat",
    href: impactStudyHref("anchor-point-insurance"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(180deg, #2a1840 0%, #000 100%)",
    backgroundImage: `${IND}/cybersecurity.jpg`,
  },
  {
    id: "pulsewell-fitness",
    name: "PulseWell Fitness",
    headline: "Powering hundreds of thousands of daily users with a rebuilt Foundational Data Layer",
    description: "Device launch downtime: Zero · Daily app engagement: Increased",
    href: impactStudyHref("pulsewell-fitness"),
    size: "mid",
    layout: "midProduct",
    accent: "#0f3a3a",
    productImage: `${CS}/health.webp`,
  },
  {
    id: "clearpath-diabetes-care",
    name: "ClearPath Diabetes Care",
    headline: "Automating proactive patient outreach with agentic trend monitoring",
    description: "Patient outreach: Proactive, automated · Care team follow up: Automated",
    href: impactStudyHref("clearpath-diabetes-care"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(180deg, #1a4060 0%, #000 100%)",
    backgroundImage: `${IND}/cardiex-machine.jpg`,
  },
  {
    id: "summit-steel-works",
    name: "Summit Steel Works",
    headline: "Unifying energy visibility across plants with a Foundational Data Layer",
    description: "Sustainability targets: Met · Plant visibility: Unified across 3 sites",
    href: impactStudyHref("summit-steel-works"),
    size: "mid",
    layout: "midProduct",
    accent: "#1a1510",
    productImage: `${IND}/working.jpg`,
  },
  {
    id: "frontier-energy-partners",
    name: "Frontier Energy Partners",
    headline: "Delivering real time field safety visibility through connected agentic monitoring",
    description: "Incident response: Faster · Safety visibility: Real time",
    href: impactStudyHref("frontier-energy-partners"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(180deg, #102820 0%, #000 100%)",
    backgroundImage: `${IND}/solutions-1.jpg`,
  },
  {
    id: "vantage-mobility",
    name: "Vantage Mobility",
    headline: "Delivering real time fleet visibility on a new Foundational Data Layer",
    description: "Vehicles tracked: Thousands, live · Support tickets: Reduced",
    href: impactStudyHref("vantage-mobility"),
    size: "mid",
    layout: "midProduct",
    accent: "#181410",
    productImage: `${IND}/driving-2.jpg`,
  },
  {
    id: "ridgeline-auto-group",
    name: "Ridgeline Auto Group",
    headline: "Eliminating dealer visits with secure, phased OTA software rollouts",
    description: "Dealer visits: Eliminated for updates · Rollouts: Safer, phased",
    href: impactStudyHref("ridgeline-auto-group"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(180deg, #222 0%, #000 100%)",
    backgroundImage: `${IND}/driving-3.jpg`,
  },
  {
    id: "coastline-resorts",
    name: "Coastline Resorts",
    headline: "Growing direct bookings with an agentic personalization engine",
    description: "OTA dependency: Reduced · Average booking value: Higher",
    href: impactStudyHref("coastline-resorts"),
    size: "mid",
    layout: "midProduct",
    accent: "#102838",
    productImage: `${IND}/events.jpg`,
  },
  {
    id: "birchwood-hospitality-group",
    name: "Birchwood Hospitality Group",
    headline: "Unifying guest operations across properties with one Foundational Data Layer",
    description: "Properties unified: All locations · Staff response time: Faster",
    href: impactStudyHref("birchwood-hospitality-group"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(180deg, #281820 0%, #000 100%)",
    backgroundImage: `${IND}/our-work-3.webp`,
  },
  {
    id: "apex-shared-services",
    name: "Apex Shared Services",
    headline: "Expanding quality coverage with agentic compliance monitoring",
    description: "Interaction coverage: Vast majority automated · Compliance detection: Earlier",
    href: impactStudyHref("apex-shared-services"),
    size: "mid",
    layout: "midProduct",
    accent: "#1a2030",
    productImage: `${IND}/wrappers.jpg`,
  },
  {
    id: "crestline-bpo-group",
    name: "Crestline BPO Group",
    headline: "Delivering real time client reporting on an agentic Foundational Data Layer",
    description: "Reporting: Real time, manual work eliminated · Client satisfaction: Improved",
    href: impactStudyHref("crestline-bpo-group"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(180deg, #201828 0%, #000 100%)",
    backgroundImage: `${IND}/qa.jpg`,
  },
];

export const impactStudiesTestimonials: ImpactTestimonial[] = [
  {
    id: "northbridge",
    company: "Northbridge",
    quote: "eForte's agents didn't just speed up our reporting cycle, they changed how our whole finance team thinks about decision  making.",
    attribution: "Northbridge, Finance",
  },
  {
    id: "reciprocity-health",
    company: "Reciprocity Health",
    quote: "eForte didn't just modernize our platform, they gave it a set of agents that keep improving it every day.",
    attribution: "Jon Silvon, Reciprocity Health",
  },
  {
    id: "brightwell-mutual",
    company: "Brightwell Mutual",
    quote: "Claims that used to take our adjusters days now move through in minutes, and our team trusts the process because they can see exactly how each decision was made.",
    attribution: "Brightwell Mutual, Insurance",
  },
  {
    id: "ironclad-manufacturing",
    company: "Ironclad Manufacturing",
    quote: "We went from reacting to equipment failures to knowing about them a week in advance. That shift alone paid for the whole engagement.",
    attribution: "Ironclad Manufacturing, Heavy Industry",
  },
];

export const impactStudiesIndex: { name: string; href: string }[] = [
  { name: "Krank", href: impactStudyHref("krank") },
  { name: "Oddysee", href: impactStudyHref("oddysee") },
  { name: "Investment Markets", href: impactStudyHref("investment-markets") },
  { name: "Prism", href: impactStudyHref("prism") },
  { name: "Scheduling Engine", href: impactStudyHref("scheduling-engine") },
  { name: "Sellsmart", href: impactStudyHref("sellsmart") },
  { name: "Validatr", href: impactStudyHref("validatr") },
  { name: "TachIgnite", href: impactStudyHref("tachignite") },
  { name: "Meridian Pay", href: impactStudyHref("meridian-pay") },
  { name: "Cobalt Digital Bank", href: impactStudyHref("cobalt-digital-bank") },
  { name: "Fenwick Capital Markets", href: impactStudyHref("fenwick-capital-markets") },
  { name: "Brightwell Mutual", href: impactStudyHref("brightwell-mutual") },
  { name: "Coastal Assurance Group", href: impactStudyHref("coastal-assurance-group") },
  { name: "Anchor Point Insurance", href: impactStudyHref("anchor-point-insurance") },
  { name: "Harborlight Recovery", href: impactStudyHref("harborlight-recovery") },
  { name: "PulseWell Fitness", href: impactStudyHref("pulsewell-fitness") },
  { name: "ClearPath Diabetes Care", href: impactStudyHref("clearpath-diabetes-care") },
  { name: "Ironclad Manufacturing", href: impactStudyHref("ironclad-manufacturing") },
  { name: "Summit Steel Works", href: impactStudyHref("summit-steel-works") },
  { name: "Frontier Energy Partners", href: impactStudyHref("frontier-energy-partners") },
  { name: "Altura Motors", href: impactStudyHref("altura-motors") },
  { name: "Vantage Mobility", href: impactStudyHref("vantage-mobility") },
  { name: "Ridgeline Auto Group", href: impactStudyHref("ridgeline-auto-group") },
  { name: "Lantern Hotel Collective", href: impactStudyHref("lantern-hotel-collective") },
  { name: "Coastline Resorts", href: impactStudyHref("coastline-resorts") },
  { name: "Birchwood Hospitality Group", href: impactStudyHref("birchwood-hospitality-group") },
  { name: "Meridian Outsourcing Solutions", href: impactStudyHref("meridian-outsourcing-solutions") },
  { name: "Apex Shared Services", href: impactStudyHref("apex-shared-services") },
  { name: "Crestline BPO Group", href: impactStudyHref("crestline-bpo-group") },
];
