// Preserved for future reuse — success stories & insights now reuse Data page content
// import { insightProfileImages } from "./insightProfileImages";

export const CYBER_ACCENT = "#D3287A";

export const cyberHero = {
  eyebrow: "CYBERSECURITY",
  title: "eForte's Cybersecurity Studio protects the systems everything else depends on",
  description:
    "As AI systems gain the ability to act, not just recommend, security becomes even more critical: a compromised agent isn't just a data risk, it's an operational one. Our Cybersecurity Studio assesses, hardens, and monitors your systems, applications, and infrastructure so the technology you rely on stays trustworthy. We build security into the design of every engagement across eForte's Studios, rather than bolting it on at the end.",
  ctaLabel: "Contact us",
  image:
    "/assets/final-images/capabilities/cybersecurity/cybersecurity-hero.jpg",
};

export const cyberAiSecurityIntro = {
  badge: "AI SECURITY",
  title: "We are leading the AI-security transformation",
  description:
    "We provide a holistic approach that ensures that as you adopt AI, it becomes a secure, resilient, and transformative component of your business, not a liability.",
  cards: [
    {
      id: "securing-ai",
      title: "Securing your AI",
      description:
        "We establish the robust governance and assurance needed to protect your own AI systems, data, and models from emerging threats like data poisoning and model theft.",
      iconSrc: "/assets/images/capabilities/securing.svg",
    },
    {
      id: "ai-powered",
      title: "AI-powered security",
      description:
        "We leverage AI to transform security operations, automating threat detection and augmenting your team so they can focus on the most critical tasks.",
      iconSrc: "/assets/images/capabilities/powered.svg",
    },
  ],
};

export const cyberStudioVideo = {
  eyebrow: "CYBERSECURITY STUDIO",
  title: "eForte's approach to AI security transformations",
  youtubeUrl: "https://www.youtube.com/watch?v=AxnIFqEakag",
};

export const cyberPillars = {
  badge: "SECURITY",
  title: "3 core pillars to our security offerings",
  subtitle: "We provide both professional & managed services",
  items: [
    {
      id: "advisory",
      title: "Advisory",
      iconSrc: "/assets/images/capabilities/advisory.svg",
      items: [
        "M&A advisory",
        "Cyber strategy & program development",
        "vCISO",
        "vArchitect",
      ],
    },
    {
      id: "assurance",
      title: "Assurance",
      iconSrc: "/assets/images/capabilities/assurance.svg",
      featured: true,
      items: [
        "Penetration testing",
        "Cloud security assessments",
        "AI security assessments",
        "Application security assessments",
        "Vendor risk management",
        "GRC solution guidance & implementation support",
        "Control framework assessment & implementation",
        "CMMC",
      ],
    },
    {
      id: "engineering",
      title: "Engineering",
      iconSrc: "/assets/images/capabilities/engineering.svg",
      items: [
        "Secure SDLC",
        "Security staff augmentation",
        "Managed detection & response",
        "Technology deployments & hardening",
        "Zero-touch IT",
        "AI powered cybersecurity",
      ],
    },
  ],
};

export const cyberSolutions = {
  badge: "CYBERSECURITY",
  title: "Our solutions",
  description:
    "eForte's solutions portfolio is crafted to empower organizations to confidently navigate the intricate cybersecurity landscape. We provide strategic guidance and technical expertise to bolster your defenses, enhance resilience, and streamline compliance.",
  bannerImage: "/assets/images/capabilities/tech.jpg",
};

export const cyberTransformation = {
  title: "AI security transformation",
  heading:
    "eForte's AI security transformation solution is built on two core tenets:",
  tenets: [
    {
      id: "governance",
      label: "Securing AI systems and governance",
      icon: "star" as const,
    },
    {
      id: "ai-powered",
      label: "AI-powered cybersecurity",
      icon: "bolt" as const,
    },
  ],
  paragraphs: [
    "We help organizations establish the policies, controls, and technical safeguards required to adopt AI securely — covering model risk, data protection, and continuous assurance.",
    "In parallel, we embed AI into security operations so teams detect faster, respond smarter, and reduce the operational burden of modern threat landscapes.",
  ],
};

