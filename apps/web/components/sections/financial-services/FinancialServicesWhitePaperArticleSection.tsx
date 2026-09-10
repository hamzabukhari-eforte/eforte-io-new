"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import {
  financialServicesWhitePaper,
  whitePaperClosing,
  whitePaperControls,
  whitePaperExecutiveSummary,
  whitePaperLayers,
  whitePaperSequence,
  whitePaperUseCases,
  whitePaperWhyNow,
} from "@/data/industries/financialServicesWhitePaper";
import { motion } from "@/lib/replayMotion";

export default function FinancialServicesWhitePaperArticleSection() {
  const paper = financialServicesWhitePaper;

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
              {whitePaperExecutiveSummary.map((paragraph) => (
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
              Why 2026 is the year agents leave the sandbox
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-black md:text-[18px]">
              {whitePaperWhyNow.map((paragraph) => (
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
            The operating model: governed data, explainable models, then agents with a
            narrow mandate.
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
              Build in this order, not the reverse
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-black md:text-[18px]">
              Most failed pilots start with the agent and try to bolt on governance later.
              The sequence that survives an exam is the same sequence Finance Studio uses
              to move a transaction: data, then models, then orchestration.
            </p>
          </motion.div>
        </article>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {whitePaperLayers.map((layer, index) => (
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
              Five controls every production agent needs
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-black md:text-[18px]">
              Policy PDFs do not govern agents. Runtime controls do. These five are the
              minimum set we put around any agent that can change money, credit, or a
              customer’s legal record.
            </p>
          </motion.div>

          <ol className="mt-8 space-y-6">
            {whitePaperControls.map((control, index) => (
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
            Supervision belongs on the irreversible step: approve, escalate, or halt —
            with a trail a reviewer can reconstruct.
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
              Where it pays off first
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-black md:text-[18px]">
              Do not give an agent the whole bank. Give it a workflow that already has a
              clock, a policy, and an audit question.
            </p>
          </motion.div>
        </article>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          {whitePaperUseCases.map((item, index) => (
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
              A ninety-day sequence
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-black md:text-[18px]">
              This is not a transformation program. It is the shortest path from a
              regulated pain point to a supervised agent in production.
            </p>
          </motion.div>

          <ol className="mt-10 space-y-8">
            {whitePaperSequence.map((item, index) => (
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
              The paper trail is the product
            </h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-black md:text-[18px]">
              {whitePaperClosing.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </article>
      </Container>
    </section>
  );
}
