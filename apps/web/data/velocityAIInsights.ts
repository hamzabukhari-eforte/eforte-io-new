export type VelocityAIInsightSection = {
  heading: string;
  paragraphs: string[];
};

export type VelocityAIInsightArticle = {
  slug: string;
  href: string;
  author: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  sections: VelocityAIInsightSection[];
};

const IMAGE_BASE = "/assets/final-images/velocity-ai/insights";

export const velocityAIInsights: VelocityAIInsightArticle[] = [
  {
    slug: "secure-pathway-to-ai-value",
    href: "/velocity-ai/insights/secure-pathway-to-ai-value",
    author: "eForte Velocity AI Studio",
    title:
      "The secure pathway to AI value: why speed without guardrails is just expensive risk",
    excerpt:
      "Velocity AI is not a shortcut around governance. It is a delivery system that makes ethical, secure, and measurable AI the fastest path — because every checkpoint is engineered into the flow, not bolted on after launch.",
    date: "September 6, 2026",
    readTime: "8 min read",
    category: "Data and AI",
    imageSrc: `${IMAGE_BASE}/insight-secure-pathway.png`,
    imageAlt:
      "Luminous secure AI pathway with pink checkpoint gates on a dark background",
    sections: [
      {
        heading: "Fast demos hide slow failures",
        paragraphs: [
          "Teams that optimize only for time-to-prototype often pay later in rework, audit findings, and customer trust. A secure pathway treats identity, data access, evaluation, and human oversight as first-class delivery steps — the same way CI treats tests.",
          "Velocity AI packages those steps so product teams do not invent governance from scratch on every initiative.",
        ],
      },
      {
        heading: "Guardrails should accelerate decisions",
        paragraphs: [
          "When policy checks, data contracts, and approval gates live in the pathway, agents and engineers stop guessing. Cleared work moves faster. Risky work escalates with evidence. That is how regulated enterprises get velocity without gambling.",
        ],
      },
      {
        heading: "Value is a measured outcome",
        paragraphs: [
          "Define the KPI before the model: cycle time, cost-to-serve, defect escape rate, or conversion. Instrument the pathway so every release proves movement against that KPI. Otherwise “AI value” remains a slide, not an operating result.",
        ],
      },
    ],
  },
  {
    slug: "comprehensive-framework-for-digital-transformation",
    href: "/velocity-ai/insights/comprehensive-framework-for-digital-transformation",
    author: "eForte Transformation Practice",
    title:
      "A comprehensive framework for high-velocity ethical digital transformation",
    excerpt:
      "Transformation stalls when AI, data, and delivery live in separate playbooks. Velocity AI connects them into one framework — so strategy, engineering, and risk share the same operating rhythm.",
    date: "August 22, 2026",
    readTime: "7 min read",
    category: "Data and AI",
    imageSrc: `${IMAGE_BASE}/insight-framework-core.png`,
    imageAlt:
      "Interlocking framework rings with blue telemetry and pink accent nodes",
    sections: [
      {
        heading: "One framework, many workstreams",
        paragraphs: [
          "Digital transformation fails when each workstream invents its own language for readiness, quality, and release. A shared framework gives leaders a common scoreboard and teams a common path from idea to production.",
          "Velocity AI sits at that intersection: Foundational Data for truth, Agentic Orchestration for execution, and engineering standards for safe change.",
        ],
      },
      {
        heading: "Ethics is an operating control",
        paragraphs: [
          "Ethical AI is not a values poster. It is documented ownership, testable policies, and escalation paths that appear in the same runbooks as latency budgets and rollback plans.",
        ],
      },
      {
        heading: "Scale what you can repeat",
        paragraphs: [
          "The framework only matters if pods, platforms, and playbooks can be reused. Codify patterns that worked — evaluation sets, approval matrices, data contracts — and retire one-off heroes.",
        ],
      },
    ],
  },
  {
    slug: "engineering-velocity-with-ai-augmented-delivery",
    href: "/velocity-ai/insights/engineering-velocity-with-ai-augmented-delivery",
    author: "eForte Engineering Studio",
    title:
      "Engineering velocity with AI-augmented delivery — without sacrificing craft",
    excerpt:
      "AI coding assistants raise throughput only when platforms, reviews, and quality gates keep pace. Velocity AI turns augmentation into a managed delivery system, not a personal productivity hack.",
    date: "July 11, 2026",
    readTime: "6 min read",
    category: "Software Engineering",
    imageSrc: `${IMAGE_BASE}/insight-engineering-velocity.png`,
    imageAlt:
      "Code lattices transforming into automated delivery streams with pink velocity sparks",
    sections: [
      {
        heading: "Augment the system, not only the individual",
        paragraphs: [
          "When every engineer uses a different assistant with no shared standards, quality becomes lottery. Encode prompts, review checklists, security scans, and merge criteria into the delivery platform so AI output meets the same bar as human code.",
        ],
      },
      {
        heading: "Measure what speed actually costs",
        paragraphs: [
          "Track lead time and change failure rate together. If throughput rises while incidents rise, you did not gain velocity — you borrowed it. Velocity AI ties engineering metrics to AI-assisted workflows so leaders see the full picture.",
        ],
      },
      {
        heading: "Keep humans on the craft decisions",
        paragraphs: [
          "Architecture, threat modeling, and customer-impacting UX still need expert judgment. Use AI to draft, generate tests, and surface risks — then put senior engineers on the decisions that compound for years.",
        ],
      },
    ],
  },
];

export function getVelocityAIInsightBySlug(
  slug: string
): VelocityAIInsightArticle | undefined {
  return velocityAIInsights.find((article) => article.slug === slug);
}

export function getVelocityAIInsightSlugs(): string[] {
  return velocityAIInsights.map((article) => article.slug);
}
