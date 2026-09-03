import {
  FoundationalDataLayerHeroSection,
  FoundationalDataLayerServicesSection,
  FoundationalDataLayerTransformationSection,
  FoundationalDataLayerDatabricksSection,
  FoundationalDataLayerDatabricksServicesSection,
} from "@/components/sections/foundational-data-layer";
import { VelocityAIInsightsSection } from "@/components/sections/velocity-ai";

export const metadata = {
  title: "Foundational Data Layer | eForte",
  description:
    "Establishing the data infrastructure for AI transformation. Robust, scalable, and secure data ecosystems from ingestion to governance.",
};

export default function FoundationalDataLayerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <FoundationalDataLayerHeroSection />
      <FoundationalDataLayerServicesSection />
      <FoundationalDataLayerTransformationSection />
      <FoundationalDataLayerDatabricksSection />
      <FoundationalDataLayerDatabricksServicesSection />
      <VelocityAIInsightsSection plainEyebrow />

    </main>
  );
}
