import React from "react";
import Container from "@/components/atoms/Container";
import DetailsCard from "./DetailsCard";

interface Props {
  title: string;
  theme: number[];
  sections: {
    heading: string;
    description: string;
    image: string;
    format: string;
  }[];
}

export default function DetailsSection({ title, theme, sections }: Props) {
  const glow = `rgb(${theme[0]}, ${theme[1]}, ${theme[2]})`;

  return (
    <Container>
      <section className="relative w-full py-12 px-8 bg-[#05060f] text-white">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `linear-gradient(to top left, ${glow} 0%, transparent 70%)`,
            opacity: 0.5,
            filter: "blur(40px)",
          }}
        />

        <div className="z-20 max-w-7xl mx-auto px-6 lg:px-20 flex flex-col gap-12">
          <h1 className="text-2xl lg:text-4xl font-semibold text-center">
            {title}
          </h1>

          {sections.map((item) => (
            <DetailsCard
              key={item.heading}
              heading={item.heading}
              description={item.description}
              image={item.image}
              format={item.format}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}

