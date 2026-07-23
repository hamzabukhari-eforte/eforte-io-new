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

export const metadata = {
  title: "Embedded Engineering | eForte",
  description:
    "Embedded engineering services for semiconductors and embedded systems - nearshore firmware development with a proven methodology and highly qualified software engineers.",
};

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
