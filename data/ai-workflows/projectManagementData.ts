import type { AiWorkflowDomain } from "./types";

export const projectManagementDataDomain: AiWorkflowDomain = {
  slug: "project-management-data",
  label: "Project Management & Data",
  theme: "Intelligent Delivery & Data Workflows Powered by AI Agents",
  headline: "The Data-Driven Foundation for Success.",
  body: "Data is the fuel for AI, and execution is the engine of business. eForte ensures your data ecosystem is pristine and your projects are executed with precision visibility.",
  workflows: [
    {
      title: "Project Status Reporting & Tracking",
      challenge:
        "Project Managers spend half their week chasing updates and compiling status slides.",
      solution:
        "Unified project intelligence. This workflow aggregates data from Jira, Asana, GitHub, and other tools to create real-time, unified dashboards. It automatically identifies at-risk projects based on velocity and deadlines, sending proactive alerts.",
      impact:
        "Complete visibility into portfolio health and more time for strategic project leadership.",
    },
    {
      title: "Resource Allocation Optimization",
      challenge:
        "Overallocating staff leads to burnout; underallocating leads to waste.",
      solution:
        "Scientific staffing. The AI analyzes team capacity, skill sets, and project requirements to recommend the optimal resource allocation. It balances workloads across the portfolio to ensure delivery targets are met without burning out the team.",
      impact:
        "Maximized billable utilization and healthier, more productive teams.",
    },
    {
      title: "Data Quality Monitoring & Cleansing",
      challenge:
        '"Garbage in, garbage out"—bad data breaks AI models and ruins analytics.',
      solution:
        "Self-healing data ecosystems. This workflow continuously scans your databases for inconsistencies, duplicates, and errors. It automatically fixes common issues and flags complex anomalies for human review, ensuring your Foundational Data Layer remains solid.",
      impact:
        "Trustworthy data for analytics and reliable performance for downstream AI applications.",
    },
  ],
  workflowChips: [
    "Project status reporting",
    "Resource allocation",
    "Data quality monitoring",
  ],
  pillars: {
    agenticOrchestration: "Planner → Execution → Intelligence → Optimization",
    velocityAi: "Delivery intelligence accelerators.",
    foundationalDataLayer:
      "Project tools, operational metrics, and enterprise data platforms.",
  },
};
