"use client";

/**
 * Alternate benefits card design for Staff Augmentation — trial layout.
 * To revert: restore StudioValuesSection in StaffAugmentationPageSections.
 */

import Image from "next/image";
import Container from "@/components/atoms/Container";
import { staffAugmentationContent } from "@/data/capabilities/staffAugmentation";
import { motion } from "@/lib/replayMotion";

const { valuesIntro, values } = staffAugmentationContent;

const accentByVariant: Record<(typeof values)[number]["variant"], string> = {
  dark: "bg-black text-white",
  muted: "bg-[#E8E8EC] text-black",
  light: "bg-white text-black ring-1 ring-black/8",
};

export default function StaffAugmentationBenefitsAltSection() {
  return (
    <section className="relative z-10 -mt-10 rounded-t-[12px] bg-[#f3f2f6] py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-pink">
            {valuesIntro.eyebrow}
          </p>
          <h2 className="mt-3 text-[36px] font-semibold leading-tight text-black">
            {valuesIntro.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {values.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`group relative flex flex-col overflow-hidden rounded-[12px] p-7 md:p-8 ${accentByVariant[item.variant]}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary-pink transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[12px] ${
                    item.variant === "dark"
                      ? "bg-white/10"
                      : "bg-black/[0.06]"
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={40}
                    height={40}
                    className={`h-8 w-8 object-contain ${
                      item.variant === "dark" ? "brightness-0 invert" : ""
                    }`}
                    aria-hidden
                  />
                </div>
                <span
                  className={`text-[13px] font-semibold tracking-[0.14em] ${
                    item.variant === "dark"
                      ? "text-white/45"
                      : "text-black/35"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-8 text-[24px] font-semibold leading-tight">
                {item.title}
              </h3>
              <p
                className={`mt-3 text-[16px] leading-relaxed ${
                  item.variant === "dark" ? "text-white/85" : "text-black/80"
                }`}
              >
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
