"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { cyberCertifications } from "@/data/capabilities/cybersecurity";

export default function CyberCertificationsSection() {
  return (
    <section className="bg-white">
      <div className="mx-[14px] rounded-[12px] bg-black py-16 md:rounded-[12px]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="rounded-[12px] bg-white px-6 py-10 text-default md:rounded-[12px] md:px-12 md:py-12 lg:px-16"
          >
            <h2 className="text-[28px] font-semibold md:text-[32px]">
              {cyberCertifications.title}
            </h2>

            <div className="mt-6 border-t border-[#E8E8E8]">
              <div className="grid grid-cols-1 items-center gap-6 border-b border-[#E8E8E8] py-8 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
                <p className="text-[15px] font-semibold md:text-base">
                  {cyberCertifications.staffLabel}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 md:gap-x-7 lg:gap-x-8">
                  {cyberCertifications.staffIcons.map((icon) => (
                    <div
                      key={icon.src}
                      className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 md:h-[68px] md:w-[68px]"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        fill
                        sizes="68px"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
                <p className="text-[15px] font-semibold md:text-base">
                  {cyberCertifications.complianceLabel}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10 lg:gap-x-12">
                  {cyberCertifications.complianceIcons.map((icon) => (
                    <div
                      key={icon.src}
                      className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 md:h-[68px] md:w-[68px]"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        fill
                        sizes="68px"
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
