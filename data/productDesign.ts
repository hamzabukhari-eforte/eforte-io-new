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
  title: string;
  paragraphs: string[];
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
      "We deliver top-notch solutions that meet the highest standards.",
    icon: "/assets/images/capabilities/asterisk.svg",
    variant: "dark",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "We partner closely with clients, involving them in every step of the process.",
    icon: "/assets/images/capabilities/venn.svg",
    variant: "muted",
  },
  {
    id: "flexibility",
    title: "Flexibility",
    description:
      "We adapt to each client's unique requirements and project needs.",
    icon: "/assets/images/capabilities/zag.svg",
    variant: "light",
  },
];

export const productDesignProcess: ProductDesignProcessItem[] = [
  {
    eyebrow: "Discover",
    title: "Craft product strategy from real user insight",
    description:
      "We start with research, stakeholder alignment, competitive scans, and journey mapping so the product direction is grounded in evidence instead of assumptions.",
    image: "/assets/images/case-study/InstApp-Dealbanner.png",
    imageAlt: "Mobile product screens used during a product design discovery process",
    imageSide: "right",
    tags: ["Research", "Journey mapping", "Product strategy"],
  },
  {
    eyebrow: "Design",
    title: "Prototype experiences that reduce delivery risk",
    description:
      "From wireframes to high-fidelity prototypes, our designers help teams test flows early, sharpen requirements, and build shared confidence before engineering scales.",
    image: "/assets/images/case-study/komb-banner.png",
    imageAlt: "Web and mobile product interface mockups",
    imageSide: "left",
    tags: ["Wireframes", "Prototypes", "Usability testing"],
  },
  {
    eyebrow: "Validate",
    title: "Turn feedback into measurable product improvements",
    description:
      "We combine qualitative signals with analytics to refine onboarding, conversion, retention, and task completion across the user lifecycle.",
    image: "/assets/images/case-study/oddysee-banner.png",
    imageAlt: "Mobile app interface representing validated product improvements",
    imageSide: "right",
    tags: ["Analytics", "Experimentation", "Design QA"],
  },
  {
    eyebrow: "Scale",
    title: "Build people-centric systems at enterprise speed",
    description:
      "Reusable design systems, component libraries, and documentation help product teams ship consistent experiences faster across markets and platforms.",
    image: "/assets/images/case-study/prism-banner.png",
    imageAlt: "Enterprise product dashboard and tablet screens",
    imageSide: "left",
    tags: ["Design systems", "Accessibility", "Delivery handoff"],
  },
];

export const productDesignShowcase: ProductDesignShowcaseItem[] = [
  {
    id: "krank",
    brand: "Krank",
    title: "Empowering women's health: Redesigning a seamless patient experience",
    paragraphs: [
      "Krank partnered with eForte to create a seamless and empathetic digital experience for patients navigating complex care journeys.",
      "Our design team crafted a clean, intuitive UI/UX with a relaxed and sympathetic look and feel that supports trust and engagement.",
    ],
    image: "/assets/images/case-study/krank-banner.png",
    imageAlt: "Krank healthcare app product design",
    background: "#4E2D6B",
    href: "/case-studies/krank",
  },
  {
    id: "oddysee",
    brand: "Oddysee",
    title: "Enabling personalized guidance with Oddysee",
    paragraphs: [
      "Oddysee partnered with eForte to enhance the user experience and turn data into meaningful guidance across the platform.",
      "We redesigned core journeys to improve clarity, retention, and confidence for users making important decisions.",
    ],
    image: "/assets/images/case-study/oddysee-banner.png",
    imageAlt: "Oddysee platform screens",
    background: "#B83280",
    href: "/case-studies/oddysee",
  },
  {
    id: "instapp-deal",
    brand: "InstApp Deal",
    title: "Designing mobile onboarding that converts",
    paragraphs: [
      "We helped InstApp Deal simplify activation with a mobile-first flow that reduces friction and improves completion rates.",
      "The new experience pairs clear hierarchy with polished UI patterns that scale across future product releases.",
    ],
    image: "/assets/images/case-study/InstApp-Deal-Mobilebanner.png",
    imageAlt: "InstApp Deal mobile product screens",
    background: "#6E2585",
    href: "/case-studies/instapp-deal",
  },
  {
    id: "komb",
    brand: "Komb",
    title: "A scalable design system for multi-platform products",
    paragraphs: [
      "Komb worked with eForte to unify web and mobile experiences under a coherent visual language and component library.",
      "The result is a faster delivery model with stronger consistency across customer touchpoints.",
    ],
    image: "/assets/images/case-study/komb-banner.png",
    imageAlt: "Komb product design screens",
    background: "#5B3FD6",
    href: "/case-studies/komb",
  },
];

export const productDesignFaqs = [
  {
    question: "What involvement do clients have in product design?",
    answer:
      "We run collaborative workshops, regular design reviews, and validation checkpoints so product, business, and engineering stakeholders stay aligned throughout the engagement.",
  },
  {
    question: "What outputs can we expect from a design process?",
    answer:
      "Typical outputs include research synthesis, journeys, wireframes, prototypes, usability findings, UI designs, design systems, and engineering-ready specs.",
  },
  {
    question: "Can you improve an existing product?",
    answer:
      "Yes. We audit existing flows, identify usability and conversion gaps, and prioritize improvements that can be delivered in practical increments.",
  },
  {
    question: "How do designers work with engineering teams?",
    answer:
      "Designers partner closely with engineers through feasibility reviews, component specs, responsive behavior, accessibility details, and design QA.",
  },
  {
    question: "Do you support accessibility?",
    answer:
      "Yes. We design with accessibility standards in mind, including contrast, interaction states, keyboard paths, semantic structure, and readable content patterns.",
  },
];
