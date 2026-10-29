export type ImpactStudyImages = {
  hero: string;
  product: string;
  alts: string[];
  all: string[];
  note?: string;
};

/**
 * Impact study images. Studies under new-images/ use legacy previous-site assets
 * (prefer *-main or *1 as hero). Others use curated package WebP.
 * instapp-deal uses new-images when available.
 */
export const impactStudyImages: Record<string, ImpactStudyImages> = {
  "crowd-check": {
    hero: "/assets/images/case-study/new-images/crowdcheck/crowd_check1.png",
    product: "/assets/images/case-study/new-images/crowdcheck/crowd_check2.png",
    alts: ["/assets/images/case-study/new-images/crowdcheck/crowd_check3.png"],
    all: ["/assets/images/case-study/new-images/crowdcheck/crowd_check1.png", "/assets/images/case-study/new-images/crowdcheck/crowd_check2.png", "/assets/images/case-study/new-images/crowdcheck/crowd_check3.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "dostpay": {
    hero: "/assets/images/case-study/new-images/dostpay/Dostpay1.png",
    product: "/assets/images/case-study/new-images/dostpay/Dostpay2.png",
    alts: ["/assets/images/case-study/new-images/dostpay/Dostpay3.png", "/assets/images/case-study/new-images/dostpay/Dostpay4.png"],
    all: ["/assets/images/case-study/new-images/dostpay/Dostpay1.png", "/assets/images/case-study/new-images/dostpay/Dostpay2.png", "/assets/images/case-study/new-images/dostpay/Dostpay3.png", "/assets/images/case-study/new-images/dostpay/Dostpay4.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "emerge-forward": {
    hero: "/assets/images/case-study/new-images/emerge-forward/emerge1.png",
    product: "/assets/images/case-study/new-images/emerge-forward/emerge2.png",
    alts: ["/assets/images/case-study/new-images/emerge-forward/emerge3.png"],
    all: ["/assets/images/case-study/new-images/emerge-forward/emerge1.png", "/assets/images/case-study/new-images/emerge-forward/emerge2.png", "/assets/images/case-study/new-images/emerge-forward/emerge3.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "food-cast": {
    hero: "/assets/images/case-study/new-images/food-cast/foodCast1.png",
    product: "/assets/images/case-study/new-images/food-cast/Food-cast.png",
    alts: ["/assets/images/case-study/new-images/food-cast/foodCast2.png"],
    all: ["/assets/images/case-study/new-images/food-cast/foodCast1.png", "/assets/images/case-study/new-images/food-cast/Food-cast.png", "/assets/images/case-study/new-images/food-cast/foodCast2.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "instapp-deal": {
    hero: "/assets/images/case-study/new-images/instapp-deal/InstApp-Deal.png",
    product: "/assets/images/case-study/new-images/instapp-deal/instAppScreen1.png",
    alts: ["/assets/images/case-study/new-images/instapp-deal/InstApp-Deal-Mobile.png", "/assets/images/case-study/new-images/instapp-deal/i-mac.png", "/assets/images/case-study/new-images/instapp-deal/InstappImg3.png", "/assets/images/case-study/new-images/instapp-deal/InstappImg4.png", "/assets/images/case-study/new-images/instapp-deal/InstappImg5.png", "/assets/images/case-study/new-images/instapp-deal/instAppScreen2.png"],
    all: ["/assets/images/case-study/new-images/instapp-deal/InstApp-Deal.png", "/assets/images/case-study/new-images/instapp-deal/instAppScreen1.png", "/assets/images/case-study/new-images/instapp-deal/InstApp-Deal-Mobile.png", "/assets/images/case-study/new-images/instapp-deal/i-mac.png", "/assets/images/case-study/new-images/instapp-deal/InstappImg3.png", "/assets/images/case-study/new-images/instapp-deal/InstappImg4.png", "/assets/images/case-study/new-images/instapp-deal/InstappImg5.png", "/assets/images/case-study/new-images/instapp-deal/instAppScreen2.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "investment-markets": {
    hero: "/assets/images/case-study/new-images/investment-market/investment-Markets-Main.png",
    product: "/assets/images/case-study/new-images/investment-market/imHomePage.png",
    alts: ["/assets/images/case-study/new-images/investment-market/investment-Markets2.png", "/assets/images/case-study/new-images/investment-market/investment-Markets3.png", "/assets/images/case-study/new-images/investment-market/web-App-IM.png"],
    all: ["/assets/images/case-study/new-images/investment-market/investment-Markets-Main.png", "/assets/images/case-study/new-images/investment-market/imHomePage.png", "/assets/images/case-study/new-images/investment-market/investment-Markets2.png", "/assets/images/case-study/new-images/investment-market/investment-Markets3.png", "/assets/images/case-study/new-images/investment-market/web-App-IM.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "komb": {
    hero: "/assets/images/case-study/new-images/komb/komb1.png",
    product: "/assets/images/case-study/new-images/komb/komb2.png",
    alts: ["/assets/images/case-study/new-images/komb/komb3-1.png", "/assets/images/case-study/new-images/komb/komb3-2.png", "/assets/images/case-study/new-images/komb/komb3-3.png", "/assets/images/case-study/new-images/komb/komb5.png"],
    all: ["/assets/images/case-study/new-images/komb/komb1.png", "/assets/images/case-study/new-images/komb/komb2.png", "/assets/images/case-study/new-images/komb/komb3-1.png", "/assets/images/case-study/new-images/komb/komb3-2.png", "/assets/images/case-study/new-images/komb/komb3-3.png", "/assets/images/case-study/new-images/komb/komb5.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "krank": {
    hero: "/assets/images/case-study/new-images/krank/krank-main.png",
    product: "/assets/images/case-study/new-images/krank/krank2.png",
    alts: ["/assets/images/case-study/new-images/krank/krank3.png"],
    all: ["/assets/images/case-study/new-images/krank/krank-main.png", "/assets/images/case-study/new-images/krank/krank2.png", "/assets/images/case-study/new-images/krank/krank3.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "oddysee": {
    hero: "/assets/images/case-study/new-images/oddysee/oddysee-main.png",
    product: "/assets/images/case-study/new-images/oddysee/oddysee2.png",
    alts: ["/assets/images/case-study/new-images/oddysee/oddysee3.png"],
    all: ["/assets/images/case-study/new-images/oddysee/oddysee-main.png", "/assets/images/case-study/new-images/oddysee/oddysee2.png", "/assets/images/case-study/new-images/oddysee/oddysee3.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "prism": {
    hero: "/assets/final-images/case-studies/prism/hero.png",
    product: "/assets/final-images/case-studies/prism/screen-1.png",
    alts: ["/assets/final-images/case-studies/prism/screen-2.png", "/assets/final-images/case-studies/prism/screen-3.png", "/assets/final-images/case-studies/prism/screen-4.png"],
    all: ["/assets/final-images/case-studies/prism/hero.png", "/assets/final-images/case-studies/prism/screen-1.png", "/assets/final-images/case-studies/prism/screen-2.png", "/assets/final-images/case-studies/prism/screen-3.png", "/assets/final-images/case-studies/prism/screen-4.png"],
  },
  "scheduling-engine": {
    hero: "/assets/images/case-study/new-images/scheduling-engine/scheduling-main.png",
    product: "/assets/images/case-study/new-images/scheduling-engine/scheduling2.png",
    alts: ["/assets/images/case-study/new-images/scheduling-engine/scheduling3.png"],
    all: ["/assets/images/case-study/new-images/scheduling-engine/scheduling-main.png", "/assets/images/case-study/new-images/scheduling-engine/scheduling2.png", "/assets/images/case-study/new-images/scheduling-engine/scheduling3.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "sellsmart": {
    hero: "/assets/images/case-study/new-images/sellsmart/sellsMart-main.png",
    product: "/assets/images/case-study/new-images/sellsmart/sellsMart2.png",
    alts: ["/assets/images/case-study/new-images/sellsmart/sellsMart3.png"],
    all: ["/assets/images/case-study/new-images/sellsmart/sellsMart-main.png", "/assets/images/case-study/new-images/sellsmart/sellsMart2.png", "/assets/images/case-study/new-images/sellsmart/sellsMart3.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "tachignite": {
    hero: "/assets/images/case-study/webp/tachignite/image-1.webp",
    product: "/assets/images/case-study/webp/tachignite/image-2.webp",
    alts: ["/assets/images/case-study/webp/tachignite/image-3.webp", "/assets/images/case-study/webp/tachignite/image-4.webp", "/assets/images/case-study/webp/tachignite/image-5.webp", "/assets/images/case-study/webp/tachignite/image-6.webp", "/assets/images/case-study/webp/tachignite/image-7.webp", "/assets/images/case-study/webp/tachignite/image-8.webp", "/assets/images/case-study/webp/tachignite/image-9.webp", "/assets/images/case-study/webp/tachignite/image-10.webp"],
    all: ["/assets/images/case-study/webp/tachignite/image-1.webp", "/assets/images/case-study/webp/tachignite/image-2.webp", "/assets/images/case-study/webp/tachignite/image-3.webp", "/assets/images/case-study/webp/tachignite/image-4.webp", "/assets/images/case-study/webp/tachignite/image-5.webp", "/assets/images/case-study/webp/tachignite/image-6.webp", "/assets/images/case-study/webp/tachignite/image-7.webp", "/assets/images/case-study/webp/tachignite/image-8.webp", "/assets/images/case-study/webp/tachignite/image-9.webp", "/assets/images/case-study/webp/tachignite/image-10.webp"],
  },
  "validatr": {
    hero: "/assets/images/case-study/new-images/validatr/validatr-main.png",
    product: "/assets/images/case-study/new-images/validatr/validatr2.png",
    alts: ["/assets/images/case-study/new-images/validatr/validatr3.png"],
    all: ["/assets/images/case-study/new-images/validatr/validatr-main.png", "/assets/images/case-study/new-images/validatr/validatr2.png", "/assets/images/case-study/new-images/validatr/validatr3.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
};

export function getImpactStudyImages(slug: string): ImpactStudyImages | undefined {
  return impactStudyImages[slug];
}
