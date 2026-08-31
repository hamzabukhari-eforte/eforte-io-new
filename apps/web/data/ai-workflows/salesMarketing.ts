import type { AiWorkflowDomain } from "./types";

export const salesMarketingDomain: AiWorkflowDomain = {
  slug: "sales-marketing",
  label: "Sales & Marketing",
  theme: "Agentic Revenue Workflows That Accelerate Growth",
  headline: "Accelerate Your Pipeline with Precision Intelligence.",
  body: "In modern sales, speed and personalization are everything. eForte empowers your revenue teams by automating the administrative burden of the sales cycle, ensuring your representatives spend their time closing deals, not entering data.",
  workflows: [
    {
      title: "Lead Qualification & Scoring",
      challenge:
        "Sales Representatives waste valuable time chasing low-quality leads while hot prospects go cold.",
      solution:
        "Our AI agents analyze incoming leads against your ideal customer profile (ICP) in real-time. By evaluating interaction history, behavioral patterns, and firmographic data, the system assigns a precise dynamic score. Hot leads are fast-tracked for immediate human follow-up, while cooler leads are entered into automated nurturing sequences.",
      impact:
        "Higher conversion rates and a sales team laser-focused on revenue-generating activities.",
    },
    {
      title: "Proposal & Quote Generation",
      challenge:
        "Creating custom proposals is a manual, error-prone bottleneck that slows down deal velocity.",
      solution:
        "Generate error-free, branded proposals in seconds. Our workflow pulls live customer data from your CRM, cross-references it with your pricing databases and product catalogs, and assembles a tailored proposal document ready for review.",
      impact:
        "Consistent pricing governance and a reduction in proposal creation time from hours to minutes.",
    },
    {
      title: "Sales Pipeline Reporting & Forecasting",
      challenge:
        'Manual forecasting is often a "best guess" exercise based on fragmented spreadsheets.',
      solution:
        "Achieve total pipeline visibility. This automation aggregates data from every touchpoint to generate real-time revenue forecasts. It identifies stalled deals, predicts closure probabilities based on historical data, and flags bottlenecks for sales management intervention.",
      impact:
        "Accurate revenue predictability and data-backed coaching for sales teams.",
    },
  ],
  workflowChips: [
    "Lead qualification & scoring",
    "Proposal & quote generation",
    "Pipeline forecasting",
  ],
  // Superseded by the animated AiWorkflowDiagram; kept for possible future reuse.
  diagramSrc:
    "/assets/images/package/business-domains/sales-marketing-revenue-workflows.svg",
  diagramAlt: "Sales and marketing agentic revenue workflow diagram",
  heroImageSrc:
    "/assets/final-images/ai-workflows/sales_marketing_agentic_revenue_hero.png",
  pillars: {
    agenticOrchestration: "Planner → Execution → Intelligence → Governance",
    velocityAi: "Reusable revenue acceleration playbooks.",
    foundationalDataLayer:
      "CRM, engagement data, pricing models, and sales analytics.",
  },
};
