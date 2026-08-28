"use client";

/**
 * Preserved for possible future reuse.
 * Staff Augmentation now uses shared StudioValuesSection for benefits.
 */
export default function StaffAugmentationBenefitsSection() {
  return null;
}

/*
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { staffAugmentationContent } from "@/data/capabilities/staffAugmentation";

const { benefits } = staffAugmentationContent;

export default function StaffAugmentationBenefitsSection() {
  return (
    <section className="bg-default py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-primary-pink">
            Why eForte
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white lg:text-[40px]">
            {benefits.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/75 md:text-lg">
            {benefits.body}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
*/
