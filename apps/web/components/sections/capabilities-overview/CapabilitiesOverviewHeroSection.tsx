"use client";

import Image from "next/image";
import ContactCTA from "@/components/atoms/ContactCTA";
import { capabilityHero, capabilityMedia } from "@/data/capabilitiesOverview";
import { HiSparkles } from "react-icons/hi2";
import CapabilitiesReveal from "./CapabilitiesReveal";
import styles from "./capabilitiesOverview.module.css";

export default function CapabilitiesOverviewHeroSection() {
  return (
    <section className={styles.hero}>
      <Image
        src={capabilityMedia.heroBanner}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
        aria-hidden
      />
      <div className={styles.heroOverlay} aria-hidden />
      <div className={styles.heroPinkGlow} aria-hidden />
      <div className={styles.content}>
        <CapabilitiesReveal
          className={styles.heroText}
          direction="top"
          duration={400}
          mobileDuration={400}
          once
        >
          <p className={styles.heroLabel}>
            <HiSparkles aria-hidden />
            {capabilityHero.label}
          </p>
          <h1 className={styles.heroTitle}>
            {capabilityHero.titleLines.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </h1>
          <p className={styles.heroDescription}>{capabilityHero.description}</p>
          <ContactCTA className={styles.buttonBlueHoverWhite}>
            Contact Us
          </ContactCTA>
        </CapabilitiesReveal>
      </div>
    </section>
  );
}
