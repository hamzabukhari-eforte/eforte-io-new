"use client";

import Image from "next/image";
import { industriesMedia } from "@/data/industriesOverview";
import IndustriesReveal from "./IndustriesReveal";
import styles from "./industriesOverview.module.css";

export default function IndustriesOverviewBadgesSection() {
  return (
    <section className={styles.badges}>
      <IndustriesReveal className={styles.content} direction="bottom" duration={400}>
        <p className={styles.title}>Ecosystem &amp; Partners</p>
        <ul>
          {industriesMedia.partnerLogos.map((logo) => (
            <li key={logo.alt}>
              <figure className={styles.badge}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={60}
                  className="h-auto w-full object-contain"
                />
              </figure>
            </li>
          ))}
        </ul>
      </IndustriesReveal>
    </section>
  );
}
