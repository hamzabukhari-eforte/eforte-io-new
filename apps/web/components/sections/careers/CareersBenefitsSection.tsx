"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/atoms/Container";
import { benefits } from "@/data/careersBenefits";
import { useInViewReplay } from "@/lib/useInViewReplay";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function BenefitCard({
  benefit,
}: {
  benefit: (typeof benefits)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.5, ease }}
      className={`mx-auto flex aspect-square w-full max-w-[160px] flex-col items-center justify-center rounded-[12px] px-4 py-5 text-center sm:max-w-[180px] md:max-w-[200px] ${benefit.bgClass}`}
    >
      <Icon className={`mb-3 h-8 w-8 md:h-9 md:w-9 ${benefit.iconClass}`} />
      <p className={`text-xs font-medium leading-snug md:text-sm ${benefit.textClass}`}>
        {benefit.label}
      </p>
    </motion.div>
  );
}

export default function CareersBenefitsSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInViewReplay(introRef, { margin: "0px", amount: 0.25 });

  return (
    <section className="relative z-10 -mt-10 rounded-t-[12px] bg-white pb-16 pt-14 shadow-[0_-12px_40px_rgba(0,0,0,0.12)] md:-mt-14 md:pb-24 md:pt-20">
      <Container>
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 24 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold text-default md:text-4xl lg:text-[42px]">
            What&apos;s in it for you?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg">
            We invest in the people who invest in us.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}
