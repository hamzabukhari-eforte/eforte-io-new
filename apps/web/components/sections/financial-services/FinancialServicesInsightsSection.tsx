"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { financialServicesWhitePapers } from "@/data/industries/financialServicesWhitePaper";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL_MS = 6000;

export default function FinancialServicesInsightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const paper = financialServicesWhitePapers[activeIndex];

  const goPrev = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + financialServicesWhitePapers.length) %
        financialServicesWhitePapers.length
    );
  };

  const goNext = () => {
    setActiveIndex(
      (current) => (current + 1) % financialServicesWhitePapers.length
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(goNext, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section className="bg-default py-10 text-white md:py-16">
      <Container>
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={paper.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className="flex justify-center lg:justify-start">
                <div className="relative aspect-4/3 w-full max-w-xl overflow-hidden rounded-[12px]">
                  <Image
                    src={paper.coverSrc}
                    alt={paper.coverAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 580px"
                    className="pointer-events-none object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Previous white paper"
                    onClick={goPrev}
                    className="absolute inset-y-0 left-0 z-10 w-1/2 cursor-pointer"
                  />
                  <button
                    type="button"
                    aria-label="Next white paper"
                    onClick={goNext}
                    className="absolute inset-y-0 right-0 z-10 w-1/2 cursor-pointer"
                  />
                </div>
              </div>

              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-pink">
                  White Paper
                </p>
                <h2 className="mt-4 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[40px]">
                  Finance Insights
                </h2>
                <p className="mt-4 text-xl font-medium leading-snug text-white md:text-[22px]">
                  {paper.title}
                </p>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white md:text-base">
                  {paper.description}
                </p>
                <Link
                  href={paper.href}
                  className="mt-8 inline-flex h-10 items-center justify-center rounded-full leading-none bg-white px-8 text-sm font-medium text-default transition-all duration-200 hover:bg-white/85"
                >
                  Read the white paper
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-2.5 md:mt-10">
            {financialServicesWhitePapers.map((wp, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={wp.slug}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show white paper ${idx + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-300",
                    isActive ? "bg-[#2563eb]" : "bg-white/25 hover:bg-white/40"
                  )}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
