"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import {
  financialServicesWhitePaper,
  type FinanceWhitePaper,
} from "@/data/industries/financialServicesWhitePaper";
import { motion } from "@/lib/replayMotion";

type FinancialServicesWhitePaperArticleSectionProps = {
  paper?: FinanceWhitePaper;
};

export default function FinancialServicesWhitePaperArticleSection({
  paper = financialServicesWhitePaper,
}: FinancialServicesWhitePaperArticleSectionProps) {
  return (
    <section className="bg-white py-14 text-default md:py-20">
      <Container>
        <article className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary-pink">
              Executive summary
            </p>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-black md:text-[18px]">
              {paper.executiveSummary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mt-14"
          >
            <h2 className="text-[32px] font-medium leading-tight text-black md:text-[36px]">
              {paper.whyNowTitle}
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-black md:text-[18px]">
              {paper.whyNow.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-[12px]">
            <Image
              src={paper.operatingModelSrc}
              alt={paper.operatingModelAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center text-sm text-black/55">
            {paper.operatingModelCaption}
          </p>
        </motion.div>

        <article className="mx-auto mt-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[32px] font-medium leading-tight text-black md:text-[36px]">
              {paper.buildOrderTitle}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-black md:text-[18px]">
              {paper.buildOrderLead}
            </p>
          </motion.div>
        </article>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {paper.layers.map((layer, index) => (
            <motion.article
              key={layer.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[12px] border border-black/10 bg-[#F7F7FA] p-6"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[20px] font-semibold text-black">
                {layer.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black">
                {layer.body}
              </p>
            </motion.article>
          ))}
        </div>

        <article className="mx-auto mt-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[32px] font-medium leading-tight text-black md:text-[36px]">
              {paper.controlsTitle}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-black md:text-[18px]">
              {paper.controlsLead}
            </p>
          </motion.div>

          <ol className="mt-8 space-y-6">
            {paper.controls.map((control, index) => (
              <motion.li
                key={control.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="border-t border-black/10 pt-6"
              >
                <h3 className="text-[20px] font-semibold text-black">
                  {index + 1}. {control.title}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-black">
                  {control.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-[12px]">
            <Image
              src={paper.supervisionSrc}
              alt={paper.supervisionAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-center text-sm text-black/55">
            {paper.supervisionCaption}
          </p>
        </motion.div>

        <article className="mx-auto mt-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[32px] font-medium leading-tight text-black md:text-[36px]">
              {paper.useCasesTitle}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-black md:text-[18px]">
              {paper.useCasesLead}
            </p>
          </motion.div>
        </article>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          {paper.useCases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[12px] border border-black/10 p-6"
            >
              <h3 className="text-[20px] font-semibold text-black">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-black">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>

        <article className="mx-auto mt-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[32px] font-medium leading-tight text-black md:text-[36px]">
              {paper.sequenceTitle}
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-black md:text-[18px]">
              {paper.sequenceLead}
            </p>
          </motion.div>

          <ol className="mt-10 space-y-8">
            {paper.sequence.map((item, index) => (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex gap-5"
              >
                <span className="mt-0.5 text-[12px] font-semibold tracking-[0.16em] text-primary-pink">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-[20px] font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-black">
                    {item.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mt-16 border-t border-black/10 pt-10"
          >
            <h2 className="text-[32px] font-medium leading-tight text-black md:text-[36px]">
              {paper.closingTitle}
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-black md:text-[18px]">
              {paper.closing.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </article>
      </Container>
    </section>
  );
}
