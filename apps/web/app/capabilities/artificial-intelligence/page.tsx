import {
  AiCognitiveGatewaySection,
  AiCompoundSystemsSection,
  AiConstellationSection,
  AiCustomerSatisfactionSection,
  AiDataCtaSection,
  AiFaqSection,
  AiHeroSection,
  AiInsightsSection,
  AiPartnersSection,
  // QBricks sections not in current document — preserved for future reuse
  // AiQbricksBenefitsSection,
  // AiQbricksSection,
  // AiQbricksVideoSection,
  AiSolutionsInActionSection,
  AiSolutionsSection,
  AiWhitePaperSection,
} from "@/components/sections/ai";

export const metadata = {
  title: "Artificial Intelligence | eForte",
  description:
    "Enterprise AI solutions from eForte's AI Studio — Compound AI Systems, GenAI, computer vision, ML, and QBricks, our Built on Databricks accelerator for AI agents.",
};

export default function ArtificialIntelligencePage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <AiHeroSection />
      <AiSolutionsInActionSection />
      <AiCompoundSystemsSection />
      {/* QBricks sections not in current document — preserved for future reuse */}
      {/* <AiQbricksSection /> */}
      {/* <AiQbricksBenefitsSection /> */}
      {/* <AiQbricksVideoSection /> */}
      <AiCognitiveGatewaySection />
      <AiDataCtaSection />
      <AiPartnersSection />
      <AiSolutionsSection />
      <AiConstellationSection />
      <AiWhitePaperSection />
      <AiCustomerSatisfactionSection />
      <AiInsightsSection />
      <AiFaqSection />
    </main>
  );
}
