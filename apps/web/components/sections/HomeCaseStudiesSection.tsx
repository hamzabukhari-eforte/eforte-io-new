"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { homeCaseStudies } from "@/data/homeCaseStudies";

const AUTOPLAY_INTERVAL_MS = 8000;

const SLIDE_MOTION = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: "easeOut" as const },
};

const ARROW_BUTTON_CLASS =
  "flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10";

export default function HomeCaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const study = homeCaseStudies[activeIndex];

  const goPrev = () =>
    setActiveIndex(
      (current) =>
        (current - 1 + homeCaseStudies.length) % homeCaseStudies.length
    );
  const goNext = () =>
    setActiveIndex((current) => (current + 1) % homeCaseStudies.length);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % homeCaseStudies.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section
      className="w-full bg-black py-16 md:py-24 lg:py-28"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/*
            Anchored to the grid box rather than the copy column, so the
            controls hold the same spot no matter how tall a slide's copy is.
            The right offset tracks the left column's edge: half the grid plus
            half the column gap.
          */}
          <div className="absolute right-0 top-10 z-10 flex items-center gap-3 lg:right-[calc(50%+2rem)] xl:right-[calc(50%+2.5rem)]">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous case study"
              className={ARROW_BUTTON_CLASS}
            >
              <HiArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next case study"
              className={ARROW_BUTTON_CLASS}
            >
              <HiArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Left: copy + metrics */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div key={study.id} {...SLIDE_MOTION}>
                {/* Room for the controls, which overlap this line until lg. */}
                <p className="pr-28 text-2xl font-semibold tracking-tight text-primary-pink md:text-3xl lg:pr-0">
                  {study.clientName}
                </p>

                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-[42px]">
                  {study.title}
                </h2>

                <div className="mt-5 max-w-xl space-y-4 text-[15px] leading-relaxed text-white/80 md:text-base">
                  {study.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {study.highlights && study.highlights.length > 0 ? (
                  <ul className="mt-6 space-y-2 text-[15px] text-white/85">
                    {study.highlights.map((item) => (
                      <li key={item.label}>
                        <span className="font-semibold text-white">
                          {item.label}:
                        </span>{" "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {study.stats && study.stats.length > 0 ? (
                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {study.stats.map((stat) => (
                      <div
                        key={`${stat.value}-${stat.label}`}
                        className="flex items-center gap-4 rounded-[12px] bg-white px-4 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                      >
                        <span className="shrink-0 text-3xl font-semibold leading-none text-primary-pink md:text-[34px]">
                          {stat.value}
                        </span>
                        <span className="text-sm leading-snug text-[#1a1a2e]">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}

                <Link
                  href={study.ctaHref}
                  className="mt-8 inline-flex h-10 items-center justify-center rounded-full leading-none bg-primary-pink px-8 py-0 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-pink/90"
                >
                  {study.ctaLabel}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: visual */}
          <AnimatePresence mode="wait">
            <motion.div
              key={study.id}
              {...SLIDE_MOTION}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary-pink/10 blur-3xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] border border-white/10 bg-[#111] shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:aspect-[5/6] lg:aspect-[4/5]">
                <Image
                  src={study.imageSrc}
                  alt={study.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                  priority={activeIndex === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
