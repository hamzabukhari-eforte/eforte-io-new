"use client";

import Image from "next/image";
import { motion } from "@/lib/replayMotion";
import {
  SiAmazonwebservices,
  SiDatabricks,
  SiGooglecloud,
  SiSnowflake,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { dataPartnerCertifications } from "@/data/capabilities/data";

const cloudPartners: {
  name: string;
  Icon: IconType;
  className?: string;
}[] = [
  { name: "", Icon: SiAmazonwebservices },
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "databricks", Icon: SiDatabricks },
  { name: "snowflake", Icon: SiSnowflake },
  { name: "Azure", Icon: VscAzure, className: "col-span-2 justify-self-center" },
];

export default function DataPartnersSection() {
  return (
    <section className="bg-default">
      <div className="rounded-[12px] bg-black py-16 text-white md:rounded-[12px] md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Our partners and certifications
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white md:text-base">
                We&apos;re SOC 2 and ISO 27001 certified, and an AWS Advanced Tier
                partner. We&apos;re also partners with, and collaborate closely with
                providers, including Databricks, Snowflake, GCP, Azure and others.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5 md:mt-10 md:gap-6">
                {dataPartnerCertifications.map((badge, index) => (
                  <motion.div
                    key={badge.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="relative h-16 w-16 shrink-0 md:h-[72px] md:w-[72px]"
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

            <div className="grid w-fit grid-cols-2 gap-x-6 gap-y-5 justify-self-start md:gap-x-8 md:gap-y-6 lg:justify-self-end">
              {cloudPartners.map((partner, index) => {
                const PartnerIcon = partner.Icon;

                return (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    className={`flex items-center justify-center gap-2.5 text-white ${partner.className ?? ""}`}
                  >
                    <PartnerIcon className="h-9 w-9 shrink-0 md:h-14 md:w-14" />
                    <span className="text-2xl font-medium tracking-tight md:text-[28px]">
                      {partner.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
