"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { databricksSpecialization } from "@/data/databricks";

export default function DatabricksSpecializationSection() {
  return (
    <section className="bg-black pb-10 md:pb-14">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[28px] bg-[#12141B] p-8 md:min-h-[400px] md:rounded-[32px] md:p-12"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 28px)",
            }}
            aria-hidden
          />
          <div className="relative grid items-center gap-12 md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr]">
            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <Image
                src={databricksSpecialization.badgeBgSrc}
                alt=""
                fill
                className="scale-[1.09] object-contain"
                aria-hidden
              />
              <Image
                src={databricksSpecialization.badgeSrc}
                alt={databricksSpecialization.badgeAlt}
                fill
                sizes="320px"
                className="object-contain object-center p-10 md:p-12"
              />
            </div>

            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                {databricksSpecialization.title}
              </h2>
              {databricksSpecialization.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-base leading-relaxed text-white/80 md:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
