"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight, HiStar } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { databricksTestimonials } from "@/data/databricks";

const AUTOPLAY_INTERVAL_MS = 7000;

export default function DatabricksTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const item = databricksTestimonials.items[activeIndex];

  const goPrev = () =>
    setActiveIndex(
      (current) =>
        (current - 1 + databricksTestimonials.items.length) %
        databricksTestimonials.items.length
    );
  const goNext = () =>
    setActiveIndex(
      (current) => (current + 1) % databricksTestimonials.items.length
    );

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % databricksTestimonials.items.length
      );
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section className="bg-black pb-20 pt-10 text-white md:pb-28 md:pt-16">
      <Container>
        <div
          className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
              {databricksTestimonials.eyebrow}
            </p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-4xl lg:text-[42px]">
              {databricksTestimonials.title}
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white/10"
              >
                <HiArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white/10"
              >
                <HiArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <Image
                src="/assets/images/industry/clutch.svg"
                alt="Clutch"
                width={72}
                height={24}
                className="h-6 w-auto object-contain"
              />
              <p className="text-sm text-white/80">
                {databricksTestimonials.clutchLabel}
              </p>
              <div className="flex items-center gap-0.5 text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <p
                className="text-lg font-thin tracking-tight text-white"
                style={{
                  fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                  fontWeight: 100,
                }}
              >
                {databricksTestimonials.clutchRating}
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="max-w-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
                {item.company}
              </p>
              <p className="mt-5 text-base font-light leading-relaxed text-white/90 md:text-lg md:leading-8">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-8 text-base font-semibold text-white">
                {item.author}
              </p>
              <p className="mt-1 text-sm italic text-white/70">{item.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
