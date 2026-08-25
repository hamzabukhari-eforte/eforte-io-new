"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { AI_ACCENT } from "@/data/capabilities/ai";

export default function AiCompoundSystemsSection() {
  return (
    <section className="bg-white">
      <div className="rounded-t-[12px] bg-black py-20 text-white md:rounded-t-[12px] md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Modern AI Systems
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-[48px]">
                Building Compound AI Systems
              </h2>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/75 md:text-base">
                <p>
                  eForte builds Compound AI Systems — these are systems that
                  combine multiple components, like AI models, data retrievers,
                  or tools, to solve tasks more effectively.
                </p>
                <p>
                  A prime example is Retrieval Augmented Generation (RAG), which
                  merges a language model with a system for retrieving relevant
                  information.
                </p>
              </div>
              <div className="mt-9">
                <ContactCTA
                  className="inline-flex h-10 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: AI_ACCENT }}
                >
                  Get in touch
                </ContactCTA>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative mx-auto aspect-[502/449] w-full max-w-xl"
            >
              <Image
                src="/assets/images/capabilities/ai/modern-ai-systems.svg"
                alt="Compound AI Systems architecture diagram"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-contain"
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
