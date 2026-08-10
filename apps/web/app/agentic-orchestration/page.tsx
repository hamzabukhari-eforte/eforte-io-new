import {
  AgenticOrchestrationHeroSection,
  AgenticOrchestrationRebuildingSection,
  AgenticOrchestrationAIPodsSection,
  AgenticOrchestrationPlatformFlowSection,
  AgenticOrchestrationPlatformSection,
  AgenticOrchestrationUseCasesSection,
  AgenticOrchestrationMethodologySection,
  AgenticOrchestrationCoreServicesSection,
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
      <AgenticOrchestrationMethodologySection />
      <AgenticOrchestrationCoreServicesSection />
      <VelocityAIInsightsSection />
      
    </main>
  );
}
