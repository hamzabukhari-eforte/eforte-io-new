"use client";

/**
 * Preserved for possible future reuse.
 * Staff Augmentation now uses shared StudioContactBanner instead.
 */
export default function StaffAugmentationCtaSection() {
  return null;
}

/*
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import ContactCTA from "@/components/atoms/ContactCTA";
import { staffAugmentationContent } from "@/data/capabilities/staffAugmentation";

const { closingCta } = staffAugmentationContent;

export default function StaffAugmentationCtaSection() {
  return (
    <section className="bg-white/[0.03] py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-semibold leading-tight text-white lg:text-[40px]">
            {closingCta.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-white/75 md:text-lg">
            <p>{closingCta.body}</p>
            <p>{closingCta.subBody}</p>
          </div>
          <div className="mt-9">
            <ContactCTA className="inline-flex h-12 items-center justify-center rounded-full bg-primary-pink px-8 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(211,40,122,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-pink/90">
              Contact Us
            </ContactCTA>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
*/
