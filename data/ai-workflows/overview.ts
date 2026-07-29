import {
  HiChatBubbleLeftRight,
  HiChartBar,
  HiCurrencyDollar,
  HiUserGroup,
  HiShieldCheck,
  HiClipboardDocumentList,
} from "react-icons/hi2";
import type { AiWorkflowOverviewContent } from "./types";

export const aiWorkflowsOverview: AiWorkflowOverviewContent = {
  eyebrow: "AI Workflows",
  headline:
    "AI-Driven Enterprise Domain Capabilities: Where AI Meets Execution.",
  body: "We don't just build software; we engineer business outcomes. By fusing deep industry expertise with our Agentic Orchestration, we deliver specialized AI powered enterprise domains capabilities that modernize every facet of your operation-from the back office to the customer frontline.",
  domainsLabel: "Business Domains",
  domainsTitle: "The AI-Powered Business Domains",
  domainsDescription:
    "Explore each specialized domain and see how agentic workflows modernize operations—from customer frontline to back office.",
  cards: [
    {
      title: "Customer Service & Support",
      tagline: "Autonomous Customer Service Workflows Powered by Agentic AI",
      description:
        "AI agents that route, resolve, analyze sentiment, and continuously optimize customer interactions.",
      href: "/ai-workflows/customer-service",
      icon: HiChatBubbleLeftRight,
      iconColor: "#D3287A",
      hoverGradient:
        "linear-gradient(135deg, #D3287A 0%, #be185d 45%, #9d174d 100%)",
    },
    {
      title: "Sales & Marketing",
      tagline: "Agentic Revenue Workflows That Accelerate Growth",
      description:
        "Autonomous AI agents qualifying leads, generating proposals, and driving pipeline velocity.",
      href: "/ai-workflows/sales-marketing",
      icon: HiChartBar,
      iconColor: "#db2777",
      hoverGradient:
        "linear-gradient(135deg, #db2777 0%, #D3287A 50%, #831843 100%)",
    },
    {
      title: "Financial Operations",
      tagline: "Autonomous Financial Operations with Built-In Intelligence",
      description:
        "AI agents ensuring accuracy, compliance, and fraud detection across financial workflows.",
      href: "/ai-workflows/financial-operations",
      icon: HiCurrencyDollar,
      iconColor: "#e11d48",
      hoverGradient:
        "linear-gradient(135deg, #e11d48 0%, #D3287A 50%, #9f1239 100%)",
    },
    {
      title: "Human Resources",
      tagline: "Agentic Talent Lifecycle Workflows",
      description:
        "AI-driven automation across hiring, onboarding, performance management, and workforce insights.",
      href: "/ai-workflows/human-resources",
      icon: HiUserGroup,
      iconColor: "#be185d",
      hoverGradient:
        "linear-gradient(135deg, #f472b6 0%, #D3287A 40%, #9d174d 100%)",
    },
    {
      title: "Operations & Compliance",
      tagline: "AI-Orchestrated Operations & Compliance Workflows",
      description:
        "Continuous monitoring, risk mitigation, and automated regulatory reporting through agentic systems.",
      href: "/ai-workflows/operations-compliance",
      icon: HiShieldCheck,
      iconColor: "#c026d3",
      hoverGradient:
        "linear-gradient(135deg, #c026d3 0%, #D3287A 55%, #86198f 100%)",
    },
    {
      title: "Project Management & Data",
      tagline: "Intelligent Delivery & Data Workflows Powered by AI Agents",
      description:
        "Predictive resource allocation, real-time insights, and autonomous project coordination.",
      href: "/ai-workflows/project-management-data",
      icon: HiClipboardDocumentList,
      iconColor: "#D3287A",
      hoverGradient:
        "linear-gradient(135deg, #fb7185 0%, #D3287A 45%, #be185d 100%)",
    },
  ],
};
