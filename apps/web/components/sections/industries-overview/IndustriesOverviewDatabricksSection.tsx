"use client";

import Image from "next/image";
import Link from "next/link";
import {
  industriesDatabricks,
  industriesMedia,
} from "@/data/industriesOverview";
import IndustriesReveal from "./IndustriesReveal";
import styles from "./industriesOverview.module.css";

export default function IndustriesOverviewDatabricksSection() {
  return (
    <section className={styles["databricks-partner"]}>
      <IndustriesReveal className={styles.content} direction="bottom" duration={400}>
        <div className={styles.text}>
          <h2>{industriesDatabricks.title}</h2>
          <p>
            {industriesDatabricks.paragraphs[0]}
            <br />
            <br />
            {industriesDatabricks.paragraphs[1]}
          </p>
          <Link href={industriesDatabricks.href} className={styles.button}>
            Learn more
          </Link>
        </div>
        <IndustriesReveal as="figure" direction="bottom" duration={600}>
          <Image
            src={industriesMedia.databricksBadge}
            alt="Databricks Partner"
            width={220}
            height={220}
            className="h-auto w-full"
          />
        </IndustriesReveal>
      </IndustriesReveal>
    </section>
  );
}
