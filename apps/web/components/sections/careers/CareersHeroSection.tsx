"use client";

import Image from "next/image";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";
import styles from "@/components/sections/ai-workflows/aiWorkflows.module.css";

export default function CareersHeroSection() {
  return (
    <section className={`${styles.detailHero} ${styles.detailHeroMatch}`}>
      <Image
        src="/assets/final-images/careers/careers_hero.png"
        alt="eForte team collaborating in the office"
        fill
        priority
        sizes="100vw"
        className={styles.detailHeroBg}
      />
      <div className={styles.detailHeroOverlay} aria-hidden />
      <div className={styles.detailHeroPinkGlow} aria-hidden />
      <div className={styles.content}>
        <div className={styles.detailHeroInner}>
          <p className={styles.detailLabel}>
            <HiSparkles className="text-primary-pink" aria-hidden />
            Careers
          </p>
          <h1 className={styles.detailHeadline}>Grow, Build, and Belong.</h1>
          <p className={styles.detailBody}>
            At eForte, we believe great software is built by great people. Join a
            team of engineers, designers, and strategists who turn ambitious ideas
            into working products and take your career further while you do it.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#open-roles"
              className="inline-flex h-10 items-center justify-center rounded-full leading-none bg-gradient-to-r from-[#be185d] to-[#db2777] px-8 text-sm font-medium text-white shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] transition-all hover:-translate-y-0.5 hover:from-[#db2777] hover:to-[#be185d]"
            >
              Explore Open Roles
            </Link>
            <Link
              href="#our-values"
              className="inline-flex h-10 items-center justify-center rounded-full leading-none border border-white px-8 text-sm font-medium text-white transition-all hover:border-white hover:bg-white hover:text-black"
            >
              Learn About Our Culture
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
