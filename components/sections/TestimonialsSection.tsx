"use client";

import Container from "@/components/atoms/Container";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";

interface Testimonial {
  id: string;
  companyName: string;
  testimonial: string;
  author: string;
  title: string;
  website?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "krank",
    companyName: "Krank",
    testimonial:
      "Consider the expertise that you require. They are one of the best groups around. Trust that they'll put good people into the project. They want to do the right thing.",
    author: "Mark Turner",
    title: "CEO & Founder",
    website: "krank.com",
  },
  {
    id: "investment-markets",
    companyName: "Investment Markets",
    testimonial:
      "We've tripled our output from 20-25 to about 60-70 story points per week. They're fantastic to work with. Everyone I've worked with on their team has gone over and beyond to understand our goals and been very thorough in their approach. Everyone on their team has a lot of talent and knowledge in what they do.",
    author: "Chris Mortan",
    title: "Owner",
    website: "IM",
  },
  {
    id: "oddysee",
    companyName: "Oddysee",
    testimonial:
      "I appreciate their ability to respond and be dynamic. They've taken an individual interest in understanding our business. As soon as I started working with them, their lead sat with us for 2 weeks in order to understand everything before providing direction.",
    author: "Zeta Ceti",
    title: "CEO",
    website: "GRC",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
      <Container>

          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Subtitle/Label */}
            <motion.div
              className="inline-block mb-6 md:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <span className="inline-block px-6 md:px-8 py-2 text-primary-pink text-[11px] font-bold uppercase tracking-[0.15em] border border-primary-pink/30 rounded-full">
                WHAT OUR CLIENTS SAY
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Trusted by Industry Leaders
            </motion.h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex flex-col self-start items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
              >
                {/* Company Name */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                  {testimonial.companyName}
                </h3>

                {/* Testimonial Text */}
                <p className="text-base md:text-[17px] text-desc font-light leading-relaxed mb-6 md:mb-8 flex-1 text-center">
                  {testimonial.testimonial}
                </p>

                {/* Attribution */}
                <div className="text-[15px] text-white/70">
                  <span className="font-bold">{testimonial.author}</span>
                  <span className="mx-2">|</span>
                  <span>{testimonial.title}</span>
                  {testimonial.website && (
                    <>
                      <span className="mx-2">-</span>
                      <span>{testimonial.website}</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
      </Container>
    </section>
  );
}
