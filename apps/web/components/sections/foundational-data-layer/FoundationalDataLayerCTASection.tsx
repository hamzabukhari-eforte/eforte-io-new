"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import ContactCTA from "@/components/atoms/ContactCTA";

const CTA_BG_IMAGE = "/assets/images/velocity-ai/cta-team.png";

export default function FoundationalDataLayerCTASection() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={CTA_BG_IMAGE}
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent"
          aria-hidden
        />
      </div>
      <Container className="relative z-10 text-center max-w-2xl mx-auto px-8">
        <h2
          id="cta-heading"
          className="text-4xl font-medium mb-4 text-white"
        >
          Let&apos;s work together
        </h2>
        <p className="text-gray-300 text-sm mb-8">
          Get in touch with our experts to review your idea or product,
          <br />
          and discuss options for the best approach.
        </p>
        <ContactCTA className="inline-flex h-10 items-center justify-center px-8 py-0 text-sm font-bold text-white bg-[#2D4EFF] rounded-full leading-none hover:bg-[#4D1DFF] transition-all duration-300 shadow-lg shadow-blue-900/40">
          Get in touch
        </ContactCTA>
      </Container>
    </section>
  );
}
