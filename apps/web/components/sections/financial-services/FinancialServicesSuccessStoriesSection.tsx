"use client";

import { StudioSuccessStoriesSection } from "@/components/sections/studio-shared";
import { productDesignShowcase } from "@/data/productDesign";

/**
 * Same success stories carousel as Capabilities → Product Design.
 * Previous finance-only carousel (Meridian Pay, Cobalt Digital Bank,
 * Fenwick Capital Markets) preserved below for possible reuse.
 */
export default function FinancialServicesSuccessStoriesSection() {
  return (
    <div className="relative -mt-8 bg-default md:-mt-10">
      <StudioSuccessStoriesSection
        stories={productDesignShowcase}
        className="rounded-[12px] bg-white py-20 md:py-28"
      />
    </div>
  );
}

/*
const previousFinanceSuccessStories = [
  {
    id: "meridian-pay",
    brand: "Meridian Pay",
    title: "Scaling a cross border payments platform without scaling risk",
    cardHeading: "Scaling cross border payments without scaling risk",
  },
  {
    id: "cobalt-digital-bank",
    brand: "Cobalt Digital Bank",
    title: "Scaling support without scaling headcount",
    cardHeading: "AI assisted support that scales with growth",
  },
  {
    id: "fenwick-capital",
    brand: "Fenwick Capital Markets",
    title: "Unified risk visibility across settlements",
    cardHeading: "Real time settlement risk monitoring",
  },
];
*/
