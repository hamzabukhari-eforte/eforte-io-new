import {
  CapabilitiesOverviewAdvantagesSection,
  CapabilitiesOverviewHeroSection,
  CapabilitiesOverviewJourneySection,
  CapabilitiesOverviewStudioModelSection,
  CapabilitiesOverviewStudiosGridSection,
  CapabilitiesOverviewTestimonialsSection,
  // CapabilitiesOverviewWorkTogetherSection — layout already includes CTA
} from "@/components/sections/capabilities-overview";
import styles from "@/components/sections/capabilities-overview/capabilitiesOverview.module.css";

export const metadata = {
  title: "Capabilities | eForte",
  description:
    "Explore eForte's studio-based capabilities across AI, data, cloud, cybersecurity, product design, and engineering disciplines.",
};

export default function CapabilitiesPage() {
  return (
    <main className={styles.page}>
      <CapabilitiesOverviewHeroSection />
      <CapabilitiesOverviewStudioModelSection />
      <CapabilitiesOverviewStudiosGridSection />
      <CapabilitiesOverviewAdvantagesSection />
      <CapabilitiesOverviewJourneySection />
      <CapabilitiesOverviewTestimonialsSection />
      {/* Work together lives in the shared layout — section component kept for reuse */}
    </main>
  );
}
