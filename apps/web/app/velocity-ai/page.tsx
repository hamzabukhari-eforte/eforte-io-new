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
      <VelocityAIInsightsSection />
    </main>
  );
}
