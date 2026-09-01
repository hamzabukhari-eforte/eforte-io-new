"use client";

import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";
import ContactCTA from "@/components/atoms/ContactCTA";
import { technologyPartnersContent } from "@/data/technologyPartners";
import styles from "@/components/sections/ai-workflows/aiWorkflows.module.css";

const { hero } = technologyPartnersContent;

export default function TechnologyPartnersHeroSection() {
  return (
    <section className={`${styles.detailHero} ${styles.detailHeroMatch}`}>
      <Image
        src="/assets/final-images/technology-partners/Technology_Partners_Hero.png?v3"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.detailHeroBg}
        aria-hidden
      />
      <div className={styles.detailHeroOverlay} aria-hidden />
      <div className={styles.detailHeroPinkGlow} aria-hidden />
      <div className={styles.content}>
        <div className={styles.detailHeroInner}>
          <p className={styles.detailLabel}>
            <HiSparkles className="text-primary-pink" aria-hidden />
            {hero.badge}
          </p>
          <h1 className={styles.detailHeadline}>{hero.headline}</h1>
          <p className={styles.detailBody}>{hero.body}</p>
          <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full leading-none bg-primary-pink px-8 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
            Get in touch
          </ContactCTA>
        </div>
      </div>
    </section>
  );
}
