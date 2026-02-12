import {
  AgenticOrchestrationHeroSection,
  AgenticOrchestrationRebuildingSection,
  AgenticOrchestrationAIPodsSection,
  AgenticOrchestrationPlatformFlowSection,
  AgenticOrchestrationPlatformSection,
  AgenticOrchestrationUseCasesSection,
} from "@/components/sections/agentic-orchestration";
import { VelocityAIInsightsSection } from "@/components/sections/velocity-ai";

export default function AgenticOrchestrationPage() {
  return (
    <main className="min-h-screen bg-deep text-white">
      <AgenticOrchestrationHeroSection />
      <AgenticOrchestrationRebuildingSection />
      <AgenticOrchestrationAIPodsSection />
      <AgenticOrchestrationPlatformFlowSection />
      <AgenticOrchestrationPlatformSection />
      <AgenticOrchestrationUseCasesSection />
      <VelocityAIInsightsSection />
      
    </main>
  );
}
