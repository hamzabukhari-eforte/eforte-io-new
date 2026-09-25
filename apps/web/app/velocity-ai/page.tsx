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

export const metadata = {
  title: "Velocity AI | eForte",
  description:
    "Ship AI-augmented software faster with Velocity AI — eForte's delivery methodology for production-ready models, governed data, and measurable outcomes.",
  alternates: { canonical: "/velocity-ai" },
};

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
