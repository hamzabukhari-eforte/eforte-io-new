"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

export default function MediaEntertainmentPartnerSection() {
  return (
    <section className="bg-default py-20 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[12px] bg-[#12141B] p-8 md:min-h-[430px] md:p-12"
        >
          <div className="relative grid items-center gap-12 md:grid-cols-[340px_1fr]">
            <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
              <Image
                src="/assets/images/industry/bg-partner-databricks.svg"
                alt=""
                fill
                className="scale-[1.09] object-contain opacity-100"
                aria-hidden
              />
              <Image
                src="/assets/images/industry/databricks-badge.png"
                alt="Databricks Gold Partner badge"
                fill
                className="object-contain p-16"
              />
            </div>
            <div>
              <h2 className="text-3xl font-medium text-white md:text-4xl">
                A Databricks Gold Partner
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-[17px]">
                As a Gold Databricks Partner, we&apos;ve demonstrated our deep
                knowledge of the platform and a proven track record of successful
                implementations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-[17px]">
                We have 200+ professionals certified on the Databricks
                Intelligence platform. Our people have Databricks certifications
                ranging from Associate Data Analyst, Data Engineer, to
                Professional Machine Learning Engineer and GenAI Engineers.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