export const cyberServices = [
  {
    id: "app-security",
    title: "Application security",
    icon: "loop" as const,
    iconBg: "#8B5CF6",
    paragraphs: [
      "We transform security into a continuous discipline throughout the SDLC — not a gate at the end.",
      "Our expertise spans OWASP Top 10, CWE/SANS Top 25, and ISO/IEC 27034 aligned practices for enterprise applications.",
    ],
  },
  {
    id: "compliance",
    title: "Continuous compliance & security assurance",
    icon: "chart" as const,
    iconBg: "#F59E0B",
    paragraphs: [
      "We modernize GRC with a technology-driven approach that keeps controls measurable and audit-ready.",
      "Teams reduce manual assurance work burden by 90%+ while improving evidence quality and response times.",
    ],
  },
  {
    id: "devsecops",
    title: "DevSecOps",
    icon: "terminal" as const,
    iconBg: "#22C55E",
    paragraphs: [
      "We redefine security for cloud and development environments by integrating automated checks into pipelines.",
      "From policy-as-code to runtime guardrails, security becomes part of how you ship — not a blocker.",
    ],
  },
  {
    id: "resiliency",
    title: "Cyber resiliency",
    icon: "globe" as const,
    iconBg: "#EF4444",
    paragraphs: [
      "We prepare organizations to recover from cyberattacks with playbooks that assume breach is inevitable.",
      "The focus shifts from prevention-only to operational continuity, rapid containment, and measured recovery.",
    ],
  },
  {
    id: "risk",
    title: "Cyber risk management",
    icon: "warning" as const,
    iconBg: "#D3287A",
    paragraphs: [
      "We treat cybersecurity as a core business discipline with a clear framework for managing risk.",
      "Risk is modeled in financial terms where useful, so leaders can prioritize investments with confidence.",
    ],
  },
  {
    id: "managed",
    title: "Managed defense",
    icon: "shield" as const,
    iconBg: "#F97316",
    paragraphs: [
      "Our 24/7 security operations capability is designed to reduce Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR).",
      "Built on an eXtended Detection and Response (XMDR) model, it augments your team with continuous coverage.",
    ],
  },
];

export const cyberCertifications = {
  title: "Certifications",
  staffLabel: "Staff certifications",
  staffIcons: [
    {
      src: "/assets/images/capabilities/cissp.png",
      alt: "CISSP",
    },
    {
      src: "/assets/images/capabilities/cipt.png",
      alt: "CIPT",
    },
    {
      src: "/assets/images/capabilities/azure.png",
      alt: "Microsoft Azure Certified",
    },
    {
      src: "/assets/images/capabilities/aws.png",
      alt: "AWS Certified",
    },
    {
      src: "/assets/images/capabilities/arte.png",
      alt: "ARTE",
    },
    {
      src: "/assets/images/capabilities/maturity.png",
      alt: "Security certification",
    },
    {
      src: "/assets/images/capabilities/ewpt.png",
      alt: "eWPT",
    },
    {
      src: "/assets/images/capabilities/oscp.png",
      alt: "OSCP+",
    },
  ],
  complianceLabel: "eForte compliance",
  complianceIcons: [
    {
      src: "/assets/images/landing/iso.png",
      alt: "ISO 27001 Certified",
    },
    // Preserved — SOC 2 Type 2 intentionally omitted from display
    // {
    //   src: "/assets/images/landing/soc.png",
    //   alt: "SOC 2 Type 2",
    // },
    {
      src: "/assets/images/landing/nist.png",
      alt: "NIST Compliant",
    },
  ],
};

