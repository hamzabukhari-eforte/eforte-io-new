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
    image: "/assets/images/case-study/InstApp-Dealbanner.png",
    imageAlt: "UX design wireframes and user flows",
    imageSide: "right",
    tags: ["Wireframing", "Prototyping", "User Flows", "Journey Maps"],
  },
  {
    eyebrow: "UI Design",
    title: "Create interfaces that are intuitive, accessible, and easy to build",
    description:
      "UI design that is clean, intuitive, and implementation-ready for your development teams.",
    image: "/assets/images/case-study/komb-banner.png",
    imageAlt: "Clean UI design mockups",
    imageSide: "left",
    tags: ["Usability", "Accessibility", "Visual Hierarchy", "Design Systems"],
  },
  {
    eyebrow: "Service Design",
    title: "Shape holistic experiences across digital and non-digital touchpoints",
    description:
      "Service design that looks across channels and processes to deliver a consistent, connected experience.",
    image: "/assets/images/case-study/oddysee-banner.png",
    imageAlt: "Service design blueprint diagram",
    imageSide: "right",
    tags: ["Customer Journeys", "Service Blueprint", "Stakeholder Mapping", "Empathy Maps"],
  },
  {
    eyebrow: "UX Research",
    title: "Make product decisions grounded in evidence, not assumptions",
    description:
      "UX research that brings real user evidence into every key decision.",
    image: "/assets/images/case-study/CulturalFit.jpg",
    imageAlt: "UX research session with participants",
    imageSide: "left",
    tags: ["Interviews", "A/B Testing", "Surveys", "Personas"],
  },
  {
    eyebrow: "Visual Design",
    title: "Give your product a distinctive visual language that reinforces your brand",
    description:
      "Visual design that shapes a distinctive, on-brand look and feel with scalable assets.",
    image: "/assets/images/case-study/krank-banner.png",
    imageAlt: "Visual design system components",
    imageSide: "right",
    tags: ["Aesthetics", "Illustrations", "Iconography", "Animations"],
  },
];

export const productDesignShowcase: ProductDesignShowcaseItem[] = [
  {
    id: "cascade-utilities",
    brand: "Cascade Utilities Group",
    title: "Redesigning the field technician app",
    paragraphs: [
      "Cascade Utilities Group partnered with eForte to replace a legacy field app that forced constant office callbacks. Technician research shaped a rebuilt workflow and guided job logging.",
      "Results: 38% faster task completion, 52% fewer support tickets, and 96% adoption in month one—with no retraining required.",
    ],
    image: "/assets/images/package/studios/cascade-utilities-case.svg",
    imageAlt: "Cascade Utilities Group field technician app redesign",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    href: "/contact-us",
  },
  {
    id: "health",
    brand: "Health Experience",
    title: "Empowering better health experiences",
    paragraphs: [
      "A health-focused product team partnered with eForte to redesign their patient journey and app interface.",
      "eForte delivered a calm, empathetic UI and streamlined flows, making it easier for users to understand results and stay engaged with their care.",
    ],
    image: "/assets/images/case-study/oddysee-banner.png",
    imageAlt: "Health app redesign",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    href: "/contact-us",
  },
  {
    id: "learning",
    brand: "Education Platform",
    title: "Personalizing learning and careers",
    paragraphs: [
      "An education platform engaged eForte to refine its experience for students, teachers, and counselors.",
      "eForte combined product design and data-driven insights to build interfaces that make personalized recommendations transparent, actionable, and easy to navigate.",
    ],
    image: "/assets/images/case-study/InstApp-Dealbanner.png",
    imageAlt: "Education platform design",
    background: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
    href: "/contact-us",
  },
  {
    id: "fintech",
    brand: "Fintech Product",
    title: "Enabling data-driven fintech products",
    paragraphs: [
      "A growing fintech brand collaborated with eForte to improve onboarding, account management, and in-app communication.",
      "eForte used UX research and design systems to drive clarity, trust, and measurable improvements in activation and retention.",
    ],
    image: "/assets/images/case-study/komb-banner.png",
    imageAlt: "Fintech product design",
    background: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 100%)",
    href: "/contact-us",
  },
  {
    id: "edtech",
    brand: "EdTech Company",
    title: "Designing for families and educators",
    paragraphs: [
      "An edtech company worked with eForte to create a friendly, inclusive product for kids, parents, and teachers.",
      "eForte built a scalable design system with typography, color, and reusable components that support accessibility and future product growth.",
    ],
    image: "/assets/images/case-study/krank-banner.png",
    imageAlt: "EdTech product design system",
    background: "linear-gradient(135deg, #0d1b2a 0%, #1b2838 100%)",
    href: "/contact-us",
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
