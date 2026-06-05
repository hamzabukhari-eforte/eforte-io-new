"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureBlock {
  id: string;
  title: string;
  description: string;
  position: "left" | "right" | "bottom";
  icon: string;
}

const features: FeatureBlock[] = [
  {
    id: "regulated-ai",
    title: "Regulated-by-Design AI",
    description:
      "Developing systems that are inherently aligned with global data privacy regulations and security standards from conception.",
    position: "left",
    icon: "/assets/images/landing/icon-shield.svg",
  },
  {
    id: "verifiable-transparency",
    title: "Verifiable AI Transparency",
    description:
      "Guaranteeing AI models are accountable, auditable, and transparent, fostering stakeholder trust and aligning with internal corporate values.",
    position: "right",
    icon: "/assets/images/landing/icon-bolt.svg",
  },
  {
    id: "human-oversight",
    title: "Human AI Oversight",
    description:
      "Establishing clear accountability frameworks, continuous ethical training, and human-in-the-loop mechanisms for ultimate control and safety.",
    position: "bottom",
    icon: "/assets/images/landing/icon-head.svg",
  },
];

export default function StrategicApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.3 });

  return (
    <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
      <Container>
        <div>
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block px-6 md:px-8 py-2 text-primary-pink text-[11px] font-bold uppercase tracking-[0.15em] border border-primary-pink rounded-full">
              Moving Beyond Compliance
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white text-center leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Our Strategic Approach to AI Trust and Business Acceleration
          </motion.h2>

          {/* Mobile/Tablet Layout - Icons and Text (lg and below) */}
          <div className="xl:hidden">
            <div className="flex flex-col gap-8 md:gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                >
                  {/* Icon */}
                  <div className="mb-4 md:mb-6">
                    <Image
                      src={feature.icon}
                      alt={`${feature.title} icon`}
                      width={120}
                      height={120}
                      className="w-24 h-24 md:w-32 md:h-32"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 md:mb-4">
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[15px] text-desc leading-relaxed max-w-2xl mx-auto">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Central Diagram with Features (xl and above) */}
          <div className="hidden xl:block relative min-h-[800px]">
            {/* Central Diagram */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/assets/images/landing/strategic-approach.svg"
                alt="Strategic Approach Diagram"
                width={600}
                height={600}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Feature Blocks */}
            {features.map((feature, index) => {
              let positionClasses = "";
              if (feature.position === "left") {
                positionClasses = "left-10 -left-24 top-2/5 -translate-y-1/2";
              } else if (feature.position === "right") {
                positionClasses = "right-10 -right-24 top-2/5 -translate-y-1/2";
              } else {
                positionClasses = "left-1/2 bottom-0 -translate-x-1/2";
              }

              return (
                <motion.div
                  key={feature.id}
                  className={`absolute ${positionClasses} w-80`}
                  initial={{ 
                    opacity: 0, 
                    y: feature.position === "bottom" ? 30 : 0, 
                    x: feature.position === "left" ? -30 : feature.position === "right" ? 30 : 0 
                  }}
                  animate={isInView ? { opacity: 1, y: 0, x: 0 } : { 
                    opacity: 0, 
                    y: feature.position === "bottom" ? 30 : 0, 
                    x: feature.position === "left" ? -30 : feature.position === "right" ? 30 : 0 
                  }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2, ease: "easeOut" }}
                >
                  <div className={`flex flex-col ${feature.position === "left" ? "items-end text-right" : feature.position === "right" ? "items-start text-left" : "items-center text-center"}`}>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
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
