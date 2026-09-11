import {
  AgenticOrchestrationFooterCTASection,
  AgenticOrchestrationInsightsListingSection,
} from "@/components/sections/agentic-orchestration";
import { agenticOrchestrationInsights } from "@/data/agenticOrchestrationInsights";

export const metadata = {
  title: "Agentic Orchestration Insights | eForte",
  description:
    "Expert insights on multi-agent orchestration, human-in-the-loop control planes, and outcome-focused agent pods from eForte.",
};

export default function AgenticOrchestrationInsightsPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <AgenticOrchestrationInsightsListingSection
        articles={agenticOrchestrationInsights}
      />
      <AgenticOrchestrationFooterCTASection />
    </main>
  );
}
