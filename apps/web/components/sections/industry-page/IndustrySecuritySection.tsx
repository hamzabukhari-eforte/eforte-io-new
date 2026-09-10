"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import type { IndustryPageContent } from "@/data/industries/types";
import { motion } from "@/lib/replayMotion";

const certifications = [
  {
    logo: "/assets/images/landing/soc.png",
    alt: "SOC 2 Type 2 certification",
    description:
      "The SOC 2 Type 2 certification is provided to organizations that demonstrate stringent security protocols over an extended period of time.",
  },
  {
    logo: "/assets/images/landing/iso.png",
    alt: "ISO 27001 certification",
    description:
      "Our ISO 27001 certification means enhanced security to protect data, reduced risk for business operations, and an increased ability to respond to evolving security threats.",
  },
  {
    logo: "/assets/images/landing/nist.png",
    alt: "NIST AI Risk Management Framework compliant",
    description:
      "eForte has achieved compliance with the NIST AI Risk Management Framework, demonstrating strong governance, risk management, and transparency in the design and deployment of AI systems.",
  },
];

const defaultSecurity = {
  heading: "Rigorous data and security processes",
  body: "We employ the most stringent security measures and robust security protocols to protect digital assets and data. Our multi-layered approach to security is designed to ensure readiness for any eventuality, while also providing peace of mind.",
};

type IndustrySecuritySectionProps = {
  content?: IndustryPageContent["security"];
};

export default function IndustrySecuritySection({
  content,
}: IndustrySecuritySectionProps) {
  const security = content ?? defaultSecurity;

  return (
    <section className="bg-default pt-6 pb-8 text-white md:pt-8 md:pb-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="rounded-[12px] bg-[#101219] p-8 pb-6 md:rounded-[12px] md:p-12 md:pb-8 lg:p-14 lg:pb-10"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              {security.heading}
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-white md:text-base">
              {security.body}
            </p>
          </div>

          <div className="relative mt-10 aspect-2400/900 w-full overflow-hidden rounded-[12px] md:mt-12">
            <Image
              src="/assets/final-images/industries/security/banner-sunlight-v6.png"
              alt="eForte team reviewing data security in a sunlit office"
              fill
              sizes="(max-width: 1400px) 90vw, 1280px"
              className="object-cover object-center"
            />
          </div>
          {/* Previous section images preserved for possible future reuse: */}
          {/* "/assets/final-images/industries/security/banner-sunlight-v5.png" */}
          {/* "/assets/final-images/industries/security/banner-sunlight-v3.png" */}
          {/* "/assets/final-images/industries/security/banner-sunlight.png" */}
          {/* "/assets/final-images/industries/security/banner.png" */}
          {/* "/assets/images/industry/bg-security.jpg" */}

          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-5">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.alt}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex h-full flex-col items-center rounded-[12px] border border-white/10 bg-white/[0.03] px-5 py-5 text-center"
              >
                <div className="relative h-20 w-20 md:h-[88px] md:w-[88px]">
                  <Image
                    src={cert.logo}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 max-w-xs text-base leading-relaxed text-white">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
