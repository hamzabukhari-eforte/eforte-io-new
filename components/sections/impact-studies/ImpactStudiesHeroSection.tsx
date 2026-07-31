"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { impactStudiesHero } from "@/data/impactStudiesHomepage";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./impact-studies.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";

const artClass = {
  lg: styles.artLg,
  md: styles.artMd,
  xl: styles.artXl,
} as const;

export default function ImpactStudiesHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [copyVisible, setCopyVisible] = useState(true);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(
    null
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const activeSlide = impactStudiesHero[activeIndex] ?? impactStudiesHero[0];

  const handleSlideChange = (realIndex: number) => {
    setCopyVisible(false);
    window.setTimeout(() => {
      setActiveIndex(realIndex);
      setCopyVisible(true);
    }, 180);
  };

  return (
    <section className={styles.hero} aria-label="Featured impact studies">
      {paginationEl ? (
        <Swiper
          key={isDesktop ? "vertical" : "horizontal"}
          className={styles.heroSwiper}
          modules={[Autoplay, Pagination]}
          direction={isDesktop ? "vertical" : "horizontal"}
          speed={1100}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            el: paginationEl,
            clickable: true,
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper.realIndex)}
        >
          {impactStudiesHero.map((slide, index) => (
            <SwiperSlide
              key={slide.id}
              className={cn(styles.heroSlide, artClass[slide.artScale])}
            >
              <figure className={styles.slideBg}>
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={styles.slideBgImg}
                />
              </figure>
              <div className={styles.slideScrim} aria-hidden />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}

      <div className={styles.caseInfoShell}>
        <div className={styles.caseInfoWrapper}>
          <div
            className={cn(
              styles.caseInfo,
              copyVisible && styles.caseInfoActive
            )}
          >
            <p className={styles.clientLogo}>{activeSlide.name}</p>
            <h2>{activeSlide.headline}</h2>
            <p className={styles.description}>{activeSlide.description}</p>
            <Link href={activeSlide.href} className={styles.btnBlue}>
              Learn more
              <span className={styles.btnArrow} aria-hidden>
                →
              </span>
            </Link>
            <ul className={styles.values}>
              {activeSlide.stats.map((stat) => (
                <li key={`${activeSlide.id}-${stat.label}`}>
                  <p className={styles.statLabel}>{stat.label}</p>
                  <p className={styles.statValue}>
                    <AnimatedCounter
                      value={stat.value}
                      active={copyVisible}
                    />
                    {stat.suffix}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div ref={setPaginationEl} className={styles.heroPagination} />
    </section>
  );
}
