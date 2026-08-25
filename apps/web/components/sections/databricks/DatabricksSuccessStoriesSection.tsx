"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { databricksSuccessStories } from "@/data/databricks";

const AUTOPLAY_INTERVAL_MS = 7000;

export default function DatabricksSuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const story = databricksSuccessStories[activeIndex];

  const goPrev = () =>
    setActiveIndex(
      (current) =>
        (current - 1 + databricksSuccessStories.length) %
        databricksSuccessStories.length
    );
  const goNext = () =>
    setActiveIndex(
      (current) => (current + 1) % databricksSuccessStories.length
    );

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % databricksSuccessStories.length
      );
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section className="bg-black pb-20 pt-4 text-white md:pb-28">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] md:rounded-[12px]">
                  <Image
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {story.eyebrow}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-[40px]">
                    {story.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/75 md:text-base">
                    {story.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mt-10 md:mt-14">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous success story"
                  className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white/10 lg:flex xl:-translate-x-14"
                >
                  <HiArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next success story"
                  className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white/10 lg:flex xl:translate-x-14"
                >
                  <HiArrowRight className="h-4 w-4" />
                </button>

                <div className="grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
                  {story.outcomes.map((outcome) => {
                    const isWideIcon = outcome.iconSrc.includes("mlflow");
                    const isWideArrows = outcome.iconSrc.includes("arrows");
                    return (
                      <article
                        key={outcome.id}
                        className="flex min-h-[260px] flex-col rounded-[12px] bg-[#1A1A1A] px-7 py-8 md:min-h-[300px] md:px-8 md:py-9 lg:min-h-[320px]"
                      >
                        <div
                          className={`relative shrink-0 ${
                            isWideIcon
                              ? "h-12 w-[140px] md:h-14 md:w-[156px]"
                              : isWideArrows
                                ? "h-10 w-[72px] md:h-12 md:w-[86px]"
                                : "h-14 w-14 md:h-16 md:w-16"
                          }`}
                        >
                          <Image
                            src={outcome.iconSrc}
                            alt=""
                            fill
                            sizes={isWideIcon ? "156px" : "64px"}
                            className="object-contain object-left"
                            aria-hidden
                          />
                        </div>
                        <p className="mt-auto pt-10 text-[15px] font-light leading-relaxed text-white/90 md:text-base md:leading-7">
                          {outcome.text}
                        </p>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous success story"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white"
                  >
                    <HiArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next success story"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white"
                  >
                    <HiArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>
    </section>
  );
}
