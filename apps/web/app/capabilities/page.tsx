import { pageMeta } from "@/lib/seo/meta";
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

export const metadata = pageMeta({
  title: "Capabilities | eForte",
  description: "The eForte Studio model assembles specialist teams across Data & AI, Design, Cybersecurity, Engineering, Quality, and Product Management to deliver holistic solutions.",
  path: "/capabilities",
});

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
