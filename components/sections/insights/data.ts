export type InsightPost = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  date?: string;
  author?: string;
};

export const INSIGHT_CATEGORIES: string[] = [
  "News",
  "Cloud",
  "Culture & Events",
  "Data and AI",
  "Design",
  "Case Studies",
  "Software Engineering",
];

/** Convert category label to URL slug (e.g. "Data and AI" -> "data-and-ai"). */
export function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/\s*&\s*/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/** Resolve URL slug back to category label, or undefined if invalid. */
export function slugToCategory(slug: string): string | undefined {
  return INSIGHT_CATEGORIES.find((c) => categoryToSlug(c) === slug);
}

// Content taken from the Insights mega menu configuration in Navbar.
export const FEATURED_POST: InsightPost = {
  id: "modernizing-revenue-intelligence",
  title:
    "Modernizing revenue intelligence with a unified metrics foundation - a case study with Databook and Databricks",
  description:
    "Databook modernized its revenue intelligence platform by replacing fragmented, custom-built systems with a unified, AI-ready metrics foundation on Databricks. By centralizing metrics, governance, and semantic definitions, revenue teams now work from a single source of truth. This allows sales, finance, and operations to align on performance, reduce manual reporting effort, and unlock new AI-powered insights at scale.",
  imageSrc: "/assets/images/velocity-ai/insight-1.png",
  category: "Data and AI · Case Study",
  date: "January 22, 2026",
  author: "Marcelo Cordini",
};

export const OTHER_POSTS: InsightPost[] = [
  {
    id: "nist-ai-rmf-compliance",
    title: "We are compliant with NIST AI Risk Management Framework (AI RMF)",
    description:
      "We are proud to share that we are now aligned with the NIST AI Management Framework, bringing structured governance to AI-native products.",
    imageSrc: "/assets/images/landing/nist.png",
    category: "Data and AI · News",
    date: "January 10, 2026",
    author: "eForte AI Governance Team",
  },
  {
    id: "governance-migration-accelerator",
    title: "Solving Warehouse Migration at scale with our Governance Migration Accelerator",
    description:
      "Our Governance Migration Accelerator automates the migration of governable assets to the Databricks Intelligence Platform, reducing risk and manual effort.",
    imageSrc: "/assets/images/landing/nist.png",
    category: "Databricks · Data and AI",
    date: "December 12, 2025",
    author: "Data Platforms Studio",
  },
  {
    id: "unstructured-knowledge-assistant",
    title:
      "Our Unstructured Knowledge Assistant: Turning dispersed documents into searchable intelligence",
    description:
      "Turn enterprise files into a governed knowledge layer on Databricks with semantic search, retrieval-augmented generation, and tight access control.",
    imageSrc: "/assets/images/velocity-ai/case-study-myrow.png",
    category: "Data and AI · Knowledge Systems",
    date: "November 3, 2025",
    author: "Agentic Factory Studio",
  },
  {
    id: "secure-reliable-rag",
    title: "Building Secure and Reliable RAG in Databricks",
    description:
      "A standard RAG stack is not enough for production. This article shows how to build secure, observable, and governed RAG workloads on Databricks.",
    imageSrc: "/assets/images/velocity-ai/insight-2.png",
    category: "Databricks · Architecture",
    date: "September 15, 2025",
    author: "Data & AI Studio",
  },
  {
    id: "llms-know-it-all",
    title: "What to Know When LLMs Know It All?",
    description:
      "LLMs can autocomplete, refactor, and debug code at impressive speed, but they still require strong guardrails, governance, and human oversight.",
    imageSrc: "/assets/images/velocity-ai/insight-3.png",
    category: "AI Strategy",
    date: "August 8, 2025",
    author: "AI Strategy Team",
  },
  {
    id: "qbricks-agent-accelerator",
    title:
      "Introducing QBricks: An enterprise accelerator for AI agent development, a Built on Databricks solution",
    description:
      "QBricks gives organizations a governed, Databricks-native foundation for building, orchestrating, and scaling AI agents.",
    imageSrc: "/assets/images/velocity-ai/bento-ai-pods.png",
    category: "Agentic Factory · Databricks",
    date: "July 29, 2025",
    author: "Agentic Factory Studio",
  },
  {
    id: "inclusive-design-business-decision",
    title:
      "Designing for everyone is a business decision - Inclusive design drives better products",
    description:
      "Inclusive design, usability, and accessibility are essential foundations for building AI-native experiences that work for everyone.",
    imageSrc: "/assets/images/velocity-ai/cta-team.png",
    category: "Design · Product",
    date: "June 5, 2025",
    author: "Product Design Studio",
  },
];

/** All insight posts (featured + others) for category filtering. */
export const ALL_INSIGHT_POSTS: InsightPost[] = [FEATURED_POST, ...OTHER_POSTS];

/** Return posts whose category string includes the given category label. */
export function getPostsByCategorySlug(slug: string, posts: InsightPost[] = ALL_INSIGHT_POSTS): InsightPost[] {
  const category = slugToCategory(slug);
  if (!category) return [];
  return posts.filter((post) => post.category.toLowerCase().includes(category.toLowerCase()));
}

