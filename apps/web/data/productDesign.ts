export type ProductDesignValue = {
  id: string;
  title: string;
  description: string;
  icon: string;
  variant: "dark" | "muted" | "light";
};

export type ProductDesignProcessItem = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  tags: string[];
};

export type ProductDesignShowcaseItem = {
  id: string;
  brand: string;
  category: string;
  paragraphs: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  background: string;
  href: string;
};

export const productDesignValues: ProductDesignValue[] = [
  {
    id: "quality",
    title: "Quality",
    description:
      "eForte delivers design solutions that align with usability standards and your product goals, from first concept to final handoff.",
    icon: "/assets/images/capabilities/asterisk.svg",
    variant: "dark",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "eForte works as an embedded partner, involving stakeholders throughout the process to ensure alignment and fast feedback cycles.",
    icon: "/assets/images/capabilities/venn.svg",
    variant: "muted",
  },
  {
    id: "flexibility",
    title: "Flexibility",
    description:
      "eForte adapts to your context – joining existing teams, leading from discovery, or supporting specific product workstreams.",
    icon: "/assets/images/capabilities/zag.svg",
    variant: "light",
  },
];

export const productDesignProcess: ProductDesignProcessItem[] = [
  {
    eyebrow: "UX Design",
    title: "Design seamless journeys that match user goals and business outcomes",
    description:
      "UX design to define flows, journeys, and interactions that reduce friction and increase conversion.",
    image:
      "/assets/final-images/capabilities/product-design/1-UX_Design_-_Design_seamless_journeys_that_match_user_goals_and_business_outcomes-1.png",
    imageAlt: "UX design wireframes and user flows",
    imageSide: "right",
    tags: ["Wireframing", "Prototyping", "User Flows", "Journey Maps"],
  },
  {
    eyebrow: "UI Design",
    title: "Create interfaces that are intuitive, accessible, and easy to build",
    description:
      "UI design that is clean, intuitive, and implementation-ready for your development teams.",
    image:
      "/assets/final-images/capabilities/product-design/2-UI_Design-Create_interfaces_that_are_intuitive_accessible_and_easy_to_build.png",
    imageAlt: "Clean UI design mockups",
    imageSide: "left",
    tags: ["Usability", "Accessibility", "Visual Hierarchy", "Design Systems"],
  },
  {
    eyebrow: "Service Design",
    title: "Shape holistic experiences across digital and non-digital touchpoints",
    description:
      "Service design that looks across channels and processes to deliver a consistent, connected experience.",
    image:
      "/assets/final-images/capabilities/product-design/3-Service_Design_-Holistic_user_experiences_designed_across_digital_and_non-digital_touchpointsok.png",
    imageAlt: "Service design blueprint diagram",
    imageSide: "right",
    tags: ["Customer Journeys", "Service Blueprint", "Stakeholder Mapping", "Empathy Maps"],
  },
  {
    eyebrow: "UX Research",
    title: "Make product decisions grounded in evidence, not assumptions",
    description:
      "UX research that brings real user evidence into every key decision.",
    image:
      "/assets/final-images/capabilities/product-design/4-bioresearch_labs_on_reference_laptop.png",
    imageAlt: "UX research session with participants",
    imageSide: "left",
    tags: ["Interviews", "A/B Testing", "Surveys", "Personas"],
  },
  {
    eyebrow: "Visual Design",
    title: "Give your product a distinctive visual language that reinforces your brand",
    description:
      "Visual design that shapes a distinctive, on-brand look and feel with scalable assets.",
    image:
      "/assets/final-images/capabilities/product-design/5-Visual_Design_-_Give_your_product_a_distinctive_visual_language_that_reinforces_your_brand.png",
    imageAlt: "Visual design system components",
    imageSide: "right",
    tags: ["Aesthetics", "Illustrations", "Iconography", "Animations"],
  },
];

