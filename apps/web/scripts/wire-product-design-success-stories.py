"""Append Product Design success stories for the 26 enterprise case studies."""
from pathlib import Path

PD = Path("apps/web/data/productDesign.ts")

ENTRIES = r'''
  {
    id: "global-manufacturing-corp",
    brand: "Global Manufacturing Corp",
    category: "Manufacturing | Operations",
    paragraphs: [
      "Global Manufacturing Corp unified plant operations and AP intelligence so leaders can see throughput, supplier risk, and invoice status in one operating system.",
    ],
    tags: ["Plant operations", "Invoice intelligence", "Supplier performance"],
    image: "/assets/final-images/capabilities/product-design/success-stories/global-manufacturing-corp-success-story.png",
    imageAlt: "Global Manufacturing Corp plant throughput and AP workspace",
    background: "#0e7490",
    href: "/case-studies/global-manufacturing-corp",
  },
  {
    id: "globaltrade-solutions",
    brand: "GlobalTrade Solutions",
    category: "Trade | Logistics",
    paragraphs: [
      "GlobalTrade Solutions turned multi-day commodity quotes into a same-day rhythm with RFQ intelligence, supplier ranking, and shipment control.",
    ],
    tags: ["Trade desk", "Supplier matching", "Shipment tower"],
    image: "/assets/final-images/capabilities/product-design/success-stories/globaltrade-solutions-success-story.png",
    imageAlt: "GlobalTrade Solutions trade quote and shipment console",
    background: "#b45309",
    href: "/case-studies/globaltrade-solutions",
  },
  {
    id: "meridian-pay",
    brand: "Meridian Pay",
    category: "Fintech | Payments",
    paragraphs: [
      "Meridian Pay scores every payment for fraud in milliseconds and orchestrates disputes so merchants stay protected without slowing checkout.",
    ],
    tags: ["Fraud scoring", "Dispute workflows", "Settlement"],
    image: "/assets/final-images/capabilities/product-design/success-stories/meridian-pay-success-story.png",
    imageAlt: "Meridian Pay risk desk and mobile payment confirm",
    background: "#1d4ed8",
    href: "/case-studies/meridian-pay",
  },
  {
    id: "altura-motors",
    brand: "Altura Motors",
    category: "Automotive | Engineering",
    paragraphs: [
      "Altura Motors connected design programs and simulation handoffs so aero, crash, and NVH work moves through gates without lost iterations.",
    ],
    tags: ["Vehicle design", "Simulation", "Cross-discipline"],
    image: "/assets/final-images/capabilities/product-design/success-stories/altura-motors-success-story.png",
    imageAlt: "Altura Motors design gate and simulation notify screens",
    background: "#7f1d1d",
    href: "/case-studies/altura-motors",
  },
  {
    id: "anchor-point-insurance",
    brand: "Anchor Point Insurance",
    category: "Insurance | Fraud",
    paragraphs: [
      "Anchor Point Insurance scores claims before payout and prepares investigator packets so network fraud is caught earlier with higher precision.",
    ],
    tags: ["Claims fraud", "Investigations", "Risk scoring"],
    image: "/assets/final-images/capabilities/product-design/success-stories/anchor-point-insurance-success-story.png",
    imageAlt: "Anchor Point Insurance fraud desk and case packet mobile",
    background: "#0f766e",
    href: "/case-studies/anchor-point-insurance",
  },
  {
    id: "apex-shared-services",
    brand: "Apex Shared Services",
    category: "Shared Services | BPO",
    paragraphs: [
      "Apex Shared Services routes Finance, HR, and IT requests with policy-aware approvals so SLAs stay green across every business unit.",
    ],
    tags: ["Service portal", "Approvals", "BU analytics"],
    image: "/assets/final-images/capabilities/product-design/success-stories/apex-shared-services-success-story.png",
    imageAlt: "Apex Shared Services portal and request status mobile",
    background: "#4f46e5",
    href: "/case-studies/apex-shared-services",
  },
  {
    id: "birchwood-hospitality-group",
    brand: "Birchwood Hospitality Group",
    category: "Hospitality | Hotels",
    paragraphs: [
      "Birchwood Hospitality Group runs property ops, guest journeys, and housekeeping from one desk so VIP requests and room turns stay on time.",
    ],
    tags: ["Property ops", "Guest journey", "Housekeeping"],
    image: "/assets/final-images/capabilities/product-design/success-stories/birchwood-hospitality-group-success-story.png",
    imageAlt: "Birchwood Hospitality property ops and guest request mobile",
    background: "#92400e",
    href: "/case-studies/birchwood-hospitality-group",
  },
  {
    id: "brightwell-mutual",
    brand: "Brightwell Mutual",
    category: "Insurance | Member Care",
    paragraphs: [
      "Brightwell Mutual gives care agents a member 360 with benefits guidance and claims assist so conversations resolve on first contact.",
    ],
    tags: ["Member care", "Benefits guidance", "Claims assist"],
    image: "/assets/final-images/capabilities/product-design/success-stories/brightwell-mutual-success-story.png",
    imageAlt: "Brightwell Mutual member care desk and benefits tip mobile",
    background: "#166534",
    href: "/case-studies/brightwell-mutual",
  },
  {
    id: "clearpath-diabetes-care",
    brand: "ClearPath Diabetes Care",
    category: "Healthcare | Chronic Care",
    paragraphs: [
      "ClearPath Diabetes Care prioritizes at-risk patients with CGM sync, coaching workflows, and population analytics that lower ER utilization.",
    ],
    tags: ["Care team", "CGM insights", "Population health"],
    image: "/assets/final-images/capabilities/product-design/success-stories/clearpath-diabetes-care-success-story.png",
    imageAlt: "ClearPath Diabetes Care team board and CGM sync mobile",
    background: "#0284c7",
    href: "/case-studies/clearpath-diabetes-care",
  },
  {
    id: "coastal-assurance-group",
    brand: "Coastal Assurance Group",
    category: "Insurance | Underwriting",
    paragraphs: [
      "Coastal Assurance Group accelerates quote-to-bind with underwriting assists, servicing automation, and coastal cat exposure intelligence.",
    ],
    tags: ["Underwriting", "Policy servicing", "Cat risk"],
    image: "/assets/final-images/capabilities/product-design/success-stories/coastal-assurance-group-success-story.png",
    imageAlt: "Coastal Assurance underwriting bench and cat alert mobile",
    background: "#0369a1",
    href: "/case-studies/coastal-assurance-group",
  },
  {
    id: "coastline-resorts",
    brand: "Coastline Resorts",
    category: "Hospitality | Resorts",
    paragraphs: [
      "Coastline Resorts orchestrates occupancy, guest offers, and cross-property staff tasks so RevPAR and loyalty grow together.",
    ],
    tags: ["Resort command", "Guest offers", "Workforce"],
    image: "/assets/final-images/capabilities/product-design/success-stories/coastline-resorts-success-story.png",
    imageAlt: "Coastline Resorts command center and offer redeem mobile",
    background: "#0d9488",
    href: "/case-studies/coastline-resorts",
  },
  {
    id: "cobalt-digital-bank",
    brand: "Cobalt Digital Bank",
    category: "Banking | Digital",
    paragraphs: [
      "Cobalt Digital Bank runs a real-time control plane for ledger health, lending decisions, and AML observability at digital scale.",
    ],
    tags: ["Digital banking", "Lending", "Compliance"],
    image: "/assets/final-images/capabilities/product-design/success-stories/cobalt-digital-bank-success-story.png",
    imageAlt: "Cobalt Digital Bank control plane and move-money mobile",
    background: "#1e40af",
    href: "/case-studies/cobalt-digital-bank",
  },
  {
    id: "crestline-bpo-group",
    brand: "Crestline BPO Group",
    category: "BPO | Contact Center",
    paragraphs: [
      "Crestline BPO Group watches agents, SLA, and auto-QA on one floor screen so coaching queues open the moment defect patterns appear.",
    ],
    tags: ["Command center", "Workforce", "Auto QA"],
    image: "/assets/final-images/capabilities/product-design/success-stories/crestline-bpo-group-success-story.png",
    imageAlt: "Crestline BPO command floor and coach cue mobile",
    background: "#7c3aed",
    href: "/case-studies/crestline-bpo-group",
  },
  {
    id: "fenwick-capital-markets",
    brand: "Fenwick Capital Markets",
    category: "Capital Markets | Trading",
    paragraphs: [
      "Fenwick Capital Markets streams market data into a decision desk with Velocity AI signals and agentic portfolio rebalancing.",
    ],
    tags: ["Trading desk", "Rebalancing", "Risk"],
    image: "/assets/final-images/capabilities/product-design/success-stories/fenwick-capital-markets-success-story.png",
    imageAlt: "Fenwick Capital Markets trading desk and alert mobile",
    background: "#111827",
    href: "/case-studies/fenwick-capital-markets",
  },
  {
    id: "frontier-energy-partners",
    brand: "Frontier Energy Partners",
    category: "Energy | Reliability",
    paragraphs: [
      "Frontier Energy Partners forecasts asset failures early and dispatches crews to the highest-priority sites before outages spread.",
    ],
    tags: ["Asset health", "Predictive maintenance", "Field ops"],
    image: "/assets/final-images/capabilities/product-design/success-stories/frontier-energy-partners-success-story.png",
    imageAlt: "Frontier Energy asset health map and crew dispatch mobile",
    background: "#ea580c",
    href: "/case-studies/frontier-energy-partners",
  },
  {
    id: "harborlight-recovery",
    brand: "Harborlight Recovery",
    category: "Healthcare | Behavioral",
    paragraphs: [
      "Harborlight Recovery coordinates admissions, clinical pathways, and family updates so completion rises and readmissions fall.",
    ],
    tags: ["Care coordination", "Clinical pathways", "Family portal"],
    image: "/assets/final-images/capabilities/product-design/success-stories/harborlight-recovery-success-story.png",
    imageAlt: "Harborlight Recovery care coordination and family update mobile",
    background: "#0891b2",
    href: "/case-studies/harborlight-recovery",
  },
  {
    id: "ironclad-manufacturing",
    brand: "Ironclad Manufacturing",
    category: "Manufacturing | Quality",
    paragraphs: [
      "Ironclad Manufacturing ties shop-floor OEE to quality gates and maintenance so defects and scrap drop while on-time delivery stays high.",
    ],
    tags: ["Shop floor", "Quality gates", "Maintenance"],
    image: "/assets/final-images/capabilities/product-design/success-stories/ironclad-manufacturing-success-story.png",
    imageAlt: "Ironclad Manufacturing quality desk and hold alert mobile",
    background: "#374151",
    href: "/case-studies/ironclad-manufacturing",
  },
  {
    id: "lantern-hotel-collective",
    brand: "Lantern Hotel Collective",
    category: "Hospitality | Multi-property",
    paragraphs: [
      "Lantern Hotel Collective matches guest preferences to offers across 19 properties while housekeeping turns stay under half an hour.",
    ],
    tags: ["Collective ops", "Guest preferences", "Brand performance"],
    image: "/assets/final-images/capabilities/product-design/success-stories/lantern-hotel-collective-success-story.png",
    imageAlt: "Lantern Hotel Collective ops hub and preference match mobile",
    background: "#a16207",
    href: "/case-studies/lantern-hotel-collective",
  },
  {
    id: "meridian-outsourcing-solutions",
    brand: "Meridian Outsourcing Solutions",
    category: "BPO | Automation",
    paragraphs: [
      "Meridian Outsourcing Solutions pairs client delivery hubs with process bots so routine volume is handled and exceptions stay visible.",
    ],
    tags: ["Client delivery", "Process bots", "Workforce"],
    image: "/assets/final-images/capabilities/product-design/success-stories/meridian-outsourcing-solutions-success-story.png",
    imageAlt: "Meridian Outsourcing delivery hub and bot exception mobile",
    background: "#4338ca",
    href: "/case-studies/meridian-outsourcing-solutions",
  },
  {
    id: "pulsewell-fitness",
    brand: "PulseWell Fitness",
    category: "Health | Fitness",
    paragraphs: [
      "PulseWell Fitness connects member coaching, trainer workflows, and wearable insights so adherence and studio retention climb together.",
    ],
    tags: ["Member coaching", "Wearables", "Studio analytics"],
    image: "/assets/final-images/capabilities/product-design/success-stories/pulsewell-fitness-success-story.png",
    imageAlt: "PulseWell Fitness coaching hub and check-in mobile",
    background: "#db2777",
    href: "/case-studies/pulsewell-fitness",
  },
  {
    id: "ridgeline-auto-group",
    brand: "Ridgeline Auto Group",
    category: "Automotive | Retail",
    paragraphs: [
      "Ridgeline Auto Group runs rooftops, service lanes, and inventory intelligence so sales close faster and aged units shrink.",
    ],
    tags: ["Dealer ops", "Service lane", "Inventory"],
    image: "/assets/final-images/capabilities/product-design/success-stories/ridgeline-auto-group-success-story.png",
    imageAlt: "Ridgeline Auto dealer command and service lane mobile",
    background: "#1e3a8a",
    href: "/case-studies/ridgeline-auto-group",
  },
  {
    id: "summit-steel-works",
    brand: "Summit Steel Works",
    category: "Manufacturing | Steel",
    paragraphs: [
      "Summit Steel Works tracks heats, fulfillment, and energy cost so yield stays high and orders leave on commitment.",
    ],
    tags: ["Mill operations", "Fulfillment", "Cost & energy"],
    image: "/assets/final-images/capabilities/product-design/success-stories/summit-steel-works-success-story.png",
    imageAlt: "Summit Steel mill operations and ship-ready mobile",
    background: "#b91c1c",
    href: "/case-studies/summit-steel-works",
  },
  {
    id: "vantage-mobility",
    brand: "Vantage Mobility",
    category: "Mobility | Fleet",
    paragraphs: [
      "Vantage Mobility dispatches jobs with live fleet health and driver experience so utilization rises and cost per mile falls.",
    ],
    tags: ["Fleet command", "Dispatch", "Driver app"],
    image: "/assets/final-images/capabilities/product-design/success-stories/vantage-mobility-success-story.png",
    imageAlt: "Vantage Mobility fleet command and next-job mobile",
    background: "#059669",
    href: "/case-studies/vantage-mobility",
  },
  {
    id: "allied-insurance",
    brand: "Allied Insurance",
    category: "Insurance | Claims",
    paragraphs: [
      "Allied Insurance digitizes claim intake, scores fraud risk, and STP-settles simple claims so cycle time drops from days to hours.",
    ],
    tags: ["Claims intake", "Fraud detection", "STP"],
    image: "/assets/final-images/capabilities/product-design/success-stories/allied-insurance-success-story.png",
    imageAlt: "Allied Insurance claims intake and claim-filed mobile",
    background: "#1e3a5f",
    href: "/case-studies/allied-insurance",
  },
  {
    id: "prism",
    brand: "Prism",
    category: "Retail | Forecasting",
    paragraphs: [
      "Prism forecasts retail demand with seasonality, holidays, and outlier smoothing so accuracy climbs even on messy real-world data.",
    ],
    tags: ["Demand forecasting", "Seasonality", "Prophet"],
    image: "/assets/final-images/capabilities/product-design/success-stories/prism-success-story.png",
    imageAlt: "Prism demand forecast studio and trend alert mobile",
    background: "#5b21b6",
    href: "/case-studies/prism",
  },
  {
    id: "iberian-ventures",
    brand: "Iberian Ventures",
    category: "M&A | Advisory",
    paragraphs: [
      "Iberian Ventures automates buy-side matching, deck generation, and meeting orchestration so analysts spend time advising—not admin.",
    ],
    tags: ["Deal matching", "Mandate ops", "Pipeline"],
    image: "/assets/final-images/capabilities/product-design/success-stories/iberian-ventures-success-story.png",
    imageAlt: "Iberian Ventures mandate command and match-ready mobile",
    background: "#1a3a6e",
    href: "/case-studies/iberian-ventures",
  },
'''

text = PD.read_text(encoding="utf-8")
# Avoid double-insert
if "global-manufacturing-corp-success-story.png" in text:
    print("already wired")
else:
    marker = '    href: "/case-studies/oddysee",\n  },\n];'
    if marker not in text:
        raise SystemExit("marker not found")
    text = text.replace(marker, '    href: "/case-studies/oddysee",\n  },' + ENTRIES + "\n];")
    PD.write_text(text, encoding="utf-8")
    print("wired productDesignShowcase")
