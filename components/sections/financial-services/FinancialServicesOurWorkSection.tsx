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
    id: "avant",
    imageSrc: "/assets/images/industry/our-work-1.svg",
    imageAlt: "Avant data and machine learning credit assessment pipeline",
    imageAspect: "aspect-549/460",
    brand: "AVANT",
    paragraphs: [
      "Avant with 3 million+ customers & 1 million+ issued credit cards released a machine learning driven credit assessment to quickly & accurately assess the credit worthiness of custom",
      "We developed proprietary & used existing machine learning models to dig into metrics including credit bureau reports & transaction data",
    ],
    tags: [
      "Reduced default rates.",
      "Improved cash flows.",
      "Enhanced customer experience",
    ],
  },
  {
    id: "mobile-app",
    imageSrc: "/assets/images/industry/our-work-2.webp",
    imageAlt: "Best-in-class mobile banking app",
    imageAspect: "aspect-1319/1209",
    paragraphs: [
      "Our client's vision was to provide an all-in-one financial experience, offering debit cards, bank accounts, credit services, and a budgeting app in one easy-to-use mobile platform.",
      "Our team worked to build the app from scratch using React Native. We integrated complex and diverse banking features into the app, while ensuring ease of use, high performance, and robust security.",
    ],
    bullets: [
      {
        text: (
          <>
            A <strong className="font-semibold">4.7 App Store ranking</strong>{" "}
            from 20,000+ people.
          </>
        ),
      },
      {
        text: (
          <>
            A{" "}
            <strong className="font-semibold">
              visually stunning & intuitively navigable user interface
            </strong>{" "}
            across different services, all within the app.
          </>
        ),
      },
      {
        text: (
          <>
            Enhanced app performance & smooth{" "}
            <strong className="font-semibold">user experiences</strong>.
          </>
        ),
      },
      {
        text: (
          <>
            Streamlined & efficient{" "}
            <strong className="font-semibold">app development process</strong>.
          </>
        ),
      },
    ],
  },
  {
    id: "core-banking",
    imageSrc: "/assets/images/industry/our-work-3.webp",
    imageAlt: "Building the foundation of a core banking platform with Galileo",
    imageAspect: "aspect-1260/814",
    paragraphs: [
      "Our client that boasts 28 million+ customers, and is one of America's most renowned financial institutions, is redefining modern banking.",
      "They're providing all the modern financial services people expect today, such as being able to transfer money, pay bills and more, online or on your phone — without a physical bank.",
    ],
    highlight:
      "To achieve this, eForte brought together a set of digital banking technology services, including",
    bullets: [
      {
        text: "Integrating the financial API, Galileo, to ensure robust and versatile financial data interactions.",
      },
      {
        text: "Development of a sophisticated system for managing account balances and transactions, crucial for real-time data processing and accuracy.",
      },
      {
        text: "Design of an RDF Processor System to enable the aggregation and refinement of data from diverse sources into a unified, reliable database.",
      },
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
                        className="inline-flex items-center rounded-full bg-default/5 px-4 py-2 text-sm text-default/80"
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