export const productDesignShowcase: ProductDesignShowcaseItem[] = [
  {
    id: "investment-markets",
    brand: "Investment Markets",
    category: "Investments | Finance",
    paragraphs: [
      "InvestmentMarkets is a platform for the potential investors that brings them high net worth investment opportunities, primarily aiming for growth, income or both.",
    ],
    tags: [
      "Investment platform",
      "High-net-worth deals",
      "Finance",
    ],
    image:
      "/assets/final-images/capabilities/product-design/IM-success-story.png",
    imageAlt: "Investment Markets platform",
    background: "#9c0300",
    href: "/case-studies/investment-markets",
  },
  {
    id: "dostpay",
    brand: "Dostpay",
    category: "Fintech",
    paragraphs: [
      "Dostpay is a 21st century mobile based 'Digital Banking Payments platform' which gets easily integrated with the core banking platform and gives the end user power of Digital banking.",
    ],
    tags: [
      "Digital banking",
      "Core banking integration",
      "Payments",
    ],
    image:
      "/assets/final-images/capabilities/product-design/dostpay-success-story.png",
    imageAlt: "Dostpay digital banking payments platform",
    background: "#012c7f",
    href: "/case-studies/dostpay",
  },
  {
    id: "validatr",
    brand: "Validatr",
    category: "Startup/ Business Management",
    paragraphs: [
      "Validatr.io is a tool for the startups and businesses to do the market validation of the new business ideas and further do Market Research for the same.",
    ],
    tags: [
      "Market validation",
      "Market research",
      "Startup tools",
    ],
    image:
      "/assets/final-images/capabilities/product-design/validatr-success-story-v2.png",
    imageAlt: "Validatr market validation platform",
    background: "#3737ce",
    href: "/case-studies/validatr",
  },
  {
    id: "bioresearch-labs",
    brand: "BioResearch Labs",
    category: "Pharmaceutical research",
    paragraphs: [
      "BioResearch Labs is a pharmaceutical research organization conducting multiple Phase II and III clinical trials across more than 40 global research sites.",
    ],
    tags: [
      "Clinical trial data",
      "Data governance",
      "Pharma research",
    ],
    image:
      "/assets/final-images/capabilities/product-design/bioresearch_labs_success-story-v2.png",
    imageAlt: "BioResearch Labs clinical research platform",
    background: "#000000",
    href: "/case-studies/bioresearch-labs",
  },
  {
    id: "oddysee",
    brand: "Oddysee",
    category: "Financial Forecasting | Civic-Municipal",
    paragraphs: [
      "Oddysee is the platform to automate the licensing process for domains that require a lot of documentation/plans. It has a documentation module with pre written templates of documents to choose from.",
    ],
    tags: [
      "Licensing automation",
      "Documentation",
      "Financial forecasting",
    ],
    image:
      "/assets/final-images/capabilities/product-design/oddysee-success-story.png",
    imageAlt: "Oddysee licensing marketplace across desktop, tablet, and watch",
    background: "#032841",
    href: "/case-studies/oddysee",
  },
  {
    id: "global-manufacturing-corp",
    brand: "Global Manufacturing Corp",
    category: "Manufacturing | Operations",
    paragraphs: [
      "Global Manufacturing Corp unified plant operations and AP intelligence so leaders can see throughput, supplier risk, and invoice status in one operating system.",
    ],
    tags: ["Plant operations", "Invoice intelligence", "Supplier performance"],
    image: "/assets/final-images/capabilities/product-design/success-stories/global-manufacturing-corp-success-story.png",
    imageAlt: "Global Manufacturing Corp plant throughput and AP workspace",
    background: "#0e7490",
    href: "/case-studies/global-manufacturing-corp",
  },
  {
    id: "globaltrade-solutions",
    brand: "GlobalTrade Solutions",
    category: "Trade | Logistics",
    paragraphs: [
      "GlobalTrade Solutions turned multi-day commodity quotes into a same-day rhythm with RFQ intelligence, supplier ranking, and shipment control.",
    ],
    tags: ["Trade desk", "Supplier matching", "Shipment tower"],
    image: "/assets/final-images/capabilities/product-design/success-stories/globaltrade-solutions-success-story.png",
    imageAlt: "GlobalTrade Solutions trade quote and shipment console",
    background: "#b45309",
    href: "/case-studies/globaltrade-solutions",
  },
  {
    id: "meridian-pay",
    brand: "Meridian Pay",
    category: "Fintech | Payments",
    paragraphs: [
      "Meridian Pay scores every payment for fraud in milliseconds and orchestrates disputes so merchants stay protected without slowing checkout.",
    ],
    tags: ["Fraud scoring", "Dispute workflows", "Settlement"],
    image: "/assets/final-images/capabilities/product-design/success-stories/meridian-pay-success-story.png",
    imageAlt: "Meridian Pay risk desk and mobile payment confirm",
    background: "#1d4ed8",
    href: "/case-studies/meridian-pay",
  },
  {
    id: "altura-motors",
    brand: "Altura Motors",
    category: "Automotive | Engineering",
    paragraphs: [
      "Altura Motors connected design programs and simulation handoffs so aero, crash, and NVH work moves through gates without lost iterations.",
    ],
    tags: ["Vehicle design", "Simulation", "Cross-discipline"],
    image: "/assets/final-images/capabilities/product-design/success-stories/altura-motors-success-story.png",
    imageAlt: "Altura Motors design gate and simulation notify screens",
    background: "#7f1d1d",
    href: "/case-studies/altura-motors",
  },
  {
    id: "anchor-point-insurance",
    brand: "Anchor Point Insurance",
    category: "Insurance | Fraud",
    paragraphs: [
      "Anchor Point Insurance scores claims before payout and prepares investigator packets so network fraud is caught earlier with higher precision.",
    ],
    tags: ["Claims fraud", "Investigations", "Risk scoring"],
    image: "/assets/final-images/capabilities/product-design/success-stories/anchor-point-insurance-success-story.png",
    imageAlt: "Anchor Point Insurance fraud desk and case packet mobile",
    background: "#0f766e",
    href: "/case-studies/anchor-point-insurance",
  },
  {
    id: "apex-shared-services",
    brand: "Apex Shared Services",
    category: "Shared Services | BPO",
    paragraphs: [
      "Apex Shared Services routes Finance, HR, and IT requests with policy-aware approvals so SLAs stay green across every business unit.",
    ],
    tags: ["Service portal", "Approvals", "BU analytics"],
    image: "/assets/final-images/capabilities/product-design/success-stories/apex-shared-services-success-story.png",
    imageAlt: "Apex Shared Services portal and request status mobile",
    background: "#4f46e5",
    href: "/case-studies/apex-shared-services",
  },
  {
    id: "birchwood-hospitality-group",
    brand: "Birchwood Hospitality Group",
    category: "Hospitality | Hotels",
    paragraphs: [
      "Birchwood Hospitality Group runs property ops, guest journeys, and housekeeping from one desk so VIP requests and room turns stay on time.",
    ],
    tags: ["Property ops", "Guest journey", "Housekeeping"],
    image: "/assets/final-images/capabilities/product-design/success-stories/birchwood-hospitality-group-success-story.png",
    imageAlt: "Birchwood Hospitality property ops and guest request mobile",
    background: "#92400e",
    href: "/case-studies/birchwood-hospitality-group",
  },
  {
    id: "brightwell-mutual",
    brand: "Brightwell Mutual",
    category: "Insurance | Member Care",
    paragraphs: [
      "Brightwell Mutual gives care agents a member 360 with benefits guidance and claims assist so conversations resolve on first contact.",
    ],
    tags: ["Member care", "Benefits guidance", "Claims assist"],
    image: "/assets/final-images/capabilities/product-design/success-stories/brightwell-mutual-success-story.png",
    imageAlt: "Brightwell Mutual member care desk and benefits tip mobile",
    background: "#166534",
    href: "/case-studies/brightwell-mutual",
  },
  {
    id: "clearpath-diabetes-care",
    brand: "ClearPath Diabetes Care",
    category: "Healthcare | Chronic Care",
    paragraphs: [
      "ClearPath Diabetes Care prioritizes at-risk patients with CGM sync, coaching workflows, and population analytics that lower ER utilization.",
    ],
    tags: ["Care team", "CGM insights", "Population health"],
    image: "/assets/final-images/capabilities/product-design/success-stories/clearpath-diabetes-care-success-story.png",
    imageAlt: "ClearPath Diabetes Care team board and CGM sync mobile",
    background: "#0284c7",
    href: "/case-studies/clearpath-diabetes-care",
  },
  {
    id: "coastal-assurance-group",
    brand: "Coastal Assurance Group",
    category: "Insurance | Underwriting",
    paragraphs: [
      "Coastal Assurance Group accelerates quote-to-bind with underwriting assists, servicing automation, and coastal cat exposure intelligence.",
    ],
    tags: ["Underwriting", "Policy servicing", "Cat risk"],
    image: "/assets/final-images/capabilities/product-design/success-stories/coastal-assurance-group-success-story.png",
    imageAlt: "Coastal Assurance underwriting bench and cat alert mobile",
    background: "#0369a1",
    href: "/case-studies/coastal-assurance-group",
  },
  {
    id: "coastline-resorts",
    brand: "Coastline Resorts",
    category: "Hospitality | Resorts",
    paragraphs: [
      "Coastline Resorts orchestrates occupancy, guest offers, and cross-property staff tasks so RevPAR and loyalty grow together.",
    ],
    tags: ["Resort command", "Guest offers", "Workforce"],
    image: "/assets/final-images/capabilities/product-design/success-stories/coastline-resorts-success-story.png",
    imageAlt: "Coastline Resorts command center and offer redeem mobile",
    background: "#0d9488",
    href: "/case-studies/coastline-resorts",
  },
  {
    id: "cobalt-digital-bank",
    brand: "Cobalt Digital Bank",
    category: "Banking | Digital",
    paragraphs: [
      "Cobalt Digital Bank runs a real-time control plane for ledger health, lending decisions, and AML observability at digital scale.",
    ],
    tags: ["Digital banking", "Lending", "Compliance"],
    image: "/assets/final-images/capabilities/product-design/success-stories/cobalt-digital-bank-success-story.png",
    imageAlt: "Cobalt Digital Bank control plane and move-money mobile",
    background: "#1e40af",
    href: "/case-studies/cobalt-digital-bank",
  },
  {
    id: "crestline-bpo-group",
    brand: "Crestline BPO Group",
    category: "BPO | Contact Center",
    paragraphs: [
      "Crestline BPO Group watches agents, SLA, and auto-QA on one floor screen so coaching queues open the moment defect patterns appear.",
    ],
    tags: ["Command center", "Workforce", "Auto QA"],
    image: "/assets/final-images/capabilities/product-design/success-stories/crestline-bpo-group-success-story.png",
    imageAlt: "Crestline BPO command floor and coach cue mobile",
    background: "#7c3aed",
    href: "/case-studies/crestline-bpo-group",
  },
  {
    id: "fenwick-capital-markets",
    brand: "Fenwick Capital Markets",
    category: "Capital Markets | Trading",
    paragraphs: [
      "Fenwick Capital Markets streams market data into a decision desk with Velocity AI signals and agentic portfolio rebalancing.",
    ],
    tags: ["Trading desk", "Rebalancing", "Risk"],
    image: "/assets/final-images/capabilities/product-design/success-stories/fenwick-capital-markets-success-story.png",
    imageAlt: "Fenwick Capital Markets trading desk and alert mobile",
    background: "#111827",
    href: "/case-studies/fenwick-capital-markets",
  },
  {
    id: "frontier-energy-partners",
    brand: "Frontier Energy Partners",
    category: "Energy | Reliability",
    paragraphs: [
      "Frontier Energy Partners forecasts asset failures early and dispatches crews to the highest-priority sites before outages spread.",
    ],
    tags: ["Asset health", "Predictive maintenance", "Field ops"],
    image: "/assets/final-images/capabilities/product-design/success-stories/frontier-energy-partners-success-story.png",
    imageAlt: "Frontier Energy asset health map and crew dispatch mobile",
    background: "#ea580c",
    href: "/case-studies/frontier-energy-partners",
  },
  {
    id: "harborlight-recovery",
    brand: "Harborlight Recovery",
    category: "Healthcare | Behavioral",
    paragraphs: [
      "Harborlight Recovery coordinates admissions, clinical pathways, and family updates so completion rises and readmissions fall.",
    ],
    tags: ["Care coordination", "Clinical pathways", "Family portal"],
    image: "/assets/final-images/capabilities/product-design/success-stories/harborlight-recovery-success-story.png",
    imageAlt: "Harborlight Recovery care coordination and family update mobile",
    background: "#0891b2",
    href: "/case-studies/harborlight-recovery",
  },
  {
    id: "ironclad-manufacturing",
    brand: "Ironclad Manufacturing",
    category: "Manufacturing | Quality",
    paragraphs: [
      "Ironclad Manufacturing ties shop-floor OEE to quality gates and maintenance so defects and scrap drop while on-time delivery stays high.",
    ],
    tags: ["Shop floor", "Quality gates", "Maintenance"],
    image: "/assets/final-images/capabilities/product-design/success-stories/ironclad-manufacturing-success-story.png",
    imageAlt: "Ironclad Manufacturing quality desk and hold alert mobile",
    background: "#374151",
    href: "/case-studies/ironclad-manufacturing",
  },
  {
    id: "lantern-hotel-collective",
    brand: "Lantern Hotel Collective",
    category: "Hospitality | Multi-property",
    paragraphs: [
      "Lantern Hotel Collective matches guest preferences to offers across 19 properties while housekeeping turns stay under half an hour.",
    ],
    tags: ["Collective ops", "Guest preferences", "Brand performance"],
    image: "/assets/final-images/capabilities/product-design/success-stories/lantern-hotel-collective-success-story.png",
    imageAlt: "Lantern Hotel Collective ops hub and preference match mobile",
    background: "#a16207",
    href: "/case-studies/lantern-hotel-collective",
  },
  {
    id: "meridian-outsourcing-solutions",
    brand: "Meridian Outsourcing Solutions",
    category: "BPO | Automation",
    paragraphs: [
      "Meridian Outsourcing Solutions pairs client delivery hubs with process bots so routine volume is handled and exceptions stay visible.",
    ],
    tags: ["Client delivery", "Process bots", "Workforce"],
    image: "/assets/final-images/capabilities/product-design/success-stories/meridian-outsourcing-solutions-success-story.png",
    imageAlt: "Meridian Outsourcing delivery hub and bot exception mobile",
    background: "#4338ca",
    href: "/case-studies/meridian-outsourcing-solutions",
  },
  {
    id: "pulsewell-fitness",
    brand: "PulseWell Fitness",
    category: "Health | Fitness",
    paragraphs: [
      "PulseWell Fitness connects member coaching, trainer workflows, and wearable insights so adherence and studio retention climb together.",
    ],
    tags: ["Member coaching", "Wearables", "Studio analytics"],
    image: "/assets/final-images/capabilities/product-design/success-stories/pulsewell-fitness-success-story.png",
    imageAlt: "PulseWell Fitness coaching hub and check-in mobile",
    background: "#db2777",
    href: "/case-studies/pulsewell-fitness",
  },
  {
    id: "ridgeline-auto-group",
    brand: "Ridgeline Auto Group",
    category: "Automotive | Retail",
    paragraphs: [
      "Ridgeline Auto Group runs rooftops, service lanes, and inventory intelligence so sales close faster and aged units shrink.",
    ],
    tags: ["Dealer ops", "Service lane", "Inventory"],
    image: "/assets/final-images/capabilities/product-design/success-stories/ridgeline-auto-group-success-story.png",
    imageAlt: "Ridgeline Auto dealer command and service lane mobile",
    background: "#1e3a8a",
    href: "/case-studies/ridgeline-auto-group",
  },
  {
    id: "summit-steel-works",
    brand: "Summit Steel Works",
    category: "Manufacturing | Steel",
    paragraphs: [
      "Summit Steel Works tracks heats, fulfillment, and energy cost so yield stays high and orders leave on commitment.",
    ],
    tags: ["Mill operations", "Fulfillment", "Cost & energy"],
    image: "/assets/final-images/capabilities/product-design/success-stories/summit-steel-works-success-story.png",
    imageAlt: "Summit Steel mill operations and ship-ready mobile",
    background: "#b91c1c",
    href: "/case-studies/summit-steel-works",
  },
  {
    id: "vantage-mobility",
    brand: "Vantage Mobility",
    category: "Mobility | Fleet",
    paragraphs: [
      "Vantage Mobility dispatches jobs with live fleet health and driver experience so utilization rises and cost per mile falls.",
    ],
    tags: ["Fleet command", "Dispatch", "Driver app"],
    image: "/assets/final-images/capabilities/product-design/success-stories/vantage-mobility-success-story.png",
    imageAlt: "Vantage Mobility fleet command and next-job mobile",
    background: "#059669",
    href: "/case-studies/vantage-mobility",
  },
  {
    id: "allied-insurance",
    brand: "Allied Insurance",
    category: "Insurance | Claims",
    paragraphs: [
      "Allied Insurance digitizes claim intake, scores fraud risk, and STP-settles simple claims so cycle time drops from days to hours.",
    ],
    tags: ["Claims intake", "Fraud detection", "STP"],
    image: "/assets/final-images/capabilities/product-design/success-stories/allied-insurance-success-story.png",
    imageAlt: "Allied Insurance claims intake and claim-filed mobile",
    background: "#1e3a5f",
    href: "/case-studies/allied-insurance",
  },
  {
    id: "prism",
    brand: "Prism",
    category: "Retail | Forecasting",
    paragraphs: [
      "Prism forecasts retail demand with seasonality, holidays, and outlier smoothing so accuracy climbs even on messy real-world data.",
    ],
    tags: ["Demand forecasting", "Seasonality", "Prophet"],
    image: "/assets/final-images/capabilities/product-design/success-stories/prism-success-story.png",
    imageAlt: "Prism demand forecast studio and trend alert mobile",
    background: "#5b21b6",
    href: "/case-studies/prism",
  },
  {
    id: "iberian-ventures",
    brand: "Iberian Ventures",
    category: "M&A | Advisory",
    paragraphs: [
      "Iberian Ventures automates buy-side matching, deck generation, and meeting orchestration so analysts spend time advising—not admin.",
    ],
    tags: ["Deal matching", "Mandate ops", "Pipeline"],
    image: "/assets/final-images/capabilities/product-design/success-stories/iberian-ventures-success-story.png",
    imageAlt: "Iberian Ventures mandate command and match-ready mobile",
    background: "#1a3a6e",
    href: "/case-studies/iberian-ventures",
  },

];

