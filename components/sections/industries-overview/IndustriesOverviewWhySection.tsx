"use client";

import Image from "next/image";
import { industriesMedia, industriesWhy } from "@/data/industriesOverview";
import IndustriesReveal from "./IndustriesReveal";
import styles from "./industriesOverview.module.css";

const iconMap = {
  experts: industriesMedia.experts,
  silicon: industriesMedia.silicon,
  secure: industriesMedia.secure,
};

export default function IndustriesOverviewWhySection() {
  return (
    <section className={styles["why-eforte-boxes"]}>
      <div className={styles.content}>
        <IndustriesReveal className={styles.head} direction="bottom" duration={400}>
          <h2 className={styles.title}>{industriesWhy.title}</h2>
          <p className={styles.description}>
            {industriesWhy.descriptionLines.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </p>
        </IndustriesReveal>

        <IndustriesReveal as="ul" className={styles["ai-agents"]} direction="bottom" duration={400}>
          {industriesWhy.cards.map((card) => (
            <li key={card.title}>
              <div className={styles["box-border"]}>
                <div className={styles["box-content"]}>
                  <figure className={card.iconKey === "experts" ? styles.experts : undefined}>
                    <Image
                      src={iconMap[card.iconKey]}
                      alt=""
                      width={160}
                      height={40}
                      className="h-full w-auto"
                    />
                  </figure>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </li>
          ))}
        </IndustriesReveal>
      </div>
    </section>
  );
}
