import { InsightsHeroSection, InsightsPostsSection } from "@/components/sections/insights";

export const metadata = {
  title: "Insights | eForte",
  description:
    "Dive into expert insights on Data & AI, Databricks, and AI-native product development from the eForte team.",
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <InsightsHeroSection />
      <InsightsPostsSection />
    </main>
  );
}

