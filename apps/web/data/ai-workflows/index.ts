import { customerServiceDomain } from "./customerService";
import { financialOperationsDomain } from "./financialOperations";
import { humanResourcesDomain } from "./humanResources";
import { operationsComplianceDomain } from "./operationsCompliance";
import { projectManagementDataDomain } from "./projectManagementData";
import { salesMarketingDomain } from "./salesMarketing";
import type { AiWorkflowDomain } from "./types";

export { aiWorkflowsOverview } from "./overview";
export type {
  AiWorkflowDomain,
  AiWorkflowItem,
  AiWorkflowOverviewCard,
  AiWorkflowOverviewContent,
  AiWorkflowPillars,
} from "./types";

export const aiWorkflowDomains: AiWorkflowDomain[] = [
  customerServiceDomain,
  salesMarketingDomain,
  financialOperationsDomain,
  humanResourcesDomain,
  operationsComplianceDomain,
  projectManagementDataDomain,
];

export const aiWorkflowSlugs = aiWorkflowDomains.map((d) => d.slug);

export function getAiWorkflowBySlug(slug: string): AiWorkflowDomain | undefined {
  return aiWorkflowDomains.find((d) => d.slug === slug);
}

export const pillarLinks = {
  agenticOrchestration: {
    label: "Agentic Orchestration",
    href: "/agentic-orchestration",
  },
  velocityAi: {
    label: "Velocity AI",
    href: "/velocity-ai",
  },
  foundationalDataLayer: {
    label: "Foundational Data Layer",
    href: "/foundational-data-layer",
  },
} as const;
