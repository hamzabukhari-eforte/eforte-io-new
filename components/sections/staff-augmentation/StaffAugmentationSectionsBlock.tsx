"use client";

/**
 * Preserved for possible future reuse.
 * Staff Augmentation now uses shared StudioProcessSection instead.
 */
export default function StaffAugmentationSectionsBlock() {
  return null;
}

/*
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { staffAugmentationContent } from "@/data/capabilities/staffAugmentation";

const { sections } = staffAugmentationContent;

export default function StaffAugmentationSectionsBlock() {
  return (
    <div>
      {sections.map((section, i) => (
        <section
          key={section.id}
          className={i % 2 === 0 ? "bg-default" : "bg-white/[0.03]"}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="py-20 md:py-28"
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-primary-pink">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white lg:text-[40px]">
                {section.title}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-7 text-white/75 md:text-lg">
                {section.body}
              </p>
            </motion.div>
          </Container>
        </section>
      ))}
    </div>
  );
}
*/
