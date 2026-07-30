"use client";

import Image from "next/image";
import Link from "next/link";
import {
  industriesCards,
  industriesGridIntro,
  industriesMedia,
} from "@/data/industriesOverview";
import IndustriesReveal from "./IndustriesReveal";
import styles from "./industriesOverview.module.css";

export default function IndustriesOverviewGridSection() {
  return (
    <section className={styles["service-partners"]}>
      <div className={styles.content}>
        <IndustriesReveal className={styles.head} direction="bottom" duration={400}>
          <h2 className={styles.title}>
            <span>{industriesGridIntro.titleLine1}</span>{" "}
            {industriesGridIntro.titleLine2}
          </h2>
          <p className={styles.description}>
            {industriesGridIntro.descriptionBefore}{" "}
            <span>{industriesGridIntro.descriptionHighlight}</span>
          </p>
        </IndustriesReveal>

        <IndustriesReveal as="ul" className={styles["ai-agents"]} direction="bottom" duration={400}>
          {industriesCards.map((card) => {
            const body = (
              <div className={styles["box-border"]}>
                <div className={styles["box-content"]}>
                  <figure>
                    <Image
                      src={industriesMedia.industryIcons[card.iconKey]}
                      alt=""
                      width={160}
                      height={40}
                      className="h-full w-auto"
                    />
                  </figure>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <ul className={styles.pills}>
                    {card.pills.map((pill) => (
                      <li key={pill}>{pill}</li>
                    ))}
                  </ul>
                  {card.href ? (
                    <span className={styles["explore-button"]}>
                      Explore →
                    </span>
                  ) : null}
                </div>
              </div>
            );

            return (
              <li
                key={card.title}
                className={`${styles["service-partner-box"]} ${styles[card.slug] ?? ""}`}
              >
                {card.href ? (
                  <Link href={card.href} className="block h-full">
                    {body}
                  </Link>
                ) : (
                  body
                )}
              </li>
            );
          })}
        </IndustriesReveal>
      </div>
    </section>
  );
}
