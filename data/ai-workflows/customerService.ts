import type { AiWorkflowDomain } from "./types";

export const customerServiceDomain: AiWorkflowDomain = {
  slug: "customer-service",
  label: "Customer Service & Support",
  theme: "Autonomous Customer Service Workflows Powered by Agentic AI",
  headline: "Turn Support into Your Competitive Advantage.",
  body: "Customer expectations are instant. eForte transforms your support operations from a reactive cost center into a proactive, AI-driven experience hub. By deploying intelligent agents to handle the triage and routine inquiries, your human experts are freed to solve complex challenges and build relationships.",
  workflows: [
    {
      title: "Automated Customer Inquiry Routing",
      challenge:
        "Manual triage is slow, prone to error, and delays resolution.",
      solution:
        "We deploy AI agents equipped with advanced Natural Language Processing (NLP) to instantly analyze every incoming email, chat, and ticket. The system detects user intent, sentiment, and urgency with human-level nuance, automatically routing the query to the specific department or specialist best equipped to resolve it.",
      impact:
        "Zero-latency triage, optimized resource utilization, and drastically reduced First Response Time (FRT).",
    },
    {
      title: "Knowledge Base Auto-Response System",
      challenge:
        "Support teams burn cycles answering the same routine questions repeatedly.",
      solution:
        "Our system acts as an always-on first line of defense. It instantly scans your internal knowledge bases, documentation, and FAQs to generate accurate, context-aware answers to common inquiries. If a query is too complex or sensitive, the agent seamlessly hands it off to a human with full conversation context preserved.",
      impact:
        "24/7 instant support coverage and a significant reduction in ticket volume for human agents.",
    },
    {
      title: "Customer Feedback Analysis & Reporting",
      challenge:
        "Customer sentiment is buried in unstructured data across emails, surveys, and reviews.",
      solution:
        "Stop guessing what your customers think. Our AI continuously monitors feedback channels, extracting key themes, sentiment trends, and emerging issues. It aggregates this data into automated, actionable executive reports, highlighting specific areas for product or service improvement.",
      impact:
        "Data-driven product roadmaps and the ability to proactively address dissatisfaction before it leads to churn.",
    },
  ],
  workflowChips: [
    "Inquiry routing",
    "Knowledge base auto-responses",
    "Sentiment analysis",
  ],
  pillars: {
    agenticOrchestration: "Planner → Execution → Intelligence → Optimization",
    velocityAi:
      "Pre-built customer service agents and workflows accelerate deployment.",
    foundationalDataLayer:
      "Customer interaction data, CRM, ticketing systems, and feedback loops.",
  },
};
