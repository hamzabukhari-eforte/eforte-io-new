import {
  AiCompoundSystemsSection,
  AiConstellationSection,
  AiCustomerSatisfactionSection,
  AiDataCtaSection,
  AiFaqSection,
  AiHeroSection,
  AiInsightsSection,
  AiPartnersSection,
  AiQbricksBenefitsSection,
  AiQbricksSection,
  AiQbricksVideoSection,
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
      <AiQbricksSection />
      <AiQbricksBenefitsSection />
      <AiQbricksVideoSection />
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
