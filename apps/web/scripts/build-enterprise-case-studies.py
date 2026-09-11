"""Build enterpriseCaseStudyOverrides.ts and patch related data files."""
from pathlib import Path
import re
import textwrap

ROOT = Path("apps/web")
OUT_TS = ROOT / "data" / "enterpriseCaseStudyOverrides.ts"

def asset(slug, file):
    return f"/assets/final-images/case-studies/{slug}/{file}"

def block(slug, name, headline, url, intros, pillars, deliverables, challenge_title, challenge_paras, solution_title, solution_lead, items, results_lead, results, closing):
    def q(s):
        return s.replace("\\", "\\\\").replace('"', '\\"')
    intro_js = ",\n      ".join(f'"{q(p)}"' for p in intros)
    pillars_js = ", ".join(f'"{q(p)}"' for p in pillars)
    deliv_js = ",\n      ".join(f'"{q(d)}"' for d in deliverables)
    chal_js = ",\n        ".join(f'"{q(p)}"' for p in challenge_paras)
    items_js = ",\n        ".join(
        f'{{\n          title: "{q(t)}",\n          body: "{q(b)}",\n          image: asset("{slug}", "{img}"),\n        }}'
        for t, b, img in items
    )
    results_js = ",\n        ".join(
        f'{{ title: "{q(t)}", body: "{q(b)}" }}' for t, b in results
    )
    screens = ",\n        ".join(f'asset("{slug}", "screen-{i}.png")' for i in range(1, 5))
    return f'''  "{slug}": {{
    slug: "{slug}",
    name: "{q(name)}",
    headline: "{q(headline)}",
    productUrl: "{url}",
    intro: [
      {intro_js}
    ],
    pillars: [{pillars_js}],
    deliverables: [
      {deliv_js}
    ],
    challenge: {{
      title: "{q(challenge_title)}",
      paragraphs: [
        {chal_js}
      ],
      image: asset("{slug}", "screen-1.png"),
    }},
    solution: {{
      title: "{q(solution_title)}",
      lead: "{q(solution_lead)}",
      images: [
        {screens}
      ],
      items: [
        {items_js}
      ],
    }},
    results: {{
      title: "Outcomes that matter",
      lead: "{q(results_lead)}",
      items: [
        {results_js}
      ],
    }},
    closing: "{q(closing)}",
  }}'''

