"use client";

import Container from "@/components/atoms/Container";
import ValueCard from "@/components/sections/about-us/ValueCard";
import { careersValues } from "@/data/careersValues";

export default function CareersValuesGridSection() {
  return (
    <section className="bg-default pb-20 pt-4 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-10 md:gap-y-14">
          {careersValues.map((item, index) => (
            <ValueCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