/** Lean core carousel used by Healthcare (and similar) pages. */
export const productDesignShowcaseCore: ProductDesignShowcaseItem[] =
  productDesignShowcase.filter((story) =>
    [
      "investment-markets",
      "dostpay",
      "validatr",
      "bioresearch-labs",
      "oddysee",
    ].includes(story.id)
  );

/** Pick Product Design success stories by id (order preserved). */
export function pickProductDesignStories(
  ...ids: string[]
): ProductDesignShowcaseItem[] {
  const byId = new Map(productDesignShowcase.map((story) => [story.id, story]));
  return ids
    .map((id) => byId.get(id))
    .filter((story): story is ProductDesignShowcaseItem => Boolean(story));
}

export const productDesignFaqs = [
  {
    question: "What product design and usability services does eForte provide?",
    answer:
      "eForte offers UX design, UI design, service design, UX research, and visual design services, covering the full lifecycle from discovery and concepting through delivery-ready interfaces and systems.",
  },
  {
    question: "How does eForte approach the design process?",
    answer:
      "eForte follows a user-centered, iterative workflow that combines research, ideation, prototyping, testing, and refinement, always tied to your product metrics and roadmap.",
  },
  {
    question: "How does eForte collaborate with clients during projects?",
    answer:
      "eForte integrates with your product, design, and engineering teams through regular workshops, reviews, and async collaboration tools to keep decisions transparent and aligned.",
  },
  {
    question: "How does UX research improve product design?",
    answer:
      "UX research from eForte exposes real user needs and behaviors, helping prioritize features, validate concepts early, and reduce rework later in development.",
  },
  {
    question: "What is the role of usability testing in the design process?",
    answer:
      "Usability testing allows eForte to observe how people use prototypes, identify friction, and refine flows before they reach production, saving time and budget.",
  },
  {
    question: "Why choose eForte for UI/UX design?",
    answer:
      "eForte combines user-centric methods, strong visual craft, and delivery-ready systems, helping teams launch products that are both delightful to use and straightforward to implement.",
  },
];
