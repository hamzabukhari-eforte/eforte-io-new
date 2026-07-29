import { studioTrustedBrands } from "./studioBrands";
import type { StudioPageContent } from "./types";

export const appSolutionsContent: StudioPageContent = {
  slug: "app-solutions",
  accent: "coral",
  hero: {
    label: "Mobile App Solutions",
    titleBefore: "Create outstanding mobile experiences and applications with our ",
    titleHighlight: "App Solutions Studio",
    description:
      "Our studio has designed and delivered high-performing mobile apps for some of the world's most recognized brands.",
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
        "eForte specializes in building software applications for mobile devices, including smartphones, tablets, and smart TVs. Services span solution design, front-end and back-end development, integrations, and thorough testing to ensure high quality and reliability.",
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
        "eForte creates custom software development kits (SDKs) for major mobile platforms. These SDKs provide developers with pre-built components, APIs, and tools that streamline app development and speed up adoption of your technology.",
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
        "Ensure your mobile apps run smoothly with eForte's testing, review, and maintenance services. The team conducts functional, performance, security, and compatibility testing, then supports ongoing improvements to maintain stability across devices and OS versions.",
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
        "From choosing the right tech stack and architecture to refining user experience, processes, and best practices, eForte provides guidance grounded in real project experience. Clients receive recommendations, strategies, and mentoring to help teams deliver better mobile products.",
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
        "Through research, prototyping, and technical analysis, eForte helps evaluate feasibility, uncover risks, and align your mobile product vision with a realistic implementation plan. Discovery work ensures that investments focus on the highest-value opportunities.",
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
        "eForte excels at integrating mobile apps with external devices over BLE, Wi-Fi, or Ethernet. For example, fitness and wellness products can be managed directly from phones, smartwatches, or smart TVs, enabling real-time data flow and richer user experiences.",
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
        "Maximize your app's visibility with eForte's store positioning and optimization services. This includes app store optimization (ASO), keyword research, targeted ad campaigns, and marketing strategies tailored to your audience and category.",
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
      "Seize the opportunity to bring your mobile app to life and move from idea to launch with the eForte App Solutions Studio.",
    ctaLabel: "Contact Us",
  },
};
