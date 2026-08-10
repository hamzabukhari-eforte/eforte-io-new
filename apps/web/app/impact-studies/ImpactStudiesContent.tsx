"use client";

import ImpactStudiesHeroSection from "@/components/sections/impact-studies/ImpactStudiesHeroSection";
import ImpactStudiesIntroSection from "@/components/sections/impact-studies/ImpactStudiesIntroSection";
import ImpactStudiesProjectsSection from "@/components/sections/impact-studies/ImpactStudiesProjectsSection";
import ImpactStudiesTestimonialsSection from "@/components/sections/impact-studies/ImpactStudiesTestimonialsSection";
import ImpactStudiesIndexSection from "@/components/sections/impact-studies/ImpactStudiesIndexSection";
import {
  impactStudiesProjectsBottom,
  impactStudiesProjectsTop,
} from "@/data/impactStudiesHomepage";
import styles from "@/components/sections/impact-studies/impact-studies.module.css";

/* Previous stacked-card layout preserved in git history. */

export default function ImpactStudiesContent() {
  return (
    <main className={styles.page}>
      <ImpactStudiesHeroSection />

      <section className={`${styles.ourWork} ${styles.ourWorkTop}`}>
        <ImpactStudiesIntroSection />
        <ImpactStudiesProjectsSection projects={impactStudiesProjectsTop} />
      </section>

      <ImpactStudiesTestimonialsSection />

      <section className={`${styles.ourWork} ${styles.ourWorkBottom}`}>
        <ImpactStudiesProjectsSection projects={impactStudiesProjectsBottom} />
      </section>

      <ImpactStudiesIndexSection />
    </main>
  );
}
