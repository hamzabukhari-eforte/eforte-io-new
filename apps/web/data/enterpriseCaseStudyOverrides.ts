import type { ImpactStudyNarrative } from "./impactStudyNarrativeTypes";

const asset = (slug: string, file: string) =>
  `/assets/final-images/case-studies/${slug}/${file}`;

/** Polished overrides for enterprise case studies with unique product URLs + mockups. */
export const enterpriseCaseStudyOverrides: Record<string, ImpactStudyNarrative> = {
  "global-manufacturing-corp": {
    slug: "global-manufacturing-corp",
    name: "Global Manufacturing Corp",
    headline: "Unifying plant operations and invoice intelligence across every region",
    productUrl: "https://ops.globalmfgcorp.com",
    intro: [
      "Global Manufacturing Corp runs multi-plant production with complex supplier and AP operations. Disconnected MES, ERP, and invoice tools left leaders without trusted throughput or cash visibility.",
      "eForte delivered a Foundational Data Layer and agentic AP workflows at ops.globalmfgcorp.com so plants, suppliers, and payables share one operating system."
    ],
    pillars: ["Foundational Data Layer", "Agentic Orchestration", "Velocity AI"],
    deliverables: [
      "Plant operations command center",
      "AI invoice capture and PO matching",
      "Supplier performance workspace",
      "Production analytics board"
    ],
    challenge: {
      title: "Fragmented plant and AP systems blocked visibility and burned cash",
      paragraphs: [
        "Each plant reported OEE and yield differently while AP chased PDFs across email.",
        "Leaders needed one workspace connecting shop-floor reality to financial controls."
      ],
      image: asset("global-manufacturing-corp", "screen-1.png"),
    },
    solution: {
      title: "One operations fabric for plants, suppliers, and payables",
      lead: "eForte unified operational and financial signals, then automated invoice matching with supervised agents.",
      images: [
        asset("global-manufacturing-corp", "screen-1.png"),
        asset("global-manufacturing-corp", "screen-2.png"),
        asset("global-manufacturing-corp", "screen-3.png"),
        asset("global-manufacturing-corp", "screen-4.png")
      ],
      items: [
        {
          title: "Foundational Data Layer for plant + AP truth",
          body: "MES, ERP, and supplier feeds land in governed contracts so OEE, yield, and invoice status stay reconcilable.",
          image: asset("global-manufacturing-corp", "screen-2.png"),
        },
        {
          title: "Agentic Orchestration for invoice matching",
          body: "Agents capture invoices, match POs, and route exceptions with audit trails.",
          image: asset("global-manufacturing-corp", "screen-3.png"),
        },
        {
          title: "Velocity AI for production and spend insight",
          body: "Models highlight downtime patterns and spend anomalies on one board.",
          image: asset("global-manufacturing-corp", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Operations and finance finally move on shared, timely data.",
      items: [
        { title: "94% less manual invoice handling", body: "Capture and matching removed most AP keying work." },
        { title: "Invoice cost cut from $14.20 to $2.30", body: "Automation drove more than an 80% reduction in processing cost." },
        { title: "Early-pay capture 21% → 93%", body: "Faster cycles unlocked discounts previously missed." },
        { title: "Unified plant visibility", body: "Leaders see OEE, yield, and supplier risk together." }
      ],
    },
    closing: "Global Manufacturing Corp now runs plants and payables from ops.globalmfgcorp.com.",
  },
  "globaltrade-solutions": {
    slug: "globaltrade-solutions",
    name: "GlobalTrade Solutions",
    headline: "Turning multi-day trade quotes into a same-day operating rhythm",
    productUrl: "https://trade.globaltradesolutions.com",
    intro: [
      "GlobalTrade Solutions manages 1,200+ annual commodity trades across 350+ suppliers. Manual email intake and documentation slowed quotes and created settlement risk.",
      "eForte built trade.globaltradesolutions.com — from RFQ intelligence to shipment and LC tracking."
    ],
    pillars: ["Agentic Orchestration", "Velocity AI", "Foundational Data Layer"],
    deliverables: [
      "Trade desk workspace",
      "Supplier ranking and RFQ automation",
      "Shipment control tower",
      "Settlement tracker"
    ],
    challenge: {
      title: "Email-driven trading could not scale with volume",
      paragraphs: [
        "Traders spent days interpreting needs, ranking suppliers, and chasing LC paperwork.",
        "Documentation errors meant lost deals even when terms were competitive."
      ],
      image: asset("globaltrade-solutions", "screen-1.png"),
    },
    solution: {
      title: "Agentic trade lifecycle on a trusted data layer",
      lead: "Requirement intake, supplier selection, docs, and logistics now run as one orchestrated flow.",
      images: [
        asset("globaltrade-solutions", "screen-1.png"),
        asset("globaltrade-solutions", "screen-2.png"),
        asset("globaltrade-solutions", "screen-3.png"),
        asset("globaltrade-solutions", "screen-4.png")
      ],
      items: [
        {
          title: "NLP requirement intake",
          body: "Client emails become structured RFQs with commodity, volume, and Incoterms.",
          image: asset("globaltrade-solutions", "screen-2.png"),
        },
        {
          title: "Velocity AI supplier ranking",
          body: "Suppliers score on price, reliability, and lead time before RFQs go out.",
          image: asset("globaltrade-solutions", "screen-3.png"),
        },
        {
          title: "Control tower for docs and shipments",
          body: "Quotes, LCs, and shipment events stay visible in real time.",
          image: asset("globaltrade-solutions", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Same staff now quote faster and close cleaner trades.",
      items: [
        { title: "Quote time 2 days → 4 hours", body: "91% faster client-ready quotations." },
        { title: "64% fewer documentation errors", body: "Automated agreements reduced mistakes." },
        { title: "28% better supplier response", body: "Targeted RFQs improved engagement." },
        { title: "22% more transaction volume", body: "Throughput rose without added headcount." }
      ],
    },
    closing: "GlobalTrade Solutions operates a modern trade desk at trade.globaltradesolutions.com.",
  },
  "meridian-pay": {
    slug: "meridian-pay",
    name: "Meridian Pay",
    headline: "Real-time payments risk and dispute orchestration at scale",
    productUrl: "https://console.meridianpay.com",
    intro: [
      "Meridian Pay processes millions of transactions monthly. Legacy fraud rules and after-the-fact reviews could not protect customers as volume grew.",
      "eForte delivered console.meridianpay.com — millisecond scoring and supervised dispute orchestration."
    ],
    pillars: ["Velocity AI", "Agentic Orchestration", "Foundational Data Layer", "Cloud & DevOps"],
    deliverables: [
      "Payments risk console",
      "Fraud case workspace",
      "Dispute orchestration",
      "Settlement monitor"
    ],
    challenge: {
      title: "Fraud and disputes arrived after the money had already moved",
      paragraphs: [
        "Rules fired hours late while sophisticated fraud slipped through.",
        "Settlement teams lacked a rail-aware single view."
      ],
      image: asset("meridian-pay", "screen-1.png"),
    },
    solution: {
      title: "In-path intelligence with supervised autonomy",
      lead: "Unified transaction data powers real-time scoring and agent-led dispute handling.",
      images: [
        asset("meridian-pay", "screen-1.png"),
        asset("meridian-pay", "screen-2.png"),
        asset("meridian-pay", "screen-3.png"),
        asset("meridian-pay", "screen-4.png")
      ],
      items: [
        {
          title: "Foundational Data Layer across rails",
          body: "Txn, merchant, and settlement events share one governed schema.",
          image: asset("meridian-pay", "screen-2.png"),
        },
        {
          title: "Velocity AI fraud scoring",
          body: "Every payment scores in ~40ms with explainable features.",
          image: asset("meridian-pay", "screen-3.png"),
        },
        {
          title: "Agentic dispute workflows",
          body: "Routine disputes auto-resolve; edge cases escalate complete.",
          image: asset("meridian-pay", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Risk moved from reactive queues to proactive control.",
      items: [
        { title: "Detection in seconds, not hours", body: "Fraud holds happen in the payment path." },
        { title: "Manual review load down sharply", body: "Agents clear routine disputes." },
        { title: "99.6% settlement reconciliation", body: "Finance trusts a single rail-aware monitor." },
        { title: "New rails without rebuilds", body: "Risk infrastructure scales with product expansion." }
      ],
    },
    closing: "Meridian Pay operates risk and settlement from console.meridianpay.com.",
  },
  "altura-motors": {
    slug: "altura-motors",
    name: "Altura Motors",
    headline: "Accelerating vehicle design with orchestrated engineering simulations",
    productUrl: "https://design.alturamotors.com",
    intro: [
      "Altura Motors designs vehicles across aerodynamics, structures, and safety. Manual simulation handoffs stretched each iteration by weeks.",
      "eForte built design.alturamotors.com where simulation results trigger downstream work automatically."
    ],
    pillars: ["Agentic Orchestration", "Foundational Data Layer", "Velocity AI", "Platform Engineering"],
    deliverables: [
      "Vehicle design hub",
      "Simulation orchestration",
      "Cross-discipline impact view",
      "Iteration analytics"
    ],
    challenge: {
      title: "Engineering handoffs were slower than the engineering itself",
      paragraphs: [
        "Teams waited on files and formats before the next simulation could start.",
        "Design conflicts appeared late because disciplines lacked shared impact views."
      ],
      image: asset("altura-motors", "screen-1.png"),
    },
    solution: {
      title: "Agentic coordination across the digital thread",
      lead: "Shared design data plus automated simulation chaining compressed iteration cycles.",
      images: [
        asset("altura-motors", "screen-1.png"),
        asset("altura-motors", "screen-2.png"),
        asset("altura-motors", "screen-3.png"),
        asset("altura-motors", "screen-4.png")
      ],
      items: [
        {
          title: "Unified engineering data layer",
          body: "Simulation artifacts stay addressable across disciplines.",
          image: asset("altura-motors", "screen-2.png"),
        },
        {
          title: "Automatic simulation handoffs",
          body: "When aero completes, crash and NVH jobs queue automatically.",
          image: asset("altura-motors", "screen-3.png"),
        },
        {
          title: "Velocity AI design suggestions",
          body: "Prior program patterns help designs converge faster.",
          image: asset("altura-motors", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Programs move from concept to production-ready faster.",
      items: [
        { title: "Iteration cycles −31%", body: "Automatic handoffs removed waiting waste." },
        { title: "Late conflicts −44%", body: "Cross-discipline impact appears earlier." },
        { title: "Higher reuse of simulation assets", body: "Teams stop reinventing setup every gate." },
        { title: "Months off time-to-market", body: "Shorter loops compound across the plan." }
      ],
    },
    closing: "Altura Motors engineers collaborate on design.alturamotors.com.",
  },
  "anchor-point-insurance": {
    slug: "anchor-point-insurance",
    name: "Anchor Point Insurance",
    headline: "Stopping sophisticated fraud before claims are paid",
    productUrl: "https://claims.anchorpointins.com",
    intro: [
      "Anchor Point Insurance processes high volumes of life and health claims. Static rules missed emerging fraud while flooding investigators with false positives.",
      "eForte delivered claims.anchorpointins.com — predictive scoring and investigation-ready case files."
    ],
    pillars: ["Velocity AI", "Agentic Orchestration", "Foundational Data Layer", "Cybersecurity"],
    deliverables: [
      "Fraud command center",
      "Investigator case files",
      "Policyholder timeline intel",
      "Fraud outcomes board"
    ],
    challenge: {
      title: "Rules-based detection was both late and noisy",
      paragraphs: [
        "New fraud schemes paid out before anyone connected the dots.",
        "Investigators spent time assembling evidence instead of deciding."
      ],
      image: asset("anchor-point-insurance", "screen-1.png"),
    },
    solution: {
      title: "Predictive detection with investigation-ready agents",
      lead: "Unified claims history powers scoring; agents package evidence for humans.",
      images: [
        asset("anchor-point-insurance", "screen-1.png"),
        asset("anchor-point-insurance", "screen-2.png"),
        asset("anchor-point-insurance", "screen-3.png"),
        asset("anchor-point-insurance", "screen-4.png")
      ],
      items: [
        {
          title: "Claims graph data layer",
          body: "Members, providers, and claims link so network fraud becomes visible.",
          image: asset("anchor-point-insurance", "screen-2.png"),
        },
        {
          title: "Velocity AI risk scoring",
          body: "Every claim is scored pre-payout with higher precision.",
          image: asset("anchor-point-insurance", "screen-3.png"),
        },
        {
          title: "Agentic case preparation",
          body: "High-risk claims arrive with evidence packs and recommended actions.",
          image: asset("anchor-point-insurance", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Fraud ops shifted from recovery to prevention.",
      items: [
        { title: "Earlier detection", body: "Suspicious claims stop before payout." },
        { title: "False positives −36%", body: "Analysts focus on real threats." },
        { title: "Faster investigations", body: "Case files assemble automatically." },
        { title: "Connected fraud patterns", body: "Network hits expose rings, not single claims." }
      ],
    },
    closing: "Anchor Point protects members through claims.anchorpointins.com.",
  },
  "apex-shared-services": {
    slug: "apex-shared-services",
    name: "Apex Shared Services",
    headline: "Orchestrating finance, HR, and IT requests across every business unit",
    productUrl: "https://portal.apexshared.com",
    intro: [
      "Apex Shared Services supports many internal BUs. Ticket chaos and unclear ownership created SLA risk.",
      "eForte launched portal.apexshared.com — smart routing, approvals, and BU performance visibility."
    ],
    pillars: ["Agentic Orchestration", "Foundational Data Layer", "Velocity AI"],
    deliverables: [
      "Shared services portal",
      "Request orchestration",
      "Approval control plane",
      "BU performance board"
    ],
    challenge: {
      title: "Internal customers could not see who owned their request",
      paragraphs: [
        "Email and disconnected tools buried work while approvals stalled and SLAs slipped."
      ],
      image: asset("apex-shared-services", "screen-1.png"),
    },
    solution: {
      title: "One portal, policy-aware agents, measurable SLAs",
      lead: "Requests classify, route, and escalate with governed data and clear ownership.",
      images: [
        asset("apex-shared-services", "screen-1.png"),
        asset("apex-shared-services", "screen-2.png"),
        asset("apex-shared-services", "screen-3.png"),
        asset("apex-shared-services", "screen-4.png")
      ],
      items: [
        {
          title: "Unified request data",
          body: "Finance, HR, and IT tickets share taxonomy and SLA clocks.",
          image: asset("apex-shared-services", "screen-2.png"),
        },
        {
          title: "Agentic routing and approvals",
          body: "Agents apply policy and escalate only when thresholds break.",
          image: asset("apex-shared-services", "screen-3.png"),
        },
        {
          title: "BU analytics",
          body: "Leaders see backlog, CSAT, and automation rate by unit.",
          image: asset("apex-shared-services", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Shared services became predictable instead of reactive.",
      items: [
        { title: "96% SLA attainment", body: "Transparent queues restored reliability." },
        { title: "61% automated handling", body: "Routine work no longer waits on humans." },
        { title: "Backlog −28%", body: "Visibility prevented silent pile-ups." },
        { title: "CSAT 4.6", body: "Internal customers trust the portal." }
      ],
    },
    closing: "Apex Shared Services runs multi-BU support through portal.apexshared.com.",
  },
  "birchwood-hospitality-group": {
    slug: "birchwood-hospitality-group",
    name: "Birchwood Hospitality Group",
    headline: "Property operations and guest journeys on one hospitality platform",
    productUrl: "https://ops.birchwoodhotels.com",
    intro: [
      "Birchwood Hospitality Group manages hotels where occupancy, housekeeping, and guest requests lived in separate tools.",
      "eForte built ops.birchwoodhotels.com to connect front office, housekeeping, and revenue insights."
    ],
    pillars: ["Agentic Orchestration", "Foundational Data Layer", "Velocity AI"],
    deliverables: [
      "Property operations hub",
      "Guest journey console",
      "Housekeeping dispatch",
      "Revenue insights"
    ],
    challenge: {
      title: "Guest experience suffered when ops data was fragmented",
      paragraphs: [
        "Arrivals, VIP preferences, and room readiness were not synchronized."
      ],
      image: asset("birchwood-hospitality-group", "screen-1.png"),
    },
    solution: {
      title: "A hotel operating system for staff and guests",
      lead: "Shared property data powers orchestrated tasks and revenue forecasting.",
      images: [
        asset("birchwood-hospitality-group", "screen-1.png"),
        asset("birchwood-hospitality-group", "screen-2.png"),
        asset("birchwood-hospitality-group", "screen-3.png"),
        asset("birchwood-hospitality-group", "screen-4.png")
      ],
      items: [
        {
          title: "Property data layer",
          body: "PMS, CRM, and housekeeping events unify for live status.",
          image: asset("birchwood-hospitality-group", "screen-2.png"),
        },
        {
          title: "Guest journey orchestration",
          body: "Requests route with SLA timers and VIP context.",
          image: asset("birchwood-hospitality-group", "screen-3.png"),
        },
        {
          title: "Revenue intelligence",
          body: "Pickup, group mix, and F&B inform daily decisions.",
          image: asset("birchwood-hospitality-group", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Operations and guest satisfaction improved together.",
      items: [
        { title: "Room turn 28 minutes avg", body: "Dispatch keeps housekeeping synchronized." },
        { title: "Request resolution 91%", body: "Guest issues close inside SLA." },
        { title: "RevPAR visibility", body: "Managers act on live portfolio metrics." },
        { title: "Higher NPS", body: "Guests feel the coordination behind the stay." }
      ],
    },
    closing: "Birchwood properties run from ops.birchwoodhotels.com.",
  },
  "brightwell-mutual": {
    slug: "brightwell-mutual",
    name: "Brightwell Mutual",
    headline: "Member care and benefits guidance with agentic service workflows",
    productUrl: "https://member.brightwellmutual.com",
    intro: [
      "Brightwell Mutual serves members across complex benefits plans. Care agents lacked guided next-best actions.",
      "eForte delivered member.brightwellmutual.com — benefits intelligence and supervised automation."
    ],
    pillars: ["Agentic Orchestration", "Velocity AI", "Foundational Data Layer"],
    deliverables: [
      "Member care workspace",
      "Benefits guidance",
      "Claims assist queue",
      "Mutual health dashboard"
    ],
    challenge: {
      title: "Agents spent more time navigating systems than helping members",
      paragraphs: [
        "Eligibility, benefits, and claims data lived apart while first-contact resolution suffered."
      ],
      image: asset("brightwell-mutual", "screen-1.png"),
    },
    solution: {
      title: "Care orchestration grounded in member data",
      lead: "Agents see full member context; routine claims assist runs with STP where policy allows.",
      images: [
        asset("brightwell-mutual", "screen-1.png"),
        asset("brightwell-mutual", "screen-2.png"),
        asset("brightwell-mutual", "screen-3.png"),
        asset("brightwell-mutual", "screen-4.png")
      ],
      items: [
        {
          title: "Member 360 data layer",
          body: "Plans, claims, and interactions unify for every conversation.",
          image: asset("brightwell-mutual", "screen-2.png"),
        },
        {
          title: "Benefits guidance agents",
          body: "Recommended options respect eligibility with transparent rationale.",
          image: asset("brightwell-mutual", "screen-3.png"),
        },
        {
          title: "Claims assist STP",
          body: "Simple claims move straight through; complex ones escalate with summaries.",
          image: asset("brightwell-mutual", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Members get faster answers; the mutual gets lower cost-to-serve.",
      items: [
        { title: "First-contact resolution 78%", body: "Context-rich agents resolve more on first contact." },
        { title: "Cost per case −24%", body: "Automation removes repetitive handling." },
        { title: "71% simple claims STP", body: "Members wait less for straightforward claims." },
        { title: "Retention 93%", body: "Service quality supports long-term membership." }
      ],
    },
    closing: "Brightwell Mutual care teams work from member.brightwellmutual.com.",
  },
  "clearpath-diabetes-care": {
    slug: "clearpath-diabetes-care",
    name: "ClearPath Diabetes Care",
    headline: "Population health workflows that keep diabetes patients on track",
    productUrl: "https://care.clearpathdiabetes.com",
    intro: [
      "ClearPath Diabetes Care supports thousands of patients with CGM data, coaching, and clinical protocols.",
      "eForte built care.clearpathdiabetes.com so care teams prioritize risk and orchestrate outreach."
    ],
    pillars: ["Foundational Data Layer", "Agentic Orchestration", "Velocity AI"],
    deliverables: [
      "Care team dashboard",
      "Patient journey view",
      "Clinical workflow board",
      "Population analytics"
    ],
    challenge: {
      title: "At-risk patients were identified too late",
      paragraphs: [
        "CGM alerts, adherence, and coaching notes did not form a single prioritized queue."
      ],
      image: asset("clearpath-diabetes-care", "screen-1.png"),
    },
    solution: {
      title: "A care operating system for diabetes programs",
      lead: "Unified patient signals feed risk models and agentic outreach with clinician oversight.",
      images: [
        asset("clearpath-diabetes-care", "screen-1.png"),
        asset("clearpath-diabetes-care", "screen-2.png"),
        asset("clearpath-diabetes-care", "screen-3.png"),
        asset("clearpath-diabetes-care", "screen-4.png")
      ],
      items: [
        {
          title: "Clinical data fabric",
          body: "CGM, meds, visits, and coaching notes share governed timelines.",
          image: asset("clearpath-diabetes-care", "screen-2.png"),
        },
        {
          title: "Risk-prioritized care board",
          body: "Teams see who needs outreach with protocol-backed next steps.",
          image: asset("clearpath-diabetes-care", "screen-3.png"),
        },
        {
          title: "Population analytics",
          body: "A1C, adherence, and ER utilization guide program decisions.",
          image: asset("clearpath-diabetes-care", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Patients stay engaged; clinicians spend time where it matters.",
      items: [
        { title: "Average A1C ↓0.8", body: "Targeted interventions move clinical outcomes." },
        { title: "74% patient engagement", body: "Coaching and alerts reach the right people." },
        { title: "ER utilization ↓17%", body: "Earlier outreach prevents avoidable events." },
        { title: "Program savings $2.4M", body: "Better control reduces costly escalations." }
      ],
    },
    closing: "ClearPath clinicians orchestrate care from care.clearpathdiabetes.com.",
  },
  "coastal-assurance-group": {
    slug: "coastal-assurance-group",
    name: "Coastal Assurance Group",
    headline: "Underwriting and servicing built for coastal risk complexity",
    productUrl: "https://hub.coastalassurance.com",
    intro: [
      "Coastal Assurance Group underwrites policies with material catastrophe exposure. Quote cycles were slow and exposure views fragmented.",
      "eForte delivered hub.coastalassurance.com — underwriting, servicing, and coastal risk intelligence together."
    ],
    pillars: ["Velocity AI", "Foundational Data Layer", "Agentic Orchestration"],
    deliverables: [
      "Underwriting workbench",
      "Policy servicing hub",
      "Coastal risk map",
      "Producer performance"
    ],
    challenge: {
      title: "Coastal risk decisions needed speed without losing underwriting discipline",
      paragraphs: [
        "Referrals piled up, servicing lagged, and producers lacked clear portfolio signals."
      ],
      image: asset("coastal-assurance-group", "screen-1.png"),
    },
    solution: {
      title: "A carrier hub for quote, bind, and service",
      lead: "Risk models and workflows share one data foundation across underwriting and servicing.",
      images: [
        asset("coastal-assurance-group", "screen-1.png"),
        asset("coastal-assurance-group", "screen-2.png"),
        asset("coastal-assurance-group", "screen-3.png"),
        asset("coastal-assurance-group", "screen-4.png")
      ],
      items: [
        {
          title: "Underwriting workbench",
          body: "Quotes, referrals, and bind decisions move with model assists.",
          image: asset("coastal-assurance-group", "screen-2.png"),
        },
        {
          title: "Servicing automation",
          body: "Endorsements and renewals STP where rules allow.",
          image: asset("coastal-assurance-group", "screen-3.png"),
        },
        {
          title: "Cat exposure intelligence",
          body: "Zones, alerts, and model outputs stay visible.",
          image: asset("coastal-assurance-group", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Faster quotes, cleaner servicing, clearer risk.",
      items: [
        { title: "Average quote 6 hours", body: "Workbench compression sped producer response." },
        { title: "66% servicing STP", body: "Routine changes no longer clog queues." },
        { title: "Book growth +12%", body: "Producers sell with better enablement." },
        { title: "Loss ratio visibility", body: "Portfolio decisions use live performance signals." }
      ],
    },
    closing: "Coastal Assurance underwrites and services from hub.coastalassurance.com.",
  },
  "coastline-resorts": {
    slug: "coastline-resorts",
    name: "Coastline Resorts",
    headline: "Portfolio resort operations with personalized guest experiences",
    productUrl: "https://guest.coastlineresorts.com",
    intro: [
      "Coastline Resorts runs multiple coastal properties where F&B, spa, rooms, and loyalty were siloed.",
      "eForte created guest.coastlineresorts.com — resort command, CRM offers, and workforce workflows."
    ],
    pillars: ["Foundational Data Layer", "Agentic Orchestration", "Velocity AI"],
    deliverables: [
      "Resort command center",
      "Guest experience studio",
      "Staff workflow board",
      "Portfolio analytics"
    ],
    challenge: {
      title: "Guests expected one brand experience — systems delivered many",
      paragraphs: [
        "Preferences did not travel across properties and ancillary revenue was hard to grow deliberately."
      ],
      image: asset("coastline-resorts", "screen-1.png"),
    },
    solution: {
      title: "One guest graph, many property workflows",
      lead: "Unified guest and ops data powers offers, staffing, and portfolio KPIs.",
      images: [
        asset("coastline-resorts", "screen-1.png"),
        asset("coastline-resorts", "screen-2.png"),
        asset("coastline-resorts", "screen-3.png"),
        asset("coastline-resorts", "screen-4.png")
      ],
      items: [
        {
          title: "Resort command center",
          body: "Occupancy, arrivals, spa, and F&B sit on one live board.",
          image: asset("coastline-resorts", "screen-2.png"),
        },
        {
          title: "Guest experience studio",
          body: "Preferences drive offers with measurable redemption.",
          image: asset("coastline-resorts", "screen-3.png"),
        },
        {
          title: "Workforce orchestration",
          body: "Tasks cross properties with on-time tracking.",
          image: asset("coastline-resorts", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Portfolio performance and guest delight improved together.",
      items: [
        { title: "RevPAR +11%", body: "Better coordination and offers lifted yield." },
        { title: "Ancillary mix 28%", body: "Spa and F&B attach more consistently." },
        { title: "Offer redemption 41%", body: "Personalization converts without spam." },
        { title: "Staff on-time 95%", body: "Workflow boards keep service promises." }
      ],
    },
    closing: "Coastline Resorts delivers a cohesive brand experience through guest.coastlineresorts.com.",
  },
  "cobalt-digital-bank": {
    slug: "cobalt-digital-bank",
    name: "Cobalt Digital Bank",
    headline: "Real-time digital banking on a resilient data and control plane",
    productUrl: "https://app.cobaltdigital.bank",
    intro: [
      "Cobalt Digital Bank serves millions of customers digitally. Growth strained data freshness, lending decisions, and compliance observability.",
      "eForte engineered app.cobaltdigital.bank as a control plane for platform health, ledger integrity, lending, and AML."
    ],
    pillars: ["Foundational Data Layer", "Velocity AI", "Agentic Orchestration", "Cybersecurity"],
    deliverables: [
      "Banking control plane",
      "Real-time ledger view",
      "Lending decision hub",
      "Compliance observatory"
    ],
    challenge: {
      title: "Challenger-bank growth exposed cracks in real-time infrastructure",
      paragraphs: [
        "Ledger exceptions, lending queues, and AML cases were not visible together."
      ],
      image: asset("cobalt-digital-bank", "screen-1.png"),
    },
    solution: {
      title: "A bank-grade product control plane",
      lead: "Governed streaming data powers decisions, while agents prepare compliance packages.",
      images: [
        asset("cobalt-digital-bank", "screen-1.png"),
        asset("cobalt-digital-bank", "screen-2.png"),
        asset("cobalt-digital-bank", "screen-3.png"),
        asset("cobalt-digital-bank", "screen-4.png")
      ],
      items: [
        {
          title: "Real-time foundational ledger layer",
          body: "Balances and events stay consistent with exception surfacing.",
          image: asset("cobalt-digital-bank", "screen-2.png"),
        },
        {
          title: "Lending decision hub",
          body: "Applications score with explainability and fraud holds.",
          image: asset("cobalt-digital-bank", "screen-3.png"),
        },
        {
          title: "Compliance observatory",
          body: "AML and SAR-ready cases assemble with durable trails.",
          image: asset("cobalt-digital-bank", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Cobalt scales customers without scaling chaos.",
      items: [
        { title: "99.98% platform uptime", body: "Control plane watches what members feel." },
        { title: "38ms decision latency", body: "Lending and risk stay interactive." },
        { title: "63% lending auto-decision", body: "Straight-through where policy allows." },
        { title: "Audit-ready AML packs", body: "Investigations start complete, not empty." }
      ],
    },
    closing: "Cobalt Digital Bank runs growth-ready operations from app.cobaltdigital.bank.",
  },
  "crestline-bpo-group": {
    slug: "crestline-bpo-group",
    name: "Crestline BPO Group",
    headline: "BPO command operations with quality and workforce orchestration",
    productUrl: "https://command.crestlinebpo.com",
    intro: [
      "Crestline BPO Group runs large multi-client programs. Leaders needed live occupancy, QA, and client SLA clarity in one place.",
      "eForte delivered command.crestlinebpo.com — command center, program boards, and auto-QA insights."
    ],
    pillars: ["Agentic Orchestration", "Velocity AI", "Foundational Data Layer"],
    deliverables: [
      "BPO command center",
      "Client program board",
      "Workforce orchestration",
      "Quality & insights"
    ],
    challenge: {
      title: "Multi-client delivery lacked a single operational truth",
      paragraphs: [
        "AHT, QA, staffing gaps, and SLA risk lived in separate reports."
      ],
      image: asset("crestline-bpo-group", "screen-1.png"),
    },
    solution: {
      title: "Command-and-control for modern BPO delivery",
      lead: "Unified ops data powers staffing agents, QA automation, and client-ready boards.",
      images: [
        asset("crestline-bpo-group", "screen-1.png"),
        asset("crestline-bpo-group", "screen-2.png"),
        asset("crestline-bpo-group", "screen-3.png"),
        asset("crestline-bpo-group", "screen-4.png")
      ],
      items: [
        {
          title: "Live command center",
          body: "Agents, AHT, occupancy, and QA on one floor screen.",
          image: asset("crestline-bpo-group", "screen-2.png"),
        },
        {
          title: "Client program boards",
          body: "Each program shows SLA, CSAT, and escalations.",
          image: asset("crestline-bpo-group", "screen-3.png"),
        },
        {
          title: "Auto-QA and coaching",
          body: "Velocity AI flags defect patterns and queues coaching.",
          image: asset("crestline-bpo-group", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Delivery quality and client confidence improved at floor speed.",
      items: [
        { title: "97% SLA attainment", body: "Program boards keep promises visible." },
        { title: "68% auto-QA coverage", body: "More interactions reviewed without linear headcount." },
        { title: "Defects −27%", body: "Coaching targets the real drivers." },
        { title: "NPS +8", body: "Clients feel operational control." }
      ],
    },
    closing: "Crestline BPO Group runs multi-client excellence from command.crestlinebpo.com.",
  },
  "fenwick-capital-markets": {
    slug: "fenwick-capital-markets",
    name: "Fenwick Capital Markets",
    headline: "Speeding trade decisioning with real-time AI on a market data fabric",
    productUrl: "https://desk.fenwickcapital.com",
    intro: [
      "Fenwick Capital Markets manages institutional trading across equities, fixed income, and derivatives. Delayed feeds meant opportunities shifted before desks could act.",
      "eForte built desk.fenwickcapital.com — real-time signals, supervised rebalancing, and live risk exposure."
    ],
    pillars: ["Velocity AI", "Foundational Data Layer", "Agentic Orchestration", "Platform Engineering"],
    deliverables: [
      "Trading decision desk",
      "Portfolio rebalance hub",
      "Market data fabric",
      "Risk exposure board"
    ],
    challenge: {
      title: "Trading desks were making decisions on delayed truth",
      paragraphs: [
        "Signals arrived minutes late and routine rebalancing still required manual recalculation across dozens of accounts."
      ],
      image: asset("fenwick-capital-markets", "screen-1.png"),
    },
    solution: {
      title: "A real-time desk built on shared market data",
      lead: "High-throughput data powers predictive signals while agents rebalance inside approved limits.",
      images: [
        asset("fenwick-capital-markets", "screen-1.png"),
        asset("fenwick-capital-markets", "screen-2.png"),
        asset("fenwick-capital-markets", "screen-3.png"),
        asset("fenwick-capital-markets", "screen-4.png")
      ],
      items: [
        {
          title: "Market data fabric",
          body: "Pricing and positions stream into one up-to-the-second layer.",
          image: asset("fenwick-capital-markets", "screen-2.png"),
        },
        {
          title: "Velocity AI trade signals",
          body: "Models surface opportunities within seconds of a market shift.",
          image: asset("fenwick-capital-markets", "screen-3.png"),
        },
        {
          title: "Agentic portfolio rebalancing",
          body: "Routine adjustments execute automatically; exceptions escalate.",
          image: asset("fenwick-capital-markets", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Desks act faster with less operational drag.",
      items: [
        { title: "Signal latency in seconds", body: "Analysts no longer wait on multi-minute delays." },
        { title: "Reduced manual rebalancing", body: "PMs focus on strategy, not spreadsheet math." },
        { title: "Always-current risk view", body: "Exposure monitoring stays live across desks." },
        { title: "More consistent decisioning", body: "Standardized signals reduce team-to-team variance." }
      ],
    },
    closing: "Fenwick Capital Markets trades from desk.fenwickcapital.com — real-time, governed, and desk-ready.",
  },
  "frontier-energy-partners": {
    slug: "frontier-energy-partners",
    name: "Frontier Energy Partners",
    headline: "Forecasting equipment failure across a distributed energy network",
    productUrl: "https://grid.frontierenergy.io",
    intro: [
      "Frontier Energy Partners manages generation and transmission assets across many regions. Maintenance was reactive and regionally siloed.",
      "eForte delivered grid.frontierenergy.io — unified asset health, failure forecasts, and automated crew dispatch."
    ],
    pillars: ["Foundational Data Layer", "Velocity AI", "Agentic Orchestration", "Cybersecurity"],
    deliverables: [
      "Asset health network",
      "Failure forecast console",
      "Maintenance dispatch",
      "Reliability dashboard"
    ],
    challenge: {
      title: "Central ops could not see asset health across the full network",
      paragraphs: [
        "Regional systems hid early failure signals and crews were dispatched after outages, not before."
      ],
      image: asset("frontier-energy-partners", "screen-1.png"),
    },
    solution: {
      title: "Predictive reliability on a unified asset layer",
      lead: "Streaming asset data feeds forecasts; agents prioritize and dispatch field crews.",
      images: [
        asset("frontier-energy-partners", "screen-1.png"),
        asset("frontier-energy-partners", "screen-2.png"),
        asset("frontier-energy-partners", "screen-3.png"),
        asset("frontier-energy-partners", "screen-4.png")
      ],
      items: [
        {
          title: "Unified asset monitoring",
          body: "Every regional feed lands in one reliability fabric.",
          image: asset("frontier-energy-partners", "screen-2.png"),
        },
        {
          title: "Velocity AI failure forecasting",
          body: "Models prioritize assets by predicted failure lead time.",
          image: asset("frontier-energy-partners", "screen-3.png"),
        },
        {
          title: "Agentic maintenance dispatch",
          body: "Crews route to highest-priority sites without manual triage.",
          image: asset("frontier-energy-partners", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Reliability improved because work moved upstream of failure.",
      items: [
        { title: "Fewer preventable outages", body: "Early signals trigger maintenance before downtime." },
        { title: "Prioritized crew focus", body: "Teams work the assets that matter most." },
        { title: "Faster dispatch", body: "Identification to on-site time dropped." },
        { title: "Network-wide visibility", body: "Leaders see health across every region." }
      ],
    },
    closing: "Frontier Energy Partners keeps the grid reliable from grid.frontierenergy.io.",
  },
  "harborlight-recovery": {
    slug: "harborlight-recovery",
    name: "Harborlight Recovery",
    headline: "Care coordination and clinical pathways for recovery programs",
    productUrl: "https://care.harborlightrecovery.com",
    intro: [
      "Harborlight Recovery coordinates admissions, clinical pathways, and family communication across recovery programs.",
      "eForte built care.harborlightrecovery.com so clinical teams, families, and outcomes analytics stay aligned."
    ],
    pillars: ["Foundational Data Layer", "Agentic Orchestration", "Velocity AI"],
    deliverables: [
      "Care coordination hub",
      "Clinical pathway board",
      "Family portal view",
      "Outcomes analytics"
    ],
    challenge: {
      title: "Care teams juggled pathways without a shared operating picture",
      paragraphs: [
        "Admissions, protocol adherence, and family updates lived in separate tools, slowing interventions."
      ],
      image: asset("harborlight-recovery", "screen-1.png"),
    },
    solution: {
      title: "A recovery care operating system",
      lead: "Shared clinical data powers pathway orchestration and family-safe updates.",
      images: [
        asset("harborlight-recovery", "screen-1.png"),
        asset("harborlight-recovery", "screen-2.png"),
        asset("harborlight-recovery", "screen-3.png"),
        asset("harborlight-recovery", "screen-4.png")
      ],
      items: [
        {
          title: "Care coordination hub",
          body: "Admissions, active census, and discharges on one board.",
          image: asset("harborlight-recovery", "screen-2.png"),
        },
        {
          title: "Clinical pathway orchestration",
          body: "Protocols, alerts, and reviews stay synchronized.",
          image: asset("harborlight-recovery", "screen-3.png"),
        },
        {
          title: "Family engagement + outcomes",
          body: "Secure updates pair with completion and readmit analytics.",
          image: asset("harborlight-recovery", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Patients progress with clearer coordination and measurable outcomes.",
      items: [
        { title: "Higher pathway adherence", body: "Teams see who is off-track early." },
        { title: "Faster family communication", body: "Updates no longer wait on ad-hoc emails." },
        { title: "Readmissions ↓19%", body: "Earlier interventions reduce bounce-backs." },
        { title: "Shorter average LOS", body: "Coordination removes avoidable delay." }
      ],
    },
    closing: "Harborlight Recovery coordinates care from care.harborlightrecovery.com.",
  },
  "ironclad-manufacturing": {
    slug: "ironclad-manufacturing",
    name: "Ironclad Manufacturing",
    headline: "Shop-floor command with quality gates and predictive maintenance",
    productUrl: "https://forge.ironcladmfg.com",
    intro: [
      "Ironclad Manufacturing runs high-mix production where quality holds and unplanned downtime disrupted throughput.",
      "eForte delivered forge.ironcladmfg.com — shop-floor command, quality gates, and maintenance planning in one product."
    ],
    pillars: ["Foundational Data Layer", "Velocity AI", "Agentic Orchestration"],
    deliverables: [
      "Shop floor command",
      "Quality gate console",
      "Maintenance planner",
      "Throughput analytics"
    ],
    challenge: {
      title: "Quality and maintenance signals arrived too late to protect throughput",
      paragraphs: [
        "WIP piled up while CAPA and PM work were scheduled reactively."
      ],
      image: asset("ironclad-manufacturing", "screen-1.png"),
    },
    solution: {
      title: "A manufacturing command fabric",
      lead: "Line telemetry, quality events, and work orders share one orchestration layer.",
      images: [
        asset("ironclad-manufacturing", "screen-1.png"),
        asset("ironclad-manufacturing", "screen-2.png"),
        asset("ironclad-manufacturing", "screen-3.png"),
        asset("ironclad-manufacturing", "screen-4.png")
      ],
      items: [
        {
          title: "Shop-floor command",
          body: "OEE, WIP, and defects visible line by line.",
          image: asset("ironclad-manufacturing", "screen-2.png"),
        },
        {
          title: "Quality gate console",
          body: "Inspections, holds, and CAPA tracked in flow.",
          image: asset("ironclad-manufacturing", "screen-3.png"),
        },
        {
          title: "Maintenance + throughput analytics",
          body: "PM due dates and scrap trends drive action.",
          image: asset("ironclad-manufacturing", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Throughput rose because quality and uptime were managed together.",
      items: [
        { title: "OEE uplift", body: "Less waiting between quality and maintenance decisions." },
        { title: "Scrap −31%", body: "Earlier holds prevent waste downstream." },
        { title: "On-time 97%", body: "Orders move with fewer late surprises." },
        { title: "Cycle time −12%", body: "Stable lines compound speed." }
      ],
    },
    closing: "Ironclad Manufacturing runs the mill from forge.ironcladmfg.com.",
  },
  "lantern-hotel-collective": {
    slug: "lantern-hotel-collective",
    name: "Lantern Hotel Collective",
    headline: "Multi-property hospitality ops with guest preference intelligence",
    productUrl: "https://ops.lanternhotels.com",
    intro: [
      "Lantern Hotel Collective operates a multi-property portfolio where brand consistency suffered from fragmented PMS and CRM tools.",
      "eForte built ops.lanternhotels.com for collective ops, guest preferences, and brand performance."
    ],
    pillars: ["Foundational Data Layer", "Agentic Orchestration", "Velocity AI"],
    deliverables: [
      "Collective ops hub",
      "Guest preference graph",
      "Housekeeping network",
      "Brand performance"
    ],
    challenge: {
      title: "Each property ran as an island — guests felt it",
      paragraphs: [
        "Preferences and loyalty context did not travel with the guest across the collective."
      ],
      image: asset("lantern-hotel-collective", "screen-1.png"),
    },
    solution: {
      title: "One collective operating layer",
      lead: "Shared guest and property data power offers, housekeeping, and revenue decisions.",
      images: [
        asset("lantern-hotel-collective", "screen-1.png"),
        asset("lantern-hotel-collective", "screen-2.png"),
        asset("lantern-hotel-collective", "screen-3.png"),
        asset("lantern-hotel-collective", "screen-4.png")
      ],
      items: [
        {
          title: "Collective ops hub",
          body: "Portfolio occupancy and RevPAR in one command view.",
          image: asset("lantern-hotel-collective", "screen-2.png"),
        },
        {
          title: "Guest preference graph",
          body: "Profiles drive offers with measurable redemption.",
          image: asset("lantern-hotel-collective", "screen-3.png"),
        },
        {
          title: "Housekeeping + brand analytics",
          body: "Turn times and loyalty mix stay visible.",
          image: asset("lantern-hotel-collective", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Brand consistency improved alongside commercial performance.",
      items: [
        { title: "Portfolio RevPAR visibility", body: "Leaders act on live property signals." },
        { title: "Offer redemption 39%", body: "Preferences convert without spam." },
        { title: "Housekeeping ready 91%", body: "Arrivals meet prepared rooms." },
        { title: "Loyalty mix 36%", body: "Repeat guests are recognized across rooftops." }
      ],
    },
    closing: "Lantern Hotel Collective operates from ops.lanternhotels.com.",
  },
  "meridian-outsourcing-solutions": {
    slug: "meridian-outsourcing-solutions",
    name: "Meridian Outsourcing Solutions",
    headline: "Client delivery automation across multi-shore BPO programs",
    productUrl: "https://hub.meridianoutsourcing.com",
    intro: [
      "Meridian Outsourcing Solutions delivers multi-client back-office and contact programs. SLA risk and quality variance grew with scale.",
      "eForte launched hub.meridianoutsourcing.com — delivery hub, automation board, and workforce control."
    ],
    pillars: ["Agentic Orchestration", "Velocity AI", "Foundational Data Layer"],
    deliverables: [
      "Client delivery hub",
      "Process automation board",
      "Workforce control",
      "Quality insights"
    ],
    challenge: {
      title: "Client promises outpaced operational visibility",
      paragraphs: [
        "Tickets, bots, and QA lived apart so escalations surprised account teams."
      ],
      image: asset("meridian-outsourcing-solutions", "screen-1.png"),
    },
    solution: {
      title: "A delivery control tower for outsourcing",
      lead: "Program data, automation, and QA share one orchestrated hub.",
      images: [
        asset("meridian-outsourcing-solutions", "screen-1.png"),
        asset("meridian-outsourcing-solutions", "screen-2.png"),
        asset("meridian-outsourcing-solutions", "screen-3.png"),
        asset("meridian-outsourcing-solutions", "screen-4.png")
      ],
      items: [
        {
          title: "Client delivery hub",
          body: "SLA, tickets, and CSAT visible per client.",
          image: asset("meridian-outsourcing-solutions", "screen-2.png"),
        },
        {
          title: "Process automation board",
          body: "Bots handle routine volume with exception queues.",
          image: asset("meridian-outsourcing-solutions", "screen-3.png"),
        },
        {
          title: "Workforce + quality insights",
          body: "AHT, occupancy, and auto-QA drive coaching.",
          image: asset("meridian-outsourcing-solutions", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Delivery became measurable and more automated.",
      items: [
        { title: "SLA 98%", body: "Account teams see risk before clients do." },
        { title: "64% bot-handled volume", body: "Humans focus on exceptions." },
        { title: "Defects −24%", body: "Auto-QA targets real drivers." },
        { title: "CSAT 4.5", body: "Clients feel operational control." }
      ],
    },
    closing: "Meridian Outsourcing Solutions delivers from hub.meridianoutsourcing.com.",
  },
  "pulsewell-fitness": {
    slug: "pulsewell-fitness",
    name: "PulseWell Fitness",
    headline: "Member coaching and wearable insights for digital fitness programs",
    productUrl: "https://coach.pulsewell.fit",
    intro: [
      "PulseWell Fitness coaches tens of thousands of members with trainers, plans, and wearables. Signals were scattered and adherence slipped.",
      "eForte built coach.pulsewell.fit — coaching hub, trainer workflows, and wearable insights."
    ],
    pillars: ["Foundational Data Layer", "Agentic Orchestration", "Velocity AI"],
    deliverables: [
      "Member coaching hub",
      "Trainer workflow board",
      "Wearable insights",
      "Studio analytics"
    ],
    challenge: {
      title: "Trainers could not see who needed attention today",
      paragraphs: [
        "Wearable syncs, plan compliance, and check-ins were fragmented across tools."
      ],
      image: asset("pulsewell-fitness", "screen-1.png"),
    },
    solution: {
      title: "A coaching operating system",
      lead: "Member telemetry and plans feed prioritized trainer workflows.",
      images: [
        asset("pulsewell-fitness", "screen-1.png"),
        asset("pulsewell-fitness", "screen-2.png"),
        asset("pulsewell-fitness", "screen-3.png"),
        asset("pulsewell-fitness", "screen-4.png")
      ],
      items: [
        {
          title: "Member coaching hub",
          body: "Active members, sessions, and adherence in one view.",
          image: asset("pulsewell-fitness", "screen-2.png"),
        },
        {
          title: "Trainer workflow board",
          body: "Plans due, check-ins, and flags prioritized.",
          image: asset("pulsewell-fitness", "screen-3.png"),
        },
        {
          title: "Wearable + studio analytics",
          body: "Zones, sleep, retention, and class fill guide growth.",
          image: asset("pulsewell-fitness", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Members stay engaged; trainers coach with clarity.",
      items: [
        { title: "Adherence 77%", body: "Prioritized outreach keeps plans on track." },
        { title: "Retention 88%", body: "Engaged members stay longer." },
        { title: "Synced wearables 91%", body: "Telemetry arrives ready for coaching." },
        { title: "NPS 81", body: "Members feel supported, not automated away." }
      ],
    },
    closing: "PulseWell Fitness coaches from coach.pulsewell.fit.",
  },
  "ridgeline-auto-group": {
    slug: "ridgeline-auto-group",
    name: "Ridgeline Auto Group",
    headline: "Dealer command across sales, service, and inventory intelligence",
    productUrl: "https://drive.ridgelineauto.com",
    intro: [
      "Ridgeline Auto Group operates multiple rooftops. Sales journeys, service lanes, and inventory aged in separate systems.",
      "eForte delivered drive.ridgelineauto.com — dealer command, service console, and inventory intelligence."
    ],
    pillars: ["Foundational Data Layer", "Agentic Orchestration", "Velocity AI"],
    deliverables: [
      "Dealer command center",
      "Service lane console",
      "Sales journey board",
      "Inventory intelligence"
    ],
    challenge: {
      title: "Rooftops could not operate as one retail network",
      paragraphs: [
        "Leads, ROs, and aged inventory lacked a shared decision layer."
      ],
      image: asset("ridgeline-auto-group", "screen-1.png"),
    },
    solution: {
      title: "A dealer network operating system",
      lead: "Sales, service, and inventory share orchestrated workflows and analytics.",
      images: [
        asset("ridgeline-auto-group", "screen-1.png"),
        asset("ridgeline-auto-group", "screen-2.png"),
        asset("ridgeline-auto-group", "screen-3.png"),
        asset("ridgeline-auto-group", "screen-4.png")
      ],
      items: [
        {
          title: "Dealer command center",
          body: "Rooftops, units, and CSI in one portfolio view.",
          image: asset("ridgeline-auto-group", "screen-2.png"),
        },
        {
          title: "Service lane console",
          body: "RO cycle time and parts fill managed live.",
          image: asset("ridgeline-auto-group", "screen-3.png"),
        },
        {
          title: "Sales + inventory intelligence",
          body: "Lead-to-close and aged units prioritized.",
          image: asset("ridgeline-auto-group", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Retail execution improved across the group.",
      items: [
        { title: "Higher close-rate visibility", body: "Managers coach from live journey data." },
        { title: "Service cycle 2.1d avg", body: "Lanes move with fewer parts delays." },
        { title: "Aged inventory 7%", body: "Turns improve with match scoring." },
        { title: "CSI 92", body: "Customers feel coordinated retail service." }
      ],
    },
    closing: "Ridgeline Auto Group runs rooftops from drive.ridgelineauto.com.",
  },
  "summit-steel-works": {
    slug: "summit-steel-works",
    name: "Summit Steel Works",
    headline: "Mill operations with fulfillment, safety, and cost-to-serve control",
    productUrl: "https://mill.summitsteel.works",
    intro: [
      "Summit Steel Works runs mill production where order fulfillment, safety compliance, and energy cost needed tighter coordination.",
      "eForte built mill.summitsteel.works — mill hub, fulfillment board, and safety/performance analytics."
    ],
    pillars: ["Foundational Data Layer", "Agentic Orchestration", "Velocity AI"],
    deliverables: [
      "Mill operations hub",
      "Order fulfillment board",
      "Safety & compliance",
      "Cost & throughput"
    ],
    challenge: {
      title: "Production, fulfillment, and safety competed for attention",
      paragraphs: [
        "Late orders and reactive safety tracking eroded margin and trust."
      ],
      image: asset("summit-steel-works", "screen-1.png"),
    },
    solution: {
      title: "A mill command platform",
      lead: "Heat, orders, and compliance events share one operational fabric.",
      images: [
        asset("summit-steel-works", "screen-1.png"),
        asset("summit-steel-works", "screen-2.png"),
        asset("summit-steel-works", "screen-3.png"),
        asset("summit-steel-works", "screen-4.png")
      ],
      items: [
        {
          title: "Mill operations hub",
          body: "Heat, yield, and delays visible in real time.",
          image: asset("summit-steel-works", "screen-2.png"),
        },
        {
          title: "Order fulfillment board",
          body: "Committed, in-cut, and ship-ready stages tracked.",
          image: asset("summit-steel-works", "screen-3.png"),
        },
        {
          title: "Safety + cost analytics",
          body: "Incidents, training, energy, and OTIF on one board.",
          image: asset("summit-steel-works", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "The mill ships cleaner, safer, and more predictably.",
      items: [
        { title: "Yield 97.6%", body: "Less process waste between heats." },
        { title: "OTIF 98%", body: "Orders leave on commitment." },
        { title: "Energy −11%", body: "Throughput and cost move together." },
        { title: "Incident-free stretches", body: "Safety stays operational, not paperwork-only." }
      ],
    },
    closing: "Summit Steel Works runs the mill from mill.summitsteel.works.",
  },
  "vantage-mobility": {
    slug: "vantage-mobility",
    name: "Vantage Mobility",
    headline: "Fleet command with dispatch orchestration and driver experience",
    productUrl: "https://fleet.vantagemobility.io",
    intro: [
      "Vantage Mobility operates a large fleet where dispatch, driver experience, and network utilization were fragmented.",
      "eForte delivered fleet.vantagemobility.io — fleet command, dispatch orchestration, and network analytics."
    ],
    pillars: ["Agentic Orchestration", "Foundational Data Layer", "Velocity AI"],
    deliverables: [
      "Fleet command center",
      "Dispatch orchestration",
      "Driver experience app",
      "Network analytics"
    ],
    challenge: {
      title: "Fleet scale outpaced dispatch visibility",
      paragraphs: [
        "Jobs, ETAs, and idle time lived in separate tools while utilization lagged."
      ],
      image: asset("vantage-mobility", "screen-1.png"),
    },
    solution: {
      title: "A mobility operating system",
      lead: "Vehicle telemetry and jobs feed agentic dispatch with driver-friendly workflows.",
      images: [
        asset("vantage-mobility", "screen-1.png"),
        asset("vantage-mobility", "screen-2.png"),
        asset("vantage-mobility", "screen-3.png"),
        asset("vantage-mobility", "screen-4.png")
      ],
      items: [
        {
          title: "Fleet command center",
          body: "Online vehicles, trips, and idle on one board.",
          image: asset("vantage-mobility", "screen-2.png"),
        },
        {
          title: "Dispatch orchestration",
          body: "Open jobs reassign with ETA accuracy targets.",
          image: asset("vantage-mobility", "screen-3.png"),
        },
        {
          title: "Driver + network analytics",
          body: "Safety scores and cost-per-mile guide growth.",
          image: asset("vantage-mobility", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "The network moves more with less waste.",
      items: [
        { title: "98% vehicles online", body: "Fleet health is visible continuously." },
        { title: "ETA accuracy 94%", body: "Customers trust arrival promises." },
        { title: "Utilization 81%", body: "Idle time drops with smarter dispatch." },
        { title: "Cost/mi −9%", body: "Network analytics guide denser routing." }
      ],
    },
    closing: "Vantage Mobility orchestrates the fleet from fleet.vantagemobility.io.",
  },
  "iberian-ventures": {
    slug: "iberian-ventures",
    name: "Iberian Ventures",
    headline: "Giving M&A analysts their time back with agentic deal matching",
    productUrl: "https://deals.iberianventures.com",
    intro: [
      "Iberian Ventures is a Lisbon-based M&A advisory firm running 30+ buy-side mandates and tracking 500+ acquisition targets. Analysts were spending most of their week on admin instead of advisory judgment.",
      "eForte built deals.iberianventures.com — mandate command, target matching, presentation automation, and pipeline analytics in one workspace."
    ],
    pillars: ["Agentic Orchestration", "Velocity AI", "Foundational Data Layer"],
    deliverables: [
      "Mandate command center",
      "Target match engine",
      "Deal presentation studio",
      "Pipeline analytics"
    ],
    challenge: {
      title: "Admin work consumed 70% of analyst time and stalled deal momentum",
      paragraphs: [
        "Requirement review, database searches, scoring, decks, and scheduling kept analysts away from clients.",
        "The firm could not scale mandates without adding headcount or accepting slower time-to-meeting."
      ],
      image: asset("iberian-ventures", "screen-1.png"),
    },
    solution: {
      title: "An agentic M&A operating system for buy-side mandates",
      lead: "Buy-side briefs, sell-side targets, decks, and communications now move as one orchestrated flow.",
      images: [
        asset("iberian-ventures", "screen-1.png"),
        asset("iberian-ventures", "screen-2.png"),
        asset("iberian-ventures", "screen-3.png"),
        asset("iberian-ventures", "screen-4.png")
      ],
      items: [
        {
          title: "Agentic deal workflow orchestration",
          body: "Agents extract buy-side requirements, coordinate outreach, schedule meetings, and draft agreements with audit trails.",
          image: asset("iberian-ventures", "screen-2.png"),
        },
        {
          title: "Velocity AI target matching",
          body: "Sell-side opportunities are scored continuously against mandate criteria so high-fit targets surface without manual search.",
          image: asset("iberian-ventures", "screen-3.png"),
        },
        {
          title: "Foundational data for deck generation",
          body: "Structured deal data feeds auto-generated two-page presentations for every high-scoring match.",
          image: asset("iberian-ventures", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Analysts advise; the platform handles the administrative pipeline.",
      items: [
        { title: "78% less admin time", body: "Requirement extraction and matching no longer dominate the week." },
        { title: "3.2x more qualified matches", body: "Continuous scoring surfaces more viable opportunities." },
        { title: "40% faster to first meeting", body: "Scheduling and outreach remove the old bottlenecks." },
        { title: "37% client revenue growth", body: "Faster, higher-quality deal flow compounds for clients." }
      ],
    },
    closing: "Iberian Ventures now runs buy-side mandates from deals.iberianventures.com.",
  },
  "prism": {
    slug: "prism",
    name: "Prism",
    headline: "Retail demand forecasting that respects seasonality, holidays, and messy data",
    productUrl: "https://app.prismforecast.com",
    intro: [
      "Retailers live and die by anticipating demand — but seasons, holidays, and outliers make naive forecasts fail. Prism is a trends forecasting engine built for strong seasonal patterns and imperfect real-world data.",
      "eForte delivered app.prismforecast.com around Facebook’s Prophet API, with a PWA interface, outlier smoothing, and a Foundational Data Layer for reliable retail time series."
    ],
    pillars: ["Velocity AI", "Foundational Data Layer"],
    deliverables: [
      "Demand forecast studio",
      "Seasonality explorer",
      "Outlier smoothing lab",
      "Retail trend board"
    ],
    challenge: {
      title: "Retail demand doesn’t move in a straight line",
      paragraphs: [
        "Yearly, weekly, and daily seasonality plus holiday spikes require an additive model — not a flat trend line.",
        "The hardest balance: smooth outliers without dulling sensitivity to real demand shifts."
      ],
      image: asset("prism", "screen-1.png"),
    },
    solution: {
      title: "Prophet-powered forecasting with careful data engineering",
      lead: "Velocity AI drives the additive model; the Foundational Data Layer keeps inputs trustworthy enough to forecast.",
      images: [
        asset("prism", "screen-1.png"),
        asset("prism", "screen-2.png"),
        asset("prism", "screen-3.png"),
        asset("prism", "screen-4.png")
      ],
      items: [
        {
          title: "Additive forecasting model",
          body: "Prism forecasts with yearly, weekly, and daily seasonality plus holiday effects so projections match how retail actually moves.",
          image: asset("prism", "screen-2.png"),
        },
        {
          title: "Careful outlier handling",
          body: "Smoothing logic dampens distorting spikes while preserving genuine changepoints in demand.",
          image: asset("prism", "screen-3.png"),
        },
        {
          title: "Cross-stack retail delivery",
          body: "R/Prophet sits behind a React PWA with PHP integration so merchandisers can run forecasts in a web workspace.",
          image: asset("prism", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Prism gave retailers forecasts that stay usable even when the input data isn’t perfect.",
      items: [
        { title: "38% accuracy improvement", body: "Seasonal + holiday modeling beat prior baselines." },
        { title: "30K+ forecasts generated", body: "SKU-level runs at retail scale." },
        { title: "Resilient to messy data", body: "Prophet’s robustness keeps projections usable with gaps." },
        { title: "Balanced outlier sensitivity", body: "Custom smoothing stays stable without going numb." }
      ],
    },
    closing: "Prism runs retail demand forecasting from app.prismforecast.com.",
  },
  "allied-insurance": {
    slug: "allied-insurance",
    name: "Allied Insurance",
    headline: "Processing insurance claims in hours instead of days",
    productUrl: "https://claims.alliedinsurance.com",
    intro: [
      "Allied Insurance processes 50,000+ claims a year across auto, home, and commercial lines. Legacy intake forced adjusters to spend most of their day on data entry instead of decisions.",
      "eForte built claims.alliedinsurance.com — computer-vision intake, fraud detection, policy verification, and straight-through processing for simple claims."
    ],
    pillars: ["Velocity AI", "Agentic Orchestration", "Foundational Data Layer"],
    deliverables: [
      "Claims intake studio",
      "Fraud detection radar",
      "STP claims board",
      "Policy verify console"
    ],
    challenge: {
      title: "Manual claims work created backlog, slow settlements, and weak CX",
      paragraphs: [
        "Adjusters spent ~65% of time keying data, cross-checking policies, and chasing documents.",
        "Simple claims waited in the same queue as complex ones — stretching cycle time to days."
      ],
      image: asset("allied-insurance", "screen-1.png"),
    },
    solution: {
      title: "AI claims automation from intake through settlement",
      lead: "Digitized intake feeds fraud scoring and agentic routing so simple claims STP while complex cases arrive ready for adjusters.",
      images: [
        asset("allied-insurance", "screen-1.png"),
        asset("allied-insurance", "screen-2.png"),
        asset("allied-insurance", "screen-3.png"),
        asset("allied-insurance", "screen-4.png")
      ],
      items: [
        {
          title: "Foundational Data Layer for claim digitization",
          body: "Computer vision and NLP extract claim form fields so intake no longer depends on manual keying.",
          image: asset("allied-insurance", "screen-2.png"),
        },
        {
          title: "Velocity AI for verification and fraud detection",
          body: "Coverage and limits verify against policy systems while pattern recognition flags fraud risk early.",
          image: asset("allied-insurance", "screen-3.png"),
        },
        {
          title: "Agentic Orchestration for claims routing",
          body: "Simple claims STP automatically; complex cases get complete summaries, correspondence, and status tracking.",
          image: asset("allied-insurance", "screen-4.png"),
        }
      ],
    },
    results: {
      title: "Outcomes that matter",
      lead: "Claims move in hours, not days — with stronger fraud defense.",
      items: [
        { title: "83% less manual data entry", body: "Digitized intake removed the biggest adjuster time sink." },
        { title: "9 days → 36 hours", body: "STP and auto-verify compressed the claims lifecycle." },
        { title: "42% lower cost per claim", body: "Automation cut labor cost on routine volume." },
        { title: "94% fraud detection accuracy", body: "Up from 71% on the legacy process." }
      ],
    },
    closing: "Allied Insurance now runs claims from claims.alliedinsurance.com.",
  }
};
