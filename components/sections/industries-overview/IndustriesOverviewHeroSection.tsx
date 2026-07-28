"use client";

import { industriesHero } from "@/data/industriesOverview";
import IndustriesReveal from "./IndustriesReveal";
import styles from "./industriesOverview.module.css";

export default function IndustriesOverviewHeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <IndustriesReveal className={styles.text} direction="bottom" duration={400} once>
          <h1 className={styles.title}>{industriesHero.title}</h1>
          <p className={styles.subtitle}>{industriesHero.subtitle}</p>
          <p className={styles.description}>{industriesHero.description}</p>
        </IndustriesReveal>
      </div>
    </section>
  );
}
