import {
  pickProductDesignStories,
  type ProductDesignShowcaseItem,
} from "@/data/productDesign";
import { healthcareWorkStories } from "./healthcareShowcase";
import { financialServicesWorkStories } from "./financialServicesShowcase";

/**
 * Industry-specific Success Stories.
 * Full list stays on Product Design; each industry page shows only its fit.
 */
export const industryShowcases: Record<string, ProductDesignShowcaseItem[]> = {
  healthcare: [
    ...healthcareWorkStories,
    ...pickProductDesignStories(
      "clearpath-diabetes-care",
      "harborlight-recovery",
      "pulsewell-fitness",
      "bioresearch-labs"
    ),
  ],
  "financial-services": [
    ...pickProductDesignStories(
      "meridian-pay",
      "cobalt-digital-bank",
      "fenwick-capital-markets",
      "iberian-ventures",
      "dostpay",
      "investment-markets"
    ),
    ...financialServicesWorkStories,
  ],
  insurance: pickProductDesignStories(
    "allied-insurance",
    "anchor-point-insurance",
    "brightwell-mutual",
    "coastal-assurance-group"
  ),
  hospitality: pickProductDesignStories(
    "birchwood-hospitality-group",
    "coastline-resorts",
    "lantern-hotel-collective"
  ),
  automobile: pickProductDesignStories(
    "altura-motors",
    "ridgeline-auto-group",
    "vantage-mobility"
  ),
  "heavy-industries": pickProductDesignStories(
    "global-manufacturing-corp",
    "ironclad-manufacturing",
    "summit-steel-works",
    "frontier-energy-partners"
  ),
  "bpo-shared-services": pickProductDesignStories(
    "apex-shared-services",
    "crestline-bpo-group",
    "meridian-outsourcing-solutions"
  ),
};

export function getIndustryShowcase(
  slug: string
): ProductDesignShowcaseItem[] | undefined {
  return industryShowcases[slug];
}

/** Convenience aliases used by industry success-story sections. */
export const healthcareShowcase = industryShowcases.healthcare;
export const financialServicesShowcase =
  industryShowcases["financial-services"];
