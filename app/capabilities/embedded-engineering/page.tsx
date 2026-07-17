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
  EmbeddedEngineeringCtaSection,
} from "@/components/sections/embedded-engineering";

export const metadata = {
  title: "Embedded Engineering | eForte",
  description:
    "Embedded engineering services for semiconductors, IoT, firmware, and microcontrollers — nearshore teams that build reliable hardware-software systems.",
};

export default function EmbeddedEngineeringCapabilityPage() {
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
      <EmbeddedEngineeringCtaSection />
    </main>
  );
}
