import {
  pickProductDesignStories,
  type ProductDesignShowcaseItem,
} from "@/data/productDesign";

/**
 * Industry-specific Success Stories.
 * Only old-site original Impact Studies remain; synthetic studies were removed.
 * Picks must match ids present in productDesignShowcase.
 */
export const industryShowcases: Record<string, ProductDesignShowcaseItem[]> = {
  healthcare: pickProductDesignStories("oddysee", "validatr"),
  "financial-services": pickProductDesignStories(
    "dostpay",
    "investment-markets",
    "prism"
  ),
  insurance: pickProductDesignStories("oddysee", "validatr"),
  hospitality: pickProductDesignStories("oddysee", "validatr"),
  automobile: pickProductDesignStories("prism", "dostpay"),
  "heavy-industries": pickProductDesignStories("prism", "oddysee"),
  "bpo-shared-services": pickProductDesignStories("oddysee", "dostpay"),
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
