"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

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

export default function InsuranceSecuritySection() {
  return (
    <section className="bg-default py-16 text-white md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] bg-[#101219] p-8 md:rounded-[40px] md:p-12 lg:p-14"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              Rigorous data and security processes
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base">
              We employ the most stringent security measures and robust security
              protocols to protect digital assets and data. Our multi-layered
              approach to security is designed to ensure readiness for any
              eventuality, while also providing peace of mind.
            </p>
          </div>

          <div className="relative mt-10 aspect-2400/900 w-full overflow-hidden rounded-2xl md:mt-12">
            <Image
              src="/assets/images/industry/bg-security.jpg"
              alt="eForte team collaborating on data security"
              fill
              sizes="(max-width: 1400px) 90vw, 1280px"
              className="object-cover object-center"
            />
          </div>

          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.alt}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-24 w-24 md:h-28 md:w-28">
                  <Image
                    src={cert.logo}
                    alt={cert.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
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
