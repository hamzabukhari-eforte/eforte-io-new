import type { IconType } from "react-icons";

export type AiWorkflowItem = {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
};

export type AiWorkflowPillars = {
  agenticOrchestration: string;
  velocityAi: string;
  foundationalDataLayer: string;
};

export type AiWorkflowDomain = {
  slug: string;
  label: string;
  theme: string;
  headline: string;
  body: string;
  workflows: AiWorkflowItem[];
  workflowChips: string[];
  pillars: AiWorkflowPillars;
};

export type AiWorkflowOverviewCard = {
  title: string;
  tagline: string;
  description: string;
  href: string;
  icon: IconType;
  iconColor: string;
  hoverGradient: string;
};

export type AiWorkflowOverviewContent = {
  eyebrow: string;
  headline: string;
  body: string;
  domainsLabel: string;
  domainsTitle: string;
  domainsDescription: string;
  cards: AiWorkflowOverviewCard[];
};