studies = [
block(
  "global-manufacturing-corp","Global Manufacturing Corp",
  "Unifying plant operations and invoice intelligence across every region",
  "https://ops.globalmfgcorp.com",
  ["Global Manufacturing Corp runs multi-plant production with complex supplier and AP operations. Disconnected MES, ERP, and invoice tools left leaders without trusted throughput or cash visibility.",
   "eForte delivered a Foundational Data Layer and agentic AP workflows at ops.globalmfgcorp.com so plants, suppliers, and payables share one operating system."],
  ["Foundational Data Layer","Agentic Orchestration","Velocity AI"],
  ["Plant operations command center","AI invoice capture and PO matching","Supplier performance workspace","Production analytics board"],
  "Fragmented plant and AP systems blocked visibility and burned cash",
  ["Each plant reported OEE and yield differently while AP chased PDFs across email.", "Leaders needed one workspace connecting shop-floor reality to financial controls."],
  "One operations fabric for plants, suppliers, and payables",
  "eForte unified operational and financial signals, then automated invoice matching with supervised agents.",
  [("Foundational Data Layer for plant + AP truth","MES, ERP, and supplier feeds land in governed contracts so OEE, yield, and invoice status stay reconcilable.", "screen-2.png"),
   ("Agentic Orchestration for invoice matching","Agents capture invoices, match POs, and route exceptions with audit trails.", "screen-3.png"),
   ("Velocity AI for production and spend insight","Models highlight downtime patterns and spend anomalies on one board.", "screen-4.png")],
  "Operations and finance finally move on shared, timely data.",
  [("94% less manual invoice handling","Capture and matching removed most AP keying work."),("Invoice cost cut from $14.20 to $2.30","Automation drove more than an 80% reduction in processing cost."),("Early-pay capture 21% → 93%","Faster cycles unlocked discounts previously missed."),("Unified plant visibility","Leaders see OEE, yield, and supplier risk together.")],
  "Global Manufacturing Corp now runs plants and payables from ops.globalmfgcorp.com."
),
block(
  "globaltrade-solutions","GlobalTrade Solutions",
  "Turning multi-day trade quotes into a same-day operating rhythm",
  "https://trade.globaltradesolutions.com",
  ["GlobalTrade Solutions manages 1,200+ annual commodity trades across 350+ suppliers. Manual email intake and documentation slowed quotes and created settlement risk.",
   "eForte built trade.globaltradesolutions.com — from RFQ intelligence to shipment and LC tracking."],
  ["Agentic Orchestration","Velocity AI","Foundational Data Layer"],
  ["Trade desk workspace","Supplier ranking and RFQ automation","Shipment control tower","Settlement tracker"],
  "Email-driven trading could not scale with volume",
  ["Traders spent days interpreting needs, ranking suppliers, and chasing LC paperwork.", "Documentation errors meant lost deals even when terms were competitive."],
  "Agentic trade lifecycle on a trusted data layer",
  "Requirement intake, supplier selection, docs, and logistics now run as one orchestrated flow.",
  [("NLP requirement intake","Client emails become structured RFQs with commodity, volume, and Incoterms.", "screen-2.png"),
   ("Velocity AI supplier ranking","Suppliers score on price, reliability, and lead time before RFQs go out.", "screen-3.png"),
   ("Control tower for docs and shipments","Quotes, LCs, and shipment events stay visible in real time.", "screen-4.png")],
  "Same staff now quote faster and close cleaner trades.",
  [("Quote time 2 days → 4 hours","91% faster client-ready quotations."),("64% fewer documentation errors","Automated agreements reduced mistakes."),("28% better supplier response","Targeted RFQs improved engagement."),("22% more transaction volume","Throughput rose without added headcount.")],
  "GlobalTrade Solutions operates a modern trade desk at trade.globaltradesolutions.com."
),
block(
  "meridian-pay","Meridian Pay",
  "Real-time payments risk and dispute orchestration at scale",
  "https://console.meridianpay.com",
  ["Meridian Pay processes millions of transactions monthly. Legacy fraud rules and after-the-fact reviews could not protect customers as volume grew.",
   "eForte delivered console.meridianpay.com — millisecond scoring and supervised dispute orchestration."],
  ["Velocity AI","Agentic Orchestration","Foundational Data Layer","Cloud & DevOps"],
  ["Payments risk console","Fraud case workspace","Dispute orchestration","Settlement monitor"],
  "Fraud and disputes arrived after the money had already moved",
  ["Rules fired hours late while sophisticated fraud slipped through.", "Settlement teams lacked a rail-aware single view."],
  "In-path intelligence with supervised autonomy",
  "Unified transaction data powers real-time scoring and agent-led dispute handling.",
  [("Foundational Data Layer across rails","Txn, merchant, and settlement events share one governed schema.", "screen-2.png"),
   ("Velocity AI fraud scoring","Every payment scores in ~40ms with explainable features.", "screen-3.png"),
   ("Agentic dispute workflows","Routine disputes auto-resolve; edge cases escalate complete.", "screen-4.png")],
  "Risk moved from reactive queues to proactive control.",
  [("Detection in seconds, not hours","Fraud holds happen in the payment path."),("Manual review load down sharply","Agents clear routine disputes."),("99.6% settlement reconciliation","Finance trusts a single rail-aware monitor."),("New rails without rebuilds","Risk infrastructure scales with product expansion.")],
  "Meridian Pay operates risk and settlement from console.meridianpay.com."
),
block(
  "altura-motors","Altura Motors",
  "Accelerating vehicle design with orchestrated engineering simulations",
  "https://design.alturamotors.com",
  ["Altura Motors designs vehicles across aerodynamics, structures, and safety. Manual simulation handoffs stretched each iteration by weeks.",
   "eForte built design.alturamotors.com where simulation results trigger downstream work automatically."],
  ["Agentic Orchestration","Foundational Data Layer","Velocity AI","Platform Engineering"],
  ["Vehicle design hub","Simulation orchestration","Cross-discipline impact view","Iteration analytics"],
  "Engineering handoffs were slower than the engineering itself",
  ["Teams waited on files and formats before the next simulation could start.", "Design conflicts appeared late because disciplines lacked shared impact views."],
  "Agentic coordination across the digital thread",
  "Shared design data plus automated simulation chaining compressed iteration cycles.",
  [("Unified engineering data layer","Simulation artifacts stay addressable across disciplines.", "screen-2.png"),
   ("Automatic simulation handoffs","When aero completes, crash and NVH jobs queue automatically.", "screen-3.png"),
   ("Velocity AI design suggestions","Prior program patterns help designs converge faster.", "screen-4.png")],
  "Programs move from concept to production-ready faster.",
  [("Iteration cycles −31%","Automatic handoffs removed waiting waste."),("Late conflicts −44%","Cross-discipline impact appears earlier."),("Higher reuse of simulation assets","Teams stop reinventing setup every gate."),("Months off time-to-market","Shorter loops compound across the plan.")],
  "Altura Motors engineers collaborate on design.alturamotors.com."
),
block(
  "anchor-point-insurance","Anchor Point Insurance",
  "Stopping sophisticated fraud before claims are paid",
  "https://claims.anchorpointins.com",
  ["Anchor Point Insurance processes high volumes of life and health claims. Static rules missed emerging fraud while flooding investigators with false positives.",
   "eForte delivered claims.anchorpointins.com — predictive scoring and investigation-ready case files."],
  ["Velocity AI","Agentic Orchestration","Foundational Data Layer","Cybersecurity"],
  ["Fraud command center","Investigator case files","Policyholder timeline intel","Fraud outcomes board"],
  "Rules-based detection was both late and noisy",
  ["New fraud schemes paid out before anyone connected the dots.", "Investigators spent time assembling evidence instead of deciding."],
  "Predictive detection with investigation-ready agents",
  "Unified claims history powers scoring; agents package evidence for humans.",
  [("Claims graph data layer","Members, providers, and claims link so network fraud becomes visible.", "screen-2.png"),
   ("Velocity AI risk scoring","Every claim is scored pre-payout with higher precision.", "screen-3.png"),
   ("Agentic case preparation","High-risk claims arrive with evidence packs and recommended actions.", "screen-4.png")],
  "Fraud ops shifted from recovery to prevention.",
  [("Earlier detection","Suspicious claims stop before payout."),("False positives −36%","Analysts focus on real threats."),("Faster investigations","Case files assemble automatically."),("Connected fraud patterns","Network hits expose rings, not single claims.")],
  "Anchor Point protects members through claims.anchorpointins.com."
),
block(
  "apex-shared-services","Apex Shared Services",
  "Orchestrating finance, HR, and IT requests across every business unit",
  "https://portal.apexshared.com",
  ["Apex Shared Services supports many internal BUs. Ticket chaos and unclear ownership created SLA risk.",
   "eForte launched portal.apexshared.com — smart routing, approvals, and BU performance visibility."],
  ["Agentic Orchestration","Foundational Data Layer","Velocity AI"],
  ["Shared services portal","Request orchestration","Approval control plane","BU performance board"],
  "Internal customers could not see who owned their request",
  ["Email and disconnected tools buried work while approvals stalled and SLAs slipped."],
  "One portal, policy-aware agents, measurable SLAs",
  "Requests classify, route, and escalate with governed data and clear ownership.",
  [("Unified request data","Finance, HR, and IT tickets share taxonomy and SLA clocks.", "screen-2.png"),
   ("Agentic routing and approvals","Agents apply policy and escalate only when thresholds break.", "screen-3.png"),
   ("BU analytics","Leaders see backlog, CSAT, and automation rate by unit.", "screen-4.png")],
  "Shared services became predictable instead of reactive.",
  [("96% SLA attainment","Transparent queues restored reliability."),("61% automated handling","Routine work no longer waits on humans."),("Backlog −28%","Visibility prevented silent pile-ups."),("CSAT 4.6","Internal customers trust the portal.")],
  "Apex Shared Services runs multi-BU support through portal.apexshared.com."
),
block(
  "birchwood-hospitality-group","Birchwood Hospitality Group",
  "Property operations and guest journeys on one hospitality platform",
  "https://ops.birchwoodhotels.com",
  ["Birchwood Hospitality Group manages hotels where occupancy, housekeeping, and guest requests lived in separate tools.",
   "eForte built ops.birchwoodhotels.com to connect front office, housekeeping, and revenue insights."],
  ["Agentic Orchestration","Foundational Data Layer","Velocity AI"],
  ["Property operations hub","Guest journey console","Housekeeping dispatch","Revenue insights"],
  "Guest experience suffered when ops data was fragmented",
  ["Arrivals, VIP preferences, and room readiness were not synchronized."],
  "A hotel operating system for staff and guests",
  "Shared property data powers orchestrated tasks and revenue forecasting.",
  [("Property data layer","PMS, CRM, and housekeeping events unify for live status.", "screen-2.png"),
   ("Guest journey orchestration","Requests route with SLA timers and VIP context.", "screen-3.png"),
   ("Revenue intelligence","Pickup, group mix, and F&B inform daily decisions.", "screen-4.png")],
  "Operations and guest satisfaction improved together.",
  [("Room turn 28 minutes avg","Dispatch keeps housekeeping synchronized."),("Request resolution 91%","Guest issues close inside SLA."),("RevPAR visibility","Managers act on live portfolio metrics."),("Higher NPS","Guests feel the coordination behind the stay.")],
  "Birchwood properties run from ops.birchwoodhotels.com."
),
block(
  "brightwell-mutual","Brightwell Mutual",
  "Member care and benefits guidance with agentic service workflows",
  "https://member.brightwellmutual.com",
  ["Brightwell Mutual serves members across complex benefits plans. Care agents lacked guided next-best actions.",
   "eForte delivered member.brightwellmutual.com — benefits intelligence and supervised automation."],
  ["Agentic Orchestration","Velocity AI","Foundational Data Layer"],
  ["Member care workspace","Benefits guidance","Claims assist queue","Mutual health dashboard"],
  "Agents spent more time navigating systems than helping members",
  ["Eligibility, benefits, and claims data lived apart while first-contact resolution suffered."],
  "Care orchestration grounded in member data",
  "Agents see full member context; routine claims assist runs with STP where policy allows.",
  [("Member 360 data layer","Plans, claims, and interactions unify for every conversation.", "screen-2.png"),
   ("Benefits guidance agents","Recommended options respect eligibility with transparent rationale.", "screen-3.png"),
   ("Claims assist STP","Simple claims move straight through; complex ones escalate with summaries.", "screen-4.png")],
  "Members get faster answers; the mutual gets lower cost-to-serve.",
  [("First-contact resolution 78%","Context-rich agents resolve more on first contact."),("Cost per case −24%","Automation removes repetitive handling."),("71% simple claims STP","Members wait less for straightforward claims."),("Retention 93%","Service quality supports long-term membership.")],
  "Brightwell Mutual care teams work from member.brightwellmutual.com."
),
block(
  "clearpath-diabetes-care","ClearPath Diabetes Care",
  "Population health workflows that keep diabetes patients on track",
  "https://care.clearpathdiabetes.com",
  ["ClearPath Diabetes Care supports thousands of patients with CGM data, coaching, and clinical protocols.",
   "eForte built care.clearpathdiabetes.com so care teams prioritize risk and orchestrate outreach."],
  ["Foundational Data Layer","Agentic Orchestration","Velocity AI"],
  ["Care team dashboard","Patient journey view","Clinical workflow board","Population analytics"],
  "At-risk patients were identified too late",
  ["CGM alerts, adherence, and coaching notes did not form a single prioritized queue."],
  "A care operating system for diabetes programs",
  "Unified patient signals feed risk models and agentic outreach with clinician oversight.",
  [("Clinical data fabric","CGM, meds, visits, and coaching notes share governed timelines.", "screen-2.png"),
   ("Risk-prioritized care board","Teams see who needs outreach with protocol-backed next steps.", "screen-3.png"),
   ("Population analytics","A1C, adherence, and ER utilization guide program decisions.", "screen-4.png")],
  "Patients stay engaged; clinicians spend time where it matters.",
  [("Average A1C ↓0.8","Targeted interventions move clinical outcomes."),("74% patient engagement","Coaching and alerts reach the right people."),("ER utilization ↓17%","Earlier outreach prevents avoidable events."),("Program savings $2.4M","Better control reduces costly escalations.")],
  "ClearPath clinicians orchestrate care from care.clearpathdiabetes.com."
),
block(
  "coastal-assurance-group","Coastal Assurance Group",
  "Underwriting and servicing built for coastal risk complexity",
  "https://hub.coastalassurance.com",
  ["Coastal Assurance Group underwrites policies with material catastrophe exposure. Quote cycles were slow and exposure views fragmented.",
   "eForte delivered hub.coastalassurance.com — underwriting, servicing, and coastal risk intelligence together."],
  ["Velocity AI","Foundational Data Layer","Agentic Orchestration"],
  ["Underwriting workbench","Policy servicing hub","Coastal risk map","Producer performance"],
  "Coastal risk decisions needed speed without losing underwriting discipline",
  ["Referrals piled up, servicing lagged, and producers lacked clear portfolio signals."],
  "A carrier hub for quote, bind, and service",
  "Risk models and workflows share one data foundation across underwriting and servicing.",
  [("Underwriting workbench","Quotes, referrals, and bind decisions move with model assists.", "screen-2.png"),
   ("Servicing automation","Endorsements and renewals STP where rules allow.", "screen-3.png"),
   ("Cat exposure intelligence","Zones, alerts, and model outputs stay visible.", "screen-4.png")],
  "Faster quotes, cleaner servicing, clearer risk.",
  [("Average quote 6 hours","Workbench compression sped producer response."),("66% servicing STP","Routine changes no longer clog queues."),("Book growth +12%","Producers sell with better enablement."),("Loss ratio visibility","Portfolio decisions use live performance signals.")],
  "Coastal Assurance underwrites and services from hub.coastalassurance.com."
),
block(
  "coastline-resorts","Coastline Resorts",
  "Portfolio resort operations with personalized guest experiences",
  "https://guest.coastlineresorts.com",
  ["Coastline Resorts runs multiple coastal properties where F&B, spa, rooms, and loyalty were siloed.",
   "eForte created guest.coastlineresorts.com — resort command, CRM offers, and workforce workflows."],
  ["Foundational Data Layer","Agentic Orchestration","Velocity AI"],
  ["Resort command center","Guest experience studio","Staff workflow board","Portfolio analytics"],
  "Guests expected one brand experience — systems delivered many",
  ["Preferences did not travel across properties and ancillary revenue was hard to grow deliberately."],
  "One guest graph, many property workflows",
  "Unified guest and ops data powers offers, staffing, and portfolio KPIs.",
  [("Resort command center","Occupancy, arrivals, spa, and F&B sit on one live board.", "screen-2.png"),
   ("Guest experience studio","Preferences drive offers with measurable redemption.", "screen-3.png"),
   ("Workforce orchestration","Tasks cross properties with on-time tracking.", "screen-4.png")],
  "Portfolio performance and guest delight improved together.",
  [("RevPAR +11%","Better coordination and offers lifted yield."),("Ancillary mix 28%","Spa and F&B attach more consistently."),("Offer redemption 41%","Personalization converts without spam."),("Staff on-time 95%","Workflow boards keep service promises.")],
  "Coastline Resorts delivers a cohesive brand experience through guest.coastlineresorts.com."
),
block(
  "cobalt-digital-bank","Cobalt Digital Bank",
  "Real-time digital banking on a resilient data and control plane",
  "https://app.cobaltdigital.bank",
  ["Cobalt Digital Bank serves millions of customers digitally. Growth strained data freshness, lending decisions, and compliance observability.",
   "eForte engineered app.cobaltdigital.bank as a control plane for platform health, ledger integrity, lending, and AML."],
  ["Foundational Data Layer","Velocity AI","Agentic Orchestration","Cybersecurity"],
  ["Banking control plane","Real-time ledger view","Lending decision hub","Compliance observatory"],
  "Challenger-bank growth exposed cracks in real-time infrastructure",
  ["Ledger exceptions, lending queues, and AML cases were not visible together."],
  "A bank-grade product control plane",
  "Governed streaming data powers decisions, while agents prepare compliance packages.",
  [("Real-time foundational ledger layer","Balances and events stay consistent with exception surfacing.", "screen-2.png"),
   ("Lending decision hub","Applications score with explainability and fraud holds.", "screen-3.png"),
   ("Compliance observatory","AML and SAR-ready cases assemble with durable trails.", "screen-4.png")],
  "Cobalt scales customers without scaling chaos.",
  [("99.98% platform uptime","Control plane watches what members feel."),("38ms decision latency","Lending and risk stay interactive."),("63% lending auto-decision","Straight-through where policy allows."),("Audit-ready AML packs","Investigations start complete, not empty.")],
  "Cobalt Digital Bank runs growth-ready operations from app.cobaltdigital.bank."
),
block(
  "crestline-bpo-group","Crestline BPO Group",
  "BPO command operations with quality and workforce orchestration",
  "https://command.crestlinebpo.com",
  ["Crestline BPO Group runs large multi-client programs. Leaders needed live occupancy, QA, and client SLA clarity in one place.",
   "eForte delivered command.crestlinebpo.com — command center, program boards, and auto-QA insights."],
  ["Agentic Orchestration","Velocity AI","Foundational Data Layer"],
  ["BPO command center","Client program board","Workforce orchestration","Quality & insights"],
  "Multi-client delivery lacked a single operational truth",
  ["AHT, QA, staffing gaps, and SLA risk lived in separate reports."],
  "Command-and-control for modern BPO delivery",
  "Unified ops data powers staffing agents, QA automation, and client-ready boards.",
  [("Live command center","Agents, AHT, occupancy, and QA on one floor screen.", "screen-2.png"),
   ("Client program boards","Each program shows SLA, CSAT, and escalations.", "screen-3.png"),
   ("Auto-QA and coaching","Velocity AI flags defect patterns and queues coaching.", "screen-4.png")],
  "Delivery quality and client confidence improved at floor speed.",
  [("97% SLA attainment","Program boards keep promises visible."),("68% auto-QA coverage","More interactions reviewed without linear headcount."),("Defects −27%","Coaching targets the real drivers."),("NPS +8","Clients feel operational control.")],
  "Crestline BPO Group runs multi-client excellence from command.crestlinebpo.com."
),
# NEW 10
block(
  "fenwick-capital-markets","Fenwick Capital Markets",
  "Speeding trade decisioning with real-time AI on a market data fabric",
  "https://desk.fenwickcapital.com",
  ["Fenwick Capital Markets manages institutional trading across equities, fixed income, and derivatives. Delayed feeds meant opportunities shifted before desks could act.",
   "eForte built desk.fenwickcapital.com — real-time signals, supervised rebalancing, and live risk exposure."],
  ["Velocity AI","Foundational Data Layer","Agentic Orchestration","Platform Engineering"],
  ["Trading decision desk","Portfolio rebalance hub","Market data fabric","Risk exposure board"],
  "Trading desks were making decisions on delayed truth",
  ["Signals arrived minutes late and routine rebalancing still required manual recalculation across dozens of accounts."],
  "A real-time desk built on shared market data",
  "High-throughput data powers predictive signals while agents rebalance inside approved limits.",
  [("Market data fabric","Pricing and positions stream into one up-to-the-second layer.", "screen-2.png"),
   ("Velocity AI trade signals","Models surface opportunities within seconds of a market shift.", "screen-3.png"),
   ("Agentic portfolio rebalancing","Routine adjustments execute automatically; exceptions escalate.", "screen-4.png")],
  "Desks act faster with less operational drag.",
  [("Signal latency in seconds","Analysts no longer wait on multi-minute delays."),("Reduced manual rebalancing","PMs focus on strategy, not spreadsheet math."),("Always-current risk view","Exposure monitoring stays live across desks."),("More consistent decisioning","Standardized signals reduce team-to-team variance.")],
  "Fenwick Capital Markets trades from desk.fenwickcapital.com — real-time, governed, and desk-ready."
),
block(
  "frontier-energy-partners","Frontier Energy Partners",
  "Forecasting equipment failure across a distributed energy network",
  "https://grid.frontierenergy.io",
  ["Frontier Energy Partners manages generation and transmission assets across many regions. Maintenance was reactive and regionally siloed.",
   "eForte delivered grid.frontierenergy.io — unified asset health, failure forecasts, and automated crew dispatch."],
  ["Foundational Data Layer","Velocity AI","Agentic Orchestration","Cybersecurity"],
  ["Asset health network","Failure forecast console","Maintenance dispatch","Reliability dashboard"],
  "Central ops could not see asset health across the full network",
  ["Regional systems hid early failure signals and crews were dispatched after outages, not before."],
  "Predictive reliability on a unified asset layer",
  "Streaming asset data feeds forecasts; agents prioritize and dispatch field crews.",
  [("Unified asset monitoring","Every regional feed lands in one reliability fabric.", "screen-2.png"),
   ("Velocity AI failure forecasting","Models prioritize assets by predicted failure lead time.", "screen-3.png"),
   ("Agentic maintenance dispatch","Crews route to highest-priority sites without manual triage.", "screen-4.png")],
  "Reliability improved because work moved upstream of failure.",
  [("Fewer preventable outages","Early signals trigger maintenance before downtime."),("Prioritized crew focus","Teams work the assets that matter most."),("Faster dispatch","Identification to on-site time dropped."),("Network-wide visibility","Leaders see health across every region.")],
  "Frontier Energy Partners keeps the grid reliable from grid.frontierenergy.io."
),
block(
  "harborlight-recovery","Harborlight Recovery",
  "Care coordination and clinical pathways for recovery programs",
  "https://care.harborlightrecovery.com",
  ["Harborlight Recovery coordinates admissions, clinical pathways, and family communication across recovery programs.",
   "eForte built care.harborlightrecovery.com so clinical teams, families, and outcomes analytics stay aligned."],
  ["Foundational Data Layer","Agentic Orchestration","Velocity AI"],
  ["Care coordination hub","Clinical pathway board","Family portal view","Outcomes analytics"],
  "Care teams juggled pathways without a shared operating picture",
  ["Admissions, protocol adherence, and family updates lived in separate tools, slowing interventions."],
  "A recovery care operating system",
  "Shared clinical data powers pathway orchestration and family-safe updates.",
  [("Care coordination hub","Admissions, active census, and discharges on one board.", "screen-2.png"),
   ("Clinical pathway orchestration","Protocols, alerts, and reviews stay synchronized.", "screen-3.png"),
   ("Family engagement + outcomes","Secure updates pair with completion and readmit analytics.", "screen-4.png")],
  "Patients progress with clearer coordination and measurable outcomes.",
  [("Higher pathway adherence","Teams see who is off-track early."),("Faster family communication","Updates no longer wait on ad-hoc emails."),("Readmissions ↓19%","Earlier interventions reduce bounce-backs."),("Shorter average LOS","Coordination removes avoidable delay.")],
  "Harborlight Recovery coordinates care from care.harborlightrecovery.com."
),
block(
  "ironclad-manufacturing","Ironclad Manufacturing",
  "Shop-floor command with quality gates and predictive maintenance",
  "https://forge.ironcladmfg.com",
  ["Ironclad Manufacturing runs high-mix production where quality holds and unplanned downtime disrupted throughput.",
   "eForte delivered forge.ironcladmfg.com — shop-floor command, quality gates, and maintenance planning in one product."],
  ["Foundational Data Layer","Velocity AI","Agentic Orchestration"],
  ["Shop floor command","Quality gate console","Maintenance planner","Throughput analytics"],
  "Quality and maintenance signals arrived too late to protect throughput",
  ["WIP piled up while CAPA and PM work were scheduled reactively."],
  "A manufacturing command fabric",
  "Line telemetry, quality events, and work orders share one orchestration layer.",
  [("Shop-floor command","OEE, WIP, and defects visible line by line.", "screen-2.png"),
   ("Quality gate console","Inspections, holds, and CAPA tracked in flow.", "screen-3.png"),
   ("Maintenance + throughput analytics","PM due dates and scrap trends drive action.", "screen-4.png")],
  "Throughput rose because quality and uptime were managed together.",
  [("OEE uplift","Less waiting between quality and maintenance decisions."),("Scrap −31%","Earlier holds prevent waste downstream."),("On-time 97%","Orders move with fewer late surprises."),("Cycle time −12%","Stable lines compound speed.")],
  "Ironclad Manufacturing runs the mill from forge.ironcladmfg.com."
),
block(
  "lantern-hotel-collective","Lantern Hotel Collective",
  "Multi-property hospitality ops with guest preference intelligence",
  "https://ops.lanternhotels.com",
  ["Lantern Hotel Collective operates a multi-property portfolio where brand consistency suffered from fragmented PMS and CRM tools.",
   "eForte built ops.lanternhotels.com for collective ops, guest preferences, and brand performance."],
  ["Foundational Data Layer","Agentic Orchestration","Velocity AI"],
  ["Collective ops hub","Guest preference graph","Housekeeping network","Brand performance"],
  "Each property ran as an island — guests felt it",
  ["Preferences and loyalty context did not travel with the guest across the collective."],
  "One collective operating layer",
  "Shared guest and property data power offers, housekeeping, and revenue decisions.",
  [("Collective ops hub","Portfolio occupancy and RevPAR in one command view.", "screen-2.png"),
   ("Guest preference graph","Profiles drive offers with measurable redemption.", "screen-3.png"),
   ("Housekeeping + brand analytics","Turn times and loyalty mix stay visible.", "screen-4.png")],
  "Brand consistency improved alongside commercial performance.",
  [("Portfolio RevPAR visibility","Leaders act on live property signals."),("Offer redemption 39%","Preferences convert without spam."),("Housekeeping ready 91%","Arrivals meet prepared rooms."),("Loyalty mix 36%","Repeat guests are recognized across rooftops.")],
  "Lantern Hotel Collective operates from ops.lanternhotels.com."
),
block(
  "meridian-outsourcing-solutions","Meridian Outsourcing Solutions",
  "Client delivery automation across multi-shore BPO programs",
  "https://hub.meridianoutsourcing.com",
  ["Meridian Outsourcing Solutions delivers multi-client back-office and contact programs. SLA risk and quality variance grew with scale.",
   "eForte launched hub.meridianoutsourcing.com — delivery hub, automation board, and workforce control."],
  ["Agentic Orchestration","Velocity AI","Foundational Data Layer"],
  ["Client delivery hub","Process automation board","Workforce control","Quality insights"],
  "Client promises outpaced operational visibility",
  ["Tickets, bots, and QA lived apart so escalations surprised account teams."],
  "A delivery control tower for outsourcing",
  "Program data, automation, and QA share one orchestrated hub.",
  [("Client delivery hub","SLA, tickets, and CSAT visible per client.", "screen-2.png"),
   ("Process automation board","Bots handle routine volume with exception queues.", "screen-3.png"),
   ("Workforce + quality insights","AHT, occupancy, and auto-QA drive coaching.", "screen-4.png")],
  "Delivery became measurable and more automated.",
  [("SLA 98%","Account teams see risk before clients do."),("64% bot-handled volume","Humans focus on exceptions."),("Defects −24%","Auto-QA targets real drivers."),("CSAT 4.5","Clients feel operational control.")],
  "Meridian Outsourcing Solutions delivers from hub.meridianoutsourcing.com."
),
block(
  "pulsewell-fitness","PulseWell Fitness",
  "Member coaching and wearable insights for digital fitness programs",
  "https://coach.pulsewell.fit",
  ["PulseWell Fitness coaches tens of thousands of members with trainers, plans, and wearables. Signals were scattered and adherence slipped.",
   "eForte built coach.pulsewell.fit — coaching hub, trainer workflows, and wearable insights."],
  ["Foundational Data Layer","Agentic Orchestration","Velocity AI"],
  ["Member coaching hub","Trainer workflow board","Wearable insights","Studio analytics"],
  "Trainers could not see who needed attention today",
  ["Wearable syncs, plan compliance, and check-ins were fragmented across tools."],
  "A coaching operating system",
  "Member telemetry and plans feed prioritized trainer workflows.",
  [("Member coaching hub","Active members, sessions, and adherence in one view.", "screen-2.png"),
   ("Trainer workflow board","Plans due, check-ins, and flags prioritized.", "screen-3.png"),
   ("Wearable + studio analytics","Zones, sleep, retention, and class fill guide growth.", "screen-4.png")],
  "Members stay engaged; trainers coach with clarity.",
  [("Adherence 77%","Prioritized outreach keeps plans on track."),("Retention 88%","Engaged members stay longer."),("Synced wearables 91%","Telemetry arrives ready for coaching."),("NPS 81","Members feel supported, not automated away.")],
  "PulseWell Fitness coaches from coach.pulsewell.fit."
),
block(
  "ridgeline-auto-group","Ridgeline Auto Group",
  "Dealer command across sales, service, and inventory intelligence",
  "https://drive.ridgelineauto.com",
  ["Ridgeline Auto Group operates multiple rooftops. Sales journeys, service lanes, and inventory aged in separate systems.",
   "eForte delivered drive.ridgelineauto.com — dealer command, service console, and inventory intelligence."],
  ["Foundational Data Layer","Agentic Orchestration","Velocity AI"],
  ["Dealer command center","Service lane console","Sales journey board","Inventory intelligence"],
  "Rooftops could not operate as one retail network",
  ["Leads, ROs, and aged inventory lacked a shared decision layer."],
  "A dealer network operating system",
  "Sales, service, and inventory share orchestrated workflows and analytics.",
  [("Dealer command center","Rooftops, units, and CSI in one portfolio view.", "screen-2.png"),
   ("Service lane console","RO cycle time and parts fill managed live.", "screen-3.png"),
   ("Sales + inventory intelligence","Lead-to-close and aged units prioritized.", "screen-4.png")],
  "Retail execution improved across the group.",
  [("Higher close-rate visibility","Managers coach from live journey data."),("Service cycle 2.1d avg","Lanes move with fewer parts delays."),("Aged inventory 7%","Turns improve with match scoring."),("CSI 92","Customers feel coordinated retail service.")],
  "Ridgeline Auto Group runs rooftops from drive.ridgelineauto.com."
),
block(
  "summit-steel-works","Summit Steel Works",
  "Mill operations with fulfillment, safety, and cost-to-serve control",
  "https://mill.summitsteel.works",
  ["Summit Steel Works runs mill production where order fulfillment, safety compliance, and energy cost needed tighter coordination.",
   "eForte built mill.summitsteel.works — mill hub, fulfillment board, and safety/performance analytics."],
  ["Foundational Data Layer","Agentic Orchestration","Velocity AI"],
  ["Mill operations hub","Order fulfillment board","Safety & compliance","Cost & throughput"],
  "Production, fulfillment, and safety competed for attention",
  ["Late orders and reactive safety tracking eroded margin and trust."],
  "A mill command platform",
  "Heat, orders, and compliance events share one operational fabric.",
  [("Mill operations hub","Heat, yield, and delays visible in real time.", "screen-2.png"),
   ("Order fulfillment board","Committed, in-cut, and ship-ready stages tracked.", "screen-3.png"),
   ("Safety + cost analytics","Incidents, training, energy, and OTIF on one board.", "screen-4.png")],
  "The mill ships cleaner, safer, and more predictably.",
  [("Yield 97.6%","Less process waste between heats."),("OTIF 98%","Orders leave on commitment."),("Energy −11%","Throughput and cost move together."),("Incident-free stretches","Safety stays operational, not paperwork-only.")],
  "Summit Steel Works runs the mill from mill.summitsteel.works."
),
block(
  "vantage-mobility","Vantage Mobility",
  "Fleet command with dispatch orchestration and driver experience",
  "https://fleet.vantagemobility.io",
  ["Vantage Mobility operates a large fleet where dispatch, driver experience, and network utilization were fragmented.",
   "eForte delivered fleet.vantagemobility.io — fleet command, dispatch orchestration, and network analytics."],
  ["Agentic Orchestration","Foundational Data Layer","Velocity AI"],
  ["Fleet command center","Dispatch orchestration","Driver experience app","Network analytics"],
  "Fleet scale outpaced dispatch visibility",
  ["Jobs, ETAs, and idle time lived in separate tools while utilization lagged."],
  "A mobility operating system",
  "Vehicle telemetry and jobs feed agentic dispatch with driver-friendly workflows.",
  [("Fleet command center","Online vehicles, trips, and idle on one board.", "screen-2.png"),
   ("Dispatch orchestration","Open jobs reassign with ETA accuracy targets.", "screen-3.png"),
   ("Driver + network analytics","Safety scores and cost-per-mile guide growth.", "screen-4.png")],
  "The network moves more with less waste.",
  [("98% vehicles online","Fleet health is visible continuously."),("ETA accuracy 94%","Customers trust arrival promises."),("Utilization 81%","Idle time drops with smarter dispatch."),("Cost/mi −9%","Network analytics guide denser routing.")],
  "Vantage Mobility orchestrates the fleet from fleet.vantagemobility.io."
),
]

