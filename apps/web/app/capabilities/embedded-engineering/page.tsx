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
  description: "Embedded engineering services for semiconductors, IoT, firmware, and microcontrollers — nearshore teams that build reliable hardware-software systems.",
  path: "/capabilities/embedded-engineering",
});

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
    </main>
  );
}
