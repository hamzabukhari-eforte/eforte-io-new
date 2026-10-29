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
    id: "scheduling-engine",
    name: "Scheduling Engine",
    headline: "Automating workforce scheduling across call centers and retail chains",
    description:
      "Scheduling Engine automates workforce scheduling across call centers and retail chains, reducing conflicts and giving supervisors a reliable, agent-driven way to staff every shift.",
    image: "/assets/images/case-study/new-images/scheduling-engine/scheduling-main.png",
    href: impactStudyHref("scheduling-engine"),
    artScale: "lg",
    stats: [
      { label: "Shifts scheduled", value: 500, suffix: "K+" },
      { label: "Scheduling conflicts reduced", value: 80, suffix: "%" },
    ],
  },
{
    id: "sellsmart",
    name: "Sellsmart",
    headline: "Automating retail transactions with agentic point of sale intelligence",
    description:
      "Sellsmart brings agentic intelligence to point of sale, helping retailers process transactions faster while keeping every checkout step consistent as volume grows.",
    image: "/assets/images/case-study/new-images/sellsmart/sellsMart-main.png",
    href: impactStudyHref("sellsmart"),
    artScale: "md",
    stats: [
      { label: "Transactions processed", value: 2, suffix: "M+" },
      { label: "Checkout time reduced", value: 35, suffix: "%" },
    ],
  },
  {
    id: "dostpay",
    name: "Dostpay",
    headline: "Powering digital banking payments with agentic financial workflows",
    description:
      "Dostpay integrates with core banking platforms to give end users modern digital banking and payments, with fewer failures as transaction volume grows.",
    image: "/assets/images/case-study/new-images/dostpay/Dostpay1.png",
    href: impactStudyHref("dostpay"),
    artScale: "xl",
    stats: [
      { label: "Digital transactions enabled", value: 5, suffix: "M+" },
      { label: "Payment failure rate down", value: 45, suffix: "%" },
    ],
  },
];

export const impactStudiesIntro = {
  eyebrow: "Impact Studies",
  heading:
    "We have been building intelligent, agent driven software for over a decade",
  teaser: {
    quote:
      "eForte didn't just modernize our licensing platform, they gave it guided workflows that keep improving every application cycle.",
    attribution: "Oddysee, Product",
  },
};

