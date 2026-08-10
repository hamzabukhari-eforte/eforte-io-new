"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiAmazonwebservices,
  SiDatabricks,
  SiGooglecloud,
  SiSnowflake,
} from "react-icons/si";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { dataPartnerCertifications } from "@/data/capabilities/data";

const cloudPartners: {
  name: string;
  Icon: IconType;
  iconClassName?: string;
}[] = [
  {
    name: "aws",
    Icon: SiAmazonwebservices,
    iconClassName: "text-[#FF9900]",
  },
  {
    name: "Google Cloud",
    Icon: SiGooglecloud,
    iconClassName: "text-[#4285F4]",
  },
  {
    name: "databricks",
    Icon: SiDatabricks,
    iconClassName: "text-[#FF3621]",
  },
  {
    name: "snowflake",
    Icon: SiSnowflake,
    iconClassName: "text-[#29B5E8]",
  },
];

export default function AiPartnersSection() {
  return (
    <section className="bg-[#F7F7F8] py-16 text-default md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
        >
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-[42px] lg:leading-tight">
              Our partners and certifications
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#666] md:text-base">
              We&apos;re SOC 2 and ISO 27001 certified, and an AWS Advanced Tier
              partner. We&apos;re also partners with, and collaborate closely with
              providers, including Databricks, Snowflake, GCP, Azure and others.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 md:gap-5">
              {dataPartnerCertifications.map((badge, index) => (
                <motion.div
                  key={badge.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="relative h-18 w-18 shrink-0 md:h-20 md:w-20"
                >
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:gap-x-14 md:gap-y-12">
            {cloudPartners.map((partner, index) => {
              const PartnerIcon = partner.Icon;
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="flex items-center gap-3 text-default"
                >
                  <PartnerIcon
                    className={`h-9 w-9 shrink-0 md:h-10 md:w-10 ${partner.iconClassName ?? ""}`}
                  />
                  <span className="text-xl font-medium tracking-tight md:text-2xl lg:text-[28px]">
                    {partner.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
