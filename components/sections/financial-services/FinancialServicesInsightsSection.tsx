"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

type WhitePaper = {
  id: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const whitePapers: WhitePaper[] = [
  {
    id: "ai-agents",
    subtitle: "Designing Trustworthy AI Agents for Regulated Finance",
    description:
      "A practical guide to building agentic AI systems in finance that remain explainable, auditable, and safe to deploy in production.",
    imageSrc: "/assets/images/velocity-ai/insight-1.png",
    imageAlt: "Designing Trustworthy AI Agents for Regulated Finance white paper",
  },
  // Preserved — July 30 doc lists one primary white paper promo
  {
    id: "ux-ui-fintech",
    subtitle: "Best UX/UI practices to create differentiation in fintech",
    description:
      "The fintech revolution demands exceptional user experiences. Discover how to overcome the unique challenges of UX/UI design in our white paper, based on eForte's work at New York University.",
    imageSrc: "/assets/images/velocity-ai/insight-3.png",
    imageAlt: "Best UX/UI practices to create differentiation in fintech white paper",
  },
];


const AUTOPLAY_INTERVAL_MS = 6000;

export default function FinancialServicesInsightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const paper = whitePapers[activeIndex];

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % whitePapers.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section className="bg-default py-20 text-white md:py-28">
      <Container>
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className="flex justify-center lg:justify-start">
                <div className="relative aspect-4/3 w-full max-w-xl overflow-hidden rounded-3xl">
                  <Image
                    src={paper.imageSrc}
                    alt={paper.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 580px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                  White Paper
                </p>
                <h2 className="mt-4 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[40px]">
                  Finance Insights
                </h2>
                <p className="mt-4 text-xl font-medium leading-snug text-white md:text-[22px]">
                  {paper.subtitle}
                </p>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70 md:text-base">
                  {paper.description}
                </p>
                <Link
                  href="#"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-default transition-all duration-200 hover:bg-white/85"
                >
                  Learn more
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-2.5">
            {whitePapers.map((wp, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={wp.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show white paper ${idx + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                    isActive ? "w-1.5 bg-[#2563eb]" : "w-1.5 bg-white/25 hover:bg-white/40"
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
