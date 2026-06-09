"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";
import { FaBalanceScale, FaShieldAlt } from "react-icons/fa";

export default function GlobalLeadersSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block px-6 md:px-8 py-2 text-primary-pink text-[11px] font-bold uppercase tracking-[0.15em] border border-primary-pink rounded-full">
              WE ARE A SEASONED PROFESSIONAL TEAM
            </span>
          </motion.div>

          {/* First Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-tight mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Powered by Global Leaders.
          </motion.h2>

          {/* Second Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-tight mb-8 md:mb-12 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            Recognized for Excellence.
          </motion.h2>

          {/* Description Paragraph */}
          <motion.p
            className="text-base md:text-[17px] text-desc font-light leading-relaxed max-w-4xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            Combine the world&apos;s most advanced AI infrastructure with award-winning delivery. As an IBM Global Entrepreneur and ISO 27001-certified partner, we build secure, scalable, enterprise-grade solutions trusted globally.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {/* Card 1: IBM GLOBAL ENTREPRENEUR */}
          <motion.div
            className="rounded-lg p-6 md:p-8 flex flex-col border border-white/10 hover:border-white/30 transition-all duration-300"
            style={{
              background: `linear-gradient(to bottom, #0A0A1A, #10082C, #2A0079)`,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            {/* Top Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-pink text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-lg">
                IBM GLOBAL ENTREPRENEUR
              </span>
            </div>

            {/* Main Text */}
            <p className="text-[15px] text-white/90 leading-relaxed mb-6 flex-1">
              Recognized for innovation and leadership in emerging technologies with the Blockchain & AI Award.
            </p>

            {/* Separator */}
            <div className="border-t border-white/10 mb-6"></div>

            {/* Industry Awards Section */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-3">
                Industry Awards
              </h4>
              <p className="text-[15px] text-desc leading-relaxed">
                Rated &quot;A&quot; by Expertise.com among top software service providers for quality, trust, and performance.
              </p>
            </div>

            {/* Bottom Logos */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative flex items-center justify-center" style={{ width: '88px', height: '80px' }}>
                <Image
                  src="/assets/images/landing/IBM.png"
                  alt="IBM Global Entrepreneur"
                  width={88}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative flex items-center justify-center" style={{ width: '90px', height: '90px' }}>
                <Image
                  src="/assets/images/landing/Expertise.png"
                  alt="Expertise.com"
                  width={90}
                  height={90}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2: ISO 27001 Certified */}
          <motion.div
            className="rounded-lg p-6 md:p-8 flex flex-col border border-white/10 hover:border-white/30 transition-all duration-300"
            style={{
              background: `linear-gradient(to bottom, #0A0A1A, #10082C, #2A0079)`,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {/* Top Header with Icon */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-3">
                <FaShieldAlt className="text-primary-pink text-4xl" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    ISO 27001 Certified
                  </h3>
                  <p className="text-[13px] text-desc mt-1">
                    Demonstrating best-in-class information security.
                  </p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-white/10 mb-6"></div>

            {/* Security & Scale Section */}
            <div className="mb-6 flex-1">
              <h4 className="text-xl font-bold text-white mb-3">
                Security & Scale
              </h4>
              <p className="text-[15px] text-desc leading-relaxed">
                Our certifications and expertise demonstrate an unwavering commitment to enterprise-grade security and data protection.
              </p>
            </div>

            {/* Bottom Logo */}
            <div className="mt-auto">
              <div className="relative w-20 h-20 flex items-center justify-center">
                <Image
                  src="/assets/images/landing/iso.png"
                  alt="ISO 27001 Certified"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Ethical & Compliant */}
          <motion.div
            className="rounded-lg p-6 md:p-8 flex flex-col border border-white/10 hover:border-white/30 transition-all duration-300"
            style={{
              background: `linear-gradient(to bottom, #0A0A1A, #10082C, #2A0079)`,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            {/* Top Header with Icon */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-3">
                <FaBalanceScale className="text-primary-pink text-4xl" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Ethical & Compliant
                  </h3>
                  <p className="text-[13px] text-desc mt-1">
                    Adherence to global standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-white/10 mb-6"></div>

            {/* CAIDP Member Section */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-2">
                CAIDP Member:
              </h4>
              <p className="text-[15px] text-desc leading-relaxed mb-4">
                Aligned with global standards for ethical and responsible AI.
              </p>
            </div>

            {/* HIPAA Compliance Section */}
            <div className="mb-6 flex-1">
              <h4 className="text-xl font-bold text-white mb-2">
                HIPAA Compliance Expertise:
              </h4>
              <p className="text-[15px] text-desc leading-relaxed">
                Proven experience delivering solutions meeting healthcare data protection requirements.
              </p>
            </div>

            {/* Bottom Logos */}
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative flex items-center justify-center" style={{ width: '160px', height: '100px' }}>
                <Image
                  src="/assets/images/landing/CADP.png"
                  alt="CAIDP Member"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative flex items-center justify-center" style={{ width: '95px', height: '95px' }}>
                <Image
                  src="/assets/images/landing/HIPAA.png"
                  alt="HIPAA Compliant"
                  width={75}
                  height={95}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
