"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function NavigateAISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.3 });

  return (
    <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-lg rounded-xl overflow-hidden">
              <Image
                src="/assets/images/landing/navigate.png"
                alt="AI Adoption Brain Network"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* White Paper Badge */}
            <motion.div
              className="mb-6 md:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <span className="inline-block px-6 md:px-8 py-2 text-primary-pink text-[11px] font-bold uppercase tracking-[0.15em] border border-primary-pink/30 rounded-full">
                WHITE PAPER
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[56px] font-medium text-white leading-tight mb-6 md:mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Navigate the Complexities of AI Adoption to Unlock Real-World Business Value.
            </motion.h2>

            {/* First Paragraph */}
            <motion.p
              className="text-base md:text-[17px] text-white font-light leading-relaxed mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              AI is a game-changer, but successful implementation requires expert guidance. eForte empowers your organization to strategically adopt AI, transforming key operations from reactive to predictive.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p
              className="text-base md:text-[17px] text-white font-light leading-relaxed mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Our expertise spans complex domains: from deploying sophisticated bankruptcy prediction models in finance to engineering personalized, adaptive learning systems in EdTech, ensuring high efficiency and impactful innovation.
            </motion.p>

            {/* Read Now Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <Link
                href="#"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-full text-[15px] font-medium text-white border border-primary-pink bg-transparent hover:bg-primary-pink hover:border-primary-pink transition-all duration-200"
              >
                Read now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
