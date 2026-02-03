"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaUserCheck, FaHeart } from "react-icons/fa";

interface FeatureCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  position: "top" | "bottom-left" | "bottom-right";
}

const features: FeatureCard[] = [
  {
    id: "ai-augmented",
    icon: <FaCode className="w-6 h-6" />,
    title: "AI-Augmented Development",
    description:
      "Boosting team efficiency and throughput via integrated AI tools and powerful, domain-specific AI agents.",
    position: "top",
  },
  {
    id: "human-in-loop",
    icon: <FaUserCheck className="w-6 h-6" />,
    title: "Human-in-the-Loop AI",
    description:
      "Ensuring ethical governance, transparency, and robust data security by keeping human experts in the control pathway.",
    position: "bottom-left",
  },
  {
    id: "responsible-ai",
    icon: <FaHeart className="w-6 h-6" />,
    title: "Responsible AI",
    description:
      "The guiding principle for ensuring continuous human oversight and critical reasoning across all intelligent processes.",
    position: "bottom-right",
  },
];

const badges = [
  { id: "iso", image: "/assets/images/landing/iso.png", alt: "ISO 27001 Certified" },
  { id: "soc2", image: "/assets/images/landing/soc.png", alt: "SOC 2 TYPE 2" },
  { id: "nist", image: "/assets/images/landing/nist.png", alt: "NIST Compliant" },
];

export default function VelocityAISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-16 xl:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Title */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-4 md:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Velocity AI The Secure Pathway to AI Value
            </motion.h2>

            {/* Subtitle */}
            <motion.h3
              className="text-xl font-semibold text-white mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              The Comprehensive Framework for High-Velocity, Ethical Digital Transformation.
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-base md:text-[17px] text-desc font-light leading-relaxed mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Velocity AI is our systematic approach, detailing best-in-class practices, optimized workflows, and AI/ML methodologies. It boosts digital delivery speed and quality, all while rigorously upholding Data Privacy & Security commitments.
            </motion.p>

            {/* Learn More Button */}
            <motion.div
              className="mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-full text-[15px] font-medium text-primary-pink border border-primary-pink bg-transparent hover:bg-primary-pink hover:border-primary-pink hover:text-white transition-all duration-200"
              >
                Learn more
              </Link>
            </motion.div>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-3 md:gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {badges.map((badge) => (
                <div key={badge.id} className="flex items-center justify-center">
                  <Image
                    src={badge.image}
                    alt={badge.alt}
                    width={100}
                    height={100}
                    className="h-16 md:h-20 lg:h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mobile/Tablet Layout - Icons and Text (xl and below) */}
          <div className="xl:hidden">
            <div className="flex flex-col gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex flex-row items-start gap-4 md:gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                >
                  {/* Icon - Left Side */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-pink/20 border border-primary-pink">
                      <div className="text-primary-pink text-2xl md:text-3xl">{feature.icon}</div>
                    </div>
                  </div>
                  {/* Text Content - Right Side */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 md:mb-3">
                      {feature.title}
                    </h3>
                    {/* Description */}
                    <p className="text-[15px] text-desc leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Central Image with Features (xl and above) */}
          <div className="hidden xl:block relative min-h-[700px]">
            {/* Glowing Circles Background Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[500px] h-[500px] rounded-full border border-primary-pink/20 blur-3xl"></div>
              <div className="absolute w-[400px] h-[400px] rounded-full border border-primary-pink/30 blur-2xl"></div>
            </div>

            {/* Central Image */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <div className="w-64 h-64 xl:w-[500px] xl:h-[500px] flex items-center justify-center">
                <Image
                  src="/assets/images/landing/AI-value.png"
                  alt="Velocity AI Core Framework"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Feature Cards */}
            {features.map((feature, index) => {
              let positionClasses = "";
              if (feature.position === "top") {
                positionClasses = "top-30 -right-45 -translate-x-1/2 -translate-y-1/2";
              } else if (feature.position === "bottom-left") {
                positionClasses = "-bottom-5 -left-16";
              } else {
                positionClasses = "-bottom-5 -right-16";
              }

              return (
                <motion.div
                  key={feature.id}
                  className={`absolute ${positionClasses} w-full max-w-[320px] z-10`}
                  initial={{ opacity: 0, y: feature.position === "top" ? -30 : 30, x: feature.position === "bottom-left" ? -30 : feature.position === "bottom-right" ? 30 : 0 }}
                  animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: feature.position === "top" ? -30 : 30, x: feature.position === "bottom-left" ? -30 : feature.position === "bottom-right" ? 30 : 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2, ease: "easeOut" }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-pink/20 border border-primary-pink mb-4">
                      <div className="text-primary-pink">{feature.icon}</div>
                    </div>
                    {/* Title */}
                    <h4 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h4>
                    {/* Description */}
                    <p className="text-[15px] text-desc leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
