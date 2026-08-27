"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { dataProcessMiner } from "@/data/capabilities/data";

export default function DataProcessMinerSection() {
  return (
    <section className="relative z-10 mt-10 md:mt-4">
      <div className="rounded-[12px] bg-default py-20 text-white md:rounded-[12px] md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-14 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-pink">
                Proprietary Technology
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
                {dataProcessMiner.name}
              </h2>
              <p className="mt-2 text-base font-medium text-primary-pink">
                {dataProcessMiner.tagline}
              </p>
              <p className="mt-5 text-base leading-relaxed text-white md:text-base">
                {dataProcessMiner.description}
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {dataProcessMiner.benefits.map((benefit) => {
                const colonIndex = benefit.indexOf(":");
                const title =
                  colonIndex >= 0 ? benefit.slice(0, colonIndex + 1) : benefit;
                const detail =
                  colonIndex >= 0 ? benefit.slice(colonIndex + 1) : "";

                return (
                  <li
                    key={benefit}
                    className="flex h-full flex-col gap-3 rounded-[12px] border border-white/10 bg-white/5 p-6"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-pink/20 text-primary-pink">
                      <HiCheck className="h-4 w-4" />
                    </span>
                    <p className="text-base leading-relaxed text-white">
                      <span className="font-semibold text-white">{title}</span>
                      {detail}
                    </p>
                  </li>
                );
              })}
            </motion.ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
