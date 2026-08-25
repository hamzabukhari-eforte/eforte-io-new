"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cyberSolutions } from "@/data/capabilities/cybersecurity";

export default function CyberSolutionsSection() {
  return (
    <section className="bg-white pt-16 pb-6 text-default md:pt-24 md:pb-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-16"
        >
          <div>
            <span className="inline-flex h-10 items-center justify-center rounded-full border border-default/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-default">
              {cyberSolutions.badge}
            </span>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl lg:text-[42px]">
              {cyberSolutions.title}
            </h2>
          </div>
          <p className="max-w-xl text-[15px] leading-relaxed text-[#555] md:text-base lg:pt-10">
            {cyberSolutions.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative mt-10 aspect-[4/1] w-full overflow-hidden rounded-[12px] md:mt-12 md:rounded-[12px]"
        >
          <Image
            src={cyberSolutions.bannerImage}
            alt="Cybersecurity solutions shield"
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover object-center"
          />
        </motion.div>
      </Container>
    </section>
  );
}
