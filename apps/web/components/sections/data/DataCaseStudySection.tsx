"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { dataSuccessStories } from "@/data/capabilities/data";

const AUTOPLAY_INTERVAL_MS = 6500;

export default function DataCaseStudySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const story = dataSuccessStories[activeIndex];

  const goPrev = () =>
    setActiveIndex(
      (current) =>
        (current - 1 + dataSuccessStories.length) % dataSuccessStories.length
    );
  const goNext = () =>
    setActiveIndex((current) => (current + 1) % dataSuccessStories.length);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % dataSuccessStories.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section className="bg-white">
      <div
        className="relative overflow-hidden rounded-[12px] bg-primary-pink py-16 text-white md:rounded-[12px] md:py-24"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(60deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 28px)",
          }}
          aria-hidden
        />

        <Container className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Success Stories
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl lg:text-[42px]">
                  {story.title}
                </h2>
                <div className="mt-5 max-w-lg space-y-4 text-[15px] leading-relaxed text-white/85">
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="h-10 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-primary-pink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/impact-studies"
                  className="mt-8 inline-flex h-10 items-center justify-center rounded-full bg-white px-7 py-0 text-sm font-semibold text-primary-pink transition-opacity hover:opacity-90"
                >
                  Learn more
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[12px]"
              >
                <Image
                  src={story.imageSrc}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous success story"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/10"
            >
              <HiArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next success story"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/50 text-white transition-colors hover:bg-white/10"
            >
              <HiArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
