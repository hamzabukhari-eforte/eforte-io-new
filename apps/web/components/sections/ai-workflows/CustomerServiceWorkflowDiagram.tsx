"use client";

import { AiWorkflowDiagram, WORKFLOW_STEPS } from "./workflow-diagram";

/**
 * Kept as a named entry point for the customer service flow. The diagram itself
 * is now shared by every AI workflow domain via AiWorkflowDiagram.
 */
export default function CustomerServiceWorkflowDiagram({
  className,
}: {
  className?: string;
}) {
  return (
    <AiWorkflowDiagram
      steps={WORKFLOW_STEPS["customer-service"]}
      label="Customer service and support"
      className={className}
    />
  );
}
