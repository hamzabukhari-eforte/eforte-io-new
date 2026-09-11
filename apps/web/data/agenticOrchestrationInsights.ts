export type AgenticInsightSection = {
  heading: string;
  paragraphs: string[];
};

export type AgenticInsightArticle = {
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
  sections: AgenticInsightSection[];
};

const IMAGE_BASE =
  "/assets/final-images/agentic-orchestration/insights";

export const agenticOrchestrationInsights: AgenticInsightArticle[] = [
  {
    slug: "multi-agent-orchestration-at-enterprise-scale",
    href: "/agentic-orchestration/insights/multi-agent-orchestration-at-enterprise-scale",
    author: "eForte Agentic Studio",
    title:
      "Multi-agent orchestration at enterprise scale: from isolated copilots to coordinated outcomes",
    excerpt:
      "Enterprises do not need more chat windows. They need specialized agents that plan, hand off, and complete work across systems — with a clear orchestration layer that owns context, policy, and auditability.",
    date: "September 8, 2026",
    readTime: "8 min read",
    category: "Data and AI",
    imageSrc: `${IMAGE_BASE}/insight-multi-agent-orchestration.png`,
    imageAlt:
      "Abstract multi-agent network with a pink control hub on a dark background",
    sections: [
      {
        heading: "Copilots are not an operating model",
        paragraphs: [
          "Most organizations started with a single assistant bolted onto a workflow. That helps individuals move faster, but it does not change how the business runs. Real value appears when multiple specialized agents collaborate: one retrieves governed data, another reasons over policy, another executes a system action, and a supervisor agent sequences the path.",
          "Without orchestration, those agents compete for context, duplicate tool calls, and produce outcomes no one can reconstruct. The orchestration layer is the difference between a demo and a production system.",
        ],
      },
      {
        heading: "Design for handoffs, not heroic single agents",
        paragraphs: [
          "High-performing agentic systems treat each agent like a service with a narrow contract: inputs, tools, success criteria, and failure modes. Orchestration routes work based on intent and state, not on a single model trying to do everything.",
          "That design also maps cleanly to enterprise reality — CRM, ERP, data platforms, and ticketing tools already behave as services. Agents should do the same. Your Foundational Data Layer supplies the shared memory; orchestration supplies the choreography.",
        ],
      },
      {
        heading: "Make every step inspectable",
        paragraphs: [
          "Regulated teams will not accept opaque autonomy. Store the plan, the tool calls, the policy checks, and the final action with a durable trail. When an agent escalates to a human, the same trail becomes the brief. That is how agentic orchestration earns trust at scale.",
        ],
      },
    ],
  },
  {
    slug: "human-in-the-loop-control-planes",
    href: "/agentic-orchestration/insights/human-in-the-loop-control-planes",
    author: "eForte Responsible AI Practice",
    title:
      "Human-in-the-loop control planes: keeping agentic systems fast without giving up accountability",
    excerpt:
      "Autonomy without checkpoints is a risk program, not a product. The winning pattern is a control plane where agents move quickly inside policy — and pause for humans exactly where judgment, liability, or customer impact demands it.",
    date: "August 21, 2026",
    readTime: "7 min read",
    category: "Data and AI",
    imageSrc: `${IMAGE_BASE}/insight-human-in-the-loop.png`,
    imageAlt:
      "Glass control panel with pink approval gates interrupting blue AI workflow streams",
    sections: [
      {
        heading: "Speed and oversight are not opposites",
        paragraphs: [
          "Teams often treat human review as a brake. In practice, well-placed checkpoints increase throughput because agents stop guessing at the moments that create rework, escalations, or compliance findings.",
          "A control plane defines which actions are auto-approved, which need confirmation, and which are blocked. Agents execute inside those rails. Humans spend time on exceptions that matter.",
        ],
      },
      {
        heading: "Put the checkpoint in the path",
        paragraphs: [
          "A dashboard after the fact is not a control plane. Approval has to live in the workflow: before a payment is released, before a customer message is sent, before a record is permanently changed. The agent prepares the recommendation, the evidence, and the recommended action. The human decides.",
          "That pattern is the same posture we use in regulated AI delivery — verifiable transparency, clear ownership, and an auditable override story.",
        ],
      },
      {
        heading: "Measure the quality of escalation",
        paragraphs: [
          "If every run escalates, the agent is not ready. If nothing escalates, the policy is fiction. Track escalation rate, override rate, and time-to-decision. Those metrics tell you whether orchestration is earning autonomy or just hiding risk.",
        ],
      },
    ],
  },
  {
    slug: "agent-pods-that-deliver-outcomes",
    href: "/agentic-orchestration/insights/agent-pods-that-deliver-outcomes",
    author: "eForte Delivery Studio",
    title:
      "Agent pods that deliver outcomes: packaging orchestration as a product, not a science project",
    excerpt:
      "The organizations moving fastest are not buying another model. They are packaging agents, tools, data contracts, and operating rituals into reusable pods that own a business outcome end to end.",
    date: "July 14, 2026",
    readTime: "6 min read",
    category: "Case Studies",
    imageSrc: `${IMAGE_BASE}/insight-agent-pods-outcomes.png`,
    imageAlt:
      "Hexagonal agent pods feeding into a rising outcome arc with pink accents",
    sections: [
      {
        heading: "Outcome ownership beats feature lists",
        paragraphs: [
          "An agent pod is a product unit: a named outcome, a bounded domain, the agents and tools required, the data it may touch, and the SLAs operations will defend. Customer service triage, invoice exception handling, and talent screening each deserve their own pod — not one mega-agent.",
          "Packaging this way makes ROI measurable. You are not arguing about model quality in the abstract. You are shipping a reduction in cycle time, error rate, or cost-to-serve.",
        ],
      },
      {
        heading: "Reuse the platform, specialize the pod",
        paragraphs: [
          "Shared infrastructure — identity, logging, evaluation, the Foundational Data Layer — should be common. Domain prompts, tools, and policies should be pod-specific. That split keeps platforms healthy and business teams able to move without waiting for a central bottleneck.",
        ],
      },
      {
        heading: "Operate it like software",
        paragraphs: [
          "Pods need owners, release criteria, evaluation sets, and rollback plans. Treat agent behavior changes like code changes. When orchestration is productized this way, agentic systems stop being pilots and start becoming durable enterprise capability.",
        ],
      },
    ],
  },
];

export function getAgenticInsightBySlug(
  slug: string
): AgenticInsightArticle | undefined {
  return agenticOrchestrationInsights.find((article) => article.slug === slug);
}

export function getAgenticInsightSlugs(): string[] {
  return agenticOrchestrationInsights.map((article) => article.slug);
}
