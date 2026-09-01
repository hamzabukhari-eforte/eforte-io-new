"use client";

import Container from "@/components/atoms/Container";
import ValueCard from "@/components/sections/about-us/ValueCard";
import { careersValues } from "@/data/careersValues";

export default function CareersValuesGridSection() {
  return (
    <section className="bg-black pt-8">
      <Container>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-10 md:gap-y-8">
          {careersValues.map((item, index) => (
            <ValueCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
