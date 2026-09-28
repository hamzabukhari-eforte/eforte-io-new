import { pageMeta } from "@/lib/seo/meta";
import {
  AgenticOrchestrationFooterCTASection,
  AgenticOrchestrationInsightsListingSection,
} from "@/components/sections/agentic-orchestration";
import { agenticOrchestrationInsights } from "@/data/agenticOrchestrationInsights";

export const metadata = pageMeta({
  title: "Agentic Orchestration Insights | eForte",
  description: "Expert insights on multi-agent orchestration, human-in-the-loop control planes, and outcome-focused agent pods from eForte.",
  path: "/agentic-orchestration/insights",
});

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
