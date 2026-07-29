"use client";

import ContactCTA from "@/components/atoms/ContactCTA";
import { capabilityHero, capabilityMedia } from "@/data/capabilitiesOverview";
import { HiSparkles } from "react-icons/hi2";
import CapabilitiesReveal from "./CapabilitiesReveal";
import styles from "./capabilitiesOverview.module.css";

export default function CapabilitiesOverviewHeroSection() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.heroVideo}
        poster={capabilityMedia.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      >
        <source src={capabilityMedia.heroVideo} type="video/webm" />
      </video>
      <div className={styles.heroOverlay} aria-hidden />
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
