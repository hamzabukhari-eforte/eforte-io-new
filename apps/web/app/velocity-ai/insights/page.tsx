import {
  VelocityAIFooterCTASection,
  VelocityAIInsightsListingSection,
} from "@/components/sections/velocity-ai";
import { velocityAIInsights } from "@/data/velocityAIInsights";

export const metadata = {
  title: "Velocity AI Insights | eForte",
  description:
    "Expert insights on secure AI value pathways, transformation frameworks, and AI-augmented engineering from eForte.",
};

export default function VelocityAIInsightsPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <VelocityAIInsightsListingSection articles={velocityAIInsights} />
      <VelocityAIFooterCTASection />
    </main>
  );
}
