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
import { agenticOrchestrationInsights } from "@/data/agenticOrchestrationInsights";

const agenticInsightCards = agenticOrchestrationInsights.map((article) => ({
  id: article.slug,
  href: article.href,
  image: article.imageSrc,
  category: article.category,
  title: article.title,
  author: `by ${article.author}`,
  date: article.date,
}));

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
      {/* Keep Expert Insights in its current page position */}
      <VelocityAIInsightsSection
        plainEyebrow
        articles={agenticInsightCards}
        discoverMoreHref="/agentic-orchestration/insights"
      />
    </main>
  );
}
