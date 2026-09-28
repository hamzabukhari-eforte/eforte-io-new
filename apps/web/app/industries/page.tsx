import { pageMeta } from "@/lib/seo/meta";
import {
  IndustriesOverviewBadgesSection,
  // IndustriesOverviewDatabricksSection, preserved; no home-page content currently
  IndustriesOverviewGridSection,
  IndustriesOverviewHeroSection,
  IndustriesOverviewOutcomesSection,
  IndustriesOverviewWhySection,
} from "@/components/sections/industries-overview";
import styles from "@/components/sections/industries-overview/industriesOverview.module.css";

export const metadata = pageMeta({
  title: "Industries | eForte",
  description: "Explore eForte's industry expertise across finance, insurance, health & wellbeing, heavy industry, automotive, hospitality, and BPO & shared services.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <main className={styles.page}>
      <IndustriesOverviewHeroSection />
      <IndustriesOverviewWhySection />
      <IndustriesOverviewGridSection />
      {/* <IndustriesOverviewDatabricksSection />, preserved for possible future reuse */}
      <IndustriesOverviewBadgesSection />
      <IndustriesOverviewOutcomesSection />
      {/* Work together CTA lives in shared layout */}
    </main>
  );
}
