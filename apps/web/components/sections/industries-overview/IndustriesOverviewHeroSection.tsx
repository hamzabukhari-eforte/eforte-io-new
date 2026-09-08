"use client";

import Image from "next/image";
import ContactCTA from "@/components/atoms/ContactCTA";
import { industriesHero, industriesMedia } from "@/data/industriesOverview";
import { HiSparkles } from "react-icons/hi2";
import IndustriesReveal from "./IndustriesReveal";
import styles from "./industriesOverview.module.css";

export default function IndustriesOverviewHeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        src={industriesMedia.heroBg}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className={styles.heroImage}
        aria-hidden
      />
      <div className={styles.heroOverlay} aria-hidden />
      <div className={styles.heroPinkGlow} aria-hidden />
      <div className={styles.content}>
        <IndustriesReveal
          className={styles.heroText}
          direction="top"
          duration={400}
          once
        >
          <p className={styles.heroLabel}>
            <HiSparkles aria-hidden />
            {industriesHero.label}
          </p>
          <h1 className={styles.heroTitle}>{industriesHero.title}</h1>
          <p className={styles.heroSubtitle}>{industriesHero.subtitle}</p>
          <p className={styles.heroDescription}>{industriesHero.description}</p>
          <ContactCTA className={styles.button}>Contact Us</ContactCTA>
        </IndustriesReveal>
      </div>
    </section>
  );
}
