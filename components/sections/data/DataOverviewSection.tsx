"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { dataOverviewChecklist } from "@/data/capabilities/data";

export default function DataOverviewSection() {
  return (
    <section className="bg-default">
      <div className="rounded-[36px] bg-white py-20 text-default md:rounded-[42px] md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h2 className="text-3xl font-semibold text-default md:text-4xl">
              What we do?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[#666]">
              We design and build modern data foundations that turn fragmented
              sources into trusted, analytics-ready assets. Our teams partner with
              you from strategy through execution — architecting lakes,
              warehouses, and pipelines that scale with your business.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
              Whether you are modernizing legacy systems or standing up a greenfield
              platform, we deliver pragmatic engineering with governance built in
              from day one.
            </p>
            <ul className="mt-8 space-y-4">
              {dataOverviewChecklist.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 text-base font-medium text-default"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-pink/10 text-primary-pink">
                    <HiCheck className="h-4 w-4" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
          >
            <Image
              src="/assets/images/capabilities/data-governance.png"
              alt="Data governance pyramid — from governance through storage, management, analytics, and AI"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-contain object-center"
            />
          </motion.div>
        </motion.div>
      </Container>
      </div>
    </section>
  );
}
