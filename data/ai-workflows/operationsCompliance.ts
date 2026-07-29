import type { AiWorkflowDomain } from "./types";

export const operationsComplianceDomain: AiWorkflowDomain = {
  slug: "operations-compliance",
  label: "Operations & Compliance",
  theme: "AI-Orchestrated Operations & Compliance Workflows",
  headline: "Operational Excellence Meets Unyielding Compliance.",
  body: "Scaling operations introduces complexity and risk. eForte operationalizes resilience. We build intelligent systems that handle the heavy lifting of documentation and monitoring, ensuring your business runs smoothly and remains compliant without manual oversight.",
  workflows: [
    {
      title: "Document Processing & Data Extraction (IDP)",
      challenge:
        "Valuable business data is locked inside unstructured PDFs, forms, and scanned images.",
      solution:
        "Unlock your data assets. Our Intelligent Document Processing (IDP) workflow converts unstructured documents into structured, database-ready formats. Whether it's contracts, regulatory filings, or handwritten forms, the system extracts data with high accuracy.",
      impact:
        "Eliminated manual data entry and instant accessibility of critical business information.",
    },
    {
      title: "Compliance Monitoring & Reporting",
      challenge:
        "Regulatory environments are complex, and manual audits are often too infrequent to catch issues.",
      solution:
        "An always-on digital watchdog. This workflow continuously monitors business transactions and process logs against regulatory frameworks and internal policies. If a violation or anomaly is detected, it alerts the relevant stakeholders instantly.",
      impact:
        'Proactive risk mitigation and "audit-ready" compliance status at all times.',
    },
    {
      title: "Inventory Management & Reordering",
      challenge:
        "Balancing stock levels is a constant struggle between holding costs and stockouts.",
      solution:
        "Predictive supply chain intelligence. The system tracks inventory across locations in real-time and analyzes demand patterns. When stock reaches optimal reorder points, it automatically generates purchase orders for approval.",
      impact:
        "Optimized working capital and prevention of revenue loss due to out-of-stock items.",
    },
  ],
  workflowChips: [
    "Document processing",
    "Compliance monitoring",
    "Inventory management",
  ],
  pillars: {
    agenticOrchestration: "Execution → Governance → Intelligence → Optimization",
    velocityAi: "Compliance-ready agent frameworks.",
    foundationalDataLayer:
      "Policy repositories, operational data, and regulatory datasets.",
  },
};
