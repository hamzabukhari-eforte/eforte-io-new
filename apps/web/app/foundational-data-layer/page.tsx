import {
  FoundationalDataLayerHeroSection,
  FoundationalDataLayerServicesSection,
  FoundationalDataLayerTransformationSection,
  FoundationalDataLayerDatabricksSection,
  FoundationalDataLayerDatabricksServicesSection,
} from "@/components/sections/foundational-data-layer";
import { VelocityAIInsightsSection } from "@/components/sections/velocity-ai";
import { foundationalDataInsights } from "@/data/foundationalDataInsights";

export const metadata = {
  title: "Foundational Data Layer | eForte",
  description:
    "Establishing the data infrastructure for AI transformation. Robust, scalable, and secure data ecosystems from ingestion to governance.",
};

const foundationalInsightCards = foundationalDataInsights.map((article) => ({
  id: article.slug,
  href: article.href,
  image: article.imageSrc,
  category: article.category,
  title: article.title,
  author: `by ${article.author}`,
  date: article.date,
}));

export default function FoundationalDataLayerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FoundationalDataLayerHeroSection />
      <FoundationalDataLayerServicesSection />
      <FoundationalDataLayerTransformationSection />
      <FoundationalDataLayerDatabricksSection />
      <FoundationalDataLayerDatabricksServicesSection />
      {/* Keep Expert Insights in its current page position */}
      <VelocityAIInsightsSection
        plainEyebrow
        articles={foundationalInsightCards}
        discoverMoreHref="/foundational-data-layer/insights"
      />
    </main>
  );
}
