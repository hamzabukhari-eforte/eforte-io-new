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
    title: "Data engineering and ETL services",
    description:
      "Design, build, and maintain robust data pipelines optimized for high-volume financial data ingestion, transformation, and reconciliation—supporting real-time processing, regulatory reporting, and risk analytics.",
  },
  {
    icon: HiCloud,
    title: "Data platform development",
    description:
      "Architect scalable, secure data platforms (e.g., on Databricks or other cloud-native ecosystems) capable of handling complex financial datasets, including transactional records, market data, customer interactions, and fraud analytics workloads.",
  },
  {
    icon: HiShieldCheck,
    title: "Data security and compliance",
    description:
      "Implement advanced data security frameworks, encryption strategies, access controls, and continuous audits aligned with financial regulations such as PCI-DSS, GDPR, GLBA, SOX, and region-specific banking compliance requirements.",
  },
  {
    icon: HiCheckCircle,
    title: "Data quality and governance",
    description:
      "Establish rigorous governance processes to ensure accuracy, completeness, lineage, and consistency across financial datasets - supporting audit readiness, risk management, and regulatory reporting standards.",
  },
  {
    icon: HiSwitchHorizontal,
    title: "Data migration services",
    description:
      "Seamless transition of legacy data systems to modern, cloud-based platforms. Enable seamless migration from legacy financial systems (core banking, underwriting, payments, trading platforms, etc.) to modern, cloud-based architectures - ensuring data integrity, lineage tracking, and zero-downtime cutovers where required.",
  },
  {
    icon: HiChartBar,
    title: "Data analytics and visualization",
    description:
      "Develop advanced dashboards, reporting systems, and embedded analytics tailored for financial operations - including portfolio insights, risk and fraud monitoring, customer analytics, and operational KPIs.",
  },
];

export default function FinancialServicesDataFoundationsSection() {
  return (
    <section className="bg-white py-20 text-default md:py-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-default/70"
        >
          The Data Foundations
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight text-default md:text-4xl lg:text-[44px]"
        >
          We architect the data foundations to support modern financial services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative aspect-2403/510 w-full overflow-hidden rounded-3xl">
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
                viewport={{ once: true, margin: "-80px" }}
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
          viewport={{ once: true, margin: "-80px" }}
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