header = '''import type { ImpactStudyNarrative } from "./impactStudyNarrativeTypes";

const asset = (slug: string, file: string) =>
  `/assets/final-images/case-studies/${slug}/${file}`;

/** Polished overrides for enterprise case studies with unique product URLs + mockups. */
export const enterpriseCaseStudyOverrides: Record<string, ImpactStudyNarrative> = {
'''

OUT_TS.write_text(header + ",\n".join(studies) + "\n};\n", encoding="utf-8")
print(f"wrote {OUT_TS} with {len(studies)} studies")

# patch types
types = ROOT / "data" / "impactStudyNarrativeTypes.ts"
t = types.read_text(encoding="utf-8")
if "productUrl" not in t:
    t = t.replace(
        "  headline: string;\n  intro: string[];",
        "  headline: string;\n  /** Public product concept URL shown on the case study */\n  productUrl?: string;\n  intro: string[];",
    )
    types.write_text(t, encoding="utf-8")
    print("patched types")

# patch narratives import/assign
narr = ROOT / "data" / "impactStudyNarratives.ts"
n = narr.read_text(encoding="utf-8")
if "enterpriseCaseStudyOverrides" not in n:
    n = n.replace(
        'import type { ImpactStudyNarrative } from "./impactStudyNarrativeTypes";\n\nexport type { ImpactStudyNarrative } from "./impactStudyNarrativeTypes";\n',
        'import type { ImpactStudyNarrative } from "./impactStudyNarrativeTypes";\nimport { enterpriseCaseStudyOverrides } from "./enterpriseCaseStudyOverrides";\n\nexport type { ImpactStudyNarrative } from "./impactStudyNarrativeTypes";\n',
    )
    n = n.replace(
        "};\n\nexport const impactStudySlugs = Object.keys(impactStudyNarratives);",
        "};\n\nObject.assign(impactStudyNarratives, enterpriseCaseStudyOverrides);\n\nexport const impactStudySlugs = Object.keys(impactStudyNarratives);",
    )
    narr.write_text(n, encoding="utf-8")
    print("patched narratives merge")

