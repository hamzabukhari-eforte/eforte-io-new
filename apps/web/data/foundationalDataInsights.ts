export type FoundationalDataInsightSection = {
  heading: string;
  paragraphs: string[];
};

export type FoundationalDataInsightArticle = {
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
  sections: FoundationalDataInsightSection[];
};

const IMAGE_BASE =
  "/assets/final-images/foundational-data-layer/insights";

export const foundationalDataInsights: FoundationalDataInsightArticle[] = [
  {
    slug: "ai-ready-data-platform-not-another-warehouse",
    href: "/foundational-data-layer/insights/ai-ready-data-platform-not-another-warehouse",
    author: "eForte Data Platforms Studio",
    title:
      "An AI-ready data platform is not another warehouse — it is the operating system for intelligent work",
    excerpt:
      "Models fail quietly when context is fragmented. A Foundational Data Layer turns ingestion, quality, semantics, and access into one governed platform so agents and analytics share the same truth.",
    date: "September 5, 2026",
    readTime: "8 min read",
    category: "Data and AI",
    imageSrc: `${IMAGE_BASE}/insight-ai-ready-platform.png`,
    imageAlt:
      "Stacked translucent data planes forming an AI-ready platform with pink accents",
    sections: [
      {
        heading: "AI products inherit your data debt",
        paragraphs: [
          "When teams rush a model into production on top of brittle extracts, the failure mode is rarely the algorithm. It is missing lineage, conflicting definitions, and permissions that were never designed for machine consumers.",
          "An AI-ready platform treats data as product infrastructure: reliable contracts, clear ownership, and retrieval paths agents can trust under load.",
        ],
      },
      {
        heading: "Build once for humans and agents",
        paragraphs: [
          "Dashboards and agentic workflows should not invent separate realities. Shared semantic definitions, curated domains, and governed features keep every consumer aligned — from a CFO report to an autonomous exception handler.",
          "That is the role of the Foundational Data Layer: the common memory for Velocity AI and Agentic Orchestration, not a side project for analytics alone.",
        ],
      },
      {
        heading: "Measure readiness, not slideware",
        paragraphs: [
          "Track freshness SLAs, contract breakage, PII coverage, and retrieval latency. If those numbers are soft, your AI roadmap is soft. Platform maturity shows up in operations metrics long before it shows up in demos.",
        ],
      },
    ],
  },
  {
    slug: "governed-lakehouse-for-regulated-enterprises",
    href: "/foundational-data-layer/insights/governed-lakehouse-for-regulated-enterprises",
    author: "eForte Governance Practice",
    title:
      "The governed lakehouse: how regulated enterprises get speed without losing the audit trail",
    excerpt:
      "Open formats and elastic compute only help if access, classification, and change control travel with the data. Governance is not a committee — it is platform capability.",
    date: "August 18, 2026",
    readTime: "7 min read",
    category: "Data and AI",
    imageSrc: `${IMAGE_BASE}/insight-governed-lakehouse.png`,
    imageAlt:
      "Crystal data cubes inside a transparent vault lattice with blue and pink security accents",
    sections: [
      {
        heading: "Freedom without control is just shadow IT",
        paragraphs: [
          "Lakehouse architectures unlock collaboration across domains. They also multiply the blast radius when every team copies sensitive tables into personal sandboxes. Regulated industries need the opposite: shared platforms with hard edges.",
          "Column-level permissions, purpose-based access, and automated classification belong in the path of every read — including tool calls made by agents.",
        ],
      },
      {
        heading: "Lineage is the product brief for auditors",
        paragraphs: [
          "When a model decision or a dashboard figure is challenged, teams must reconstruct inputs, transforms, and owners. End-to-end lineage turns that from a week of archaeology into a query.",
          "Pair lineage with change management for semantic definitions. If “revenue” moves, every dependent agent and report should know why.",
        ],
      },
      {
        heading: "Design for explainable consumption",
        paragraphs: [
          "Publish data products with contracts, owners, and quality signals visible to consumers. Agents that retrieve from those products inherit the same accountability story as humans — which is exactly what exam and risk teams expect.",
        ],
      },
    ],
  },
  {
    slug: "trusted-metrics-and-real-time-pipelines",
    href: "/foundational-data-layer/insights/trusted-metrics-and-real-time-pipelines",
    author: "eForte Delivery Studio",
    title:
      "Trusted metrics and real-time pipelines: the foundation behind every autonomous outcome",
    excerpt:
      "Agentic systems move at the speed of their freshest reliable signal. If metrics disagree and pipelines lag, orchestration only amplifies confusion. Trust is engineered upstream.",
    date: "July 9, 2026",
    readTime: "6 min read",
    category: "Case Studies",
    imageSrc: `${IMAGE_BASE}/insight-trusted-metrics.png`,
    imageAlt:
      "Real-time data streams converging into a trusted metrics prism with pink accents",
    sections: [
      {
        heading: "Define metrics like APIs",
        paragraphs: [
          "A metric without an owner, grain, and refresh contract is a rumor. Treat certified metrics as versioned interfaces: who computes them, which sources feed them, and what breaks when they drift.",
          "That discipline is what lets sales, finance, and an agentic workflow argue from the same number instead of three spreadsheets.",
        ],
      },
      {
        heading: "Streaming is a reliability problem",
        paragraphs: [
          "Real-time pipelines fail in subtler ways than batch jobs — late events, duplicate keys, schema evolution mid-flight. Invest in observability, idempotent sinks, and quality gates that block bad data before agents act on it.",
        ],
      },
      {
        heading: "Close the loop with outcomes",
        paragraphs: [
          "When an agent completes a workflow, write the outcome back into the Foundational Data Layer. Tomorrow’s models and dashboards get smarter because operations today left a clean trail. That feedback loop is the difference between a pilot and a compounding platform.",
        ],
      },
    ],
  },
];

export function getFoundationalDataInsightBySlug(
  slug: string
): FoundationalDataInsightArticle | undefined {
  return foundationalDataInsights.find((article) => article.slug === slug);
}

export function getFoundationalDataInsightSlugs(): string[] {
  return foundationalDataInsights.map((article) => article.slug);
}
