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
  "allied-insurance": {
    hero: "/assets/final-images/case-studies/allied-insurance/hero.png",
    product: "/assets/final-images/case-studies/allied-insurance/screen-1.png",
    alts: ["/assets/final-images/case-studies/allied-insurance/screen-2.png", "/assets/final-images/case-studies/allied-insurance/screen-3.png", "/assets/final-images/case-studies/allied-insurance/screen-4.png"],
    all: ["/assets/final-images/case-studies/allied-insurance/hero.png", "/assets/final-images/case-studies/allied-insurance/screen-1.png", "/assets/final-images/case-studies/allied-insurance/screen-2.png", "/assets/final-images/case-studies/allied-insurance/screen-3.png", "/assets/final-images/case-studies/allied-insurance/screen-4.png"],
  },
  "altura-motors": {
    hero: "/assets/final-images/case-studies/altura-motors/hero.png",
    product: "/assets/final-images/case-studies/altura-motors/screen-1.png",
    alts: ["/assets/final-images/case-studies/altura-motors/screen-2.png", "/assets/final-images/case-studies/altura-motors/screen-3.png", "/assets/final-images/case-studies/altura-motors/screen-4.png"],
    all: ["/assets/final-images/case-studies/altura-motors/hero.png", "/assets/final-images/case-studies/altura-motors/screen-1.png", "/assets/final-images/case-studies/altura-motors/screen-2.png", "/assets/final-images/case-studies/altura-motors/screen-3.png", "/assets/final-images/case-studies/altura-motors/screen-4.png"],
  },
  "anchor-point-insurance": {
    hero: "/assets/final-images/case-studies/anchor-point-insurance/hero.png",
    product: "/assets/final-images/case-studies/anchor-point-insurance/screen-1.png",
    alts: ["/assets/final-images/case-studies/anchor-point-insurance/screen-2.png", "/assets/final-images/case-studies/anchor-point-insurance/screen-3.png", "/assets/final-images/case-studies/anchor-point-insurance/screen-4.png"],
    all: ["/assets/final-images/case-studies/anchor-point-insurance/hero.png", "/assets/final-images/case-studies/anchor-point-insurance/screen-1.png", "/assets/final-images/case-studies/anchor-point-insurance/screen-2.png", "/assets/final-images/case-studies/anchor-point-insurance/screen-3.png", "/assets/final-images/case-studies/anchor-point-insurance/screen-4.png"],
  },
  "apex-shared-services": {
    hero: "/assets/final-images/case-studies/apex-shared-services/hero.png",
    product: "/assets/final-images/case-studies/apex-shared-services/screen-1.png",
    alts: ["/assets/final-images/case-studies/apex-shared-services/screen-2.png", "/assets/final-images/case-studies/apex-shared-services/screen-3.png", "/assets/final-images/case-studies/apex-shared-services/screen-4.png"],
    all: ["/assets/final-images/case-studies/apex-shared-services/hero.png", "/assets/final-images/case-studies/apex-shared-services/screen-1.png", "/assets/final-images/case-studies/apex-shared-services/screen-2.png", "/assets/final-images/case-studies/apex-shared-services/screen-3.png", "/assets/final-images/case-studies/apex-shared-services/screen-4.png"],
  },
  "bioresearch-labs": {
    hero: "/assets/images/case-study/webp/bioresearch-labs/image-1.webp",
    product: "/assets/images/case-study/webp/bioresearch-labs/image-2.webp",
    alts: ["/assets/images/case-study/webp/bioresearch-labs/image-3.webp", "/assets/images/case-study/webp/bioresearch-labs/image-4.webp"],
    all: ["/assets/images/case-study/webp/bioresearch-labs/image-1.webp", "/assets/images/case-study/webp/bioresearch-labs/image-2.webp", "/assets/images/case-study/webp/bioresearch-labs/image-3.webp", "/assets/images/case-study/webp/bioresearch-labs/image-4.webp"],
  },
  "birchwood-hospitality-group": {
    hero: "/assets/final-images/case-studies/birchwood-hospitality-group/hero.png",
    product: "/assets/final-images/case-studies/birchwood-hospitality-group/screen-1.png",
    alts: ["/assets/final-images/case-studies/birchwood-hospitality-group/screen-2.png", "/assets/final-images/case-studies/birchwood-hospitality-group/screen-3.png", "/assets/final-images/case-studies/birchwood-hospitality-group/screen-4.png"],
    all: ["/assets/final-images/case-studies/birchwood-hospitality-group/hero.png", "/assets/final-images/case-studies/birchwood-hospitality-group/screen-1.png", "/assets/final-images/case-studies/birchwood-hospitality-group/screen-2.png", "/assets/final-images/case-studies/birchwood-hospitality-group/screen-3.png", "/assets/final-images/case-studies/birchwood-hospitality-group/screen-4.png"],
  },
  "brightwell-mutual": {
    hero: "/assets/final-images/case-studies/brightwell-mutual/hero.png",
    product: "/assets/final-images/case-studies/brightwell-mutual/screen-1.png",
    alts: ["/assets/final-images/case-studies/brightwell-mutual/screen-2.png", "/assets/final-images/case-studies/brightwell-mutual/screen-3.png", "/assets/final-images/case-studies/brightwell-mutual/screen-4.png"],
    all: ["/assets/final-images/case-studies/brightwell-mutual/hero.png", "/assets/final-images/case-studies/brightwell-mutual/screen-1.png", "/assets/final-images/case-studies/brightwell-mutual/screen-2.png", "/assets/final-images/case-studies/brightwell-mutual/screen-3.png", "/assets/final-images/case-studies/brightwell-mutual/screen-4.png"],
  },
  "clearpath-diabetes-care": {
    hero: "/assets/final-images/case-studies/clearpath-diabetes-care/hero.png",
    product: "/assets/final-images/case-studies/clearpath-diabetes-care/screen-1.png",
    alts: ["/assets/final-images/case-studies/clearpath-diabetes-care/screen-2.png", "/assets/final-images/case-studies/clearpath-diabetes-care/screen-3.png", "/assets/final-images/case-studies/clearpath-diabetes-care/screen-4.png"],
    all: ["/assets/final-images/case-studies/clearpath-diabetes-care/hero.png", "/assets/final-images/case-studies/clearpath-diabetes-care/screen-1.png", "/assets/final-images/case-studies/clearpath-diabetes-care/screen-2.png", "/assets/final-images/case-studies/clearpath-diabetes-care/screen-3.png", "/assets/final-images/case-studies/clearpath-diabetes-care/screen-4.png"],
  },
  "coastal-assurance-group": {
    hero: "/assets/final-images/case-studies/coastal-assurance-group/hero.png",
    product: "/assets/final-images/case-studies/coastal-assurance-group/screen-1.png",
    alts: ["/assets/final-images/case-studies/coastal-assurance-group/screen-2.png", "/assets/final-images/case-studies/coastal-assurance-group/screen-3.png", "/assets/final-images/case-studies/coastal-assurance-group/screen-4.png"],
    all: ["/assets/final-images/case-studies/coastal-assurance-group/hero.png", "/assets/final-images/case-studies/coastal-assurance-group/screen-1.png", "/assets/final-images/case-studies/coastal-assurance-group/screen-2.png", "/assets/final-images/case-studies/coastal-assurance-group/screen-3.png", "/assets/final-images/case-studies/coastal-assurance-group/screen-4.png"],
  },
  "coastline-resorts": {
    hero: "/assets/final-images/case-studies/coastline-resorts/hero.png",
    product: "/assets/final-images/case-studies/coastline-resorts/screen-1.png",
    alts: ["/assets/final-images/case-studies/coastline-resorts/screen-2.png", "/assets/final-images/case-studies/coastline-resorts/screen-3.png", "/assets/final-images/case-studies/coastline-resorts/screen-4.png"],
    all: ["/assets/final-images/case-studies/coastline-resorts/hero.png", "/assets/final-images/case-studies/coastline-resorts/screen-1.png", "/assets/final-images/case-studies/coastline-resorts/screen-2.png", "/assets/final-images/case-studies/coastline-resorts/screen-3.png", "/assets/final-images/case-studies/coastline-resorts/screen-4.png"],
  },
  "cobalt-digital-bank": {
    hero: "/assets/final-images/case-studies/cobalt-digital-bank/hero.png",
    product: "/assets/final-images/case-studies/cobalt-digital-bank/screen-1.png",
    alts: ["/assets/final-images/case-studies/cobalt-digital-bank/screen-2.png", "/assets/final-images/case-studies/cobalt-digital-bank/screen-3.png", "/assets/final-images/case-studies/cobalt-digital-bank/screen-4.png"],
    all: ["/assets/final-images/case-studies/cobalt-digital-bank/hero.png", "/assets/final-images/case-studies/cobalt-digital-bank/screen-1.png", "/assets/final-images/case-studies/cobalt-digital-bank/screen-2.png", "/assets/final-images/case-studies/cobalt-digital-bank/screen-3.png", "/assets/final-images/case-studies/cobalt-digital-bank/screen-4.png"],
  },
  "crestline-bpo-group": {
    hero: "/assets/final-images/case-studies/crestline-bpo-group/hero.png",
    product: "/assets/final-images/case-studies/crestline-bpo-group/screen-1.png",
    alts: ["/assets/final-images/case-studies/crestline-bpo-group/screen-2.png", "/assets/final-images/case-studies/crestline-bpo-group/screen-3.png", "/assets/final-images/case-studies/crestline-bpo-group/screen-4.png"],
    all: ["/assets/final-images/case-studies/crestline-bpo-group/hero.png", "/assets/final-images/case-studies/crestline-bpo-group/screen-1.png", "/assets/final-images/case-studies/crestline-bpo-group/screen-2.png", "/assets/final-images/case-studies/crestline-bpo-group/screen-3.png", "/assets/final-images/case-studies/crestline-bpo-group/screen-4.png"],
  },
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
  "fenwick-capital-markets": {
    hero: "/assets/final-images/case-studies/fenwick-capital-markets/hero.png",
    product: "/assets/final-images/case-studies/fenwick-capital-markets/screen-1.png",
    alts: ["/assets/final-images/case-studies/fenwick-capital-markets/screen-2.png", "/assets/final-images/case-studies/fenwick-capital-markets/screen-3.png", "/assets/final-images/case-studies/fenwick-capital-markets/screen-4.png"],
    all: ["/assets/final-images/case-studies/fenwick-capital-markets/hero.png", "/assets/final-images/case-studies/fenwick-capital-markets/screen-1.png", "/assets/final-images/case-studies/fenwick-capital-markets/screen-2.png", "/assets/final-images/case-studies/fenwick-capital-markets/screen-3.png", "/assets/final-images/case-studies/fenwick-capital-markets/screen-4.png"],
  },
  "food-cast": {
    hero: "/assets/images/case-study/new-images/food-cast/foodCast1.png",
    product: "/assets/images/case-study/new-images/food-cast/Food-cast.png",
    alts: ["/assets/images/case-study/new-images/food-cast/foodCast2.png"],
    all: ["/assets/images/case-study/new-images/food-cast/foodCast1.png", "/assets/images/case-study/new-images/food-cast/Food-cast.png", "/assets/images/case-study/new-images/food-cast/foodCast2.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "frontier-energy-partners": {
    hero: "/assets/final-images/case-studies/frontier-energy-partners/hero.png",
    product: "/assets/final-images/case-studies/frontier-energy-partners/screen-1.png",
    alts: ["/assets/final-images/case-studies/frontier-energy-partners/screen-2.png", "/assets/final-images/case-studies/frontier-energy-partners/screen-3.png", "/assets/final-images/case-studies/frontier-energy-partners/screen-4.png"],
    all: ["/assets/final-images/case-studies/frontier-energy-partners/hero.png", "/assets/final-images/case-studies/frontier-energy-partners/screen-1.png", "/assets/final-images/case-studies/frontier-energy-partners/screen-2.png", "/assets/final-images/case-studies/frontier-energy-partners/screen-3.png", "/assets/final-images/case-studies/frontier-energy-partners/screen-4.png"],
  },
  "global-manufacturing-corp": {
    hero: "/assets/final-images/case-studies/global-manufacturing-corp/hero.png",
    product: "/assets/final-images/case-studies/global-manufacturing-corp/screen-1.png",
    alts: ["/assets/final-images/case-studies/global-manufacturing-corp/screen-2.png", "/assets/final-images/case-studies/global-manufacturing-corp/screen-3.png", "/assets/final-images/case-studies/global-manufacturing-corp/screen-4.png"],
    all: ["/assets/final-images/case-studies/global-manufacturing-corp/hero.png", "/assets/final-images/case-studies/global-manufacturing-corp/screen-1.png", "/assets/final-images/case-studies/global-manufacturing-corp/screen-2.png", "/assets/final-images/case-studies/global-manufacturing-corp/screen-3.png", "/assets/final-images/case-studies/global-manufacturing-corp/screen-4.png"],
  },
  "globaltrade-solutions": {
    hero: "/assets/final-images/case-studies/globaltrade-solutions/hero.png",
    product: "/assets/final-images/case-studies/globaltrade-solutions/screen-1.png",
    alts: ["/assets/final-images/case-studies/globaltrade-solutions/screen-2.png", "/assets/final-images/case-studies/globaltrade-solutions/screen-3.png", "/assets/final-images/case-studies/globaltrade-solutions/screen-4.png"],
    all: ["/assets/final-images/case-studies/globaltrade-solutions/hero.png", "/assets/final-images/case-studies/globaltrade-solutions/screen-1.png", "/assets/final-images/case-studies/globaltrade-solutions/screen-2.png", "/assets/final-images/case-studies/globaltrade-solutions/screen-3.png", "/assets/final-images/case-studies/globaltrade-solutions/screen-4.png"],
  },
  "harborlight-recovery": {
    hero: "/assets/final-images/case-studies/harborlight-recovery/hero.png",
    product: "/assets/final-images/case-studies/harborlight-recovery/screen-1.png",
    alts: ["/assets/final-images/case-studies/harborlight-recovery/screen-2.png", "/assets/final-images/case-studies/harborlight-recovery/screen-3.png", "/assets/final-images/case-studies/harborlight-recovery/screen-4.png"],
    all: ["/assets/final-images/case-studies/harborlight-recovery/hero.png", "/assets/final-images/case-studies/harborlight-recovery/screen-1.png", "/assets/final-images/case-studies/harborlight-recovery/screen-2.png", "/assets/final-images/case-studies/harborlight-recovery/screen-3.png", "/assets/final-images/case-studies/harborlight-recovery/screen-4.png"],
  },
  "iberian-ventures": {
    hero: "/assets/final-images/case-studies/iberian-ventures/hero.png",
    product: "/assets/final-images/case-studies/iberian-ventures/screen-1.png",
    alts: ["/assets/final-images/case-studies/iberian-ventures/screen-2.png", "/assets/final-images/case-studies/iberian-ventures/screen-3.png", "/assets/final-images/case-studies/iberian-ventures/screen-4.png"],
    all: ["/assets/final-images/case-studies/iberian-ventures/hero.png", "/assets/final-images/case-studies/iberian-ventures/screen-1.png", "/assets/final-images/case-studies/iberian-ventures/screen-2.png", "/assets/final-images/case-studies/iberian-ventures/screen-3.png", "/assets/final-images/case-studies/iberian-ventures/screen-4.png"],
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
  "ironclad-manufacturing": {
    hero: "/assets/final-images/case-studies/ironclad-manufacturing/hero.png",
    product: "/assets/final-images/case-studies/ironclad-manufacturing/screen-1.png",
    alts: ["/assets/final-images/case-studies/ironclad-manufacturing/screen-2.png", "/assets/final-images/case-studies/ironclad-manufacturing/screen-3.png", "/assets/final-images/case-studies/ironclad-manufacturing/screen-4.png"],
    all: ["/assets/final-images/case-studies/ironclad-manufacturing/hero.png", "/assets/final-images/case-studies/ironclad-manufacturing/screen-1.png", "/assets/final-images/case-studies/ironclad-manufacturing/screen-2.png", "/assets/final-images/case-studies/ironclad-manufacturing/screen-3.png", "/assets/final-images/case-studies/ironclad-manufacturing/screen-4.png"],
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
  "lantern-hotel-collective": {
    hero: "/assets/final-images/case-studies/lantern-hotel-collective/hero.png",
    product: "/assets/final-images/case-studies/lantern-hotel-collective/screen-1.png",
    alts: ["/assets/final-images/case-studies/lantern-hotel-collective/screen-2.png", "/assets/final-images/case-studies/lantern-hotel-collective/screen-3.png", "/assets/final-images/case-studies/lantern-hotel-collective/screen-4.png"],
    all: ["/assets/final-images/case-studies/lantern-hotel-collective/hero.png", "/assets/final-images/case-studies/lantern-hotel-collective/screen-1.png", "/assets/final-images/case-studies/lantern-hotel-collective/screen-2.png", "/assets/final-images/case-studies/lantern-hotel-collective/screen-3.png", "/assets/final-images/case-studies/lantern-hotel-collective/screen-4.png"],
  },
  "meridian-outsourcing-solutions": {
    hero: "/assets/final-images/case-studies/meridian-outsourcing-solutions/hero.png",
    product: "/assets/final-images/case-studies/meridian-outsourcing-solutions/screen-1.png",
    alts: ["/assets/final-images/case-studies/meridian-outsourcing-solutions/screen-2.png", "/assets/final-images/case-studies/meridian-outsourcing-solutions/screen-3.png", "/assets/final-images/case-studies/meridian-outsourcing-solutions/screen-4.png"],
    all: ["/assets/final-images/case-studies/meridian-outsourcing-solutions/hero.png", "/assets/final-images/case-studies/meridian-outsourcing-solutions/screen-1.png", "/assets/final-images/case-studies/meridian-outsourcing-solutions/screen-2.png", "/assets/final-images/case-studies/meridian-outsourcing-solutions/screen-3.png", "/assets/final-images/case-studies/meridian-outsourcing-solutions/screen-4.png"],
  },
  "meridian-pay": {
    hero: "/assets/final-images/case-studies/meridian-pay/hero.png",
    product: "/assets/final-images/case-studies/meridian-pay/screen-1.png",
    alts: ["/assets/final-images/case-studies/meridian-pay/screen-2.png", "/assets/final-images/case-studies/meridian-pay/screen-3.png", "/assets/final-images/case-studies/meridian-pay/screen-4.png"],
    all: ["/assets/final-images/case-studies/meridian-pay/hero.png", "/assets/final-images/case-studies/meridian-pay/screen-1.png", "/assets/final-images/case-studies/meridian-pay/screen-2.png", "/assets/final-images/case-studies/meridian-pay/screen-3.png", "/assets/final-images/case-studies/meridian-pay/screen-4.png"],
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
  "pulsewell-fitness": {
    hero: "/assets/final-images/case-studies/pulsewell-fitness/hero.png",
    product: "/assets/final-images/case-studies/pulsewell-fitness/screen-1.png",
    alts: ["/assets/final-images/case-studies/pulsewell-fitness/screen-2.png", "/assets/final-images/case-studies/pulsewell-fitness/screen-3.png", "/assets/final-images/case-studies/pulsewell-fitness/screen-4.png"],
    all: ["/assets/final-images/case-studies/pulsewell-fitness/hero.png", "/assets/final-images/case-studies/pulsewell-fitness/screen-1.png", "/assets/final-images/case-studies/pulsewell-fitness/screen-2.png", "/assets/final-images/case-studies/pulsewell-fitness/screen-3.png", "/assets/final-images/case-studies/pulsewell-fitness/screen-4.png"],
  },
  "ridgeline-auto-group": {
    hero: "/assets/final-images/case-studies/ridgeline-auto-group/hero.png",
    product: "/assets/final-images/case-studies/ridgeline-auto-group/screen-1.png",
    alts: ["/assets/final-images/case-studies/ridgeline-auto-group/screen-2.png", "/assets/final-images/case-studies/ridgeline-auto-group/screen-3.png", "/assets/final-images/case-studies/ridgeline-auto-group/screen-4.png"],
    all: ["/assets/final-images/case-studies/ridgeline-auto-group/hero.png", "/assets/final-images/case-studies/ridgeline-auto-group/screen-1.png", "/assets/final-images/case-studies/ridgeline-auto-group/screen-2.png", "/assets/final-images/case-studies/ridgeline-auto-group/screen-3.png", "/assets/final-images/case-studies/ridgeline-auto-group/screen-4.png"],
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
  "summit-steel-works": {
    hero: "/assets/final-images/case-studies/summit-steel-works/hero.png",
    product: "/assets/final-images/case-studies/summit-steel-works/screen-1.png",
    alts: ["/assets/final-images/case-studies/summit-steel-works/screen-2.png", "/assets/final-images/case-studies/summit-steel-works/screen-3.png", "/assets/final-images/case-studies/summit-steel-works/screen-4.png"],
    all: ["/assets/final-images/case-studies/summit-steel-works/hero.png", "/assets/final-images/case-studies/summit-steel-works/screen-1.png", "/assets/final-images/case-studies/summit-steel-works/screen-2.png", "/assets/final-images/case-studies/summit-steel-works/screen-3.png", "/assets/final-images/case-studies/summit-steel-works/screen-4.png"],
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
  "vantage-mobility": {
    hero: "/assets/final-images/case-studies/vantage-mobility/hero.png",
    product: "/assets/final-images/case-studies/vantage-mobility/screen-1.png",
    alts: ["/assets/final-images/case-studies/vantage-mobility/screen-2.png", "/assets/final-images/case-studies/vantage-mobility/screen-3.png", "/assets/final-images/case-studies/vantage-mobility/screen-4.png"],
    all: ["/assets/final-images/case-studies/vantage-mobility/hero.png", "/assets/final-images/case-studies/vantage-mobility/screen-1.png", "/assets/final-images/case-studies/vantage-mobility/screen-2.png", "/assets/final-images/case-studies/vantage-mobility/screen-3.png", "/assets/final-images/case-studies/vantage-mobility/screen-4.png"],
  },
};

export function getImpactStudyImages(slug: string): ImpactStudyImages | undefined {
  return impactStudyImages[slug];
}
