"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { impactStudiesIndex } from "@/data/impactStudiesHomepage";
import { useInViewReplay } from "@/lib/useInViewReplay";
import styles from "./impact-studies.module.css";

export default function ImpactStudiesIndexSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section
      ref={ref}
      className={styles.indexSection}
      aria-label="All impact studies"
    >
      <motion.div
        className={styles.indexInner}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className={styles.indexTitle}>All impact studies</p>
        <ul className={styles.indexList}>
          {impactStudiesIndex.map((item, index) => (
            <li key={item.name}>
              <Link href={item.href}>{item.name}</Link>
              {index < impactStudiesIndex.length - 1 ? (
                <span className={styles.indexDot} aria-hidden>
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
