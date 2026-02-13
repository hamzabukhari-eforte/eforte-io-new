import Container from "@/components/atoms/Container";
import DifferentiatorCard from "./DifferentiatorCard";
import { differentiatorsCards } from "./differentiatorsData";
import PartnerLogosRow from "@/components/atoms/PartnerLogosRow";

export default function WhatMakesUsDifferentSection() {
  return (
    <section className="w-full bg-default py-16 md:py-24">
      <Container>
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-pink text-center">
          What makes us different
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white text-center mt-4 mb-6 max-w-3xl mx-auto leading-relaxed">
          Our focus on these key differentiators allows us to consistently
          provide exceptional value to our clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {differentiatorsCards.map((card) => (
            <DifferentiatorCard key={card.id} card={card} />
          ))}
        </div>
      <PartnerLogosRow heading="Some of our incredible clients" />

      </Container>
    </section>
  );
}
