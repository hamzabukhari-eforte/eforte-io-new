import { studioTrustedBrands } from "./studioBrands";
import type { StudioPageContent } from "./types";

export const appSolutionsContent: StudioPageContent = {
  slug: "app-solutions",
  accent: "coral",
  hero: {
    label: "Mobile App Solutions",
    titleBefore: "Create incredible mobile experiences and applications with our ",
    titleHighlight: "App Solutions Studio",
    description:
      "Our studio has built stunning mobile applications for some of the world's best known brands",
    brandsLabel: "Brands that trust us",
    brands: studioTrustedBrands,
    graphicSrc: "/assets/images/capabilities/app-solutions/studio-mark.svg",
    ctaLabel: "Contact Us",
  },
  features: [
    {
      id: "mobile-app-dev",
      number: "01",
      title: "Mobile application development",
      description:
        "We specialize in developing software applications for mobile devices, including smartphones, tablets, and TVs. Our services cover solution design, coding, and backend integration to meticulous testing.",
      image: "/assets/images/case-study/InstApp-Dealbanner.png",
      imageAlt: "Mobile application development code and product screens",
      theme: "light",
      layout: "row",
      imageSide: "right",
    },
    {
      id: "mobile-sdk",
      number: "02",
      title: "Mobile SDK development",
      description:
        "We craft custom software development kits (SDKs) for mobile platforms. Our SDKs empower developers by offering pre-built components, APIs, and resources to streamline mobile app development.",
      image: "/assets/images/case-study/InstApp-Deal-Mobilebanner.png",
      imageAlt: "Mobile SDK interface with design annotations",
      theme: "black",
      layout: "row",
      imageSide: "left",
    },
    {
      id: "app-testing",
      number: "03",
      title: "Application testing, review and maintenance",
      description:
        "Ensure the flawless performance of your mobile applications with our testing, review, and maintenance services. We perform functional, performance, security, and compatibility testing.",
      image: "/assets/images/case-study/oddysee-banner.png",
      imageAlt: "Mobile app under testing on a device mockup",
      theme: "light",
      layout: "split",
      imageSide: "right",
      mediaPanel: "accent",
    },
    {
      id: "consultancy",
      number: "04",
      title: "Mobile consultancy and mentoring",
      description:
        "Partner with our specialists for architecture reviews, delivery coaching, and hands-on mentoring that helps your teams ship higher-quality mobile products with confidence.",
      image: "/assets/images/case-study/CulturalFit.jpg",
      imageAlt: "Consultancy and mentoring collaboration visuals",
      theme: "dark",
      layout: "row",
      imageSide: "left",
    },
    {
      id: "discovery",
      number: "05",
      title: "Technical product discovery",
      description:
        "We run structured discovery workshops to clarify product goals, technical constraints, and delivery plans so your mobile roadmap starts with evidence instead of assumptions.",
      image: "/assets/images/case-study/krank-banner.png",
      imageAlt: "Technical product discovery on a mobile prototype",
      theme: "light",
      layout: "split",
      imageSide: "right",
      mediaPanel: "accent",
    },
    {
      id: "device-integration",
      number: "06",
      title: "Application integration with external devices",
      description:
        "Connect mobile experiences to wearables, IoT hardware, and peripherals with reliable SDKs, secure protocols, and polished companion-app UX.",
      image: "/assets/images/industry/ipad.webp",
      imageAlt: "Mobile app integrated with external devices",
      theme: "black",
      layout: "row",
      imageSide: "left",
    },
    {
      id: "store-positioning",
      number: "07",
      title: "App Store and Google Play positioning",
      description:
        "Maximize discoverability and conversion with store listing strategy, creative assets, ASO guidance, and launch support across Apple App Store and Google Play.",
      image: "/assets/images/case-study/komb-banner.png",
      imageAlt: "App Store and Google Play listing mockups",
      theme: "dark",
      layout: "row",
      imageSide: "right",
    },
  ],
  midCta: {
    titleBefore: "Start your journey with our ",
    titleHighlight: "App Solutions Studio.",
    description:
      "Seize the opportunity to bring your mobile app to life and embark on your development journey with our App Solutions Studio.",
    ctaLabel: "Contact Us",
  },
};