# patch CaseStudyNarrative productUrl UI
comp = ROOT / "components" / "sections" / "case-studies" / "CaseStudyNarrative.tsx"
c = comp.read_text(encoding="utf-8")
if "content.productUrl" not in c:
    needle = '''            <div className={cn("mt-6 space-y-4", bodyMuted)}>
              {content.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>'''
    insert = '''            <div className={cn("mt-6 space-y-4", bodyMuted)}>
              {content.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            {content.productUrl ? (
              <p className="mt-6 text-[14px] text-black/70 md:text-[15px]">
                Product experience:{" "}
                <a
                  href={content.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary-pink underline-offset-4 hover:underline"
                >
                  {content.productUrl.replace(/^https?:\\/\\//, "")}
                </a>
              </p>
            ) : null}'''
    if needle in c:
        c = c.replace(needle, insert)
        comp.write_text(c, encoding="utf-8")
        print("patched CaseStudyNarrative UI")

# patch caseStudies + impactStudyImages paths
slugs = [
"global-manufacturing-corp","globaltrade-solutions","meridian-pay","altura-motors",
"anchor-point-insurance","apex-shared-services","birchwood-hospitality-group","brightwell-mutual",
"clearpath-diabetes-care","coastal-assurance-group","coastline-resorts","cobalt-digital-bank","crestline-bpo-group",
"fenwick-capital-markets","frontier-energy-partners","harborlight-recovery","ironclad-manufacturing",
"lantern-hotel-collective","meridian-outsourcing-solutions","pulsewell-fitness","ridgeline-auto-group",
"summit-steel-works","vantage-mobility"
]
cs = (ROOT / "data" / "caseStudies.ts").read_text(encoding="utf-8")
for slug in slugs:
    base = f"/assets/final-images/case-studies/{slug}"
    cs = cs.replace(f"/assets/images/case-study/webp/{slug}/image-1.webp", f"{base}/hero.png")
    cs = cs.replace(f"/assets/images/case-study/webp/{slug}/image-2.webp", f"{base}/screen-1.png")
(ROOT / "data" / "caseStudies.ts").write_text(cs, encoding="utf-8")
print("patched caseStudies paths")

img = (ROOT / "data" / "impactStudyImages.ts").read_text(encoding="utf-8")
for slug in slugs:
    base = f"/assets/final-images/case-studies/{slug}"
    entry = f'''  "{slug}": {{
    hero: "{base}/hero.png",
    product: "{base}/screen-1.png",
    alts: ["{base}/screen-2.png", "{base}/screen-3.png", "{base}/screen-4.png"],
    all: ["{base}/hero.png", "{base}/screen-1.png", "{base}/screen-2.png", "{base}/screen-3.png", "{base}/screen-4.png"],
  }},'''
    pattern = rf'  "{slug}": \{{.*?\n  \}},'
    if re.search(pattern, img, flags=re.S):
        img = re.sub(pattern, entry, img, count=1, flags=re.S)
    else:
        print("missing image map", slug)
(ROOT / "data" / "impactStudyImages.ts").write_text(img, encoding="utf-8")
print("patched impactStudyImages")
print("done")
