import {
  IndustriesOverviewBadgesSection,
  IndustriesOverviewDatabricksSection,
  IndustriesOverviewGridSection,
  IndustriesOverviewHeroSection,
  IndustriesOverviewOutcomesSection,
  IndustriesOverviewWhySection,
} from "@/components/sections/industries-overview";
import styles from "@/components/sections/industries-overview/industriesOverview.module.css";

export const metadata = {
  title: "Industries | eForte",
  description:
    "Explore eForte's industry expertise across banking, financial services, healthcare, insurance, media, and hi-tech.",
};

export default function IndustriesPage() {
  return (
    <main className={styles.page}>
      <IndustriesOverviewHeroSection />
      <IndustriesOverviewWhySection />
      <IndustriesOverviewGridSection />
      <IndustriesOverviewDatabricksSection />
      <IndustriesOverviewBadgesSection />
      <IndustriesOverviewOutcomesSection />
      {/* Work together CTA lives in shared layout */}
    </main>
  );
}
