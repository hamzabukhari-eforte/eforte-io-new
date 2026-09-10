"use client";

import Image from "next/image";
import { motion } from "@/lib/replayMotion";
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
  iconBg: string;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    icon: HiTrendingUp,
    iconBg: "#8B5CF6",
    title: "Data engineering & ETL",
    description:
      "Build resilient pipelines that ingest high volume transactional and behavioral data without bottlenecks.",
  },
  {
    icon: HiCloud,
    iconBg: "#F59E0B",
    title: "Data platform development",
    description:
      "Architect secure, cloud native platforms (Databricks and beyond) built for financial grade scale.",
  },
  {
    icon: HiShieldCheck,
    iconBg: "#22C55E",
    title: "Data security & compliance",
    description:
      "Protect financial data with encryption, access controls, and continuous monitoring aligned to regulated environments.",
  },
  {
    icon: HiCheckCircle,
    iconBg: "#EF4444",
    title: "Data quality & governance",
    description:
      "Establish lineage, accuracy, and audit ready controls across financial datasets.",
  },
  {
    icon: HiSwitchHorizontal,
    iconBg: "#D3287A",
    title: "Data migration services",
    description:
      "Move legacy financial systems to modern platforms without disrupting daily operations.",
  },
  {
    icon: HiChartBar,
    iconBg: "#F97316",
    title: "Data analytics & visualization",
    description:
      "Deliver dashboards and embedded reporting built for financial operations teams.",
  },
];


export default function FinancialServicesDataFoundationsSection() {
  return (
    <section className="bg-white py-12 text-default md:py-14">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[12px] font-semibold uppercase tracking-[0.2em] text-primary-pink"
        >
          The Data Foundations
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-3 max-w-4xl text-center text-[48px] font-medium leading-[52px] text-default"
        >
          We engineer the Foundational Data layer behind modern financial
          products
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-8 md:mt-10"
        >
          <div className="relative h-[200px] w-full overflow-hidden rounded-[12px] sm:h-[230px] md:h-[260px] lg:h-[280px]">
            <Image
              src="/assets/final-images/industries/financial-services/data-foundations-v1.png"
              alt="Foundational data layer architecture underpinning modern financial products"
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover object-center"
            />
          </div>
          {/* Previous photo preserved for possible future reuse:
              src="/assets/images/industry/working.jpg" */}
        </motion.div>

        <div className="mt-12 grid gap-8 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: 0.06 * (index % 3),
                  ease: "easeOut",
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-[12px] text-white"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[24px] font-semibold leading-tight text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-black">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mt-14 md:mt-16"
        >
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary-pink">
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
