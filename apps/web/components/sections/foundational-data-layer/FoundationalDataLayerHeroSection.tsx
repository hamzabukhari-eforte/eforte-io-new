"use client";

import Container from "@/components/atoms/Container";
import ContactCTA from "@/components/atoms/ContactCTA";
import PartnerLogosRow from "@/components/atoms/PartnerLogosRow";

export default function FoundationalDataLayerHeroSection() {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[900px] flex flex-col items-center justify-center overflow-hidden bg-black pt-24 md:pt-28"
      aria-label="Foundational Data Layer hero"
    >
      {/* Same background as Velocity AI: purple/indigo blurs + gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-30%] md:right-[-10%] w-[120%] md:w-[80%] h-[140%] md:h-[120%] bg-[#581c87] rounded-full blur-[120px] md:blur-[180px] opacity-80 md:opacity-90" />
        <div className="absolute top-[10%] right-[10%] w-[80%] md:w-[60%] h-full md:h-[80%] bg-[#4338ca] rounded-full blur-[100px] md:blur-[150px] opacity-70 md:opacity-80" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-transparent z-0" />
      </div>

      <Container className="relative z-10 text-center flex flex-col items-center pt-20">
        <h1 className="text-5xl sm:text-6xl md:text-[86px] font-medium tracking-tight text-white mb-8 leading-none">
          Foundational Data Layer
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-normal tracking-wide">
          Establishing the Data Infrastructure for AI Transformation.
        </p>
        <p className="text-base text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed text-center">
          The eForte Foundational Data Layer pillar ensures robust, scalable,
          and secure data ecosystems. We establish the strong modern data
          infrastructure needed for AI-driven transformation by mastering data
          management—from ingestion to governance.
        </p>
        <div className="flex items-center justify-center mb-10 md:mb-14">
          <ContactCTA className="px-10 py-3.5 rounded-full border border-white text-base font-medium text-white hover:bg-white hover:text-black transition-all duration-300">
            Contact Us
          </ContactCTA>
        </div>
        <PartnerLogosRow />
      </Container>
    </section>
  );
}
