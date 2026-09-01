"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import { aiQbricksBenefits } from "@/data/capabilities/ai";
import { motion } from "@/lib/replayMotion";

export default function AiQbricksBenefitsSection() {
  return (
    <section className="bg-black py-20 text-white md:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-semibold md:text-4xl lg:text-[42px]"
        >
          Key benefits of QBricks
        </motion.h2>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8 xl:gap-10">
          {aiQbricksBenefits.map((benefit, index) => (
            <motion.article
              key={benefit.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="mx-auto flex max-w-[240px] flex-col items-center text-center sm:max-w-none"
            >
              <div
                className="relative mb-7 flex h-[88px] w-[88px] items-center justify-center rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, #6B1645 0%, #3D0F28 55%, #1A0A12 100%)",
                  boxShadow:
                    "0 0 0 1px rgba(211, 40, 122, 0.2), 0 0 28px 8px rgba(211, 40, 122, 0.35)",
                }}
              >
                <Image
                  src={benefit.iconSrc}
                  alt=""
                  width={34}
                  height={34}
                  className="relative h-[34px] w-[34px] object-contain"
                  aria-hidden
                />
              </div>

              <h3 className="text-[17px] font-semibold leading-snug text-white md:text-lg">
                {benefit.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white md:text-[15px]">
                {benefit.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
