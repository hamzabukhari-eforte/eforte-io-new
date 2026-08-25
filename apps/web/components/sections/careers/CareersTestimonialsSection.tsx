"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/atoms/Container";
import {
  employeeTestimonials,
  type EmployeeTestimonial,
} from "@/data/careersTestimonials";
import { useInViewReplay } from "@/lib/useInViewReplay";

const ease = [0.25, 0.46, 0.45, 0.94] as const;
const CARD_WIDTH = 420;
const GAP = 24;
const STEP = CARD_WIDTH + GAP;
const SLIDE_DURATION = 0.9;
const PAUSE_MS = 4000;

const row1Testimonials = employeeTestimonials.filter((_, i) => i % 2 === 0);
const row2Testimonials = employeeTestimonials.filter((_, i) => i % 2 === 1);

function TestimonialCard({ testimonial }: { testimonial: EmployeeTestimonial }) {
  return (
    <div
      style={{ width: CARD_WIDTH }}
      className={`flex min-h-[220px] shrink-0 flex-col rounded-[12px] p-6 md:min-h-[240px] md:p-7 ${testimonial.bgClass}`}
    >
      <p className="flex-1 text-sm leading-relaxed text-gray-700 md:text-[15px]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatarSrc}
            alt={testimonial.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <p className="text-sm text-gray-800">
          <span className="font-semibold">{testimonial.name}</span>
          <span className="text-gray-500"> | {testimonial.role}</span>
        </p>
      </div>
    </div>
  );
}

function TestimonialCarouselRow({
  testimonials,
  direction,
  className = "",
}: {
  testimonials: EmployeeTestimonial[];
  direction: "rtl" | "ltr";
  className?: string;
}) {
  const count = testimonials.length;
  const looped = useMemo(
    () => [...testimonials, ...testimonials, ...testimonials],
    [testimonials]
  );
  const isRtl = direction === "rtl";
  const [index, setIndex] = useState(isRtl ? 0 : count);
  const [instant, setInstant] = useState(false);
  const isResettingRef = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (isResettingRef.current) return;
      setIndex((current) => (isRtl ? current + 1 : current - 1));
    }, PAUSE_MS);
    return () => window.clearInterval(id);
  }, [isRtl]);

  const handleAnimationComplete = () => {
    const shouldReset = isRtl ? index >= count : index <= 0;
    if (!shouldReset) return;

    isResettingRef.current = true;
    setInstant(true);
    setIndex(isRtl ? 0 : count);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setInstant(false);
        isResettingRef.current = false;
      });
    });
  };

  const translateX = -index * STEP;

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex w-max"
        style={{ gap: GAP }}
        animate={{ x: translateX }}
        transition={
          instant
            ? { duration: 0 }
            : { duration: SLIDE_DURATION, ease }
        }
        onAnimationComplete={handleAnimationComplete}
      >
        {looped.map((testimonial, i) => (
          <TestimonialCard
            key={`${testimonial.id}-${i}`}
            testimonial={testimonial}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function CareersTestimonialsSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInViewReplay(introRef, {
    margin: "-60px",
    amount: 0.15,
  });

  return (
    <section className="overflow-hidden bg-white pb-16 pt-16 md:pb-24 md:pt-24 lg:pt-28">
      <Container>
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 24 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-3xl font-semibold text-default md:text-4xl lg:text-[42px]">
            What our team says
          </h2>
        </motion.div>
      </Container>

      <div className="flex w-full flex-col gap-6 md:gap-8">
        <TestimonialCarouselRow
          testimonials={row1Testimonials}
          direction="rtl"
        />
        <TestimonialCarouselRow
          testimonials={row2Testimonials}
          direction="ltr"
          className="md:pl-16 lg:pl-24"
        />
      </div>
    </section>
  );
}
