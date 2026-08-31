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
  // Previous hero, preserved for possible future reuse:
  // "/assets/images/package/business-domains/business-domains-hub-hero.svg"
  heroImageSrc:
    "/assets/final-images/ai-workflows/ai_workflows_main_hero.png?v=5",
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
      iconColor: "#AB77FF",
      hoverGradient:
        "linear-gradient(270deg, #FFFFFF -61.24%, #AB77FF 94.42%)",
    },
    {
      title: "Sales & Marketing",
      tagline: "Agentic Revenue Workflows That Accelerate Growth",
      description:
        "Autonomous AI agents qualifying leads, generating proposals, and driving pipeline velocity.",
      href: "/ai-workflows/sales-marketing",
      icon: HiChartBar,
      iconColor: "#FFA29B",
      hoverGradient:
        "linear-gradient(270deg, #FFFFFF -80.35%, #FFA29B 82.94%)",
    },
    {
      title: "Financial Operations",
      tagline: "Autonomous Financial Operations with Built-In Intelligence",
      description:
        "AI agents ensuring accuracy, compliance, and fraud detection across financial workflows.",
      href: "/ai-workflows/financial-operations",
      icon: HiCurrencyDollar,
      iconColor: "#96C5FF",
      hoverGradient:
        "linear-gradient(267.87deg, #96C5FF 8%, #5FA7FF 98.69%)",
    },
    {
      title: "Human Resources",
      tagline: "Agentic Talent Lifecycle Workflows",
      description:
        "AI-driven automation across hiring, onboarding, performance management, and workforce insights.",
      href: "/ai-workflows/human-resources",
      icon: HiUserGroup,
      iconColor: "#F4594E",
      hoverGradient:
        "linear-gradient(270deg, #FFFFFF -37.81%, #F4594E 94.34%)",
    },
    {
      title: "Operations & Compliance",
      tagline: "AI-Orchestrated Operations & Compliance Workflows",
      description:
        "Continuous monitoring, risk mitigation, and automated regulatory reporting through agentic systems.",
      href: "/ai-workflows/operations-compliance",
      icon: HiShieldCheck,
      iconColor: "#0D5BFF",
      hoverGradient:
        "linear-gradient(270deg, #FFFFFF -39.31%, #0D5BFF 95.36%)",
    },
    {
      title: "Project Management & Data",
      tagline: "Intelligent Delivery & Data Workflows Powered by AI Agents",
      description:
        "Predictive resource allocation, real-time insights, and autonomous project coordination.",
      href: "/ai-workflows/project-management-data",
      icon: HiClipboardDocumentList,
      iconColor: "#1E1E1E",
      hoverGradient:
        "linear-gradient(270deg, #FFFFFF -94.42%, #1E1E1E 97.88%)",
    },
  ],
};
