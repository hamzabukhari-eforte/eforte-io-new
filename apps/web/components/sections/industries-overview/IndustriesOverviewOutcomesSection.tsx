"use client";

import Image from "next/image";
import Link from "next/link";
import {
  industriesCaseStudies,
  industriesOutcomesIntro,
} from "@/data/industriesOverview";
import IndustriesReveal from "./IndustriesReveal";
import styles from "./industriesOverview.module.css";

export default function IndustriesOverviewOutcomesSection() {
  return (
    <section className={styles["our-solutions"]}>
      <div className={styles.content}>
        <IndustriesReveal className={styles.head} direction="bottom" duration={400}>
          <p className={styles.sectionLabel}>{industriesOutcomesIntro.label}</p>
          <h2 className={styles.title}>
            <span>{industriesOutcomesIntro.titleLine1}</span>{" "}
            {industriesOutcomesIntro.titleLine2}
          </h2>
          <p className={styles.description}>
            {industriesOutcomesIntro.description}
          </p>
        </IndustriesReveal>

        <ul className={styles["solutions-list"]}>
          {industriesCaseStudies.map((study) => (
            <IndustriesReveal
              key={study.slug}
              as="li"
              className={styles["solution-box"]}
              direction="bottom"
              duration={400}
            >
              <div className={styles.left}>
                <figure style={{ width: study.imageWidth }}>
                  <Image
                    src={study.imageSrc}
                    alt={study.imageAlt}
                    width={study.imageWidth}
                    height={Math.round(study.imageWidth * 0.75)}
                    className="h-auto w-full rounded-xl object-cover object-left"
                  />
                </figure>
                <Link
                  href={study.href}
                  className={`${styles["explore-button"]} ${styles["desktop-button"]}`}
                >
                  Learn more →
                </Link>
              </div>
              <div className={styles.right}>
                <p className={styles.pill}>{study.pill}</p>
                <h3 className={styles.title}>{study.title}</h3>
                <p className={styles.description}>{study.description}</p>
                <ul className={styles.values}>
                  {study.metrics.map((metric) => (
                    <li key={`${metric.number}-${metric.labelLines.join("-")}`}>
                      <p className={styles.number}>{metric.number}</p>
                      <p className={styles.label}>
                        {metric.labelLines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
                <Link
                  href={study.href}
                  className={`${styles["explore-button"]} ${styles["mobile-button"]}`}
                >
                  Learn more →
                </Link>
              </div>
            </IndustriesReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
