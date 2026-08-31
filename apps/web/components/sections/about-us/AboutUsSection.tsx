"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
// Video section preserved for possible future reuse:
// import ReactPlayer from "@/components/atoms/ReactPlayerClient";

const ABOUT_TEXT =
  "With over a decade of experience and a growing team of dedicated engineers, designers, and consultants, eForte delivers high quality, AI native software solutions built around Velocity AI, Agentic Orchestration, and the Foundational Data Layer.";

// const YOUTUBE_URL = "https://www.youtube.com/watch?v=AxnIFqEakag";

export default function AboutUsSection() {
  return (
    <section className="relative bg-default overflow-hidden pt-28 md:pt-36 pb-16">
      {/* Background circles - full width, not inside Container */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
        <div className="absolute left-0 top-1/2 translate-y-1/2 w-[539px] h-[539px] opacity-90">
          <Image
            src="/assets/images/about/circle2.svg"
            alt=""
            width={539}
            height={539}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute right-0 -top-[20%]  w-[539px] h-[539px] opacity-90">
          <Image
            src="/assets/images/about/circle1.svg"
            alt=""
            width={539}
            height={539}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          <h1 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-pink">
            About Us
          </h1>
          <p className="mt-4 md:mt-6 text-lg lg:text-3xl text-white max-w-4xl leading-relaxed">
            {ABOUT_TEXT}
          </p>

          {/* Video section preserved for possible future reuse:
          <div className="mt-10 md:mt-14 w-full mx-auto">
            <div className="relative w-full aspect-video rounded-[12px] overflow-hidden border border-white/10 shadow-2xl">
              <ReactPlayer
                src={YOUTUBE_URL}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
                config={{
                  youtube: {
                    rel: 0,
                  },
                }}
              />
            </div>
          </div>
          */}
        </div>
      </Container>
    </section>
  );
}
