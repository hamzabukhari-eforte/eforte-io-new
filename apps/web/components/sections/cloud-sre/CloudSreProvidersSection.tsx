"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

const providers = [
  {
    name: "aws",
    src: "/assets/images/capabilities/providers/aws.svg",
    alt: "Amazon Web Services",
    width: 108,
    height: 64,
    className: "h-12 w-auto md:h-14",
  },
  {
    name: "Google Cloud",
    src: "/assets/images/capabilities/providers/google-cloud.svg",
    alt: "Google Cloud",
    width: 264,
    height: 42,
    className: "h-8 w-auto md:h-9",
  },
  {
    name: "Azure",
    src: "/assets/images/capabilities/providers/azure.svg",
    alt: "Microsoft Azure",
    width: 180,
    height: 52,
    className: "h-10 w-auto md:h-11",
  },
];

export default function CloudSreProvidersSection() {
  return (
    <section className="bg-white py-16 text-default">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#888]">
              Top Providers
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              We work with the top 3 cloud providers
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#555] md:text-base">
              Our team boasts deep experience managing, optimizing, and
              automating infrastructure on the world&apos;s leading cloud
              platforms.
            </p>
          </div>

          <div className="flex flex-col items-start gap-10 lg:items-center">
            {providers.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Image
                  src={provider.src}
                  alt={provider.alt}
                  width={provider.width}
                  height={provider.height}
                  className={provider.className}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
