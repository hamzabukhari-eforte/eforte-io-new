#!/usr/bin/env python3
"""Generate Product Design Success Stories mockups (laptop+phone+floating cards).

These are intentionally different from case-study detail mockups.
Output: public/assets/final-images/capabilities/product-design/success-stories/{slug}.png
"""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "assets" / "final-images" / "capabilities" / "product-design" / "success-stories"

# Each story: unique accent, UI concept, laptop title, phone title, float cards
STORIES = [
    dict(
        slug="global-manufacturing-corp",
        brand="Global Manufacturing Corp",
        short="GM",
        accent=(14, 116, 144),
        concept="plant",
        laptop=("Plant Throughput Desk", ["OEE live", "Lines online", "Scrap rate", "Shift handoff"]),
        phone=("Floor Alert", ["Line B down 12m", "Technician en route", "Spare kit ready"]),
        floats=[("Invoice match", "94% auto"), ("Supplier risk", "Low"), ("Early-pay", "93%")],
    ),
    dict(
        slug="globaltrade-solutions",
        brand="GlobalTrade Solutions",
        short="GT",
        accent=(180, 83, 9),
        concept="trade",
        laptop=("Trade Quote Console", ["Open RFQs", "Win rate", "Avg quote time", "Suppliers"]),
        phone=("Shipment Pulse", ["In transit 61", "Port hold 3", "ETA updated"]),
        floats=[("LC status", "Active"), ("Best bid", "$412/t"), ("Docs ready", "Yes")],
    ),
    dict(
        slug="meridian-pay",
        brand="Meridian Pay",
        short="MP",
        accent=(37, 99, 235),
        concept="payments",
        laptop=("Payments Risk Desk", ["Txn/min", "Fraud hold", "False +", "Latency"]),
        phone=("Pay Confirm", ["Rs 4,250 paid", "Merchant OK", "Receipt saved"]),
        floats=[("Dispute", "Auto-close"), ("Rail sync", "6 live"), ("Score", "0.08%")],
    ),
    dict(
        slug="altura-motors",
        brand="Altura Motors",
        short="AM",
        accent=(127, 29, 29),
        concept="auto_eng",
        laptop=("Design Gate Board", ["Programs", "Sims running", "Gate R3", "Conflicts"]),
        phone=("Sim Notify", ["Aero complete", "Crash queued", "NVH 62%"]),
        floats=[("Reuse", "58%"), ("TTM", "-3 mo"), ("Late bugs", "-44%")],
    ),
    dict(
        slug="anchor-point-insurance",
        brand="Anchor Point Insurance",
        short="AP",
        accent=(15, 118, 110),
        concept="fraud_claims",
        laptop=("Claims Fraud Desk", ["Risk high", "Hold rate", "Prevented $", "Precision"]),
        phone=("Case Packet", ["Evidence 14", "Score 0.91", "SLA 1d"]),
        floats=[("Network hit", "3"), ("Caught early", "81%"), ("Cycle", "18h")],
    ),
    dict(
        slug="apex-shared-services",
        brand="Apex Shared Services",
        short="AX",
        accent=(79, 70, 229),
        concept="portal",
        laptop=("Shared Services Hub", ["Open tickets", "SLA met", "Auto rate", "CSAT"]),
        phone=("Request Status", ["Finance #140", "Approved", "ETA 2h"]),
        floats=[("Escalated", "19"), ("Delegated", "8"), ("Backlog", "-28%")],
    ),
    dict(
        slug="birchwood-hospitality-group",
        brand="Birchwood Hospitality",
        short="BH",
        accent=(146, 64, 14),
        concept="hotel",
        laptop=("Property Ops Desk", ["Occupancy", "ADR", "RevPAR", "NPS"]),
        phone=("Guest Request", ["VIP suite", "Late checkout", "Spa booked"]),
        floats=[("Rooms ready", "86%"), ("Turn time", "28m"), ("Pickup", "+9%")],
    ),
    dict(
        slug="brightwell-mutual",
        brand="Brightwell Mutual",
        short="BM",
        accent=(22, 101, 52),
        concept="member_care",
        laptop=("Member Care Desk", ["Open cases", "First contact", "NPS", "AHT"]),
        phone=("Benefits Tip", ["Plan fit 94%", "Save $180/yr", "Accept"]),
        floats=[("STP claims", "71%"), ("Digital", "58%"), ("Retention", "93%")],
    ),
    dict(
        slug="clearpath-diabetes-care",
        brand="ClearPath Diabetes Care",
        short="CP",
        accent=(2, 132, 199),
        concept="health",
        laptop=("Care Team Board", ["Patients", "At risk", "A1C delta", "Engaged"]),
        phone=("CGM Sync", ["Glucose OK", "Meds on track", "Coach due"]),
        floats=[("Outreach", "58"), ("ER visits", "-17%"), ("Savings", "$2.4M")],
    ),
    dict(
        slug="coastal-assurance-group",
        brand="Coastal Assurance",
        short="CA",
        accent=(3, 105, 161),
        concept="underwriting",
        laptop=("Underwriting Bench", ["Quotes", "Bind rate", "Avg hours", "Referrals"]),
        phone=("Cat Alert", ["Zone 4", "Exposure $", "Model 3"]),
        floats=[("STP renew", "66%"), ("Loss ratio", "58%"), ("Book", "+12%")],
    ),
    dict(
        slug="coastline-resorts",
        brand="Coastline Resorts",
        short="CR",
        accent=(13, 148, 136),
        concept="resort",
        laptop=("Resort Command", ["Occupancy", "Arrivals", "Spa util", "F&B"]),
        phone=("Offer Redeem", ["Sunset dinner", "41% redeem", "VIP"]),
        floats=[("RevPAR", "+11%"), ("Loyalty", "34%"), ("Tasks OT", "95%")],
    ),
    dict(
        slug="cobalt-digital-bank",
        brand="Cobalt Digital Bank",
        short="CB",
        accent=(30, 64, 175),
        concept="bank",
        laptop=("Banking Control Plane", ["Active users", "Uptime", "Txn/s", "Latency"]),
        phone=("Move Money", ["Send $250", "Saved 2s", "Done"]),
        floats=[("AML cases", "9"), ("SAR ready", "2"), ("Audit", "Green")],
    ),
    dict(
        slug="crestline-bpo-group",
        brand="Crestline BPO Group",
        short="CL",
        accent=(124, 58, 237),
        concept="bpo",
        laptop=("BPO Command Floor", ["Agents", "AHT", "QA", "Occupancy"]),
        phone=("Coach Cue", ["Defect pattern", "Session 19", "Join"]),
        floats=[("SLA met", "97%"), ("Auto QA", "68%"), ("NPS", "+8")],
    ),
    dict(
        slug="fenwick-capital-markets",
        brand="Fenwick Capital Markets",
        short="FC",
        accent=(17, 24, 39),
        concept="markets",
        laptop=("Trading Decision Desk", ["Signals", "Latency", "Hit rate", "PnL"]),
        phone=("Alert Pulse", ["Signal +2.1%", "Desk 3", "Act"]),
        floats=[("VaR", "$12.4M"), ("Breaches", "0"), ("Auto rebal", "74%")],
    ),
    dict(
        slug="frontier-energy-partners",
        brand="Frontier Energy Partners",
        short="FE",
        accent=(234, 88, 12),
        concept="energy",
        laptop=("Asset Health Map", ["Assets", "At risk", "Uptime", "Regions"]),
        phone=("Crew Dispatch", ["Priority A", "ETA 2.4h", "Parts OK"]),
        floats=[("Lead time", "11d"), ("Saved", "$3.1M"), ("Outages", "-29%")],
    ),
    dict(
        slug="harborlight-recovery",
        brand="Harborlight Recovery",
        short="HR",
        accent=(8, 145, 178),
        concept="recovery",
        laptop=("Care Coordination", ["Active", "Admissions", "Discharges", "NPS"]),
        phone=("Family Update", ["Session done", "Next Thu", "Secure"]),
        floats=[("On track", "88%"), ("Readmit", "-19%"), ("LOS", "-2.1d")],
    ),
    dict(
        slug="ironclad-manufacturing",
        brand="Ironclad Manufacturing",
        short="IC",
        accent=(55, 65, 81),
        concept="quality",
        laptop=("Shop Floor Quality", ["Lines", "OEE", "WIP", "Defects"]),
        phone=("Hold Alert", ["Gate 3 hold", "CAPA open", "Inspect"]),
        floats=[("Pass rate", "98.2%"), ("Scrap", "-31%"), ("On-time", "97%")],
    ),
    dict(
        slug="lantern-hotel-collective",
        brand="Lantern Hotel Collective",
        short="LH",
        accent=(161, 98, 7),
        concept="hotel_brand",
        laptop=("Collective Ops Hub", ["Properties", "Occ", "RevPAR", "NPS"]),
        phone=("Preference Match", ["VIP 620", "Offer ready", "Redeem"]),
        floats=[("Turn", "26m"), ("Loyalty", "36%"), ("Pickup", "+8%")],
    ),
    dict(
        slug="meridian-outsourcing-solutions",
        brand="Meridian Outsourcing",
        short="MO",
        accent=(67, 56, 202),
        concept="outsourcing",
        laptop=("Client Delivery Hub", ["Clients", "SLA", "Tickets", "CSAT"]),
        phone=("Bot Exception", ["Queue 71", "Needs review", "Assign"]),
        floats=[("Bots", "86"), ("Handled", "64%"), ("Savings", "22%")],
    ),
    dict(
        slug="pulsewell-fitness",
        brand="PulseWell Fitness",
        short="PW",
        accent=(219, 39, 119),
        concept="fitness",
        laptop=("Member Coaching Hub", ["Active", "Sessions", "Adherence", "NPS"]),
        phone=("Check-in", ["Zones OK", "Sleep 78", "Plan due"]),
        floats=[("Retention", "88%"), ("Class fill", "82%"), ("Churn", "↓")],
    ),
    dict(
        slug="ridgeline-auto-group",
        brand="Ridgeline Auto Group",
        short="RA",
        accent=(30, 58, 138),
        concept="dealer",
        laptop=("Dealer Command", ["Rooftops", "Units", "Sold today", "CSI"]),
        phone=("Service Lane", ["RO open 214", "Wait 18m", "Parts 97%"]),
        floats=[("Close rate", "22%"), ("Turns", "6.2"), ("Aged", "7%")],
    ),
    dict(
        slug="summit-steel-works",
        brand="Summit Steel Works",
        short="SS",
        accent=(185, 28, 28),
        concept="steel",
        laptop=("Mill Operations Hub", ["Heat", "Yield", "Orders", "Delay"]),
        phone=("Ship Ready", ["Lot 19 ready", "Truck bay 2", "Confirm"]),
        floats=[("Cost/ton", "-8%"), ("Energy", "-11%"), ("OTIF", "98%")],
    ),
    dict(
        slug="vantage-mobility",
        brand="Vantage Mobility",
        short="VM",
        accent=(5, 150, 105),
        concept="fleet",
        laptop=("Fleet Command", ["Vehicles", "Online", "Trips", "Idle"]),
        phone=("Next Job", ["Pickup 8:40", "ETA Acc 94%", "Accept"]),
        floats=[("Utilization", "81%"), ("Cost/mi", "-9%"), ("CO₂", "↓")],
    ),
    dict(
        slug="allied-insurance",
        brand="Allied Insurance",
        short="AI",
        accent=(30, 90, 160),
        concept="claims",
        laptop=("Claims Intake Studio", ["Digitized", "Fields auto", "Backlog", "Avg"]),
        phone=("Claim Filed", ["Photo OCR OK", "Policy matched", "STP queued"]),
        floats=[("Cycle", "36h"), ("Fraud acc", "94%"), ("Cost/claim", "-42%")],
    ),
    dict(
        slug="prism",
        brand="Prism",
        short="PR",
        accent=(114, 72, 179),
        concept="forecast",
        laptop=("Demand Forecast Studio", ["MAPE", "Coverage", "Horizon", "SKUs"]),
        phone=("Trend Alert", ["Holiday spike", "+18% demand", "Adjust"]),
        floats=[("Accuracy", "+38%"), ("Runs", "30k+"), ("Prophet", "Live")],
    ),
    dict(
        slug="iberian-ventures",
        brand="Iberian Ventures",
        short="IV",
        accent=(26, 58, 110),
        concept="manda",
        laptop=("Mandate Command", ["Mandates", "Targets", "Fit ≥80%", "Meetings"]),
        phone=("Match Ready", ["Top fit 12", "Deck auto", "Schedule"]),
        floats=[("Admin", "-78%"), ("Matches", "3.2x"), ("Rev", "+37%")],
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


def rr(draw, box, fill, radius=14, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def logo(draw, x, y, short, accent, size=36):
    rr(draw, (x, y, x + size, y + size), fill=accent, radius=10)
    draw.text((x + size * 0.18, y + size * 0.18), short[:2], fill=(255, 255, 255), font=font(int(size * 0.4), True))


def spark(draw, box, accent, seed=2, width=3):
    x0, y0, x1, y1 = box
    pts = []
    n = 18
    for i in range(n):
        t = i / (n - 1)
        wave = math.sin(t * math.pi * 1.7 + seed) * 0.3 + t * 0.45
        pts.append((x0 + (x1 - x0) * t, y1 - (y1 - y0) * (0.2 + wave * 0.55)))
    draw.line(pts, fill=accent, width=width)


def bars(draw, box, accent, n=6, seed=1):
    x0, y0, x1, y1 = box
    w = (x1 - x0) / n
    for i in range(n):
        h = 20 + ((seed * 13 + i * 19) % int(y1 - y0 - 10))
        bx = x0 + i * w + 4
        rr(draw, (bx, y1 - h, bx + w - 10, y1), fill=accent + (150,), radius=5)


def laptop_ui(story) -> Image.Image:
    """Unique desktop UI per concept — not the case-study dashboard chrome."""
    w, h = 1280, 800
    accent = story["accent"]
    concept = story["concept"]
    title, metrics = story["laptop"]
    short = story["short"]

    # concept-driven backgrounds
    if concept in ("bank", "markets", "payments", "energy", "quality", "steel", "plant"):
        bg, side, panel, text, muted = (18, 22, 34), (10, 12, 20), (28, 34, 50), (240, 244, 255), (150, 160, 180)
        card = (40, 48, 66)
    elif concept in ("hotel", "resort", "hotel_brand", "fitness", "health", "recovery"):
        bg, side, panel, text, muted = (252, 250, 247), (32, 28, 26), (255, 255, 255), (28, 25, 23), (120, 113, 108)
        card = (231, 229, 228)
    else:
        bg, side, panel, text, muted = (245, 247, 252), (20, 28, 48), (255, 255, 255), (15, 23, 42), (100, 116, 139)
        card = (226, 232, 240)

    img = Image.new("RGB", (w, h), bg)
    d = ImageDraw.Draw(img, "RGBA")
    rr(d, (0, 0, 200, h), fill=side, radius=0)
    logo(d, 20, 24, short, accent, 34)
    d.text((64, 28), story["brand"].split()[0][:14], fill=(255, 255, 255), font=font(14, True))

    nav = {
        "plant": ["Throughput", "Suppliers", "AP Match", "Alerts"],
        "trade": ["Quotes", "Shipments", "LCs", "Suppliers"],
        "payments": ["Risk", "Disputes", "Rails", "Merchants"],
        "auto_eng": ["Programs", "Sims", "Gates", "Impact"],
        "fraud_claims": ["Cases", "Network", "Evidence", "Outcomes"],
        "portal": ["Requests", "Approvals", "BU Score", "Catalog"],
        "hotel": ["Properties", "Guests", "Housekeeping", "Revenue"],
        "member_care": ["Members", "Benefits", "Claims", "Insights"],
        "health": ["Patients", "Journeys", "Protocols", "Cohorts"],
        "underwriting": ["Quotes", "Bind", "Cat Map", "Producers"],
        "resort": ["Resorts", "Offers", "Staff", "Ancillary"],
        "bank": ["Accounts", "Lending", "Compliance", "Ledger"],
        "bpo": ["Floor", "Programs", "Workforce", "QA"],
        "markets": ["Signals", "Books", "Risk", "Feeds"],
        "energy": ["Assets", "Forecast", "Crews", "Reliability"],
        "recovery": ["Census", "Pathways", "Family", "Outcomes"],
        "quality": ["Lines", "Gates", "Maintenance", "Yield"],
        "hotel_brand": ["Collective", "Prefs", "HK Net", "Brand"],
        "outsourcing": ["Clients", "Bots", "Agents", "Quality"],
        "fitness": ["Members", "Trainers", "Wearables", "Studios"],
        "dealer": ["Rooftops", "Service", "Sales", "Inventory"],
        "steel": ["Heats", "Orders", "Safety", "Cost"],
        "fleet": ["Fleet", "Dispatch", "Drivers", "Network"],
        "claims": ["Intake", "Fraud", "STP", "Policies"],
        "forecast": ["Forecast", "Seasonality", "Outliers", "Board"],
        "manda": ["Mandates", "Matches", "Decks", "Pipeline"],
    }.get(concept, ["Overview", "Work", "Analytics", "Settings"])

    for i, label in enumerate(nav):
        y = 100 + i * 56
        active = i == 0
        if active:
            rr(d, (12, y - 8, 188, y + 32), fill=accent + (60,), radius=10)
        d.text((28, y), label, fill=(255, 255, 255) if active else (170, 176, 196), font=font(13, active))

    # top bar
    rr(d, (216, 16, w - 16, 72), fill=panel, radius=12, outline=card)
    d.text((236, 28), title, fill=text, font=font(20, True))
    rr(d, (w - 180, 28, w - 32, 58), fill=accent, radius=14)
    d.text((w - 160, 34), "Live desk", fill=(255, 255, 255), font=font(12, True))

    # concept-specific main canvas
    if concept in ("forecast", "markets", "energy", "plant", "steel"):
        # big chart focus
        for i, m in enumerate(metrics[:4]):
            x = 230 + i * 250
            rr(d, (x, 96, x + 230, 190), fill=panel, radius=12, outline=card)
            parts = m.rsplit(" ", 1) if " " in m else (m, "")
            # metrics are labels only in laptop tuple - use seed values
            vals = ["87%", "412", "0.7%", "94%"]
            d.text((x + 16, 112), m, fill=muted, font=font(12))
            d.text((x + 16, 140), vals[i], fill=text, font=font(24, True))
        rr(d, (230, 214, w - 24, h - 24), fill=panel, radius=16, outline=card)
        d.text((254, 236), f"{title} · live series", fill=text, font=font(16, True))
        spark(d, (254, 300, w - 80, h - 100), accent, seed=hash(concept) % 9, width=4)
        bars(d, (254, h - 180, w - 120, h - 80), accent, n=8, seed=3)
    elif concept in ("claims", "fraud_claims", "health", "recovery"):
        # form + list split
        rr(d, (230, 96, 820, h - 24), fill=panel, radius=16, outline=card)
        d.text((254, 120), "Active work queue", fill=text, font=font(16, True))
        for i, m in enumerate(metrics):
            y = 170 + i * 120
            rr(d, (254, y, 780, y + 96), fill=bg, radius=12)
            d.text((278, y + 22), m, fill=text, font=font(15, True))
            d.text((278, y + 54), "Priority lane · agent assisted", fill=muted, font=font(12))
            rr(d, (640, y + 28, 750, y + 60), fill=accent, radius=10)
            d.text((660, y + 34), "Open", fill=(255, 255, 255), font=font(12, True))
        rr(d, (844, 96, w - 24, h - 24), fill=panel, radius=16, outline=card)
        d.text((868, 120), "Signals", fill=text, font=font(15, True))
        for i, (a, b) in enumerate(story["floats"]):
            y = 180 + i * 160
            rr(d, (868, y, w - 48, y + 130), fill=bg, radius=12)
            d.text((892, y + 28), a, fill=muted, font=font(12))
            d.text((892, y + 60), b, fill=text, font=font(22, True))
    elif concept in ("hotel", "resort", "hotel_brand", "fitness", "dealer"):
        # mosaic cards
        for i, m in enumerate(metrics):
            x = 230 + (i % 2) * 500
            y = 96 + (i // 2) * 330
            rr(d, (x, y, x + 470, y + 300), fill=panel, radius=16, outline=card)
            d.text((x + 24, y + 24), m, fill=muted, font=font(13))
            d.text((x + 24, y + 56), ["81%", "$214", "$173", "72"][i % 4], fill=text, font=font(36, True))
            spark(d, (x + 24, y + 130, x + 430, y + 260), accent, seed=i + 2)
    elif concept in ("bpo", "outsourcing", "portal", "member_care"):
        # table-ish
        rr(d, (230, 96, w - 24, h - 24), fill=panel, radius=16, outline=card)
        d.text((254, 120), title, fill=text, font=font(16, True))
        headers = ["ID", "Owner", "Status", "SLA"]
        for i, hd in enumerate(headers):
            d.text((270 + i * 240, 170), hd, fill=muted, font=font(12, True))
        statuses = ["Open", "Auto", "Review", "Done", "Queued", "Escalated"]
        for r in range(6):
            y = 210 + r * 80
            rr(d, (250, y, w - 48, y + 64), fill=bg if r % 2 == 0 else panel, radius=10)
            d.text((270, y + 20), f"{2000 + r * 11}", fill=text, font=font(13, True))
            d.text((510, y + 20), f"Team {(r % 3) + 1}", fill=text, font=font(13))
            rr(d, (740, y + 14, 860, y + 46), fill=accent + (40,), radius=10)
            d.text((760, y + 20), statuses[r], fill=text, font=font(12, True))
            d.text((980, y + 20), f"{(r + 1) * 2}h", fill=muted, font=font(13))
    elif concept in ("trade", "manda", "underwriting", "auto_eng"):
        # kanban light
        cols = metrics if len(metrics) == 4 else ["Intake", "Score", "Review", "Done"]
        for c, name in enumerate(cols):
            x = 230 + c * 255
            rr(d, (x, 96, x + 240, h - 24), fill=panel, radius=14, outline=card)
            d.text((x + 16, 116), name, fill=text, font=font(14, True))
            for r in range(3):
                y = 170 + r * 170
                rr(d, (x + 12, y, x + 228, y + 140), fill=bg, radius=12)
                d.text((x + 24, y + 20), f"Item {c + 1}{r}", fill=text, font=font(13, True))
                d.text((x + 24, y + 52), "Agent assisted", fill=muted, font=font(11))
                rr(d, (x + 24, y + 90, x + 120, y + 116), fill=accent, radius=8)
                d.text((x + 36, y + 94), "Open", fill=(255, 255, 255), font=font(11, True))
    elif concept in ("payments", "bank"):
        # wallet + stats
        for i, m in enumerate(metrics):
            x = 230 + i * 250
            rr(d, (x, 96, x + 230, 210), fill=panel, radius=14, outline=card)
            d.text((x + 18, 116), m, fill=muted, font=font(12))
            d.text((x + 18, 150), ["18.4k", "0.08%", "1.2%", "42ms"][i], fill=text, font=font(28, True))
        rr(d, (230, 236, 860, h - 24), fill=panel, radius=16, outline=card)
        d.text((254, 260), "Settlement stream", fill=text, font=font(16, True))
        spark(d, (254, 320, 820, h - 80), accent, seed=5, width=4)
        rr(d, (884, 236, w - 24, h - 24), fill=panel, radius=16, outline=card)
        d.text((908, 260), "Rails", fill=text, font=font(15, True))
        for i, name in enumerate(["ACH", "Wire", "Card", "Wallet"]):
            y = 320 + i * 90
            rr(d, (908, y, w - 48, y + 70), fill=bg, radius=10)
            d.ellipse((924, y + 24, 944, y + 44), fill=accent)
            d.text((960, y + 24), name, fill=text, font=font(14, True))
    else:
        # default mosaic
        for i, m in enumerate(metrics):
            x = 230 + (i % 2) * 500
            y = 96 + (i // 2) * 330
            rr(d, (x, y, x + 470, y + 300), fill=panel, radius=16, outline=card)
            d.text((x + 24, y + 28), m, fill=muted, font=font(13))
            d.text((x + 24, y + 70), f"{70 + i * 7}%", fill=text, font=font(34, True))
            spark(d, (x + 24, y + 140, x + 420, y + 260), accent, seed=i)

    return img


def phone_ui(story) -> Image.Image:
    w, h = 420, 860
    accent = story["accent"]
    title, lines = story["phone"]
    img = Image.new("RGB", (w, h), (248, 250, 252))
    d = ImageDraw.Draw(img, "RGBA")
    # status bar
    d.rectangle((0, 0, w, 40), fill=(15, 18, 28))
    d.text((18, 10), "9:41", fill=(255, 255, 255), font=font(12, True))
    rr(d, (0, 40, w, 140), fill=accent, radius=0)
    logo(d, 20, 60, story["short"], (255, 255, 255), 28)
    d.text((60, 64), story["brand"].split()[0][:12], fill=(255, 255, 255), font=font(14, True))
    d.text((20, 100), title, fill=(255, 255, 255), font=font(18, True))

    y = 170
    for i, line in enumerate(lines):
        rr(d, (20, y, w - 20, y + 110), fill=(255, 255, 255), radius=16, outline=(226, 232, 240))
        d.ellipse((36, y + 40, 60, y + 64), fill=accent)
        d.text((80, y + 36), line, fill=(15, 23, 42), font=font(14, True))
        d.text((80, y + 64), "Updated just now", fill=(100, 116, 139), font=font(11))
        y += 130

    rr(d, (20, h - 120, w - 20, h - 40), fill=accent, radius=18)
    d.text((w // 2 - 40, h - 90), "Open app", fill=(255, 255, 255), font=font(16, True))
    return img


def float_card(label: str, value: str, accent) -> Image.Image:
    w, h = 280, 120
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(img, "RGBA")
    rr(d, (0, 0, w - 1, h - 1), fill=(255, 255, 255, 245), radius=18)
    d.ellipse((18, 40, 46, 68), fill=accent)
    d.text((62, 28), label, fill=(100, 116, 139), font=font(13))
    d.text((62, 56), value, fill=(15, 23, 42), font=font(22, True))
    return img


def device_frame(content: Image.Image, pad=10, radius=28, color=(24, 28, 36)) -> Image.Image:
    w, h = content.size
    canvas = Image.new("RGBA", (w + pad * 2, h + pad * 2), (0, 0, 0, 0))
    d = ImageDraw.Draw(canvas)
    rr(d, (0, 0, w + pad * 2, h + pad * 2), fill=color, radius=radius)
    if content.mode != "RGBA":
        content = content.convert("RGBA")
    canvas.paste(content, (pad, pad), content)
    return canvas


def soft_paste(base: Image.Image, xy, content: Image.Image, blur=16, opacity=110):
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    s = Image.new("RGBA", content.size, (0, 0, 0, opacity))
    shadow.paste(s, xy)
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    out = Image.alpha_composite(base, shadow)
    if content.mode != "RGBA":
        content = content.convert("RGBA")
    out.paste(content, xy, content)
    return out


COMPOSITIONS = (
    "laptop_phone",      # classic Dostpay-like
    "laptop_tablet",     # laptop + landscape tablet
    "dual_desktop",      # two desktop windows
    "phone_first",       # large phone + floating cards + small laptop
    "laptop_floats",     # single large laptop + floating cards only
    "angled_trio",       # laptop + phone + small tablet
    "stacked_focus",     # laptop + cropped UI focus card
)


def tablet_ui(story) -> Image.Image:
    """Landscape tablet crop of the desktop UI with simpler chrome."""
    base = laptop_ui(story)
    # crop main content area for tablet feel
    return base.crop((180, 60, 1280, 780)).resize((900, 620))


def brand_badge(story, size=90) -> Image.Image:
    badge = Image.new("RGBA", (120, 120), (0, 0, 0, 0))
    bd = ImageDraw.Draw(badge)
    bd.ellipse((8, 8, 112, 112), fill=story["accent"])
    bd.text((34, 42), story["short"][:2], fill=(255, 255, 255), font=font(28, True))
    return badge.resize((size, size))


def compose_story(story, style: str) -> Image.Image:
    """Varied device compositions so success stories don't all look identical."""
    W, H = 1600, 1200
    canvas = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    accent = story["accent"]
    gd.ellipse((180, 180, 1420, 1120), fill=accent + (38,))
    canvas = Image.alpha_composite(canvas, glow.filter(ImageFilter.GaussianBlur(80)))

    floats = story["floats"]
    ui = laptop_ui(story)
    phone = phone_ui(story)

    if style == "laptop_phone":
        lap = device_frame(ui.resize((980, 612)), pad=12, radius=22)
        ph = device_frame(phone.resize((280, 574)), pad=10, radius=36, color=(15, 18, 26))
        canvas = soft_paste(canvas, (70, 230), lap, blur=22, opacity=130)
        canvas = soft_paste(canvas, (1090, 290), ph, blur=18, opacity=120)
        float_pos = [(40, 70), (40, 920), (1260, 80)]
        badge_xy = (980, 940)

    elif style == "laptop_tablet":
        lap = device_frame(ui.resize((1020, 638)), pad=12, radius=22)
        tab = device_frame(tablet_ui(story).resize((620, 430)), pad=12, radius=24)
        canvas = soft_paste(canvas, (40, 160), lap, blur=22, opacity=130)
        canvas = soft_paste(canvas, (900, 620), tab, blur=18, opacity=120)
        float_pos = [(1180, 80), (40, 860)]
        badge_xy = (1320, 480)

    elif style == "dual_desktop":
        left = device_frame(ui.resize((720, 450)), pad=10, radius=18)
        # second window: shift accent feel by using tablet crop as "analytics" pane
        right = device_frame(tablet_ui(story).resize((720, 450)), pad=10, radius=18)
        canvas = soft_paste(canvas, (40, 280), left, blur=20, opacity=125)
        canvas = soft_paste(canvas, (840, 280), right, blur=20, opacity=125)
        float_pos = [(80, 80), (1240, 80), (700, 900)]
        badge_xy = (760, 160)

    elif style == "phone_first":
        ph = device_frame(phone.resize((360, 740)), pad=12, radius=40, color=(15, 18, 26))
        lap = device_frame(ui.resize((820, 512)), pad=10, radius=20)
        canvas = soft_paste(canvas, (120, 380), lap, blur=20, opacity=115)
        canvas = soft_paste(canvas, (980, 180), ph, blur=22, opacity=135)
        float_pos = [(60, 100), (60, 240), (420, 100)]
        badge_xy = (860, 920)

    elif style == "laptop_floats":
        lap = device_frame(ui.resize((1180, 738)), pad=14, radius=24)
        canvas = soft_paste(canvas, ((W - lap.width) // 2, 200), lap, blur=24, opacity=140)
        float_pos = [(40, 80), (1280, 80), (40, 980), (1280, 980)]
        badge_xy = (760, 80)

    elif style == "angled_trio":
        lap = device_frame(ui.resize((900, 562)), pad=12, radius=20)
        ph = device_frame(phone.resize((250, 512)), pad=10, radius=34, color=(15, 18, 26))
        tab = device_frame(tablet_ui(story).resize((480, 330)), pad=10, radius=18)
        canvas = soft_paste(canvas, (80, 140), lap, blur=20, opacity=125)
        canvas = soft_paste(canvas, (1040, 200), ph, blur=16, opacity=120)
        canvas = soft_paste(canvas, (200, 760), tab, blur=16, opacity=115)
        float_pos = [(1280, 80), (40, 80)]
        badge_xy = (1320, 860)

    else:  # stacked_focus
        lap = device_frame(ui.resize((1080, 675)), pad=12, radius=22)
        # focused crop of chart/content area as floating panel
        focus = ui.crop((240, 200, 1100, 700)).resize((560, 320))
        focus = device_frame(focus, pad=10, radius=18)
        canvas = soft_paste(canvas, (60, 200), lap, blur=22, opacity=130)
        canvas = soft_paste(canvas, (980, 620), focus, blur=18, opacity=140)
        float_pos = [(1180, 80), (40, 920)]
        badge_xy = (900, 120)

    for i, pos in enumerate(float_pos):
        if i >= len(floats):
            break
        label, value = floats[i]
        card = float_card(label, value, accent)
        canvas = soft_paste(canvas, pos, card, blur=12, opacity=100)

    canvas = soft_paste(canvas, badge_xy, brand_badge(story), blur=10, opacity=90)
    return canvas


def main(only: str | None = None):
    OUT.mkdir(parents=True, exist_ok=True)
    for i, story in enumerate(STORIES):
        if only and story["slug"] != only:
            continue
        style = COMPOSITIONS[i % len(COMPOSITIONS)]
        img = compose_story(story, style)
        path = OUT / f"{story['slug']}-success-story.png"
        img.save(path, optimize=True)
        print(f"{path.name} ({style})")


if __name__ == "__main__":
    import sys

    only = None
    if len(sys.argv) > 1 and sys.argv[1].startswith("--only="):
        only = sys.argv[1].split("=", 1)[1]
    main(only=only)
