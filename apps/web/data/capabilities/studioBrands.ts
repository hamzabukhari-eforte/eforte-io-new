import type { StudioBrand } from "./types";

/**
 * Shared “Brands that trust us” row for all capability studio pages.
 * Prefer iconSrc (original brand marks); iconId is a react-icons fallback.
 */
export const studioTrustedBrands: StudioBrand[] = [
  {
    name: "shopify",
    iconId: "shopify",
    iconSrc: "/assets/images/brands/shopify.svg",
  },
  {
    name: "OneSignal",
    iconId: "onesignal",
    iconSrc: "/assets/images/brands/onesignal.svg",
  },
  {
    name: "ripple",
    iconId: "ripple",
    iconSrc: "/assets/images/brands/ripple.svg",
  },
  {
    name: "land id.",
    iconId: "land-id",
    iconSrc: "/assets/images/brands/land-id.svg",
  },
];
