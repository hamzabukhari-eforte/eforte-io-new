import { studioTrustedBrands } from "./studioBrands";
import type { StudioPageContent } from "./types";

export const productManagementContent: StudioPageContent = {
  slug: "product-management",
  accent: "blue",
  hero: {
    label: "Product Management",
    titleBefore: "eForte's Product Management Studio turns ambitious ideas into a ",
    titleHighlight: "roadmap your team can actually execute",
    description:
      "Good technology solves the wrong problem all the time: not because the engineering was bad, but because nobody stress-tested the problem first. Our Product Management Studio works with your team to validate what's actually worth building, define clear roadmaps, and keep delivery aligned to real business outcomes across every other eForte Studio involved in your project. We act as an extension of your product team, not a separate one working in parallel.",
    brandsLabel: "Brands that trust us",
    brands: studioTrustedBrands,
    graphicSrc:
      "/assets/images/package/studios/product-management-studio-hero-diagram.svg",
    ctaLabel: "Contact Us",
  },
  features: [
    {
      id: "case-study",
      number: "In action",
      title: "Re-scoping and re-launching a stalled product initiative for Ferncliff Logistics",
      description:
        "Ferncliff Logistics had spent 8 months building a driver scheduling tool that was losing internal support because nobody could agree on what \"done\" meant. We ran a rapid discovery process, re-scoped the roadmap around a validated core use case, and re-launched the initiative with clear milestones and success metrics. Outcomes so far: time to next release cut to 6 weeks, stakeholder alignment up from 42% to 91%, core feature adoption reached 78% of target drivers within 60 days, and roadmap re-prioritization avoided an estimated $400K in low-value feature spend.",
      image: "/assets/images/package/studios/ferncliff-logistics-case.svg",
      imageAlt: "Ferncliff Logistics product re-launch case study",
      theme: "dark",
      layout: "row",
      imageSide: "right",
      mediaInset: true,
      cardKind: "text",
    },
    {
      id: "product-management",
      number: "01",
      title: "Product management",
      description:
        "We'll define a clear vision, and set strategic goals from creation to market success. Through market research and a deep understanding of your target audience, we provide the basis for informed decisions.",
      image: "/assets/images/case-study/CulturalFit.jpg",
      imageAlt: "Product management team meeting",
      theme: "light",
      layout: "row",
      imageSide: "right",
      mediaInset: true,
      cardKind: "text",
    },
    {
      id: "product-consulting",
      number: "02",
      title: "Product consulting and evaluation services",
      description:
        "We provide comprehensive insights and data-driven analysis to assess product performance and viability. By using different analysis frameworks, we'll enable you to make informed decisions about your product's future.",
      image:
        "/assets/images/capabilities/product-management/data-driven-analysis.svg",
      imageAlt: "Data-driven analysis graphic",
      theme: "black",
      layout: "row",
      imageSide: "left",
      mediaInset: true,
      cardKind: "text",
    },
    {
      id: "pricing",
      number: "03",
      title: "Product pricing and monetization strategy",
      description:
        "We optimize pricing and monetization strategies through market research, pricing frameworks, and customer behavior analysis. Achieve maximum profitability with our effective pricing strategies.",
      image: "/assets/images/industry/working.jpg",
      imageAlt: "",
      theme: "light",
      layout: "half",
      imageSide: "left",
      cardKind: "text",
    },
    {
      id: "pricing-photo",
      title: "Product pricing collaboration",
      image: "/assets/images/case-study/CulturalFit.jpg",
      imageAlt: "Team collaborating on product pricing strategy",
      theme: "light",
      layout: "half",
      imageSide: "right",
      cardKind: "media",
    },
  ],
  faqs: [
    {
      question: "Do you take over our product management, or work alongside our existing team?",
      answer:
        "Most engagements work alongside your existing product team, filling gaps in capacity or specific expertise rather than replacing your team's ownership.",
    },
    {
      question: "Can you help us figure out what to build before committing to a full build?",
      answer:
        "Yes: discovery and validation work is often the first phase of an engagement, specifically to avoid committing engineering resources to the wrong problem.",
    },
    {
      question: "How do you coordinate across multiple eForte Studios on one project?",
      answer:
        "Product Management acts as the coordination layer, translating a validated roadmap into clear scope for whichever Studios (AI, Data, App Solutions, etc.) are involved, and keeping delivery aligned to shared metrics.",
    },
    {
      question: "What if our roadmap needs to change mid-project?",
      answer:
        "We build in regular checkpoints specifically so roadmaps can adjust as real usage data and stakeholder feedback come in, rather than locking scope for the entire engagement.",
    },
  ],
  faqsSubtitle: "Frequently asked questions about our Product Management services",
  midCta: {
    titleBefore: "Let's build the right thing, ",
    titleHighlight: "in the right order.",
    description:
      "Our team is here to empower you with a tailored approach, identifying and solving the specific challenges your business faces.",
    ctaLabel: "Contact Us",
  },
};
