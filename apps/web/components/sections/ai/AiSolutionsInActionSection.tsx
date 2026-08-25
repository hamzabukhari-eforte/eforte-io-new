"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { aiCaseStudy } from "@/data/capabilities/ai";

export default function AiSolutionsInActionSection() {
  return (
    <section className="bg-default">
      <div className="rounded-t-[12px] bg-white py-20 text-default md:rounded-t-[12px] md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                {aiCaseStudy.title}
              </h2>
              <h3 className="mt-6 text-xl font-semibold leading-snug md:text-2xl">
                {aiCaseStudy.subtitle}
              </h3>

              <div className="mt-8">
                <span className="inline-flex h-10 items-center justify-center rounded-full bg-default px-5 py-0 text-sm font-medium text-white">
                  {aiCaseStudy.outcomesLabel}
                </span>
                <ul className="mt-5 space-y-3">
                  {aiCaseStudy.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] leading-relaxed text-[#444]"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-default" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="flex flex-col"
            >
              <div className="space-y-4 text-[15px] leading-relaxed text-[#555] md:text-base">
                {aiCaseStudy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="relative mt-10 aspect-[580/272] w-full">
                <Image
                  src={aiCaseStudy.diagramSrc}
                  alt="LLM solution architecture diagram"
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-contain object-left"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
