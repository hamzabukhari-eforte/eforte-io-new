"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

type SlideContent = {
  id: string;
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
    imageSrc: "/assets/images/industry/our-work-1.svg",
    imageAlt: "Northbridge hybrid credit scoring engine",
    imageAspect: "aspect-549/460",
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
    imageSrc: "/assets/images/industry/our-work-2.webp",
    imageAlt: "Velora Financial modernized mobile banking",
    imageAspect: "aspect-1319/1209",
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
    imageSrc: "/assets/images/industry/our-work-3.webp",
    imageAlt: "Arclight Capital AI financial analyst",
    imageAspect: "aspect-1260/814",
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


export default function FinancialServicesOurWorkSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className="flex justify-center lg:justify-start">
                <div
                  className={cn(
                    "relative w-full max-w-[560px]",
                    slide.imageAspect
                  )}
                >
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="max-w-xl text-default">
                {slide.brand && (
                  <p className="mb-6 text-2xl font-light tracking-[0.18em] text-default md:text-[26px]">
                    {slide.brand}
                  </p>
                )}

                <h3 className="text-3xl font-semibold leading-tight text-default md:text-[34px]">
                  Our work in action
                </h3>

                <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-default/80 md:text-base">
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
                  <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-default/80 md:text-base">
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
                        className="inline-flex h-10 items-center justify-center rounded-full bg-default/5 px-4 py-2 text-sm text-default/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-2.5">
            {slides.map((s, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show case study ${idx + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    isActive
                      ? "w-1.5 bg-[#2563eb]"
                      : "w-1.5 bg-default/20 hover:bg-default/40"
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
