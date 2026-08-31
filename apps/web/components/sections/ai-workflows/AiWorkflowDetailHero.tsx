"use client";

import Image from "next/image";
import ContactCTA from "@/components/atoms/ContactCTA";
import type { AiWorkflowDomain } from "@/data/ai-workflows";
import { HiSparkles } from "react-icons/hi2";
import AiWorkflowsReveal from "./AiWorkflowsReveal";
import styles from "./aiWorkflows.module.css";

export default function AiWorkflowDetailHero({
  domain,
}: {
  domain: AiWorkflowDomain;
}) {
  const hasHeroImage = Boolean(domain.heroImageSrc);

  return (
    <section className={styles.detailHero}>
      {hasHeroImage ? (
        <>
          <Image
            key={domain.heroImageSrc}
            src={domain.heroImageSrc!}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.detailHeroBg}
            aria-hidden
          />
          <div className={styles.detailHeroOverlay} aria-hidden />
          <div className={styles.detailHeroPinkGlow} aria-hidden />
        </>
      ) : (
        <>
          <div className={styles.detailHeroOrb} aria-hidden />
          <div className={styles.detailHeroGrain} aria-hidden />
        </>
      )}
      <div className={styles.content}>
        <AiWorkflowsReveal
          className={styles.detailHeroInner}
          direction="bottom"
          duration={400}
          once
        >
          <p className={styles.detailLabel}>
            <HiSparkles aria-hidden />
            {domain.label}
          </p>
          <p className={styles.detailTheme}>{domain.theme}</p>
          <h1 className={styles.detailHeadline}>{domain.headline}</h1>
          <p className={styles.detailBody}>{domain.body}</p>
          <ContactCTA className={styles.buttonPinkHoverWhite}>
            Contact Us
          </ContactCTA>
        </AiWorkflowsReveal>
      </div>
    </section>
  );
}
