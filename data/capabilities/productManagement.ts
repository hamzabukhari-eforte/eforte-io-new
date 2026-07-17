import { studioTrustedBrands } from "./studioBrands";
import type { StudioPageContent } from "./types";

export const productManagementContent: StudioPageContent = {
  slug: "product-management",
  accent: "blue",
  hero: {
    label: "Product Management",
    titleBefore: "Implementing strategies for successful ",
    titleHighlight: "product development",
    titleMiddle: " and ",
    titleHighlight2: "digital growth",
    description:
      "We deliver value from the initial strategy through to seamless product delivery and continuous improvement.",
    brandsLabel: "Brands that trust us",
    brands: studioTrustedBrands,
    graphicSrc:
      "/assets/images/capabilities/product-management/studio-mark.svg",
    ctaLabel: "Contact Us",
  },
  features: [
    {
      id: "product-management",
      number: "01",
      title: "Product management",
      description:
        "We'll define a clear vision, and set strategic goals from creation to market success. Through market research and a deep understanding of your target audience, we provide the basis for informed decisions.",
      image: "/assets/images/case-study/CulturalFit.jpg",
      imageAlt: "Product management team meeting",
      theme: "light",
      layout: "row",
      imageSide: "right",
      mediaInset: true,
      cardKind: "text",
    },
    {
      id: "product-consulting",
      number: "02",
      title: "Product consulting and evaluation services",
      description:
        "We provide comprehensive insights and data-driven analysis to assess product performance and viability. By using different analysis frameworks, we'll enable you to make informed decisions about your product's future.",
      image:
        "/assets/images/capabilities/product-management/data-driven-analysis.svg",
      imageAlt: "Data-driven analysis graphic",
      theme: "black",
      layout: "row",
      imageSide: "left",
      mediaInset: true,
      cardKind: "text",
    },
    {
      id: "pricing",
      number: "03",
      title: "Product pricing and monetization strategy",
      description:
        "We optimize pricing and monetization strategies through market research, pricing frameworks, and customer behavior analysis. Achieve maximum profitability with our effective pricing strategies.",
      image: "/assets/images/industry/working.jpg",
      imageAlt: "",
      theme: "light",
      layout: "half",
      imageSide: "left",
      cardKind: "text",
    },
    {
      id: "pricing-photo",
      title: "Product pricing collaboration",
      image: "/assets/images/case-study/CulturalFit.jpg",
      imageAlt: "Team collaborating on product pricing strategy",
      theme: "light",
      layout: "half",
      imageSide: "right",
      cardKind: "media",
    },
  ],
  midCta: {
    titleBefore: "Start your journey with our ",
    titleHighlight: "Product Management Studio.",
    description:
      "Our team is here to empower you with a tailored approach, identifying and solving the specific challenges your business faces.",
    ctaLabel: "Contact Us",
  },
};