/** Top band — mirrors Qubika: full, full, full, full, mid+mid, full */
export const impactStudiesProjectsTop: ImpactProjectCard[] = [
{
    id: "oddysee",
    name: "Oddysee",
    headline: "Turning complex licensing paperwork into guided, agentic workflows",
    description: "Licensing documents generated: 10K+ · Application turnaround time: 70% faster",
    href: impactStudyHref("oddysee"),
    size: "full",
    layout: "splitLeft",
    accent: "#032841",
    productImage: "/assets/images/case-study/new-images/oddysee/oddysee-main.png",
  },
{
    id: "investment-markets",
    name: "Investment Markets",
    headline: "Connecting high net worth investors through agentic discovery",
    description: "Investor connections facilitated: 8K+ · Deal matching accuracy: 92%",
    href: impactStudyHref("investment-markets"),
    size: "full",
    layout: "colorFloat",
    accent: "#9c0300",
    productImage: "/assets/images/case-study/new-images/investment-market/investment-Markets-Main.png",
    productImageSecondary: "/assets/images/case-study/new-images/investment-market/investment-Markets2.png",
  },
{
    id: "prism",
    name: "Prism",
    headline: "Powering retail demand forecasting with intelligent trend modeling",
    description: "Forecasts generated: 30K+ · Forecast accuracy improvement: 38%",
    href: impactStudyHref("prism"),
    size: "full",
    layout: "splitLeft",
    accent: "#010101",
    productImage: "/assets/final-images/case-studies/prism/screen-1.png",
  },
{
    id: "krank",
    name: "Krank",
    headline: "Reinventing heavy machinery trading with agentic marketplace intelligence",
    description: "Listings automated: 25K+ · Average listing time: Under 10 minutes",
    href: impactStudyHref("krank"),
    size: "full",
    layout: "photoBg",
    accent: "#0a1a2a",
    backgroundImage: "/assets/images/case-study/new-images/krank/krank-main.png",
  },
{
    id: "validatr",
    name: "Validatr",
    headline: "Making rigorous startup validation accessible through guided AI research",
    description: "Validation reports generated: 15K+ · Research time reduced: 90%",
    href: impactStudyHref("validatr"),
    size: "mid",
    layout: "midProduct",
    accent: "#3737ce",
    productImage: "/assets/images/case-study/new-images/validatr/validatr-main.png",
  },
{
    id: "tachignite",
    name: "TachIgnite",
    headline: "Accelerating Day Zero startups with agentic engineering velocity",
    description: "Startups accelerated: 10+ · Time to MVP: Cut in half",
    href: impactStudyHref("tachignite"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(359.9deg, #013045 4.35%, #000 108.99%)",
    backgroundImage: "/assets/images/case-study/webp/tachignite/image-1.webp",
  },
{
    id: "dostpay",
    name: "Dostpay",
    headline: "Powering digital banking payments with agentic financial workflows",
    description: "Digital transactions enabled: 5M+ · Payment failure rate: Down 45%",
    href: impactStudyHref("dostpay"),
    size: "full",
    layout: "photoFloat",
    accent: "#012c7f",
    backgroundImage: "/assets/images/case-study/new-images/dostpay/Dostpay1.png",
    productImage: "/assets/images/case-study/new-images/dostpay/Dostpay2.png",
  },
];

/** Bottom band — mid+mid, then fulls, then mid+mid */
export const impactStudiesProjectsBottom: ImpactProjectCard[] = [
{
    id: "emerge-forward",
    name: "Emerge Forward",
    headline: "Building tomorrow's workforce through agentic soft skills training",
    description: "Students trained: 12K+ · Job placement rate: Up 28%",
    href: impactStudyHref("emerge-forward"),
    size: "mid",
    layout: "midProduct",
    accent: "linear-gradient(180deg, #D34854 1.81%, #2A1176 100%)",
    productImage: "/assets/images/case-study/new-images/emerge-forward/emerge1.png",
  },
{
    id: "komb",
    name: "Komb",
    headline: "Automating salon operations with agentic scheduling and client intelligence",
    description: "Appointments managed: 100K+ · No-show rate: Down 32%",
    href: impactStudyHref("komb"),
    size: "mid",
    layout: "midLogo",
    accent: "linear-gradient(180deg, #90BD55 -13.96%, #56763E 100%)",
    productImage: "/assets/images/case-study/new-images/komb/komb1.png",
  },
{
    id: "food-cast",
    name: "FoodCast",
    headline: "Forecasting household food supply with data driven precision",
    description: "Households supported: 20K+ · Forecast accuracy: 94%",
    href: impactStudyHref("food-cast"),
    size: "full",
    layout: "photoFloat",
    accent: "rgba(61, 42, 237, 0.4)",
    backgroundImage: "/assets/images/case-study/new-images/food-cast/foodCast1.png",
    productImage: "/assets/images/case-study/new-images/food-cast/Food-cast.png",
  },
{
    id: "crowd-check",
    name: "Crowdcheck",
    headline: "Delivering real time crowd intelligence for safer everyday decisions",
    description: "Locations tracked: 50K+ · Update latency: Under 60 seconds",
    href: impactStudyHref("crowd-check"),
    size: "full",
    layout: "photoBg",
    accent: "#101820",
    backgroundImage: "/assets/images/case-study/new-images/crowdcheck/crowd_check1.png",
  },
{
    id: "instapp-deal",
    name: "InstApp Deal",
    headline: "Reinventing word of mouth marketing through agentic deal discovery",
    description: "Deals redeemed: 1M+ · Referral conversion rate: Up 45%",
    href: impactStudyHref("instapp-deal"),
    size: "full",
    layout: "splitLeft",
    accent: "#12081f",
    productImage: "/assets/images/case-study/new-images/instapp-deal/InstApp-Deal.png",
  },
];

export const impactStudiesTestimonials: ImpactTestimonial[] = [
  {
    id: "dostpay",
    company: "Dostpay",
    quote: "eForte's agents didn't just speed up our payment flows, they changed how our whole team thinks about digital banking reliability.",
    attribution: "Dostpay, Fintech",
  },
  {
    id: "oddysee",
    company: "Oddysee",
    quote: "eForte didn't just modernize our licensing platform, they gave it guided workflows that keep improving every application cycle.",
    attribution: "Oddysee, Product",
  },
  {
    id: "scheduling-engine",
    company: "Scheduling Engine",
    quote: "Shifts that used to take supervisors hours to balance now publish in minutes, and the team trusts the roster because they can see exactly how each decision was made.",
    attribution: "Scheduling Engine, Operations",
  },
  {
    id: "krank",
    company: "Krank",
    quote: "We went from agent-driven machinery deals to a private network where buyers and sellers connect directly. That shift alone redefined how we trade.",
    attribution: "Krank, Marketplace",
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
  { name: "Dostpay", href: impactStudyHref("dostpay") },
  { name: "Emerge Forward", href: impactStudyHref("emerge-forward") },
  { name: "Komb", href: impactStudyHref("komb") },
  { name: "FoodCast", href: impactStudyHref("food-cast") },
  { name: "Crowdcheck", href: impactStudyHref("crowd-check") },
  { name: "InstApp Deal", href: impactStudyHref("instapp-deal") },
];
