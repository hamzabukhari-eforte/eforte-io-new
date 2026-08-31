import fs from "fs";
import path from "path";
import type { StudioBrand } from "./types";

const RELATIVE_DIR = "public/assets/final-images/brands";
const PUBLIC_BASE = "/assets/final-images/brands";

const IMAGE_EXT = /\.(svg|png|jpe?g|webp)$/i;

/** Display names for known brand filenames (without extension). */
const BRAND_NAMES: Record<string, string> = {
  shopify: "Shopify",
  onesignal: "OneSignal",
  ripple: "Ripple",
  landid: "Land id.",
};

/** Match the studio hero reference order. Unknown files append after. */
const BRAND_ORDER = ["shopify", "onesignal", "ripple", "landid"];

function resolveBrandsDir(): string | null {
  const candidates = [
    path.join(process.cwd(), RELATIVE_DIR),
    path.join(process.cwd(), "apps/web", RELATIVE_DIR),
  ];
  return candidates.find((dir) => fs.existsSync(dir)) ?? null;
}

/**
 * Reads wordmarks from final-images/brands/. New files in that folder
 * appear automatically. `?v=mtime` busts image cache on replace.
 */
export function getStudioTrustedBrands(): StudioBrand[] {
  const dir = resolveBrandsDir();
  if (!dir) return FALLBACK_BRANDS;

  const brands: StudioBrand[] = [];

  for (const file of fs.readdirSync(dir).sort()) {
    if (!IMAGE_EXT.test(file)) continue;
    const id = file.replace(IMAGE_EXT, "").toLowerCase();
    const stat = fs.statSync(path.join(dir, file));
    brands.push({
      name: BRAND_NAMES[id] ?? id.replace(/[-_]/g, " "),
      logoSrc: `${PUBLIC_BASE}/${file}?v=${Math.floor(stat.mtimeMs)}`,
    });
  }

  brands.sort((a, b) => {
    const idOf = (brand: StudioBrand) =>
      (brand.logoSrc ?? "")
        .split("?")[0]
        .split("/")
        .pop()
        ?.replace(IMAGE_EXT, "")
        .toLowerCase() ?? "";
    const indexOf = (brand: StudioBrand) => {
      const index = BRAND_ORDER.indexOf(idOf(brand));
      return index === -1 ? BRAND_ORDER.length : index;
    };
    return indexOf(a) - indexOf(b);
  });

  return brands.length > 0 ? brands : FALLBACK_BRANDS;
}

const FALLBACK_BRANDS: StudioBrand[] = [
  {
    name: "Shopify",
    logoSrc: "/assets/final-images/brands/shopify.svg",
  },
  {
    name: "OneSignal",
    logoSrc: "/assets/final-images/brands/onesignal.svg",
  },
  {
    name: "Ripple",
    logoSrc: "/assets/final-images/brands/ripple.svg",
  },
  {
    name: "Land id.",
    logoSrc: "/assets/final-images/brands/landid.svg",
  },
];

/** Static snapshot — prefer getStudioTrustedBrands() on pages that rebuild per request. */
export const studioTrustedBrands: StudioBrand[] = getStudioTrustedBrands();
