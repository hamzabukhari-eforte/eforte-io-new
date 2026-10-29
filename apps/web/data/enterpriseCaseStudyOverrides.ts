import type { ImpactStudyNarrative } from "./impactStudyNarrativeTypes";

const asset = (slug: string, file: string) =>
  `/assets/final-images/case-studies/${slug}/${file}`;

/** Polished overrides for enterprise case studies with unique product URLs + mockups. */
export const enterpriseCaseStudyOverrides: Record<string, ImpactStudyNarrative> = {
  "prism": {
    slug: "prism",
    name: "Prism",
    headline: "Retail demand forecasting with dashboards, seasonality, and messy-data resilience",
    productUrl: "https://app.prismforecast.com",
    intro: [
      "Retailers live and die by anticipating demand — but seasons, holidays, and outliers make naive forecasts fail. Prism is a trends forecasting platform with user and admin dashboards, API integrations, and interactive charts built for strong seasonal patterns and imperfect real-world data.",
      "eForte delivered app.prismforecast.com as a full product stack: forecasting services, a PWA interface, outlier smoothing, and a Foundational Data Layer for reliable retail time series."
    ],
    pillars: ["Velocity AI", "Foundational Data Layer"],
    deliverables: [
      "Demand forecast studio",
      "Seasonality explorer",
      "Outlier smoothing lab",
      "Retail trend board"
    ],
    challenge: {
      title: "Retail demand doesn’t move in a straight line",
      paragraphs: [
        "Yearly, weekly, and daily seasonality plus holiday spikes require models that reflect how retail actually moves — not a flat trend line — surfaced through dashboards operators can trust.",
        "The hardest balance: smooth outliers without dulling sensitivity to real demand shifts."
      ],
      image: asset("prism", "screen-1.png"),
    },
    solution: {
      title: "Forecasting product with careful data engineering",
      lead: "Velocity AI drives the seasonality model; the Foundational Data Layer keeps inputs trustworthy enough to forecast; dashboards and APIs make the results usable day to day.",
      images: [
        asset("prism", "screen-1.png"),
        asset("prism", "screen-2.png"),
        asset("prism", "screen-3.png"),
        asset("prism", "screen-4.png")
      ],
      items: [
        {
          title: "Seasonality-aware forecasting",
          body: "Prism forecasts with yearly, weekly, and daily seasonality plus holiday effects so projections match how retail actually moves.",
          image: asset("prism", "screen-2.png"),
        },
        {
          title: "Dashboards and interactive charts",
          body: "User and admin views present forecasts, outliers, and adjustments so planners can act without leaving the app.",
          image: asset("prism", "screen-3.png"),
        },
        {
          title: "Careful outlier handling",
          body: "Smoothing logic dampens distorting spikes while preserving genuine changepoints in demand.",
          image: asset("prism", "screen-3.png"),
        },
        {
          title: "Cross-stack retail delivery",
          body: "Forecasting services sit behind a React PWA with PHP integration so merchandisers can run forecasts in a web workspace with third-party API connections.",
          image: asset("prism", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Prism gave retailers forecasts they can operate from dashboards — even when the input data isn’t perfect.",
      items: [
        { title: "38% accuracy improvement", body: "Seasonal + holiday modeling beat prior baselines." },
        { title: "30K+ forecasts generated", body: "SKU-level runs at retail scale." },
        { title: "Resilient to messy data", body: "The engine keeps projections usable with gaps in historical series." },
        { title: "Balanced outlier sensitivity", body: "Custom smoothing stays stable without going numb." }
      ],
    },
    closing: "Prism runs retail demand forecasting from app.prismforecast.com.",
  },
};
