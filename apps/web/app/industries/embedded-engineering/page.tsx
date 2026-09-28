import { pageMeta } from "@/lib/seo/meta";
import {
  EmbeddedEngineeringHeroSection,
  EmbeddedEngineeringWorkSection,
  EmbeddedEngineeringSuccessStoriesSection,
  EmbeddedEngineeringServicesSection,
  EmbeddedEngineeringNearshoreSection,
  EmbeddedEngineeringRecognitionsSection,
  EmbeddedEngineeringTestimonialsSection,
  EmbeddedEngineeringStudioVideoSection,
  EmbeddedEngineeringFaqSection,
} from "@/components/sections/embedded-engineering";

export const metadata = pageMeta({
  title: "Embedded Engineering | eForte",
  description: "Embedded engineering services for semiconductors and embedded systems - nearshore firmware development with a proven methodology and highly qualified software engineers.",
  path: "/industries/embedded-engineering",
});

export default function EmbeddedEngineeringPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <EmbeddedEngineeringHeroSection />
      <EmbeddedEngineeringWorkSection />
      <EmbeddedEngineeringSuccessStoriesSection />
      <EmbeddedEngineeringServicesSection />
      <EmbeddedEngineeringNearshoreSection />
      <EmbeddedEngineeringRecognitionsSection />
      <EmbeddedEngineeringTestimonialsSection />
      <EmbeddedEngineeringStudioVideoSection />
      <EmbeddedEngineeringFaqSection />
    </main>
  );
}
