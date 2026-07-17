import type { StudioBrand } from "./types";

/**
 * Shared “Brands that trust us” row for all capability studio pages.
 * iconId is resolved to a react-icons component in the client Hero
 * (icons cannot be passed from Server → Client Components).
 */
export const studioTrustedBrands: StudioBrand[] = [
  { name: "shopify", iconId: "shopify" },
  { name: "OneSignal", iconId: "onesignal" },
  { name: "ripple", iconId: "ripple" },
  { name: "land id.", iconId: "land-id" },
];
