"use client";

import {
  AiWorkflowDiagram,
  type WorkflowStep,
} from "@/components/sections/ai-workflows/workflow-diagram";
import {
  AiCoreIcon,
  GearCheckIcon,
  MessageIcon,
} from "@/components/sections/ai-workflows/workflow-diagram/icons";
import {
  DrawCircle,
  DrawPath,
  PageOutline,
  type IconProps,
} from "@/components/sections/ai-workflows/workflow-diagram/primitives";

/** Document with a search lens — LLM Apps. */
function DocumentSearchIcon({ delay, inView }: IconProps) {
  return (
    <>
      <PageOutline x={6} y={5} width={20} height={28} delay={delay} inView={inView} />
      <DrawPath d="M 11 16 H 20" strokeWidth={1.5} delay={delay + 0.18} inView={inView} />
      <DrawPath d="M 11 22 H 18" strokeWidth={1.5} delay={delay + 0.24} inView={inView} />
      <DrawCircle cx={26} cy={26} r={7} delay={delay + 0.2} inView={inView} />
      <DrawPath
        d="M 31 31 L 36 36"
        strokeWidth={2}
        delay={delay + 0.32}
        inView={inView}
      />
    </>
  );
}

const STEPS: WorkflowStep[] = [
  {
    label: "LLM Apps",
    description: "Custom RAG applications",
    Icon: DocumentSearchIcon,
  },
  {
    label: "Chat Bots",
    description: "Text and voice agents",
    Icon: MessageIcon,
  },
  {
    label: "Automations",
    description: "Tasks, data, operations",
    Icon: GearCheckIcon,
  },
  {
    label: "Agentic Workflows",
    description: "Plan, reason, execute",
    Icon: AiCoreIcon,
  },
];

export default function AiSolutionsDiagram({ className }: { className?: string }) {
  return (
    <AiWorkflowDiagram
      steps={STEPS}
      label="eForte AI Solutions"
      className={className}
    />
  );
}
