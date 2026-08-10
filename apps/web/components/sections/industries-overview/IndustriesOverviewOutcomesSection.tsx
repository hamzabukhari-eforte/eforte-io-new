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
              className={`${styles["solution-box"]} ${styles[study.slug] ?? ""}`}
              direction="bottom"
              duration={400}
            >
              <div className={styles.left}>
                <figure style={{ width: study.logoWidth }}>
                  <Image
                    src={study.logoSrc}
                    alt=""
                    width={study.logoWidth}
                    height={80}
                    className="h-auto w-full object-contain object-left"
                  />
                </figure>
                {study.href ? (
                  <Link
                    href={study.href}
                    className={`${styles["explore-button"]} ${styles["desktop-button"]}`}
                  >
                    Learn more →
                  </Link>
                ) : null}
              </div>
              <div className={styles.right}>
                <p className={styles.pill}>{study.pill}</p>
                <h3 className={styles.title}>{study.title}</h3>
                <p className={styles.description}>{study.description}</p>
                <ul className={styles.values}>
                  {study.metrics.map((metric) => (
                    <li key={metric.number}>
                      <p className={styles.number}>{metric.number}</p>
                      <p className={styles.label}>
                        {metric.labelLines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
                {study.href ? (
                  <Link
                    href={study.href}
                    className={`${styles["explore-button"]} ${styles["mobile-button"]}`}
                  >
                    Learn more →
                  </Link>
                ) : null}
              </div>
            </IndustriesReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
