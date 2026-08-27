"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiChartBar,
  HiCheckCircle,
  HiCloud,
  HiShieldCheck,
  HiSwitchHorizontal,
  HiTrendingUp,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";

type Capability = {
  icon: IconType;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    icon: HiTrendingUp,
    title: "Data engineering & ETL",
    description:
      "Build resilient pipelines that ingest high volume transactional and behavioral data without bottlenecks.",
  },
  {
    icon: HiCloud,
    title: "Data platform development",
    description:
      "Architect secure, cloud native platforms (Databricks and beyond) built for financial grade scale.",
  },
  {
    icon: HiShieldCheck,
    title: "Data security & compliance",
    description:
      "Protect financial data with encryption, access controls, and continuous monitoring aligned to regulated environments.",
  },
  {
    icon: HiCheckCircle,
    title: "Data quality & governance",
    description:
      "Establish lineage, accuracy, and audit ready controls across financial datasets.",
  },
  {
    icon: HiSwitchHorizontal,
    title: "Data migration services",
    description:
      "Move legacy financial systems to modern platforms without disrupting daily operations.",
  },
  {
    icon: HiChartBar,
    title: "Data analytics & visualization",
    description:
      "Deliver dashboards and embedded reporting built for financial operations teams.",
  },
];


export default function FinancialServicesDataFoundationsSection() {
  return (
    <section className="bg-white py-16 text-default">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-default/70"
        >
          The Data Foundations
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-default md:text-4xl lg:text-[44px]"
        >
          We engineer the Foundational Data layer behind modern financial
          products
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative aspect-2403/510 w-full overflow-hidden rounded-[12px]">
            <Image
              src="/assets/images/industry/working.jpg"
              alt="eForte finance studio team at work"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: 0.06 * (index % 3),
                  ease: "easeOut",
                }}
                className="max-w-md mx-auto"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-7 w-7 shrink-0 text-[#5b34ff]" />
                  <h3 className="text-lg font-medium leading-snug text-default max-w-[200px]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-default/70 max-w-[350px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-20 md:mt-24"
        >
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-default">
            Our Key Partner Certifications
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {[
              {
                src: "/assets/images/industry/aws-partner.png",
                alt: "AWS Partner certification",
              },
              {
                src: "/assets/images/industry/databricks-badge.png",
                alt: "Databricks partner certification",
              },
              {
                src: "/assets/images/industry/badge.png",
                alt: "AI Data Cloud Services Partner certification",
              },
            ].map((item) => (
              <div
                key={item.src}
                className="relative h-24 w-24 md:h-28 md:w-28"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
