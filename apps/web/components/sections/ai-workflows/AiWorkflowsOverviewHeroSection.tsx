"use client";

import Image from "next/image";
import ContactCTA from "@/components/atoms/ContactCTA";
import { aiWorkflowsOverview } from "@/data/ai-workflows";
import { HiSparkles } from "react-icons/hi2";
import AiWorkflowsReveal from "./AiWorkflowsReveal";
import styles from "./aiWorkflows.module.css";

export default function AiWorkflowsOverviewHeroSection() {
  const { eyebrow, headline, body } = aiWorkflowsOverview;

  return (
    <section className={styles.hero}>
      <Image
        src="/assets/images/package/business-domains/business-domains-hub-hero.svg"
        alt=""
        fill
        priority
        className={styles.heroBg}
        sizes="100vw"
        aria-hidden
      />
      <div className={styles.heroOverlay} aria-hidden />
      <div className={styles.heroOrb} aria-hidden />
      <div className={styles.content}>
        <AiWorkflowsReveal
          className={styles.heroText}
          direction="bottom"
          duration={400}
          once
        >
          <p className={styles.heroLabel}>
            <HiSparkles aria-hidden />
            {eyebrow}
          </p>
          <h1 className={styles.heroTitle}>{headline}</h1>
          <p className={styles.heroDescription}>{body}</p>
          <ContactCTA className={styles.buttonPinkHoverWhite}>
            Contact Us
          </ContactCTA>
        </AiWorkflowsReveal>
      </div>
    </section>
  );
}
