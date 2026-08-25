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
  /** Final creative assets TBD — placeholders until product-design images are delivered */
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
      "InvestmentMarkets is a platform for the potential investors that brings them high net worth investment opportunities, primarily aiming for growth, income or both. The...",
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
      "Dostpay is a 21st century mobile based 'Digital Banking Payments platform' which gets easily integrated with the core banking platform and gives the end user power of ...",
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
      "Validatr.io is a tool for the startups and businesses to do the market validation of the new business ideas and further do Market Research for the same. Both the market ...",
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
      "BioResearch Labs is a pharmaceutical research organization conducting multiple Phase II and III clinical trials across more than 40 global research sites. Managing data consistency and compliance across...",
    ],
    image:
      "/assets/final-images/capabilities/product-design/bioresearch_labs_success-story.png",
    imageAlt: "BioResearch Labs clinical research platform",
    background: "#000000",
    href: "/case-studies/bioresearch-labs",
  },
  {
    id: "oddysee",
    brand: "Oddysee",
    category: "Financial Forecasting | Civic-Municipal",
    paragraphs: [
      "Oddysee is the platform to automate the licensing process for domains that require a lot of documentation/plans. It has a documentation module with pre written ...",
    ],
    image:
      "/assets/final-images/capabilities/product-design/oddysee-success-story.png",
    imageAlt: "Oddysee licensing marketplace across desktop, tablet, and watch",
    background: "#032841",
    href: "/case-studies/oddysee",
  },
];

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
