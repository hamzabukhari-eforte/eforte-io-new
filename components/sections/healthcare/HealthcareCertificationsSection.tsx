"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

const certifications = [
  { src: "/assets/images/landing/soc.png", alt: "SOC 2 Type 2 certified" },
  { src: "/assets/images/landing/iso.png", alt: "ISO 27001 certified" },
  { src: "/assets/images/landing/nist.png", alt: "NIST AI compliant" },
];

const complianceLogos = [
  {
    src: "/assets/images/landing/HIPAA.png",
    alt: "HIPAA compliance",
  },
  {
    src: "/assets/images/industry/fda.svg",
    alt: "FDA",
  },
];

export default function HealthcareCertificationsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-semibold text-[#011C57] md:text-4xl"
        >
          Our Certifications
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-12 md:mt-14 md:gap-16"
        >
          {certifications.map((cert) => (
            <div key={cert.alt} className="relative h-24 w-24 md:h-28 md:w-28">
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-[#888888]"
        >
          We are ISO 27001, SOC 2 Type 2 certified, and also compliant with the
          NIST AI Risk Management Framework. The multi-certification approach not
          only mitigates legal and regulatory risks but also drives continuous
          improvement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-12 md:gap-20"
        >
          {complianceLogos.map((logo) => (
            <div key={logo.alt} className="relative h-20 w-32 md:h-24 md:w-40">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-[#888888]"
        >
          eForte has driven the development of countless FDA-certified products
          and HIPAA-compliant solutions, ensuring top-quality, safe, and secure
          software in healthcare and medical fields.
        </motion.p>
      </Container>
    </section>
  );
}
