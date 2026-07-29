import type { AiWorkflowDomain } from "./types";

export const financialOperationsDomain: AiWorkflowDomain = {
  slug: "financial-operations",
  label: "Financial Operations",
  theme: "Autonomous Financial Operations with Built-In Intelligence",
  headline: "Financial Rigor at the Speed of AI.",
  body: "eForte brings a new level of accuracy and speed to the office of the CFO. By automating high-volume transactional workflows, we reduce risk, ensure compliance, and provide real-time visibility into the financial health of the organization.",
  workflows: [
    {
      title: "Invoice Processing & Approval Workflow",
      challenge:
        "Manual AP processes are slow, susceptible to fraud, and result in late payments.",
      solution:
        'We implement "touchless" invoice processing. The system automatically extracts data from incoming invoices, performs 3-way matching against purchase orders and receipts, and routes the payment for approval based on predefined authority hierarchies.',
      impact:
        "Eliminated data entry errors, reduced processing costs, and strengthened vendor relationships through timely payments.",
    },
    {
      title: "Expense Report Automation",
      challenge:
        "Expense reporting is tedious for employees and a compliance headache for finance teams.",
      solution:
        "A frictionless experience for everyone. The workflow digitizes receipt capture, automatically categorizes expenses, and instantly flags policy violations. Once approved, the data is pushed directly to your accounting system for seamless reimbursement.",
      impact:
        "Dramatically improved employee experience and strict, automated adherence to corporate spending policies.",
    },
    {
      title: "Financial Reporting & Dashboard Generation",
      challenge:
        "Closing the books and generating reports often involves days of manual data aggregation.",
      solution:
        "Automated financial command. This workflow compiles data from your ERP, bank feeds, and billing systems to create standardized, audit-ready financial reports and real-time KPI dashboards. It can even alert stakeholders immediately to budget variances or anomalies.",
      impact:
        "A faster financial close and stakeholders who are always informed of the company's financial position.",
    },
  ],
  workflowChips: [
    "Invoice processing",
    "Expense automation",
    "Financial reporting",
  ],
  pillars: {
    agenticOrchestration: "Execution → Intelligence → Governance → Optimization",
    velocityAi: "Pre-configured financial automation frameworks.",
    foundationalDataLayer:
      "ERP, accounting systems, transaction data, and audit logs.",
  },
};
