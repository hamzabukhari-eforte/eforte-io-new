import {
  VelocityAIHeroSection,
  VelocityAIDefinitionSection,
  VelocityAIFrameworkSection,
  VelocityAIEngineeringSection,
  VelocityAIMetricsCoreSection,
  VelocityAIMetricsOrbitSection,
  VelocityAICapabilitiesSection,
  VelocityAICaseStudySection,
  VelocityAIInsightsSection,
} from "@/components/sections/velocity-ai";
import { velocityAIInsights } from "@/data/velocityAIInsights";

const velocityInsightCards = velocityAIInsights.map((article) => ({
  id: article.slug,
  href: article.href,
  image: article.imageSrc,
  category: article.category,
  title: article.title,
  author: `by ${article.author}`,
  date: article.date,
}));

export default function VelocityAIPage() {
  return (
    <main className="min-h-screen bg-deep text-white">
      <VelocityAIHeroSection />
      <VelocityAIDefinitionSection />
      <VelocityAIFrameworkSection />
      <VelocityAIEngineeringSection />
      <VelocityAIMetricsCoreSection />
      <VelocityAIMetricsOrbitSection />
      <VelocityAICapabilitiesSection />
      <VelocityAICaseStudySection />
      {/* Keep Expert Insights in its current page position */}
      <VelocityAIInsightsSection
        plainEyebrow
        articles={velocityInsightCards}
        discoverMoreHref="/velocity-ai/insights"
      />
    </main>
  );
}
