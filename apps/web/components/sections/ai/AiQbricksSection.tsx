"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

export default function AiQbricksSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white md:py-28">
      {/* Left wireframe — pinned to section's top-left corner */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-[78%] w-[44%] -translate-y-6 lg:block xl:w-[40%]">
        <Image
          src="/assets/images/capabilities/ai/qbricks-left.png"
          alt=""
          fill
          sizes="42vw"
          className="object-contain object-left object-top brightness-[2.2] contrast-125 saturate-150"
          aria-hidden
        />
      </div>

      <Container className="relative">
        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-2 xl:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-[560px] items-center pr-4"
          >
            <div className="relative z-10 max-w-[520px] py-10">
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl xl:text-[42px]">
                QBricks: An enterprise accelerator for AI agent development, a
                Built on Databricks Solution
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-white/75 md:text-base">
                QBricks is a low-code/no-code AI workflow builder. It provides
                both pre-built agents as well as a workflow builder, evaluation
                agent, and associated ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative -mr-6 ml-auto aspect-[800/790] w-full max-w-none scale-[1.08] xl:-mr-10 xl:scale-[1.12]"
          >
            <Image
              src="/assets/images/capabilities/qbricks-right-diagram.svg"
              alt="QBricks features diagram"
              fill
              sizes="(max-width: 1280px) 55vw, 820px"
              className="object-contain object-right"
            />
          </motion.div>
        </div>

        {/* Mobile */}
        <div className="relative lg:hidden">
          <div className="pointer-events-none absolute left-[-8%] top-[-12%] h-[55%] w-[85%] opacity-90">
            <Image
              src="/assets/images/capabilities/ai/qbricks-left.png"
              alt=""
              fill
              sizes="85vw"
              className="object-contain object-left object-top brightness-[2.2] contrast-125 saturate-150"
              aria-hidden
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              QBricks: An enterprise accelerator for AI agent development, a
              Built on Databricks Solution
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/75">
              QBricks is a low-code/no-code AI workflow builder. It provides both
              pre-built agents as well as a workflow builder, evaluation agent,
              and associated ecosystem.
            </p>

            <div className="relative mt-10 aspect-[800/790] w-full overflow-hidden">
              <Image
                src="/assets/images/capabilities/qbricks-right-diagram.svg"
                alt="QBricks features diagram"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
