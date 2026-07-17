"use client";

import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";

const ACCENT = "#7C4CFF";
const CTA_BG = "/assets/images/velocity-ai/cta-team.png";

export default function EmbeddedEngineeringCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" id="contact">
      <div className="absolute inset-0 z-0">
        <Image
          src={CTA_BG}
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-black via-black/85 to-black/60"
          aria-hidden
        />
      </div>

      <Container className="relative z-10 mx-auto max-w-2xl px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl"
        >
          Let&apos;s work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-4 text-sm leading-relaxed text-white/70 md:text-base"
        >
          Ready to build next-generation embedded systems? Get in touch with our
          engineers to discuss your product roadmap.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-8"
        >
          <ContactCTA
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: ACCENT }}
          >
            Let&apos;s Talk
          </ContactCTA>
        </motion.div>
      </Container>
    </section>
  );
}
