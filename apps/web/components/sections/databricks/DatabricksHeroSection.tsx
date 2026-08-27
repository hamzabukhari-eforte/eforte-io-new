"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import { databricksHero } from "@/data/databricks";

export default function DatabricksHeroSection() {
  return (
    <section className="relative overflow-visible bg-[#F4F4F5] pt-28 pb-16 text-default md:pt-36 md:pb-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 xl:gap-12">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex h-10 items-center justify-center gap-2.5 rounded-full leading-none bg-black px-4 py-0"
            >
              <Image
                src={databricksHero.badgeIconSrc}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
                aria-hidden
              />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                {databricksHero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-7 text-4xl font-semibold leading-[1.12] tracking-tight text-default sm:text-5xl lg:text-[48px] lg:leading-[1.1]"
            >
              {databricksHero.title}
            </motion.h1>

            <div className="mt-6 space-y-4">
              {databricksHero.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.12 + index * 0.06 }}
                  className="text-base leading-relaxed text-[#3A3A3A] md:text-[17px] md:leading-7"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-9"
            >
              <ContactCTA className="inline-flex h-10 items-center justify-center rounded-full leading-none bg-black px-8 text-sm font-semibold text-white transition-opacity hover:opacity-85">
                {databricksHero.ctaLabel}
              </ContactCTA>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative mx-auto aspect-square w-full max-w-[640px] lg:max-w-none lg:origin-center lg:scale-110"
          >
            <Image
              src={databricksHero.imageSrc}
              alt={databricksHero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 700px"
              className="object-contain object-center"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
