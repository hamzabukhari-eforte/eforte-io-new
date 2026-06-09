"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/assets/images/landing/banner.png"
        alt="Banner"
        fill
        className="object-cover object-top"
        priority
        quality={90}
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Container>
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-medium text-white leading-tight mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              The Integrated AI Transformation Partner.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-desc font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              eForte delivers end-to-end data and AI solutions, combining secure-first methodologies with intelligent automation. We provide custom AI-Augmented Software and intelligent AI-Powered Business Workflows, all built on a robust, future-proof Foundational Data Layer. We are Shaping the Future by Integrating Advanced AI with High-Quality UX and Enterprise Security.
            </motion.p>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
