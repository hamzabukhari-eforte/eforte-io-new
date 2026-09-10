"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

type SlideContent = {
  id: string;
  headline: string;
  imageSrc: string;
  imageAlt: string;
  imageAspect: string;
  brand?: string;
  paragraphs: string[];
  highlight?: string;
  tags?: string[];
  bullets?: { text: React.ReactNode }[];
};

const slides: SlideContent[] = [
  {
    id: "northbridge",
    headline: "Faster credit decisions without loosening risk",
    imageSrc:
      "/assets/final-images/industries/financial-services/case-northbridge-dashboard.png",
    // Previous visuals preserved for possible future reuse:
    // imageSrc: "/assets/final-images/industries/financial-services/case-northbridge-diagram.png",
    // imageSrc: "/assets/final-images/industries/financial-services/case-northbridge-scoring.png",
    // imageSrc: "/assets/images/industry/our-work-1.svg",
    imageAlt: "Northbridge hybrid credit scoring engine with human review",
    imageAspect: "aspect-video",
    brand: "NORTHBRIDGE",
    paragraphs: [
      "Northbridge, a mid market small business lender processing 500, 000+ loan applications a year, needed to cut manual underwriting review time without loosening risk standards. eForte built a hybrid scoring engine combining bureau data, cash-flow signals, and behavioral indicators to flag low-risk applications for instant approval.",
      "We layered a human in the loop review queue on top of the model so underwriters could focus their attention only on borderline cases, cutting average decision time dramatically while keeping a person in control of every declined application.",
    ],
    tags: [
      "Faster loan decisions.",
      "Lower cost-per-application.",
      "Reduced underwriter workload.",
    ],
  },
  {
    id: "velora",
    headline: "A mobile banking experience that can compete",
    imageSrc:
      "/assets/final-images/industries/financial-services/case-velora-phone.png",
    // Previous visuals preserved for possible future reuse:
    // imageSrc: "/assets/final-images/industries/financial-services/case-velora-diagram.png",
    // imageSrc: "/assets/final-images/industries/financial-services/case-velora-mobile-banking.png",
    // imageSrc: "/assets/images/industry/our-work-2.webp",
    imageAlt: "Velora Financial mobile banking on core APIs and real-time rails",
    imageAspect: "aspect-[4/3]",
    brand: "VELORA FINANCIAL",
    paragraphs: [
      "Velora Financial, a regional credit union network, was losing members to digital first competitors because its mobile banking app couldn't support real time transfers or spending insights. eForte rebuilt Velora's mobile experience on a modern core-banking API layer, adding real time payment rails and a personalized spending-insights dashboard powered by transaction categorization models.",
      "Within months of launch, Velora saw a sharp rise in mobile engagement and a meaningful drop in member attrition to competing digital banks, proving that a credit union could compete on experience, not just rates.",
    ],
    tags: [
      "Modernized mobile banking.",
      "Real time payments.",
      "Reduced member attrition.",
    ],
  },
  {
    id: "arclight",
    headline: "Advisor-ready insights in seconds, not hours",
    imageSrc:
      "/assets/final-images/industries/financial-services/case-arclight-dashboard.png",
    // Previous visuals preserved for possible future reuse:
    // imageSrc: "/assets/final-images/industries/financial-services/case-arclight-diagram.png",
    // imageSrc: "/assets/final-images/industries/financial-services/case-arclight-ai-analyst.png",
    // imageSrc: "/assets/images/industry/our-work-3.webp",
    imageAlt: "Arclight Capital AI financial analyst for advisor-ready briefs",
    imageAspect: "aspect-video",
    brand: "ARCLIGHT CAPITAL",
    paragraphs: [
      "Arclight Capital, a wealth management firm, needed to give advisors faster access to portfolio insights without asking clients to repeat information across systems. eForte built an AI financial analyst tool that pulls from custodial data, market feeds, and client notes to generate advisor-ready portfolio summaries in seconds instead of hours.",
      "Advisors reported spending far less time on prep work and more time in front of clients, and the firm was able to expand its advisor-to-client ratio without sacrificing service quality.",
    ],
    tags: [
      "Faster portfolio insights.",
      "More advisor capacity.",
      "Improved client-facing time.",
    ],
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

export default function FinancialServicesOurWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = slides[activeIndex];

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(goNext, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section className="bg-white py-10 md:py-16">
      <Container>
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className="w-full max-w-[560px]">
                <h3 className="text-center text-[32px] font-semibold leading-tight text-default md:text-[36px]">
                  {slide.headline}
                </h3>
                <div
                  className={cn(
                    "relative mt-8 w-full overflow-hidden rounded-[12px]",
                    slide.imageAspect
                  )}
                >
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="pointer-events-none object-cover"
                  />
                  <button
                    type="button"
                    aria-label="Previous case study"
                    onClick={goPrev}
                    className="absolute inset-y-0 left-0 z-10 w-1/2 cursor-pointer"
                  />
                  <button
                    type="button"
                    aria-label="Next case study"
                    onClick={goNext}
                    className="absolute inset-y-0 right-0 z-10 w-1/2 cursor-pointer"
                  />
                </div>
              </div>

              <div
                className="max-w-xl cursor-pointer text-default"
                onClick={goNext}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    goNext();
                  }
                }}
                aria-label="Next case study"
              >
                {slide.brand && (
                  <p className="mb-6 text-2xl font-light tracking-[0.18em] text-default md:text-[26px]">
                    {slide.brand}
                  </p>
                )}

                <h3 className="text-3xl font-semibold leading-tight text-default md:text-[34px]">
                  Our work in action
                </h3>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-black md:text-base">
                  {slide.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {slide.highlight && (
                  <p className="mt-5 text-[15px] font-semibold leading-relaxed text-default md:text-base">
                    {slide.highlight}
                  </p>
                )}

                {slide.bullets && (
                  <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-black md:text-base">
                    {slide.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="relative pl-6 before:absolute before:left-1 before:top-[10px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-default"
                      >
                        {bullet.text}
                      </li>
                    ))}
                  </ul>
                )}

                {slide.tags && (
                  <div className="mt-7 flex flex-wrap gap-3">
                    {slide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex h-[25px] items-center justify-center rounded-full leading-none bg-default/5 px-4 py-0.5 text-sm text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-2.5 md:mt-10">
            {slides.map((s, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show case study ${idx + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center"
                >
                  <span
                    className={cn(
                      "rounded-full transition-all duration-300",
                      isActive
                        ? "h-2.5 w-2.5 bg-[#2563eb]"
                        : "h-2.5 w-2.5 bg-default/20 hover:bg-default/40"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
