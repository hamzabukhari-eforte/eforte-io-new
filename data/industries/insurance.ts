import type { IndustryPageContent } from "./types";

export const insuranceIndustry: IndustryPageContent = {
  slug: "insurance",
  metadata: {
    title: "Insurance | eForte",
    description: "Modernizing insurance with intelligent, connected systems, Velocity AI, Agentic Orchestration, and a secure Foundational Data Layer for underwriting, claims, and policy administration.",
  },
  hero: {
    badge: "INSURANCE",
    headline: "Modernizing insurance with intelligent, connected systems",
    paragraphs: [
      "Policyholders now expect the same speed and simplicity from their insurer that they get from any other digital service. eForte helps carriers and MGAs meet that expectation, combining Velocity AI, Agentic Orchestration, and a secure Foundational Data Layer to modernize underwriting, claims, and policy administration.",
      "From automating first notice of loss to building fairer, usage based pricing models, we help insurers turn slow, manual processes into fast, trustworthy digital experiences."
    ],
    ctaLabel: "Contact Us",
    imageSrc: "/assets/images/package/industries/insurance-industry-hero.svg",
  },
  expertise: {
    title: "Our insurance expertise",
    description: "Our team partners with carriers, MGAs, and insurtech innovators across property & casualty, life, and specialty lines.",
    stats: [
      {
        value: "13+",
        label: "years of experience in insurance technology",
      },
      {
        value: "40M+",
        label: "policyholders served through platforms eForte has helped build",
      },
      {
        value: "70%",
        label: "of our insurance clients have engaged us on more than one major initiative",
      },
    ],
    solutionsHeading: "Our Solutions",
    solutionsIntro: [],
    solutions: [
      {
        id: "agentic-claims",
        title: "Agentic Orchestration for claims and underwriting",
        glow: "/assets/images/industry/bg-4.png",
        bullets: [
          {
            title: "Automated First Notice of Loss agents",
            text: "capture and triage new claims the moment they're reported, routing urgent cases to adjusters instantly.",
          },
          {
            title: "AI assisted underwriting review",
            text: "agents pre screen applications against risk criteria, flagging only the cases that need human judgment.",
          },
          {
            title: "Claims document agents",
            text: "extract and organize information from photos, reports, and forms automatically to speed up settlements.",
          },
        ],
      },
      {
        id: "policyholder-xp",
        title: "Modern policyholder experience",
        glow: "/assets/images/industry/bg-1.png",
        bullets: [
          {
            title: "Self service claims portals",
            text: "let policyholders file, track, and resolve claims without picking up the phone.",
          },
          {
            title: "Digital onboarding & quoting",
            text: "reduce time to bind with streamlined, guided application flows.",
          },
          {
            title: "Personalized policyholder communications",
            text: "timely, relevant updates delivered through each customer's preferred channel.",
          },
        ],
      },
      {
        id: "connected-products",
        title: "Usage based & connected insurance products",
        glow: "/assets/images/industry/bg-2.png",
        bullets: [
          {
            title: "Telematics based auto pricing",
            text: "reward safer driving with premiums that reflect real behavior.",
          },
          {
            title: "Connected home risk monitoring",
            text: "partner with smart home devices to help prevent losses before they happen, not just pay for them after.",
          },
          {
            title: "Parametric & on demand coverage",
            text: "build insurance products that activate exactly when and where customers need them.",
          },
        ],
      },
      {
        id: "foundational-data",
        title: "Foundational Data Layer for insurance operations",
        glow: "/assets/images/industry/bg-3.png",
        bullets: [
          {
            title: "Unified policy & claims data platform",
            text: "bring fragmented legacy systems into a single, governed data foundation.",
          },
          {
            title: "Risk & pricing analytics",
            text: "give actuarial and pricing teams faster access to the data they need to model risk accurately.",
          },
          {
            title: "Secure third party integrations",
            text: "connect safely with reinsurers, agents, and repair networks.",
          },
        ],
      },
    ],
  },
  highlights: [
    {
      value: "01",
      label: "Built claims automation systems that cut average processing time significantly for a multi line carrier.",
    },
    {
      value: "02",
      label: "Delivered usage based insurance platforms integrated with millions of connected vehicles and devices.",
    },
    {
      value: "03",
      label: "Modernized legacy policy administration systems without disrupting live policyholder operations.",
    },
    {
      value: "04",
      label: "Established deep expertise in HIPAA- and state regulation aligned data handling for life and health lines.",
    },
  ],
  security: {
    heading: "Rigorous data and security processes",
    body: "eForte maintains ISO 27001 and SOC 2 Type 2 certifications and aligns with the NIST AI Risk Management Framework, giving insurance partners confidence that sensitive policyholder and claims data is protected at every step, across every system we help build.",
  },
  successStories: [
    {
      id: "brightwell-mutual",
      title: "Brightwell Mutual",
      paragraphs: [
        "Brightwell Mutual, a regional property & casualty carrier, was losing customers during catastrophic weather events because its claims process couldn't keep pace with sudden spikes in volume. eForte built an automated First Notice of Loss system with Agentic Orchestration that triages incoming claims instantly and routes the most urgent cases to adjusters first.",
        "During the next major weather event, Brightwell processed a record number of claims without expanding its call center staff, and customer satisfaction scores during the event rose noticeably compared to prior seasons."
      ],
      tags: [
        "Faster catastrophe response",
        "No added headcount",
        "Higher customer satisfaction"
      ],
      cardHeading: "Faster catastrophe claims response",
      imageSrc: "/assets/images/industry/solutions-1.jpg",
      imageAlt: "Brightwell Mutual",
      accentClass: "bg-[#1f7a6b]",
      tagClass: "bg-[#1f7a6b] text-white",
    },
    {
      id: "coastal-assurance",
      title: "Coastal Assurance Group",
      paragraphs: [
        "Coastal Assurance Group wanted to launch a usage based auto insurance product but lacked the data infrastructure to price policies from real driving behavior. eForte built a Foundational Data Layer that ingests telematics data securely and feeds it into a dynamic pricing engine.",
        "The new product attracted a meaningfully younger customer base than Coastal's traditional policies and became one of the company's fastest growing lines within its first year."
      ],
      tags: [
        "New product line launched",
        "Attracted new customer segment",
        "Data driven pricing accuracy"
      ],
      cardHeading: "Usage based pricing from telematics",
      imageSrc: "/assets/images/industry/driving-2.jpg",
      imageAlt: "Coastal Assurance Group",
      accentClass: "bg-[#E8822E]",
      tagClass: "bg-[#E8822E] text-white",
    },
    {
      id: "anchor-point",
      title: "Anchor Point Insurance",
      paragraphs: [
        "Anchor Point Insurance's underwriting team was buried in manual document review for commercial policy applications, slowing down quote turnaround. eForte introduced AI assisted underwriting agents that pre screen applications and highlight key risk factors for underwriters to review.",
        "Underwriters reported reclaiming hours each week previously spent on document review, and Anchor Point cut its average quote turnaround time substantially without adding underwriting staff."
      ],
      tags: [
        "Faster quote turnaround",
        "Reduced manual review",
        "Flat underwriting headcount"
      ],
      cardHeading: "AI assisted underwriting review",
      imageSrc: "/assets/images/industry/baas.jpg",
      imageAlt: "Anchor Point Insurance",
      accentClass: "bg-[#0A2EC1]",
      tagClass: "bg-[#0A2EC1] text-white",
    },
  ],
};
