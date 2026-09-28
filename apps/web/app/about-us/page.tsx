import { pageMeta } from "@/lib/seo/meta";
import AboutUsPageContent from "./AboutUsPageContent";

export const metadata = pageMeta({
  title: "About Us | eForte",
  description: "With over a decade of experience, eForte delivers high-quality, AI-native software solutions built around Velocity AI, Agentic Orchestration, and the Foundational Data Layer.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return <AboutUsPageContent />;
}