// Preserved for future reuse — page now uses dataShowcase from data.ts
/* export const cyberSuccessStories = [
  {
    id: "redcliff-pharma",
    brand: "Redcliff Pharmaceuticals",
    category: "Security & compliance",
    paragraphs: [
      "We ran a full security assessment, remediated critical vulnerabilities, and implemented continuous monitoring aligned to Redcliff's compliance requirements — achieving zero audit findings and cutting incident response from days to under 2 hours.",
    ],
    tags: ["Security assessment", "Compliance readiness", "24/7 monitoring"],
    image: "/assets/images/package/studios/redcliff-pharma-case.svg",
    imageAlt: "Redcliff Pharmaceuticals security hardening case study",
    background: "#0A1A2E",
    href: "/impact-studies",
  },
  {
    id: "stride",
    brand: "Stride Funding",
    category: "Cybersecurity consulting",
    paragraphs: [
      "Multi-year cybersecurity consulting for Stride Funding — identifying vulnerabilities across systems and platforms and strengthening security strategy for their outcomes-based lending products.",
    ],
    tags: [
      "Cybersecurity consulting",
      "Vulnerability identification",
      "Security strategy",
    ],
    image: "/assets/images/capabilities/cybersecurity/stride-story.png",
    imageAlt: "Stride Funding cybersecurity success story",
    background: "#1A0A2E",
    href: "/impact-studies",
  },
  {
    id: "enterprise-defense",
    brand: "Enterprise Defense",
    category: "Multi-cloud security",
    paragraphs: [
      "Advisory and engineering support for a fast-growing enterprise — from vulnerability remediation to managed defense workflows that reduced MTTD and MTTR across cloud and product environments.",
    ],
    tags: ["Managed defense", "Cloud security", "Continuous assurance"],
    image: "/assets/images/industry/cybersecurity.jpg",
    imageAlt: "Enterprise cybersecurity program",
    background: "#0A2A42",
    href: "/impact-studies",
  },
]; */

export const cyberExpertsSpotlight = {
  eyebrow: "CYBERSECURITY STUDIO",
  title: "Our experts in the spotlight: Driving the agenda in cybersecurity",
  youtubeUrl: "https://www.youtube.com/watch?v=AxnIFqEakag",
};

// Preserved for future reuse — page now uses dataInsights from data.ts
/* export const cyberInsights = [
  {
    id: "1",
    author: "Michell Mamrut",
    authorImage: insightProfileImages.benjamin,
    title:
      "HIPAA Security Rule: what's changing, what's coming, and how to prepare now",
    summary:
      "The most significant update to the HIPAA Security Rule since 2013 — what the 2025 NPRM means for security programs and how to prepare now.",
    date: "May 19, 2026",
    tags: ["News"],
    image: "/assets/images/capabilities/cybersecurity/insight-hipaa.png",
  },
  {
    id: "2",
    author: "João Claudino Silva",
    authorImage: insightProfileImages.edward,
    title: "Why SIEM Is Not Enough, and Where AI Fills the Gap",
    summary:
      "SIEM captures alerts, but AI is needed to effectively catch threats — how modern SOC teams close the gap between noise and action.",
    date: "April 1, 2026",
    tags: ["Data and AI"],
    image: "/assets/images/capabilities/cybersecurity/insight-siem.png",
  },
  {
    id: "3",
    author: "Michell Mamrut",
    authorImage: insightProfileImages.profile,
    title:
      "The healthcare cybersecurity crisis: Lessons from Blackout-26 and how to protect patient data under HIPAA",
    summary:
      "What Blackout-26 revealed about healthcare cyber resilience — and practical steps to protect patient data under HIPAA.",
    date: "March 12, 2026",
    tags: ["Cybersecurity"],
    image: "/assets/images/industry/cybersecurity.jpg",
  },
]; */

export const cyberFaqs = [
  {
    question: "Do you offer cybersecurity assessments or audits?",
    answer:
      "Yes. We provide penetration testing, cloud security assessments, AI security assessments, application security reviews, vendor risk management, and control framework assessments aligned to frameworks like NIST, ISO 27001, and CMMC.",
  },
  {
    question:
      "How does eForte ensure the security of AI and machine learning systems?",
    answer:
      "We combine governance and technical controls — from model risk and data protection to secure MLOps pipelines — so AI systems are resilient against threats like data poisoning, model theft, and prompt injection.",
  },
  {
    question: "What certifications does eForte have?",
    answer:
      "eForte is SOC 2 Type 2 and ISO 27001 certified, and NIST compliant. Our practitioners also hold industry certifications including CISSP, OSCP, AWS, Azure, and more.",
  },
  {
    question: "Do you have experience building security focused AI agents?",
    answer:
      "Yes. We design and deploy AI agents that support detection, triage, and response workflows — always with enterprise controls, observability, and human oversight where required.",
  },
  {
    question: "What cybersecurity roles can you provide to our team?",
    answer:
      "We provide vCISO and vArchitect advisory, security engineers, AppSec specialists, GRC practitioners, and managed detection & response coverage — as staff augmentation or managed services.",
  },
];

