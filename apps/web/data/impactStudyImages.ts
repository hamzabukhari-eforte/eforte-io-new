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
    hero: "/assets/images/case-study/webp/allied-insurance/image-1.webp",
    product: "/assets/images/case-study/webp/allied-insurance/image-2.webp",
    alts: ["/assets/images/case-study/webp/allied-insurance/image-3.webp", "/assets/images/case-study/webp/allied-insurance/image-4.webp", "/assets/images/case-study/webp/allied-insurance/image-5.webp", "/assets/images/case-study/webp/allied-insurance/image-6.webp", "/assets/images/case-study/webp/allied-insurance/image-7.webp", "/assets/images/case-study/webp/allied-insurance/image-8.webp"],
    all: ["/assets/images/case-study/webp/allied-insurance/image-1.webp", "/assets/images/case-study/webp/allied-insurance/image-2.webp", "/assets/images/case-study/webp/allied-insurance/image-3.webp", "/assets/images/case-study/webp/allied-insurance/image-4.webp", "/assets/images/case-study/webp/allied-insurance/image-5.webp", "/assets/images/case-study/webp/allied-insurance/image-6.webp", "/assets/images/case-study/webp/allied-insurance/image-7.webp", "/assets/images/case-study/webp/allied-insurance/image-8.webp"],
  },
  "altura-motors": {
    hero: "/assets/images/case-study/webp/altura-motors/image-1.webp",
    product: "/assets/images/case-study/webp/altura-motors/image-2.webp",
    alts: ["/assets/images/case-study/webp/altura-motors/image-3.webp", "/assets/images/case-study/webp/altura-motors/image-4.webp"],
    all: ["/assets/images/case-study/webp/altura-motors/image-1.webp", "/assets/images/case-study/webp/altura-motors/image-2.webp", "/assets/images/case-study/webp/altura-motors/image-3.webp", "/assets/images/case-study/webp/altura-motors/image-4.webp"],
  },
  "anchor-point-insurance": {
    hero: "/assets/images/case-study/webp/anchor-point-insurance/image-1.webp",
    product: "/assets/images/case-study/webp/anchor-point-insurance/image-2.webp",
    alts: ["/assets/images/case-study/webp/anchor-point-insurance/image-3.webp"],
    all: ["/assets/images/case-study/webp/anchor-point-insurance/image-1.webp", "/assets/images/case-study/webp/anchor-point-insurance/image-2.webp", "/assets/images/case-study/webp/anchor-point-insurance/image-3.webp"],
  },
  "apex-shared-services": {
    hero: "/assets/images/case-study/webp/apex-shared-services/image-1.webp",
    product: "/assets/images/case-study/webp/apex-shared-services/image-2.webp",
    alts: ["/assets/images/case-study/webp/apex-shared-services/image-3.webp", "/assets/images/case-study/webp/apex-shared-services/image-4.webp", "/assets/images/case-study/webp/apex-shared-services/image-5.webp", "/assets/images/case-study/webp/apex-shared-services/image-6.webp", "/assets/images/case-study/webp/apex-shared-services/image-7.webp", "/assets/images/case-study/webp/apex-shared-services/image-8.webp", "/assets/images/case-study/webp/apex-shared-services/image-9.webp", "/assets/images/case-study/webp/apex-shared-services/image-10.webp"],
    all: ["/assets/images/case-study/webp/apex-shared-services/image-1.webp", "/assets/images/case-study/webp/apex-shared-services/image-2.webp", "/assets/images/case-study/webp/apex-shared-services/image-3.webp", "/assets/images/case-study/webp/apex-shared-services/image-4.webp", "/assets/images/case-study/webp/apex-shared-services/image-5.webp", "/assets/images/case-study/webp/apex-shared-services/image-6.webp", "/assets/images/case-study/webp/apex-shared-services/image-7.webp", "/assets/images/case-study/webp/apex-shared-services/image-8.webp", "/assets/images/case-study/webp/apex-shared-services/image-9.webp", "/assets/images/case-study/webp/apex-shared-services/image-10.webp"],
  },
  "bioresearch-labs": {
    hero: "/assets/images/case-study/webp/bioresearch-labs/image-1.webp",
    product: "/assets/images/case-study/webp/bioresearch-labs/image-2.webp",
    alts: ["/assets/images/case-study/webp/bioresearch-labs/image-3.webp", "/assets/images/case-study/webp/bioresearch-labs/image-4.webp"],
    all: ["/assets/images/case-study/webp/bioresearch-labs/image-1.webp", "/assets/images/case-study/webp/bioresearch-labs/image-2.webp", "/assets/images/case-study/webp/bioresearch-labs/image-3.webp", "/assets/images/case-study/webp/bioresearch-labs/image-4.webp"],
  },
  "birchwood-hospitality-group": {
    hero: "/assets/images/case-study/webp/birchwood-hospitality-group/image-1.webp",
    product: "/assets/images/case-study/webp/birchwood-hospitality-group/image-2.webp",
    alts: ["/assets/images/case-study/webp/birchwood-hospitality-group/image-3.webp", "/assets/images/case-study/webp/birchwood-hospitality-group/image-4.webp"],
    all: ["/assets/images/case-study/webp/birchwood-hospitality-group/image-1.webp", "/assets/images/case-study/webp/birchwood-hospitality-group/image-2.webp", "/assets/images/case-study/webp/birchwood-hospitality-group/image-3.webp", "/assets/images/case-study/webp/birchwood-hospitality-group/image-4.webp"],
  },
  "brightwell-mutual": {
    hero: "/assets/images/case-study/webp/brightwell-mutual/image-1.webp",
    product: "/assets/images/case-study/webp/brightwell-mutual/image-2.webp",
    alts: ["/assets/images/case-study/webp/brightwell-mutual/image-3.webp", "/assets/images/case-study/webp/brightwell-mutual/image-4.webp", "/assets/images/case-study/webp/brightwell-mutual/image-5.webp", "/assets/images/case-study/webp/brightwell-mutual/image-6.webp"],
    all: ["/assets/images/case-study/webp/brightwell-mutual/image-1.webp", "/assets/images/case-study/webp/brightwell-mutual/image-2.webp", "/assets/images/case-study/webp/brightwell-mutual/image-3.webp", "/assets/images/case-study/webp/brightwell-mutual/image-4.webp", "/assets/images/case-study/webp/brightwell-mutual/image-5.webp", "/assets/images/case-study/webp/brightwell-mutual/image-6.webp"],
  },
  "clearpath-diabetes-care": {
    hero: "/assets/images/case-study/webp/clearpath-diabetes-care/image-1.webp",
    product: "/assets/images/case-study/webp/clearpath-diabetes-care/image-2.webp",
    alts: ["/assets/images/case-study/webp/clearpath-diabetes-care/image-3.webp", "/assets/images/case-study/webp/clearpath-diabetes-care/image-4.webp"],
    all: ["/assets/images/case-study/webp/clearpath-diabetes-care/image-1.webp", "/assets/images/case-study/webp/clearpath-diabetes-care/image-2.webp", "/assets/images/case-study/webp/clearpath-diabetes-care/image-3.webp", "/assets/images/case-study/webp/clearpath-diabetes-care/image-4.webp"],
  },
  "coastal-assurance-group": {
    hero: "/assets/images/case-study/webp/coastal-assurance-group/image-1.webp",
    product: "/assets/images/case-study/webp/coastal-assurance-group/image-2.webp",
    alts: ["/assets/images/case-study/webp/coastal-assurance-group/image-3.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-4.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-5.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-6.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-7.webp"],
    all: ["/assets/images/case-study/webp/coastal-assurance-group/image-1.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-2.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-3.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-4.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-5.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-6.webp", "/assets/images/case-study/webp/coastal-assurance-group/image-7.webp"],
  },
  "coastline-resorts": {
    hero: "/assets/images/case-study/webp/coastline-resorts/image-1.webp",
    product: "/assets/images/case-study/webp/coastline-resorts/image-2.webp",
    alts: ["/assets/images/case-study/webp/coastline-resorts/image-3.webp", "/assets/images/case-study/webp/coastline-resorts/image-4.webp"],
    all: ["/assets/images/case-study/webp/coastline-resorts/image-1.webp", "/assets/images/case-study/webp/coastline-resorts/image-2.webp", "/assets/images/case-study/webp/coastline-resorts/image-3.webp", "/assets/images/case-study/webp/coastline-resorts/image-4.webp"],
  },
  "cobalt-digital-bank": {
    hero: "/assets/images/case-study/webp/cobalt-digital-bank/image-1.webp",
    product: "/assets/images/case-study/webp/cobalt-digital-bank/image-2.webp",
    alts: ["/assets/images/case-study/webp/cobalt-digital-bank/image-3.webp", "/assets/images/case-study/webp/cobalt-digital-bank/image-4.webp"],
    all: ["/assets/images/case-study/webp/cobalt-digital-bank/image-1.webp", "/assets/images/case-study/webp/cobalt-digital-bank/image-2.webp", "/assets/images/case-study/webp/cobalt-digital-bank/image-3.webp", "/assets/images/case-study/webp/cobalt-digital-bank/image-4.webp"],
  },
  "crestline-bpo-group": {
    hero: "/assets/images/case-study/webp/crestline-bpo-group/image-1.webp",
    product: "/assets/images/case-study/webp/crestline-bpo-group/image-2.webp",
    alts: ["/assets/images/case-study/webp/crestline-bpo-group/image-3.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-4.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-5.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-6.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-7.webp"],
    all: ["/assets/images/case-study/webp/crestline-bpo-group/image-1.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-2.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-3.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-4.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-5.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-6.webp", "/assets/images/case-study/webp/crestline-bpo-group/image-7.webp"],
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
    hero: "/assets/images/case-study/webp/fenwick-capital-markets/image-1.webp",
    product: "/assets/images/case-study/webp/fenwick-capital-markets/image-2.webp",
    alts: ["/assets/images/case-study/webp/fenwick-capital-markets/image-3.webp", "/assets/images/case-study/webp/fenwick-capital-markets/image-4.webp", "/assets/images/case-study/webp/fenwick-capital-markets/image-5.webp", "/assets/images/case-study/webp/fenwick-capital-markets/image-6.webp"],
    all: ["/assets/images/case-study/webp/fenwick-capital-markets/image-1.webp", "/assets/images/case-study/webp/fenwick-capital-markets/image-2.webp", "/assets/images/case-study/webp/fenwick-capital-markets/image-3.webp", "/assets/images/case-study/webp/fenwick-capital-markets/image-4.webp", "/assets/images/case-study/webp/fenwick-capital-markets/image-5.webp", "/assets/images/case-study/webp/fenwick-capital-markets/image-6.webp"],
  },
  "food-cast": {
    hero: "/assets/images/case-study/new-images/food-cast/foodCast1.png",
    product: "/assets/images/case-study/new-images/food-cast/Food-cast.png",
    alts: ["/assets/images/case-study/new-images/food-cast/foodCast2.png"],
    all: ["/assets/images/case-study/new-images/food-cast/foodCast1.png", "/assets/images/case-study/new-images/food-cast/Food-cast.png", "/assets/images/case-study/new-images/food-cast/foodCast2.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "frontier-energy-partners": {
    hero: "/assets/images/case-study/webp/frontier-energy-partners/image-1.webp",
    product: "/assets/images/case-study/webp/frontier-energy-partners/image-2.webp",
    alts: ["/assets/images/case-study/webp/frontier-energy-partners/image-3.webp", "/assets/images/case-study/webp/frontier-energy-partners/image-4.webp", "/assets/images/case-study/webp/frontier-energy-partners/image-5.webp", "/assets/images/case-study/webp/frontier-energy-partners/image-6.webp"],
    all: ["/assets/images/case-study/webp/frontier-energy-partners/image-1.webp", "/assets/images/case-study/webp/frontier-energy-partners/image-2.webp", "/assets/images/case-study/webp/frontier-energy-partners/image-3.webp", "/assets/images/case-study/webp/frontier-energy-partners/image-4.webp", "/assets/images/case-study/webp/frontier-energy-partners/image-5.webp", "/assets/images/case-study/webp/frontier-energy-partners/image-6.webp"],
  },
  "global-manufacturing-corp": {
    hero: "/assets/images/case-study/webp/global-manufacturing-corp/image-1.webp",
    product: "/assets/images/case-study/webp/global-manufacturing-corp/image-2.webp",
    alts: ["/assets/images/case-study/webp/global-manufacturing-corp/image-3.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-4.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-5.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-6.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-7.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-8.webp"],
    all: ["/assets/images/case-study/webp/global-manufacturing-corp/image-1.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-2.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-3.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-4.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-5.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-6.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-7.webp", "/assets/images/case-study/webp/global-manufacturing-corp/image-8.webp"],
  },
  "globaltrade-solutions": {
    hero: "/assets/images/case-study/webp/globaltrade-solutions/image-1.webp",
    product: "/assets/images/case-study/webp/globaltrade-solutions/image-2.webp",
    alts: ["/assets/images/case-study/webp/globaltrade-solutions/image-3.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-4.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-5.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-6.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-7.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-8.webp"],
    all: ["/assets/images/case-study/webp/globaltrade-solutions/image-1.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-2.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-3.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-4.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-5.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-6.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-7.webp", "/assets/images/case-study/webp/globaltrade-solutions/image-8.webp"],
  },
  "harborlight-recovery": {
    hero: "/assets/images/case-study/webp/harborlight-recovery/image-1.webp",
    product: "/assets/images/case-study/webp/harborlight-recovery/image-2.webp",
    alts: [],
    all: ["/assets/images/case-study/webp/harborlight-recovery/image-1.webp", "/assets/images/case-study/webp/harborlight-recovery/image-2.webp"],
  },
  "iberian-ventures": {
    hero: "/assets/images/case-study/webp/iberian-ventures/image-1.webp",
    product: "/assets/images/case-study/webp/iberian-ventures/image-2.webp",
    alts: ["/assets/images/case-study/webp/iberian-ventures/image-3.webp", "/assets/images/case-study/webp/iberian-ventures/image-4.webp", "/assets/images/case-study/webp/iberian-ventures/image-5.webp"],
    all: ["/assets/images/case-study/webp/iberian-ventures/image-1.webp", "/assets/images/case-study/webp/iberian-ventures/image-2.webp", "/assets/images/case-study/webp/iberian-ventures/image-3.webp", "/assets/images/case-study/webp/iberian-ventures/image-4.webp", "/assets/images/case-study/webp/iberian-ventures/image-5.webp"],
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
    hero: "/assets/images/case-study/webp/ironclad-manufacturing/image-1.webp",
    product: "/assets/images/case-study/webp/ironclad-manufacturing/image-2.webp",
    alts: ["/assets/images/case-study/webp/ironclad-manufacturing/image-3.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-4.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-5.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-6.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-7.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-8.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-9.webp"],
    all: ["/assets/images/case-study/webp/ironclad-manufacturing/image-1.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-2.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-3.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-4.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-5.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-6.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-7.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-8.webp", "/assets/images/case-study/webp/ironclad-manufacturing/image-9.webp"],
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
    hero: "/assets/images/case-study/webp/lantern-hotel-collective/image-1.webp",
    product: "/assets/images/case-study/webp/lantern-hotel-collective/image-2.webp",
    alts: [],
    all: ["/assets/images/case-study/webp/lantern-hotel-collective/image-1.webp", "/assets/images/case-study/webp/lantern-hotel-collective/image-2.webp"],
  },
  "meridian-outsourcing-solutions": {
    hero: "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-1.webp",
    product: "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-2.webp",
    alts: ["/assets/images/case-study/webp/meridian-outsourcing-solutions/image-3.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-4.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-5.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-6.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-7.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-8.webp"],
    all: ["/assets/images/case-study/webp/meridian-outsourcing-solutions/image-1.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-2.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-3.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-4.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-5.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-6.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-7.webp", "/assets/images/case-study/webp/meridian-outsourcing-solutions/image-8.webp"],
  },
  "meridian-pay": {
    hero: "/assets/images/case-study/webp/meridian-pay/image-1.webp",
    product: "/assets/images/case-study/webp/meridian-pay/image-2.webp",
    alts: ["/assets/images/case-study/webp/meridian-pay/image-3.webp", "/assets/images/case-study/webp/meridian-pay/image-4.webp", "/assets/images/case-study/webp/meridian-pay/image-5.webp", "/assets/images/case-study/webp/meridian-pay/image-6.webp", "/assets/images/case-study/webp/meridian-pay/image-7.webp"],
    all: ["/assets/images/case-study/webp/meridian-pay/image-1.webp", "/assets/images/case-study/webp/meridian-pay/image-2.webp", "/assets/images/case-study/webp/meridian-pay/image-3.webp", "/assets/images/case-study/webp/meridian-pay/image-4.webp", "/assets/images/case-study/webp/meridian-pay/image-5.webp", "/assets/images/case-study/webp/meridian-pay/image-6.webp", "/assets/images/case-study/webp/meridian-pay/image-7.webp"],
  },
  "oddysee": {
    hero: "/assets/images/case-study/new-images/oddysee/oddysee-main.png",
    product: "/assets/images/case-study/new-images/oddysee/oddysee2.png",
    alts: ["/assets/images/case-study/new-images/oddysee/oddysee3.png"],
    all: ["/assets/images/case-study/new-images/oddysee/oddysee-main.png", "/assets/images/case-study/new-images/oddysee/oddysee2.png", "/assets/images/case-study/new-images/oddysee/oddysee3.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "prism": {
    hero: "/assets/images/case-study/new-images/prism/prism-main.png",
    product: "/assets/images/case-study/new-images/prism/prism2.png",
    alts: [],
    all: ["/assets/images/case-study/new-images/prism/prism-main.png", "/assets/images/case-study/new-images/prism/prism2.png"],
    note: "Preferred legacy new-images assets from previous website.",
  },
  "pulsewell-fitness": {
    hero: "/assets/images/case-study/webp/pulsewell-fitness/image-1.webp",
    product: "/assets/images/case-study/webp/pulsewell-fitness/image-2.webp",
    alts: ["/assets/images/case-study/webp/pulsewell-fitness/image-3.webp", "/assets/images/case-study/webp/pulsewell-fitness/image-4.webp"],
    all: ["/assets/images/case-study/webp/pulsewell-fitness/image-1.webp", "/assets/images/case-study/webp/pulsewell-fitness/image-2.webp", "/assets/images/case-study/webp/pulsewell-fitness/image-3.webp", "/assets/images/case-study/webp/pulsewell-fitness/image-4.webp"],
  },
  "ridgeline-auto-group": {
    hero: "/assets/images/case-study/webp/ridgeline-auto-group/image-1.webp",
    product: "/assets/images/case-study/webp/ridgeline-auto-group/image-2.webp",
    alts: ["/assets/images/case-study/webp/ridgeline-auto-group/image-3.webp", "/assets/images/case-study/webp/ridgeline-auto-group/image-4.webp", "/assets/images/case-study/webp/ridgeline-auto-group/image-5.webp", "/assets/images/case-study/webp/ridgeline-auto-group/image-6.webp"],
    all: ["/assets/images/case-study/webp/ridgeline-auto-group/image-1.webp", "/assets/images/case-study/webp/ridgeline-auto-group/image-2.webp", "/assets/images/case-study/webp/ridgeline-auto-group/image-3.webp", "/assets/images/case-study/webp/ridgeline-auto-group/image-4.webp", "/assets/images/case-study/webp/ridgeline-auto-group/image-5.webp", "/assets/images/case-study/webp/ridgeline-auto-group/image-6.webp"],
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
    hero: "/assets/images/case-study/webp/summit-steel-works/image-1.webp",
    product: "/assets/images/case-study/webp/summit-steel-works/image-2.webp",
    alts: ["/assets/images/case-study/webp/summit-steel-works/image-3.webp", "/assets/images/case-study/webp/summit-steel-works/image-4.webp"],
    all: ["/assets/images/case-study/webp/summit-steel-works/image-1.webp", "/assets/images/case-study/webp/summit-steel-works/image-2.webp", "/assets/images/case-study/webp/summit-steel-works/image-3.webp", "/assets/images/case-study/webp/summit-steel-works/image-4.webp"],
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
    hero: "/assets/images/case-study/webp/vantage-mobility/image-1.webp",
    product: "/assets/images/case-study/webp/vantage-mobility/image-2.webp",
    alts: ["/assets/images/case-study/webp/vantage-mobility/image-3.webp", "/assets/images/case-study/webp/vantage-mobility/image-4.webp", "/assets/images/case-study/webp/vantage-mobility/image-5.webp", "/assets/images/case-study/webp/vantage-mobility/image-6.webp"],
    all: ["/assets/images/case-study/webp/vantage-mobility/image-1.webp", "/assets/images/case-study/webp/vantage-mobility/image-2.webp", "/assets/images/case-study/webp/vantage-mobility/image-3.webp", "/assets/images/case-study/webp/vantage-mobility/image-4.webp", "/assets/images/case-study/webp/vantage-mobility/image-5.webp", "/assets/images/case-study/webp/vantage-mobility/image-6.webp"],
  },
};

export function getImpactStudyImages(slug: string): ImpactStudyImages | undefined {
  return impactStudyImages[slug];
}
