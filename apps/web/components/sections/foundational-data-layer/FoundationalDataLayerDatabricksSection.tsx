"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { FaCube, FaAward } from "react-icons/fa";

const DATABRICKS_IMAGE =
  "/assets/images/foundational-data-layer/databricks-expertise.png";

export default function FoundationalDataLayerDatabricksSection() {
  return (
    <section
      id="databricks"
      className="py-24 bg-black relative"
      aria-labelledby="databricks-heading"
    >
      <Container className="text-center">
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4 text-gray-400">
            <FaCube className="text-[#2D4EFF]" />
            <span className="font-bold tracking-tight">databricks</span>
          </div>
          <h2
            id="databricks-heading"
            className="text-5xl font-medium mb-6 text-white max-w-2xl mx-auto"
          >
            Our Databricks expertise
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            eForte&apos;s Data Studio and AI Studio have partnered with Databricks
            for over five years, working closely with organizations to unlock
            the full potential of the Lakehouse Platform. Our teams help industry
            leaders achieve measurable business outcomes through scalable data,
            analytics, and AI solutions.
          </p>
          <div className="mt-4 text-xs font-semibold text-green-400 uppercase tracking-widest">
            We&apos;re a Databricks Select Partner
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden mt-12 max-w-5xl mx-auto group">
          <div className="h-[500px] w-full relative">
            <Image
              src={DATABRICKS_IMAGE}
              alt="Professional team working on data and AI in a modern office"
              fill
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-90"
              aria-hidden
            />
          </div>

          {/* Overlay content - match HTML p-10, gap-4, items-end justify-between */}
          <div className="absolute bottom-0 left-0 w-full p-10 flex flex-wrap gap-4 items-end justify-between">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-center gap-4 min-w-[240px] group/card hover:bg-white/15 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover/card:scale-105 transition-transform duration-300 shrink-0">
                <FaAward className="text-black text-xl" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300 group-hover/card:text-gray-200 transition-colors duration-300">
                  Databricks
                </div>
                <div className="font-semibold text-white group-hover/card:text-white transition-colors duration-300">
                  Select Partner Network
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 min-w-[200px] max-w-[280px] text-left group/card hover:bg-white/15 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer">
              <div className="text-4xl font-bold text-white mb-1 group-hover/card:text-white transition-colors duration-300">
                200+
              </div>
              <div className="text-[10px] text-gray-300 leading-tight group-hover/card:text-gray-200 transition-colors duration-300">
                certified Databricks data analysts, engineers, scientists &amp; machine learning engineers
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 min-w-[200px] max-w-[240px] text-left group/card hover:bg-white/15 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer">
              <div className="text-4xl font-bold text-white mb-1 group-hover/card:text-white transition-colors duration-300">
                20+
              </div>
              <div className="text-[10px] text-gray-300 leading-tight group-hover/card:text-gray-200 transition-colors duration-300">
                years of experience working with data
              </div>
            </div>
          </div>

          {/* Partner badge: bottom edge aligned with top of image, sitting above as a cap */}
          <div
            className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-full bg-white rounded-b-lg px-4 py-2 shadow-lg z-20"
            aria-hidden
          >
            <div className="min-w-20 min-h-10 py-2 px-3 bg-green-700 rounded-b flex items-end justify-center text-white text-xs font-bold whitespace-nowrap">
              PARTNER
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
