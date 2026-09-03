"use client";

import {
  AiWorkflowDiagram,
  type WorkflowStep,
} from "@/components/sections/ai-workflows/workflow-diagram";
import {
  AgentIcon,
  AiCoreIcon,
  FunnelIcon,
  GaugeIcon,
} from "@/components/sections/ai-workflows/workflow-diagram/icons";

const STEPS: WorkflowStep[] = [
  {
    label: "Strategic Assessment",
    description: "High-impact use cases",
    Icon: FunnelIcon,
  },
  {
    label: "Design & Implementation",
    description: "Custom and pre-built",
    Icon: AiCoreIcon,
  },
  {
    label: "Talent Augmentation",
    description: "AI Pods on your team",
    Icon: AgentIcon,
  },
  {
    label: "Model Optimization",
    description: "Tune, scale, benchmark",
    Icon: GaugeIcon,
  },
];

export default function CoreServicesDiagram({ className }: { className?: string }) {
  return (
    <AiWorkflowDiagram
      steps={STEPS}
      label="Core AI Agent Development Services"
      className={className}
      labelFontSize={22}
      descriptionFontSize={16}
    />
  );
}
