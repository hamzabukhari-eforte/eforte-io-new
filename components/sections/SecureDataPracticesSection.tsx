"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";

interface CertificationCard {
  id: string;
  logo: string;
  title: string;
  description: string;
}

const certifications: CertificationCard[] = [
  {
    id: "soc2",
    logo: "/assets/images/landing/soc.png",
    title: "SOC 2 Type 2 Certification",
    description:
      "This certification verifies that eForte maintains stringent security protocols and operational excellence over an extended period of time.",
  },
  {
    id: "iso27001",
    logo: "/assets/images/landing/iso.png",
    title: "ISO 27001 Certified",
    description:
      "Our ISO 27001 standard ensures enhanced security for data, reduces risk across business operations, and demonstrates a robust ability to counter evolving security threats.",
  },
  {
    id: "nist",
    logo: "/assets/images/landing/nist.png",
    title: "NIST AI Risk Management Framework Compliant",
    description:
      "eForte has achieved compliance with the NIST AI Risk Management Framework, showcasing strong governance, effective risk management, and transparency in the design and deployment of all AI systems.",
  },
];

export default function SecureDataPracticesSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          {/* Badge */}
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block px-6 md:px-8 py-2 text-primary-pink text-[11px] font-bold uppercase tracking-[0.15em] border border-primary-pink rounded-full">
              UNCOMPROMISED DIGITAL SECURITY
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-tight mb-6 md:mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Secure-by-Design Data Practices
          </motion.h2>

          {/* Introductory Paragraph */}
          <motion.p
            className="text-sm md:text-base lg:text-lg text-desc leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            We implement stringent security controls and robust protocols to safeguard all digital assets and data. Our layered security framework is designed to address evolving threats, ensuring reliability and peace of mind for our clients.
          </motion.p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
            >
              {/* Logo */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-6 flex items-center justify-center">
                <Image
                  src={certification.logo}
                  alt={certification.title}
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {certification.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-desc leading-relaxed">
                {certification.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
