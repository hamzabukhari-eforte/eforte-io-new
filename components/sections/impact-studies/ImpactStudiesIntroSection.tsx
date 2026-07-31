"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { impactStudiesIntro } from "@/data/impactStudiesHomepage";
import { useInViewReplay } from "@/lib/useInViewReplay";
import styles from "./impact-studies.module.css";

export default function ImpactStudiesIntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInViewReplay(ref, { margin: "-80px", amount: 0.2 });

  return (
    <div ref={ref} className={styles.introHeader}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className={styles.eyebrow}>{impactStudiesIntro.eyebrow}</p>
        <h1 className={styles.introHeading}>{impactStudiesIntro.heading}</h1>
        <blockquote className={styles.teaserCard}>
          <p className={styles.teaserQuote}>
            &ldquo;{impactStudiesIntro.teaser.quote}&rdquo;
          </p>
          <footer className={styles.teaserAttr}>
            {impactStudiesIntro.teaser.attribution}
          </footer>
        </blockquote>
      </motion.div>
    </div>
  );
}
