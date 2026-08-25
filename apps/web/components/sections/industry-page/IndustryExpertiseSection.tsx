"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactCTA from "@/components/atoms/ContactCTA";
import Container from "@/components/atoms/Container";
import type { IndustryPageContent } from "@/data/industries/types";

type IndustryExpertiseSectionProps = {
  content: IndustryPageContent["expertise"];
};

export default function IndustryExpertiseSection({
  content,
}: IndustryExpertiseSectionProps) {
  return (
    <section className="bg-default py-16 text-white md:py-24">
      <div className="mx-auto w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="rounded-[12px] bg-white p-8 text-default md:rounded-[12px] md:p-12 lg:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-12">
            <div className="max-w-md">
              <h2 className="text-[36px] font-bold leading-[40px] text-black">
                {content.title}
              </h2>
              <p className="mt-5 text-[15px] leading-[23px] text-[#454545]">
                {content.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {content.stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-[12px] border border-default/10 bg-[#F6F8FC] p-6"
                >
                  <p className="w-fit bg-linear-to-br from-[#5AA0F0] to-[#0A2EC1] bg-clip-text text-[62px] font-normal leading-[74px] text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-[14px] leading-[20px] text-[#002EC1]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Container
        className={
          content.solutionsIntro.length > 0
            ? "mt-16 grid gap-8 md:mt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-12"
            : "mt-16 md:mt-20"
        }
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-medium text-white md:text-4xl"
        >
          {content.solutionsHeading}
        </motion.h2>

        {content.solutionsIntro.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-white/70 md:text-base"
          >
            {content.solutionsIntro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </motion.div>
        )}
      </Container>

      <Container className="mt-10 space-y-6 md:mt-12 md:space-y-8">
        {content.solutions.map((card) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-[12px] border border-white/10 bg-[#0A0C16] p-8 md:p-12 lg:p-14"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-[90%] w-[55%]">
              <Image
                src={card.glow}
                alt=""
                fill
                sizes="(max-width: 1024px) 50vw, 740px"
                className="object-contain object-left-top"
                aria-hidden
              />
            </div>
            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col">
                <h3 className="max-w-md text-3xl font-medium leading-tight text-white md:text-4xl">
                  {card.title}
                </h3>
                <ContactCTA className="mt-auto inline-flex h-10 w-fit items-center justify-center rounded-full border border-white/50 px-7 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default">
                  Learn more
                </ContactCTA>
              </div>

              <ul className="space-y-6">
                {card.bullets.map((bullet) => (
                  <li key={bullet.title} className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                    <div>
                      <p className="text-base font-semibold text-white md:text-[17px]">
                        {bullet.title}
                      </p>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-white/65">
                        {bullet.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </Container>
    </section>
  );
}
