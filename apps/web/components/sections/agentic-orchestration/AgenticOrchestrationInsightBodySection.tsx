"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import type { AgenticInsightArticle } from "@/data/agenticOrchestrationInsights";
import { motion } from "@/lib/replayMotion";

type AgenticOrchestrationInsightBodySectionProps = {
  article: AgenticInsightArticle;
};

export default function AgenticOrchestrationInsightBodySection({
  article,
}: AgenticOrchestrationInsightBodySectionProps) {
  return (
    <section className="bg-white py-14 text-default md:py-20">
      <Container>
        <article className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="text-[18px] font-medium leading-relaxed text-black md:text-[20px]"
          >
            {article.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="relative my-10 aspect-video w-full overflow-hidden rounded-[12px] md:my-12"
          >
            <Image
              src={article.imageSrc}
              alt={article.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </motion.div>

          {article.sections.map((section, index) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className={index === 0 ? undefined : "mt-12 md:mt-14"}
            >
              <h2 className="text-[28px] font-medium leading-tight text-black md:text-[32px]">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-black md:text-[18px]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </article>
      </Container>
    </section>
  );
}
