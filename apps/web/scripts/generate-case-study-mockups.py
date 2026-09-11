#!/usr/bin/env python3
"""Generate visually varied enterprise case-study mockups for 23 projects."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "assets" / "final-images" / "case-studies"

# composition keys used for hero + section variety
COMPOSITIONS = (
    "laptop_mobile",
    "laptop_tablet",
    "floating_card",
    "single_laptop",
    "dual_desktop",
    "stacked_focus",
    "angled_trio",
)

PROJECTS = [
    # existing 13
    dict(slug="global-manufacturing-corp", brand="Global Manufacturing Corp", short="GM", url="ops.globalmfgcorp.com", accent=(14, 116, 144), mood="industrial teal", screens=[
        ("Plant Operations Command", ["OEE 87%", "Downtime 2.1h", "Yield 98.4%", "Orders 412"], "Manufacturing"),
        ("Invoice Intelligence", ["AP Queue 128", "Auto-match 94%", "Exceptions 11", "Cost $2.30"], "Accounts Payable"),
        ("Supplier Performance", ["On-time 96%", "Quality 99.1%", "Risk Low", "Spend $4.2M"], "Supply Chain"),
        ("Production Analytics", ["Line A 92%", "Line B 88%", "Scrap 0.7%", "Shift OT 4%"], "Analytics"),
    ]),
    dict(slug="globaltrade-solutions", brand="GlobalTrade Solutions", short="GT", url="trade.globaltradesolutions.com", accent=(180, 83, 9), mood="amber trade", screens=[
        ("Trade Desk Workspace", ["Open RFQs 34", "Quotes Today 18", "Win Rate 41%", "Avg 4h"], "Trading"),
        ("Supplier Match Rankings", ["Top Fit 12", "Responded 28%", "Lead Time 9d", "Score 8.7"], "Sourcing"),
        ("Shipment Control Tower", ["In Transit 61", "At Port 9", "Delayed 3", "On Track 94%"], "Logistics"),
        ("Settlement Tracker", ["LCs Active 22", "Paid 147", "Pending 8", "Exceptions 2"], "Finance"),
    ]),
    dict(slug="meridian-pay", brand="Meridian Pay", short="MP", url="console.meridianpay.com", accent=(37, 99, 235), mood="fintech blue", screens=[
        ("Payments Risk Console", ["Txn/min 18.4k", "Fraud Hold 0.08%", "False + 1.2%", "Latency 42ms"], "Risk"),
        ("Fraud Case Workspace", ["Open Cases 64", "SLA <2h", "Auto-close 71%", "Loss ↓38%"], "Investigations"),
        ("Dispute Orchestration", ["Disputes 312", "Resolved 89%", "Chargebacks 0.3%", "Avg 6h"], "Operations"),
        ("Settlement Monitor", ["Rails 6", "Reconciled 99.6%", "Exceptions 14", "Float $2.1M"], "Settlement"),
    ]),
    dict(slug="altura-motors", brand="Altura Motors", short="AM", url="design.alturamotors.com", accent=(127, 29, 29), mood="auto crimson", screens=[
        ("Vehicle Design Hub", ["Programs 7", "Sims Running 23", "Reviews 5", "Gate R3"], "Engineering"),
        ("Simulation Orchestration", ["Aero Done", "Crash Queued", "NVH 62%", "Handoffs 0"], "Simulation"),
        ("Cross-Discipline Impact", ["Conflicts 2", "Resolved 41", "Delta -12%", "Owners 18"], "Collaboration"),
        ("Iteration Analytics", ["Cycle -31%", "Late Bugs -44%", "Reuse 58%", "TTM -3 mo"], "Analytics"),
    ]),
    dict(slug="anchor-point-insurance", brand="Anchor Point Insurance", short="AP", url="claims.anchorpointins.com", accent=(15, 118, 110), mood="teal insurance", screens=[
        ("Claims Fraud Command", ["Risk High 27", "Hold Rate 4%", "Prevented $1.8M", "Precision 93%"], "Fraud"),
        ("Investigator Case File", ["Evidence 14", "Network Hits 3", "Score 0.91", "SLA 1d"], "Investigations"),
        ("Policyholder Timeline", ["Claims 6", "Providers 4", "Flags 2", "Linked 9"], "Intelligence"),
        ("Fraud Outcomes Board", ["Caught Early 81%", "FP ↓36%", "Cycle 18h", "Recovery +22%"], "Reporting"),
    ]),
    dict(slug="apex-shared-services", brand="Apex Shared Services", short="AX", url="portal.apexshared.com", accent=(79, 70, 229), mood="indigo portal", screens=[
        ("Shared Services Portal", ["Open 482", "SLA Met 96%", "Auto 61%", "CSAT 4.6"], "Service Desk"),
        ("Request Orchestration", ["Finance 140", "HR 98", "IT 244", "Escalated 19"], "Workflow"),
        ("Approval Control Plane", ["Pending 37", "Avg 3.2h", "Policy Hits 12", "Delegated 8"], "Approvals"),
        ("BU Performance Board", ["BU Alpha A", "BU Beta B+", "Backlog -28%", "Reuse 44%"], "Analytics"),
    ]),
    dict(slug="birchwood-hospitality-group", brand="Birchwood Hospitality", short="BH", url="ops.birchwoodhotels.com", accent=(146, 64, 14), mood="warm hospitality", screens=[
        ("Property Operations Hub", ["Occ 81%", "ADR $214", "RevPAR $173", "NPS 72"], "Hotels"),
        ("Guest Journey Console", ["Arrivals 128", "VIP 14", "Requests 47", "Resolved 91%"], "Guest Experience"),
        ("Housekeeping Dispatch", ["Rooms Ready 86%", "Avg Turn 28m", "Staff 42", "Flags 3"], "Operations"),
        ("Revenue Insights", ["Pickup +9%", "Groups 22%", "F&B Mix 31%", "Forecast ±3%"], "Revenue"),
    ]),
    dict(slug="brightwell-mutual", brand="Brightwell Mutual", short="BM", url="member.brightwellmutual.com", accent=(22, 101, 52), mood="mutual green", screens=[
        ("Member Care Workspace", ["Open Cases 216", "First Contact 78%", "NPS 68", "AHT -19%"], "Service"),
        ("Benefits Guidance", ["Plans 12", "Eligible 94%", "Suggestions 41", "Accepted 63%"], "Benefits"),
        ("Claims Assist Queue", ["Simple STP 71%", "Complex 64", "Avg 1.4d", "Accuracy 97%"], "Claims"),
        ("Mutual Health Dashboard", ["Retention 93%", "Cost/Case ↓24%", "Digital 58%", "CSAT 4.5"], "Insights"),
    ]),
    dict(slug="clearpath-diabetes-care", brand="ClearPath Diabetes Care", short="CP", url="care.clearpathdiabetes.com", accent=(2, 132, 199), mood="clinical sky", screens=[
        ("Care Team Dashboard", ["Patients 1,842", "At Risk 126", "A1C ↓0.8", "Engaged 74%"], "Care"),
        ("Patient Journey View", ["CGM Sync OK", "Meds On Track", "Alerts 3", "Coach Due"], "Patient"),
        ("Clinical Workflow Board", ["Outreach 58", "Escalations 9", "Protocols 14", "Closed 81%"], "Clinical"),
        ("Population Analytics", ["Cohort A", "Adherence 82%", "ER ↓17%", "Savings $2.4M"], "Analytics"),
    ]),
    dict(slug="coastal-assurance-group", brand="Coastal Assurance", short="CA", url="hub.coastalassurance.com", accent=(3, 105, 161), mood="ocean carrier", screens=[
        ("Underwriting Workbench", ["Quotes 94", "Bind Rate 38%", "Avg 6h", "Referrals 11"], "Underwriting"),
        ("Policy Servicing Hub", ["Endorsements 47", "Renewals 312", "STP 66%", "Backlog 18"], "Servicing"),
        ("Coastal Risk Map", ["Cat Zones 9", "Exposure $410M", "Alerts 4", "Models 3"], "Risk"),
        ("Producer Performance", ["Book +12%", "Loss Ratio 58%", "Retention 91%", "NPS 70"], "Distribution"),
    ]),
    dict(slug="coastline-resorts", brand="Coastline Resorts", short="CR", url="guest.coastlineresorts.com", accent=(13, 148, 136), mood="resort teal", screens=[
        ("Resort Command Center", ["Occ 89%", "Arrivals 210", "Spa Util 76%", "F&B $182k"], "Resorts"),
        ("Guest Experience Studio", ["Preferences 1.2k", "Offers 86", "Redeem 41%", "Complaints 0.4%"], "CRM"),
        ("Staff Workflow Board", ["Tasks 164", "On Time 95%", "Cross-prop 22", "OT 3%"], "Workforce"),
        ("Portfolio Analytics", ["RevPAR +11%", "Ancillary 28%", "Loyalty 34%", "Forecast High"], "Analytics"),
    ]),
    dict(slug="cobalt-digital-bank", brand="Cobalt Digital Bank", short="CB", url="app.cobaltdigital.bank", accent=(30, 64, 175), mood="cobalt bank", screens=[
        ("Banking Control Plane", ["Active Users 2.1M", "Uptime 99.98%", "Txn/s 9.4k", "Latency 38ms"], "Platform"),
        ("Real-time Ledger View", ["Accounts 4.8M", "Balanced ✓", "Exceptions 6", "Replay 0"], "Core"),
        ("Lending Decision Hub", ["Apps Today 1,204", "Auto 63%", "Avg Score 712", "Fraud Hold 2%"], "Lending"),
        ("Compliance Observatory", ["Alerts 14", "AML Cases 9", "SAR Ready 2", "Audit Green"], "Risk"),
    ]),
    dict(slug="crestline-bpo-group", brand="Crestline BPO Group", short="CL", url="command.crestlinebpo.com", accent=(124, 58, 237), mood="violet bpo", screens=[
        ("BPO Command Center", ["Agents 1,140", "AHT 4:12", "QA 94%", "Occupancy 82%"], "Operations"),
        ("Client Program Board", ["Programs 28", "SLA Met 97%", "CSAT 4.4", "Escalations 31"], "Clients"),
        ("Workforce Orchestration", ["Shifts Live 18", "Gaps 3", "Training 42", "Attrition 11%"], "Workforce"),
        ("Quality & Insights", ["Auto QA 68%", "Coaching 19", "Defects -27%", "NPS +8"], "Quality"),
    ]),
    # new 10
    dict(slug="fenwick-capital-markets", brand="Fenwick Capital Markets", short="FC", url="desk.fenwickcapital.com", accent=(17, 24, 39), mood="markets slate", screens=[
        ("Trading Decision Desk", ["Signals 142", "Latency 18ms", "Hit Rate 61%", "PnL +2.4%"], "Trading"),
        ("Portfolio Rebalance Hub", ["Accounts 86", "Auto 74%", "Exceptions 9", "Risk OK"], "Portfolio"),
        ("Market Data Fabric", ["Feeds 28", "Fresh <1s", "Gaps 0", "Normalized ✓"], "Data"),
        ("Risk Exposure Board", ["VaR $12.4M", "Limits 3", "Breaches 0", "Desks 7"], "Risk"),
    ]),
    dict(slug="frontier-energy-partners", brand="Frontier Energy Partners", short="FE", url="grid.frontierenergy.io", accent=(234, 88, 12), mood="energy orange", screens=[
        ("Asset Health Network", ["Assets 4,820", "At Risk 37", "Uptime 99.2%", "Regions 11"], "Energy"),
        ("Failure Forecast Console", ["Predictions 64", "Precision 91%", "Lead 11d", "Saved $3.1M"], "Predictive"),
        ("Maintenance Dispatch", ["Crews 48", "ETA 2.4h", "Priority A 12", "Closed 81%"], "Field Ops"),
        ("Reliability Dashboard", ["Outages -29%", "MTTR -18%", "SAIDI ↓", "Audit Ready"], "Reliability"),
    ]),
    dict(slug="harborlight-recovery", brand="Harborlight Recovery", short="HR", url="care.harborlightrecovery.com", accent=(8, 145, 178), mood="recovery cyan", screens=[
        ("Care Coordination Hub", ["Active 312", "Admissions 18", "Discharges 14", "NPS 76"], "Recovery"),
        ("Clinical Pathway Board", ["Protocols 22", "On Track 88%", "Alerts 7", "Reviews 11"], "Clinical"),
        ("Family Portal View", ["Updates 64", "Messages 29", "Sessions 41", "Engaged 82%"], "Engagement"),
        ("Outcomes Analytics", ["Completion 71%", "Readmit ↓19%", "LOS -2.1d", "Staff Util 84%"], "Outcomes"),
    ]),
    dict(slug="ironclad-manufacturing", brand="Ironclad Manufacturing", short="IC", url="forge.ironcladmfg.com", accent=(55, 65, 81), mood="steel gray", screens=[
        ("Shop Floor Command", ["Lines 14", "OEE 91%", "WIP 238", "Defects 0.4%"], "Manufacturing"),
        ("Quality Gate Console", ["Inspections 96", "Pass 98.2%", "Holds 5", "CAPA 3"], "Quality"),
        ("Maintenance Planner", ["Work Orders 47", "PM Due 9", "MTBF ↑", "Parts OK"], "Maintenance"),
        ("Throughput Analytics", ["Cycle -12%", "Scrap -31%", "OT 5%", "On-time 97%"], "Analytics"),
    ]),
    dict(slug="lantern-hotel-collective", brand="Lantern Hotel Collective", short="LH", url="ops.lanternhotels.com", accent=(161, 98, 7), mood="lantern gold", screens=[
        ("Collective Ops Hub", ["Properties 19", "Occ 84%", "RevPAR $189", "NPS 74"], "Hotels"),
        ("Guest Preference Graph", ["Profiles 48k", "Offers 112", "Redeem 39%", "VIP 620"], "CRM"),
        ("Housekeeping Network", ["Ready 91%", "Turn 26m", "Staff 210", "Flags 4"], "Operations"),
        ("Brand Performance", ["Pickup +8%", "Ancillary 27%", "Loyalty 36%", "Forecast +"], "Revenue"),
    ]),
    dict(slug="meridian-outsourcing-solutions", brand="Meridian Outsourcing", short="MO", url="hub.meridianoutsourcing.com", accent=(67, 56, 202), mood="ops indigo", screens=[
        ("Client Delivery Hub", ["Clients 42", "SLA 98%", "Tickets 1.2k", "CSAT 4.5"], "BPO"),
        ("Process Automation Board", ["Bots 86", "Handled 64%", "Exceptions 71", "Savings 22%"], "Automation"),
        ("Workforce Control", ["Agents 980", "AHT 3:58", "Occupancy 79%", "Training 55"], "Workforce"),
        ("Quality Insights", ["Auto QA 72%", "Defects -24%", "Coaching 28", "NPS +6"], "Quality"),
    ]),
    dict(slug="pulsewell-fitness", brand="PulseWell Fitness", short="PW", url="coach.pulsewell.fit", accent=(219, 39, 119), mood="fitness pink", screens=[
        ("Member Coaching Hub", ["Active 28k", "Sessions 4.1k", "Adherence 77%", "NPS 81"], "Fitness"),
        ("Trainer Workflow Board", ["Clients 18", "Plans Due 6", "Check-ins 42", "Flags 2"], "Coaching"),
        ("Wearable Insights", ["Synced 91%", "Zones OK", "Sleep Score 78", "Alerts 9"], "Telemetry"),
        ("Studio Analytics", ["Retention 88%", "Class Fill 82%", "Upsell 14%", "Churn ↓"], "Growth"),
    ]),
    dict(slug="ridgeline-auto-group", brand="Ridgeline Auto Group", short="RA", url="drive.ridgelineauto.com", accent=(30, 58, 138), mood="dealer navy", screens=[
        ("Dealer Command Center", ["Rooftops 12", "Units 1,840", "Sold 96", "CSI 92"], "Automotive"),
        ("Service Lane Console", ["RO Open 214", "Avg Cycle 2.1d", "Parts Fill 97%", "Wait 18m"], "Service"),
        ("Sales Journey Board", ["Leads 640", "Appts 188", "Close 22%", "F&I Mix 41%"], "Sales"),
        ("Inventory Intelligence", ["Turns 6.2", "Aged 7%", "Match Score 0.84", "Cap $"], "Inventory"),
    ]),
    dict(slug="summit-steel-works", brand="Summit Steel Works", short="SS", url="mill.summitsteel.works", accent=(185, 28, 28), mood="mill red", screens=[
        ("Mill Operations Hub", ["Heat 214", "Yield 97.6%", "Orders 88", "Delay 2"], "Steel"),
        ("Order Fulfillment Board", ["Committed 61", "In Cut 24", "Ship Ready 19", "Late 1"], "Fulfillment"),
        ("Safety & Compliance", ["Incidents 0", "Audits Due 3", "Training 96%", "PPE OK"], "Safety"),
        ("Cost & Throughput", ["Cost/Ton ↓8%", "Energy -11%", "Scrap -17%", "OTIF 98%"], "Performance"),
    ]),
    dict(slug="vantage-mobility", brand="Vantage Mobility", short="VM", url="fleet.vantagemobility.io", accent=(5, 150, 105), mood="mobility green", screens=[
        ("Fleet Command Center", ["Vehicles 2,640", "Online 98%", "Trips 18k", "Idle 7%"], "Mobility"),
        ("Dispatch Orchestration", ["Open Jobs 312", "ETA Acc 94%", "Reassigns 18", "SLA 97%"], "Dispatch"),
        ("Driver Experience App", ["Score 4.7", "Routes 6", "Safety OK", "Earnings $"], "Driver"),
        ("Network Analytics", ["Utilization 81%", "Cost/Mi ↓9%", "CSAT 4.6", "CO₂ ↓"], "Analytics"),
    ]),
    dict(slug="iberian-ventures", brand="Iberian Ventures", short="IV", url="deals.iberianventures.com", accent=(26, 58, 110), mood="lisbon navy", screens=[
        ("Mandate Command Center", ["Mandates 32", "Targets 512", "Fit ≥80% 47", "Meetings 18"], "M&A"),
        ("Target Match Engine", ["Scored Today 86", "Top Fit 12", "Avg Score 0.84", "New 9"], "Matching"),
        ("Deal Presentation Studio", ["Decks Auto 41", "Ready 28", "Sent 19", "Open Rate 71%"], "Advisory"),
        ("Pipeline Analytics", ["Diligence +52%", "Admin −78%", "Time-to-Meet −40%", "Rev +37%"], "Insights"),
    ]),
    dict(
        slug="prism",
        brand="Prism",
        short="PR",
        url="app.prismforecast.com",
        accent=(114, 72, 179),
        mood="forecast violet",
        layouts=("forecast", "seasonality", "outliers", "dashboard"),
        screens=[
            ("Demand Forecast Studio", ["MAPE 6.2%", "Coverage 98%", "Horizon 12w", "SKUs 4.8k"], "Forecasting"),
            ("Seasonality Explorer", ["Yearly ✓", "Weekly ✓", "Daily ✓", "Holidays 14"], "Seasonality"),
            ("Outlier Smoothing Lab", ["Spikes 27", "Damped 91%", "Sensitivity Bal", "Changepoints Auto"], "Data Quality"),
            ("Retail Trend Board", ["Accuracy +38%", "Runs 30k+", "PWA Live", "Prophet API"], "Insights"),
        ],
    ),
    dict(
        slug="allied-insurance",
        brand="Allied Insurance",
        short="AI",
        url="claims.alliedinsurance.com",
        accent=(30, 90, 160),
        mood="claims blue",
        layouts=("claims_intake", "fraud_radar", "stp_board", "dashboard"),
        screens=[
            ("Claims Intake Studio", ["Digitized 83%", "Fields Auto 96%", "Backlog −61%", "Avg 4m"], "Intake"),
            ("Fraud Detection Radar", ["Accuracy 94%", "Flags Today 18", "Prevented $2.1M", "FP ↓"], "Risk"),
            ("STP Claims Board", ["STP 71%", "Complex 64", "Cycle 36h", "Cost −42%"], "Operations"),
            ("Policy Verify Console", ["Coverage OK", "Limits Matched", "CSAT +29%", "Open 1.2k"], "Servicing"),
        ],
    ),
]


def font(size: int, bold: bool = False):
    for path in (
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ):
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            pass
    return ImageFont.load_default()


def rr(draw, box, fill, radius=16, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def logo(draw, x, y, short, accent, size=34):
    rr(draw, (x, y, x + size, y + size), fill=accent, radius=10)
    draw.text((x + size * 0.18, y + size * 0.18), short[:2], fill=(255, 255, 255), font=font(int(size * 0.4), True))


def sparkline(draw, box, accent, seed=3):
    x0, y0, x1, y1 = box
    pts = []
    n = 20
    for i in range(n):
        t = i / (n - 1)
        wave = math.sin(t * math.pi * 1.8 + seed) * 0.32 + t * 0.5
        pts.append((x0 + (x1 - x0) * t, y1 - (y1 - y0) * (0.22 + wave * 0.55)))
    draw.line(pts, fill=accent, width=3)


def theme_for(variant: int):
    if variant % 4 == 1:
        return (15, 18, 28), (28, 32, 48), (244, 246, 255), (160, 168, 190), (10, 12, 20), (48, 54, 72)
    if variant % 4 == 2:
        return (250, 248, 244), (255, 255, 255), (28, 25, 23), (120, 113, 108), (28, 25, 23), (231, 229, 228)
    if variant % 4 == 3:
        return (241, 245, 249), (255, 255, 255), (15, 23, 42), (100, 116, 139), (30, 41, 59), (226, 232, 240)
    return (246, 247, 251), (255, 255, 255), (20, 24, 40), (110, 118, 140), (15, 18, 32), (226, 228, 236)


def draw_chrome(d, w, h, brand, short, url, accent, title, section, bg, panel, text, muted, side, card_outline, active_nav):
    rr(d, (0, 0, 220, h), fill=side, radius=0)
    logo(d, 24, 28, short, accent)
    d.text((68, 32), brand.split()[0][:12], fill=(255, 255, 255), font=font(16, True))
    d.text((68, 54), url.split(".")[0][:16], fill=(160, 168, 190), font=font(11))
    for i, label in enumerate(["Overview", "Workflows", "Analytics", "Reports", "Settings"]):
        y = 120 + i * 52
        active = i == active_nav
        if active:
            rr(d, (16, y - 8, 204, y + 32), fill=accent + (55,), radius=12)
        d.ellipse((28, y + 4, 40, y + 16), fill=accent if active else (90, 98, 120))
        d.text((52, y), label, fill=(255, 255, 255) if active else (170, 176, 196), font=font(14, active))
    rr(d, (236, 20, w - 24, 78), fill=panel, radius=14, outline=card_outline)
    d.text((256, 34), title, fill=text, font=font(22, True))
    d.text((256, 60), f"{section} · https://{url}", fill=muted, font=font(12))
    rr(d, (w - 210, 34, w - 44, 64), fill=accent, radius=16)
    d.text((w - 188, 40), "Live environment", fill=(255, 255, 255), font=font(12, True))


def layout_dashboard(d, w, h, accent, title, metrics, brand, bg, panel, text, muted, card_outline):
    card_w, gap, start_x = 270, 18, 248
    for i, metric in enumerate(metrics[:4]):
        x = start_x + i * (card_w + gap)
        rr(d, (x, 104, x + card_w, 214), fill=panel, radius=16, outline=card_outline)
        parts = metric.rsplit(" ", 1)
        label, value = (parts[0], parts[1]) if len(parts) == 2 else (metric, "")
        d.text((x + 20, 122), label, fill=muted, font=font(13))
        d.text((x + 20, 150), value, fill=text, font=font(28, True))
        d.rectangle((x + 20, 196, x + 70, 200), fill=accent)
    rr(d, (248, 236, w - 320, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((276, 258), f"{title} trends", fill=text, font=font(18, True))
    sparkline(d, (276, 340, w - 360, h - 120), accent, seed=hash(brand + title) % 9)
    for i in range(6):
        bx = 300 + i * 110
        bh = 40 + ((hash(title) + i * 17) % 120)
        rr(d, (bx, h - 160 - bh, bx + 48, h - 150), fill=accent + (140,), radius=8)
    rr(d, (w - 300, 236, w - 24, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((w - 276, 258), "Action queue", fill=text, font=font(16, True))
    for i, (k, v) in enumerate([
        ("High priority", "Review required"),
        ("Automation", "Agent completed"),
        ("Governance", "Policy checked"),
        ("Sync", "Data layer OK"),
    ]):
        y = 310 + i * 88
        rr(d, (w - 276, y, w - 48, y + 72), fill=bg, radius=12)
        d.ellipse((w - 260, y + 24, w - 244, y + 40), fill=accent)
        d.text((w - 230, y + 16), k, fill=text, font=font(14, True))
        d.text((w - 230, y + 40), v, fill=muted, font=font(12))


def layout_table(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline):
    rr(d, (248, 104, w - 24, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((276, 128), f"{title} · records", fill=text, font=font(18, True))
    headers = ["ID", "Owner", "Status", "SLA", "Updated"]
    for i, header in enumerate(headers):
        d.text((276 + i * 210, 176), header, fill=muted, font=font(13, True))
    d.line((276, 204, w - 56, 204), fill=card_outline, width=1)
    statuses = ["Open", "In review", "Automated", "Escalated", "Closed", "Queued"]
    for r in range(7):
        y = 224 + r * 72
        rr(d, (268, y - 10, w - 40, y + 52), fill=bg if r % 2 == 0 else panel, radius=10)
        d.text((276, y), f"{1000 + r * 17}", fill=text, font=font(14, True))
        d.text((486, y), f"Team {(r % 4) + 1}", fill=text, font=font(14))
        rr(d, (696, y - 2, 820, y + 28), fill=accent + (40,), radius=12)
        d.text((712, y + 2), statuses[r % len(statuses)], fill=text, font=font(12, True))
        d.text((906, y), metrics[r % len(metrics)].split()[-1][:8], fill=text, font=font(14, True))
        d.text((1116, y), f"{r + 1}h ago", fill=muted, font=font(13))


def layout_kanban(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline):
    cols = ["Intake", "In progress", "Review", "Done"]
    col_w = 270
    for c, name in enumerate(cols):
        x = 248 + c * (col_w + 18)
        rr(d, (x, 104, x + col_w, h - 40), fill=panel, radius=16, outline=card_outline)
        d.text((x + 18, 124), name, fill=text, font=font(16, True))
        rr(d, (x + col_w - 54, 122, x + col_w - 18, 146), fill=accent + (50,), radius=10)
        d.text((x + col_w - 44, 124), str(3 + c), fill=text, font=font(12, True))
        for r in range(3):
            y = 170 + r * 160
            rr(d, (x + 14, y, x + col_w - 14, y + 136), fill=bg, radius=14)
            d.text((x + 28, y + 18), f"{title.split()[0]} #{c + 1}{r}", fill=text, font=font(14, True))
            d.text((x + 28, y + 48), metrics[(c + r) % len(metrics)], fill=muted, font=font(12))
            rr(d, (x + 28, y + 90, x + 120, y + 116), fill=accent, radius=10)
            d.text((x + 40, y + 94), "Agent", fill=(255, 255, 255), font=font(12, True))


def layout_detail(d, w, h, accent, title, metrics, url, bg, panel, text, muted, card_outline):
    rr(d, (248, 104, 900, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((276, 130), f"{title} detail", fill=text, font=font(20, True))
    d.text((276, 164), f"Linked workspace · https://{url}", fill=muted, font=font(12))
    fields = [
        ("Primary metric", metrics[0]),
        ("Secondary metric", metrics[1] if len(metrics) > 1 else metrics[0]),
        ("Owner", "Operations lead"),
        ("Policy", "Supervised automation"),
        ("Next action", "Approve agent recommendation"),
    ]
    for i, (label, value) in enumerate(fields):
        y = 220 + i * 88
        d.text((276, y), label, fill=muted, font=font(13))
        rr(d, (276, y + 24, 860, y + 68), fill=bg, radius=12, outline=card_outline)
        d.text((296, y + 36), value, fill=text, font=font(16, True))
    rr(d, (930, 104, w - 24, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((958, 130), "Signals", fill=text, font=font(16, True))
    for i, metric in enumerate(metrics[:4]):
        y = 190 + i * 130
        rr(d, (954, y, w - 48, y + 108), fill=bg, radius=14)
        parts = metric.rsplit(" ", 1)
        label, value = (parts[0], parts[1]) if len(parts) == 2 else (metric, "")
        d.text((976, y + 22), label, fill=muted, font=font(13))
        d.text((976, y + 52), value, fill=text, font=font(26, True))
        d.rectangle((976, y + 90, 1040, y + 94), fill=accent)


def layout_forecast(d, w, h, accent, title, metrics, brand, bg, panel, text, muted, card_outline):
    """Prophet-style actual vs forecast with confidence band."""
    rr(d, (248, 104, w - 24, 220), fill=panel, radius=16, outline=card_outline)
    for i, metric in enumerate(metrics[:4]):
        x = 276 + i * 280
        parts = metric.rsplit(" ", 1)
        label, value = (parts[0], parts[1]) if len(parts) == 2 else (metric, "")
        d.text((x, 128), label, fill=muted, font=font(13))
        d.text((x, 156), value, fill=text, font=font(26, True))
        d.rectangle((x, 196, x + 56, 200), fill=accent)

    rr(d, (248, 244, w - 24, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((276, 268), f"{title} · actual vs forecast", fill=text, font=font(18, True))
    d.text((276, 298), "Prophet additive model · holiday + seasonality overlays", fill=muted, font=font(12))

    x0, y0, x1, y1 = 300, 360, w - 80, h - 100
    band = []
    mid = []
    actual = []
    n = 28
    seed = abs(hash(brand + title)) % 11
    for i in range(n):
        t = i / (n - 1)
        base = 0.35 + 0.28 * math.sin(t * math.pi * 2.2 + seed) + t * 0.25
        mid_y = y1 - (y1 - y0) * base
        mid.append((x0 + (x1 - x0) * t, mid_y))
        band.append((x0 + (x1 - x0) * t, mid_y - (y1 - y0) * 0.1))
        if i < int(n * 0.62):
            actual.append((x0 + (x1 - x0) * t, mid_y + (y1 - y0) * 0.03 * math.sin(i)))
    lower = [(x, y + (y1 - y0) * 0.2) for x, y in band]
    d.polygon(band + list(reversed(lower)), fill=accent + (40,))
    d.line(mid, fill=accent, width=4)
    if len(actual) > 1:
        d.line(actual, fill=(90, 95, 110), width=3)
    rr(d, (276, h - 86, 296, h - 70), fill=accent, radius=4)
    d.text((306, h - 88), "Forecast", fill=text, font=font(12))
    rr(d, (400, h - 86, 420, h - 70), fill=accent + (50,), radius=4)
    d.text((430, h - 88), "Confidence", fill=muted, font=font(12))
    d.line([(520, h - 78), (560, h - 78)], fill=(90, 95, 110), width=3)
    d.text((570, h - 88), "Actual", fill=muted, font=font(12))


def layout_seasonality(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline):
    """Three seasonality panels + holiday markers."""
    panels = [
        ("Yearly seasonality", 0),
        ("Weekly seasonality", 1),
        ("Daily + holiday effects", 2),
    ]
    for i, (label, seed) in enumerate(panels):
        x0 = 248 + i * 380
        y0 = 104
        rr(d, (x0, y0, x0 + 360, 420), fill=panel, radius=16, outline=card_outline)
        d.text((x0 + 20, y0 + 18), label, fill=text, font=font(15, True))
        sparkline(d, (x0 + 24, y0 + 80, x0 + 330, y0 + 280), accent, seed=seed + 3)
        for j in range(5):
            bx = x0 + 36 + j * 58
            bh = 30 + ((seed * 11 + j * 19) % 70)
            rr(d, (bx, y0 + 360 - bh, bx + 36, y0 + 360), fill=accent + (120,), radius=6)

    rr(d, (248, 448, w - 24, h - 40), fill=panel, radius=16, outline=card_outline)
    d.text((276, 472), f"{title} · holiday calendar impact", fill=text, font=font(16, True))
    holidays = ["New Year", "Easter", "Black Friday", "Cyber Week", "Christmas", "Local Peak"]
    for i, name in enumerate(holidays):
        x = 276 + i * 180
        rr(d, (x, 520, x + 160, 620), fill=bg, radius=12)
        d.ellipse((x + 18, 548, x + 34, 564), fill=accent)
        d.text((x + 46, 542), name, fill=text, font=font(13, True))
        d.text((x + 46, 568), metrics[i % len(metrics)].split()[-1][:8], fill=muted, font=font(12))


def layout_outliers(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline):
    """Outlier smoothing workspace."""
    rr(d, (248, 104, 920, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((276, 128), f"{title} · outlier smoothing", fill=text, font=font(18, True))
    d.text((276, 158), "Preserve real demand shifts · dampen one-off spikes", fill=muted, font=font(12))
    x0, y0, x1, y1 = 290, 220, 880, h - 120
    raw = []
    smooth = []
    n = 24
    for i in range(n):
        t = i / (n - 1)
        base = 0.4 + 0.2 * math.sin(t * math.pi * 1.6)
        spike = 0.35 if i in (7, 15) else 0
        raw.append((x0 + (x1 - x0) * t, y1 - (y1 - y0) * (base + spike)))
        smooth.append((x0 + (x1 - x0) * t, y1 - (y1 - y0) * (base + spike * 0.18)))
    d.line(raw, fill=(220, 80, 80), width=3)
    d.line(smooth, fill=accent, width=4)
    for i in (7, 15):
        x, y = raw[i]
        d.ellipse((x - 7, y - 7, x + 7, y + 7), outline=(220, 80, 80), width=2)
    d.text((300, h - 90), "Raw series", fill=(180, 70, 70), font=font(12))
    d.text((420, h - 90), "Smoothed forecast input", fill=accent, font=font(12))

    rr(d, (960, 104, w - 24, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((988, 128), "Tuning", fill=text, font=font(16, True))
    knobs = [
        ("Sensitivity", "Balanced"),
        ("Holiday weight", "High"),
        ("Missing data", "Robust"),
        ("Trend changepoints", "Auto"),
    ]
    for i, (k, v) in enumerate(knobs):
        y = 190 + i * 120
        rr(d, (984, y, w - 48, y + 96), fill=bg, radius=14)
        d.text((1008, y + 22), k, fill=muted, font=font(13))
        d.text((1008, y + 50), v, fill=text, font=font(20, True))


def layout_claims_intake(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline):
    """CV/NLP claim digitization workspace with document preview."""
    rr(d, (248, 104, 780, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((276, 128), f"{title} · document intake", fill=text, font=font(18, True))
    d.text((276, 158), "Computer vision + NLP field extraction", fill=muted, font=font(12))
    # faux document
    rr(d, (300, 200, 720, h - 90), fill=bg, radius=12, outline=card_outline)
    d.text((330, 230), "CLAIM FORM · AUTO", fill=text, font=font(14, True))
    for i, label in enumerate(["Policy #", "Loss date", "Vehicle", "Damage notes", "Photos"]):
        y = 290 + i * 70
        d.text((330, y), label, fill=muted, font=font(12))
        rr(d, (330, y + 22, 680, y + 52), fill=panel, radius=8, outline=accent + (80,))
        d.text((348, y + 30), ["AI-AL-48219", "2026-03-12", "2019 Sedan", "Front bumper + sensor", "4 attached"][i], fill=text, font=font(13, True))

    rr(d, (804, 104, w - 24, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((832, 128), "Extracted fields", fill=text, font=font(16, True))
    for i, metric in enumerate(metrics[:4]):
        y = 180 + i * 140
        rr(d, (828, y, w - 48, y + 118), fill=bg, radius=14)
        parts = metric.rsplit(" ", 1)
        label, value = (parts[0], parts[1]) if len(parts) == 2 else (metric, "")
        d.text((852, y + 28), label, fill=muted, font=font(13))
        d.text((852, y + 58), value, fill=text, font=font(24, True))
        d.rectangle((852, y + 96, 920, y + 100), fill=accent)


def layout_fraud_radar(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline):
    """Fraud pattern radar with risk rings and case list."""
    rr(d, (248, 104, 980, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((276, 128), f"{title} · fraud radar", fill=text, font=font(18, True))
    d.text((276, 158), "Pattern recognition across claims network", fill=muted, font=font(12))
    cx, cy, r = 580, 520, 220
    for i, rad in enumerate((r, int(r * 0.72), int(r * 0.45))):
        d.ellipse((cx - rad, cy - rad, cx + rad, cy + rad), outline=accent + (90 - i * 20,), width=2)
    # nodes
    for i in range(10):
        ang = i * (math.pi * 2 / 10)
        nx = cx + int(math.cos(ang) * (90 + (i % 3) * 45))
        ny = cy + int(math.sin(ang) * (90 + (i % 3) * 45))
        color = (220, 70, 70) if i in (2, 7) else accent
        d.ellipse((nx - 10, ny - 10, nx + 10, ny + 10), fill=color)
        d.line([(cx, cy), (nx, ny)], fill=card_outline, width=1)
    d.ellipse((cx - 16, cy - 16, cx + 16, cy + 16), fill=accent)
    d.text((cx - 28, cy + 30), "Risk hub", fill=text, font=font(12, True))

    rr(d, (1004, 104, w - 24, h - 40), fill=panel, radius=18, outline=card_outline)
    d.text((1032, 128), "Flagged cases", fill=text, font=font(16, True))
    rows = [
        ("CLM-2041", "High", "0.94"),
        ("CLM-1988", "Med", "0.71"),
        ("CLM-2110", "High", "0.91"),
        ("CLM-1872", "Low", "0.32"),
        ("CLM-2204", "Med", "0.68"),
    ]
    for i, (cid, risk, score) in enumerate(rows):
        y = 190 + i * 110
        rr(d, (1028, y, w - 48, y + 90), fill=bg, radius=12)
        d.text((1052, y + 22), cid, fill=text, font=font(14, True))
        d.text((1052, y + 50), f"Risk {risk} · score {score}", fill=muted, font=font(12))
        fill = (220, 70, 70) if risk == "High" else accent
        rr(d, (w - 140, y + 28, w - 70, y + 58), fill=fill, radius=10)
        d.text((w - 128, y + 34), risk, fill=(255, 255, 255), font=font(12, True))


def layout_stp_board(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline):
    """Straight-through processing lanes for claims."""
    for i, metric in enumerate(metrics[:4]):
        x = 248 + i * 280
        rr(d, (x, 104, x + 260, 200), fill=panel, radius=14, outline=card_outline)
        parts = metric.rsplit(" ", 1)
        label, value = (parts[0], parts[1]) if len(parts) == 2 else (metric, "")
        d.text((x + 20, 122), label, fill=muted, font=font(13))
        d.text((x + 20, 150), value, fill=text, font=font(26, True))

    lanes = ["Intake", "Auto-verify", "STP settle", "Adjuster review"]
    for c, name in enumerate(lanes):
        x = 248 + c * 280
        rr(d, (x, 230, x + 260, h - 40), fill=panel, radius=16, outline=card_outline)
        d.text((x + 18, 250), name, fill=text, font=font(15, True))
        rr(d, (x + 180, 248, x + 236, 274), fill=accent + (50,), radius=10)
        d.text((x + 192, 250), str(8 + c * 3), fill=text, font=font(12, True))
        for r in range(3):
            y = 300 + r * 150
            rr(d, (x + 14, y, x + 246, y + 128), fill=bg, radius=12)
            d.text((x + 28, y + 18), f"Claim #{1200 + c * 10 + r}", fill=text, font=font(13, True))
            d.text((x + 28, y + 48), ["Auto", "Home", "Commercial"][r], fill=muted, font=font(12))
            rr(d, (x + 28, y + 84, x + 140, y + 110), fill=accent, radius=10)
            d.text((x + 40, y + 88), "Route", fill=(255, 255, 255), font=font(12, True))


def ui_screen(brand, short, url, accent, title, metrics, section, variant=0, layout: str | None = None) -> Image.Image:
    w, h = 1440, 900
    bg, panel, text, muted, side, card_outline = theme_for(variant)
    img = Image.new("RGB", (w, h), bg)
    d = ImageDraw.Draw(img, "RGBA")
    draw_chrome(d, w, h, brand, short, url, accent, title, section, bg, panel, text, muted, side, card_outline, variant % 5)

    mode = layout or ("dashboard", "table", "kanban", "detail")[variant % 4]
    if mode == "table":
        layout_table(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline)
    elif mode == "kanban":
        layout_kanban(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline)
    elif mode == "detail":
        layout_detail(d, w, h, accent, title, metrics, url, bg, panel, text, muted, card_outline)
    elif mode == "forecast":
        layout_forecast(d, w, h, accent, title, metrics, brand, bg, panel, text, muted, card_outline)
    elif mode == "seasonality":
        layout_seasonality(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline)
    elif mode == "outliers":
        layout_outliers(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline)
    elif mode == "claims_intake":
        layout_claims_intake(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline)
    elif mode == "fraud_radar":
        layout_fraud_radar(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline)
    elif mode == "stp_board":
        layout_stp_board(d, w, h, accent, title, metrics, bg, panel, text, muted, card_outline)
    else:
        layout_dashboard(d, w, h, accent, title, metrics, brand, bg, panel, text, muted, card_outline)

    rr(d, (248, h - 28, w - 24, h - 8), fill=card_outline, radius=8)
    d.text((270, h - 26), f"https://{url}", fill=muted, font=font(11))
    return img


def device_bezel(img: Image.Image, pad=14, radius=26, color=(24, 28, 40)) -> Image.Image:
    w, h = img.size
    canvas = Image.new("RGBA", (w + pad * 2, h + pad * 2), (0, 0, 0, 0))
    d = ImageDraw.Draw(canvas)
    rr(d, (0, 0, w + pad * 2, h + pad * 2), fill=color, radius=radius)
    canvas.paste(img, (pad, pad))
    return canvas


def soft_shadow(base: Image.Image, xy, content: Image.Image, blur=18, opacity=120):
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    s = Image.new("RGBA", content.size, (0, 0, 0, opacity))
    shadow.paste(s, xy)
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    out = Image.alpha_composite(base, shadow)
    if content.mode != "RGBA":
        content = content.convert("RGBA")
    out.paste(content, xy, content)
    return out


LAYOUTS = ("dashboard", "table", "kanban", "detail")


def compose(project, screens, style: str, seed: int, layout_offset: int = 0) -> Image.Image:
    brand, short, url, accent = project["brand"], project["short"], project["url"], project["accent"]
    W, H = 1600, 1000
    canvas = Image.new("RGBA", (W, H), (8, 10, 18, 255))
    d = ImageDraw.Draw(canvas, "RGBA")

    # unique ambient color wash
    for r, a, ox, oy in ((480, 45, 0, 0), (300, 60, 200, 80), (240, 40, -180, 120)):
        glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        gd = ImageDraw.Draw(glow)
        cx, cy = W // 2 + ox + (seed % 7) * 12, H // 2 + oy
        gd.ellipse((cx - r, cy - r // 2, cx + r, cy + r // 2), fill=accent + (a,))
        canvas = Image.alpha_composite(canvas, glow)

    layout_set = project.get("layouts") or LAYOUTS

    def make(idx: int):
        layout = layout_set[(layout_offset + idx) % len(layout_set)]
        return ui_screen(
            brand, short, url, accent, *screens[idx], variant=seed + idx, layout=layout
        )

    s0 = make(0)
    s1 = make(1)
    s2 = make(2)
    s3 = make(3)

    if style == "laptop_mobile":
        main = device_bezel(s0.resize((1120, 700)))
        phone = device_bezel(s1.resize((300, 620)), pad=10, radius=36)
        canvas = soft_shadow(canvas, (80, 140), main)
        canvas = soft_shadow(canvas, (1220, 220), phone, blur=14)
    elif style == "laptop_tablet":
        main = device_bezel(s0.resize((1080, 675)))
        tab = device_bezel(s2.resize((560, 400)), pad=12, radius=24)
        canvas = soft_shadow(canvas, (60, 120), main)
        canvas = soft_shadow(canvas, (980, 520), tab)
    elif style == "floating_card":
        main = device_bezel(s0.resize((1180, 720)))
        card = device_bezel(s1.crop((240, 100, 1180, 520)).resize((640, 300)), pad=10, radius=20)
        canvas = soft_shadow(canvas, (100, 150), main)
        canvas = soft_shadow(canvas, (860, 90), card, blur=22, opacity=140)
    elif style == "single_laptop":
        main = device_bezel(s0.resize((1280, 800)))
        canvas = soft_shadow(canvas, ((W - main.width) // 2, 120), main, blur=24)
    elif style == "dual_desktop":
        left = device_bezel(s0.resize((740, 520)))
        right = device_bezel(s3.resize((740, 520)))
        canvas = soft_shadow(canvas, (40, 220), left)
        canvas = soft_shadow(canvas, (820, 220), right)
    elif style == "stacked_focus":
        main = device_bezel(s0.resize((1100, 680)))
        focus = device_bezel(s2.crop((250, 230, 1100, 760)).resize((520, 340)), pad=12, radius=18)
        canvas = soft_shadow(canvas, (70, 160), main)
        canvas = soft_shadow(canvas, (980, 520), focus, blur=16)
    else:  # angled_trio
        main = device_bezel(s0.resize((1040, 650)))
        a = device_bezel(s1.resize((460, 300)), pad=10, radius=18)
        b = device_bezel(s2.resize((420, 280)), pad=10, radius=18)
        canvas = soft_shadow(canvas, (120, 110), main)
        canvas = soft_shadow(canvas, (40, 640), a)
        canvas = soft_shadow(canvas, (1080, 560), b)

    d = ImageDraw.Draw(canvas)
    logo(d, 48, 36, short, accent, 40)
    d.text((104, 40), brand, fill=(255, 255, 255), font=font(28, True))
    d.text((104, 78), f"Product concept  ·  https://{url}", fill=(170, 178, 200), font=font(14))
    return canvas.convert("RGB")


def main(only: str | None = None):
    OUT.mkdir(parents=True, exist_ok=True)
    for i, project in enumerate(PROJECTS):
        if only and project["slug"] != only:
            continue
        folder = OUT / project["slug"]
        folder.mkdir(parents=True, exist_ok=True)
        screens = project["screens"]
        hero_style = COMPOSITIONS[i % len(COMPOSITIONS)]
        # Hero = unique composition emphasizing screen 0 dashboard
        hero = compose(project, screens, hero_style, seed=i * 17, layout_offset=0)
        hero.save(folder / "hero.png", optimize=True)

        # Each section image: different composition + primary UI layout
        for idx in range(4):
            style = COMPOSITIONS[(i + idx + 1) % len(COMPOSITIONS)]
            rotated = screens[idx:] + screens[:idx]
            img = compose(
                project,
                rotated,
                style,
                seed=i * 31 + idx * 7 + 3,
                layout_offset=idx,
            )
            img.save(folder / f"screen-{idx + 1}.png", optimize=True)
        print(f"{project['slug']} ({hero_style})")


if __name__ == "__main__":
    import sys

    only = None
    if len(sys.argv) > 1 and sys.argv[1].startswith("--only="):
        only = sys.argv[1].split("=", 1)[1]
    main(only=only)
