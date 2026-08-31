import {
  AgentIcon,
  AiCoreIcon,
  AlertIcon,
  ChartBarIcon,
  ClipboardCheckIcon,
  DatabaseIcon,
  DocumentIcon,
  DocumentStackIcon,
  FunnelIcon,
  GaugeIcon,
  GearCheckIcon,
  HubIcon,
  LoopStarIcon,
  MatchIcon,
  MessageIcon,
  PersonFileIcon,
  ProposalIcon,
  RankIcon,
  ScanIcon,
  ShieldCheckIcon,
  SlidersIcon,
  StagesIcon,
  TrendUpIcon,
} from "./icons";
import type { IconProps } from "./primitives";
import type { ReactNode } from "react";

export type WorkflowStep = {
  label: string;
  description: string;
  Icon: (props: IconProps) => ReactNode;
};

/**
 * One five-step flow per AI workflow domain, distilled from the three
 * workflows described on each page.
 */
export const WORKFLOW_STEPS: Record<string, WorkflowStep[]> = {
  "customer-service": [
    {
      label: "Inquiry Received",
      description: "Any channel, one queue",
      Icon: MessageIcon,
    },
    {
      label: "AI Triage",
      description: "Intent, urgency, routing",
      Icon: AiCoreIcon,
    },
    {
      label: "Automated Resolution",
      description: "Instant answers and actions",
      Icon: GearCheckIcon,
    },
    {
      label: "Escalation to Agent",
      description: "Full context handed over",
      Icon: AgentIcon,
    },
    {
      label: "Feedback Loop",
      description: "Outcomes train the next run",
      Icon: LoopStarIcon,
    },
  ],

  "financial-operations": [
    {
      label: "Invoice Captured",
      description: "Any format, straight in",
      Icon: DocumentIcon,
    },
    {
      label: "Data Extracted",
      description: "Fields parsed and validated",
      Icon: ScanIcon,
    },
    {
      label: "Three-Way Matched",
      description: "PO, receipt and invoice",
      Icon: MatchIcon,
    },
    {
      label: "Approval Routed",
      description: "Authority hierarchy applied",
      Icon: ClipboardCheckIcon,
    },
    {
      label: "Books Updated",
      description: "Ledger and dashboards live",
      Icon: ChartBarIcon,
    },
  ],

  "human-resources": [
    {
      label: "Application Received",
      description: "Every source, one pool",
      Icon: PersonFileIcon,
    },
    {
      label: "AI Screening",
      description: "Skills matched to the role",
      Icon: AiCoreIcon,
    },
    {
      label: "Shortlist Ranked",
      description: "Best fit surfaced first",
      Icon: RankIcon,
    },
    {
      label: "Onboarding Triggered",
      description: "Access, docs and training",
      Icon: ClipboardCheckIcon,
    },
    {
      label: "Growth Tracked",
      description: "Reviews on a set cadence",
      Icon: TrendUpIcon,
    },
  ],

  "sales-marketing": [
    {
      label: "Lead Captured",
      description: "Every inbound signal",
      Icon: FunnelIcon,
    },
    {
      label: "AI Scoring",
      description: "Fit and intent ranked",
      Icon: GaugeIcon,
    },
    {
      label: "Proposal Generated",
      description: "Live CRM and pricing data",
      Icon: ProposalIcon,
    },
    {
      label: "Deal Advanced",
      description: "Stalled deals flagged",
      Icon: StagesIcon,
    },
    {
      label: "Forecast Updated",
      description: "Revenue predicted live",
      Icon: TrendUpIcon,
    },
  ],

  "operations-compliance": [
    {
      label: "Documents Ingested",
      description: "PDFs, forms and scans",
      Icon: DocumentStackIcon,
    },
    {
      label: "Data Extracted",
      description: "Structured and validated",
      Icon: ScanIcon,
    },
    {
      label: "Rules Checked",
      description: "Policy and regulation",
      Icon: ShieldCheckIcon,
    },
    {
      label: "Anomalies Flagged",
      description: "Stakeholders alerted fast",
      Icon: AlertIcon,
    },
    {
      label: "Actions Triggered",
      description: "Reorders and reports",
      Icon: GearCheckIcon,
    },
  ],

  "project-management-data": [
    {
      label: "Signals Collected",
      description: "Jira, GitHub and Asana",
      Icon: HubIcon,
    },
    {
      label: "Data Cleansed",
      description: "Duplicates and gaps fixed",
      Icon: DatabaseIcon,
    },
    {
      label: "Capacity Modelled",
      description: "Skills matched to load",
      Icon: SlidersIcon,
    },
    {
      label: "Risks Detected",
      description: "Velocity versus deadlines",
      Icon: AlertIcon,
    },
    {
      label: "Dashboards Live",
      description: "Portfolio health, real time",
      Icon: ChartBarIcon,
    },
  ],
};
