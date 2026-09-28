import { pageMeta } from "@/lib/seo/meta";
import {
  FoundationalDataLayerCTASection,
  FoundationalDataLayerInsightsListingSection,
} from "@/components/sections/foundational-data-layer";
import { foundationalDataInsights } from "@/data/foundationalDataInsights";

export const metadata = pageMeta({
  title: "Foundational Data Insights | eForte",
  description: "Expert insights on AI-ready data platforms, governed lakehouses, and trusted metrics from eForte.",
  path: "/foundational-data-layer/insights",
});

export default function FoundationalDataLayerInsightsPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <FoundationalDataLayerInsightsListingSection
        articles={foundationalDataInsights}
      />
      <FoundationalDataLayerCTASection />
    </main>
  );
}
