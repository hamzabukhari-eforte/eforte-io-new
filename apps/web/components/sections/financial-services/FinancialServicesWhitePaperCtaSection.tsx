"use client";

import Container from "@/components/atoms/Container";
import ContactCTA from "@/components/atoms/ContactCTA";
import { motion } from "@/lib/replayMotion";

export default function FinancialServicesWhitePaperCtaSection() {
  return (
    <section className="bg-default py-16 text-white md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-primary-pink">
            Finance Studio
          </p>
          <h2 className="mt-3 text-[32px] font-medium leading-tight md:text-[40px] md:leading-[44px]">
            Put an agent into one workflow without losing the exam trail
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-white/80">
            We help banks, lenders, and payment providers design the data layer, the
            model, and the supervised agent as one system — not three disconnected
            pilots.
          </p>
          <ContactCTA className="mt-8 inline-flex h-10 items-center justify-center rounded-full leading-none bg-primary-pink px-8 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-pink/90">
            Talk to Finance Studio
          </ContactCTA>
        </motion.div>
      </Container>
    </section>
  );
}
