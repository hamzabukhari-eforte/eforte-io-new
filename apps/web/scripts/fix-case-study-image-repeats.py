"""Ensure each case-study page section uses a distinct mockup image."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BUILD = Path(__file__).resolve().parent / "build-enterprise-case-studies.py"
OVERRIDES = ROOT / "data" / "enterpriseCaseStudyOverrides.ts"
CASE_STUDIES = ROOT / "data" / "caseStudies.ts"

SLUGS = [
    "global-manufacturing-corp",
    "globaltrade-solutions",
    "meridian-pay",
    "altura-motors",
    "anchor-point-insurance",
    "apex-shared-services",
    "birchwood-hospitality-group",
    "brightwell-mutual",
    "clearpath-diabetes-care",
    "coastal-assurance-group",
    "coastline-resorts",
    "cobalt-digital-bank",
    "crestline-bpo-group",
    "fenwick-capital-markets",
    "frontier-energy-partners",
    "harborlight-recovery",
    "ironclad-manufacturing",
    "lantern-hotel-collective",
    "meridian-outsourcing-solutions",
    "pulsewell-fitness",
    "ridgeline-auto-group",
    "summit-steel-works",
    "vantage-mobility",
]


def fix_build_script() -> None:
    text = BUILD.read_text(encoding="utf-8")
    text = text.replace(
        'image: asset("{slug}", "hero.png")',
        'image: asset("{slug}", "screen-1.png")',
    )

    # Force each study's 3 solution items to screen-2/3/4
    item_pat = re.compile(
        r'(\[\([\s\S]*?\"),\s*\"screen-\d\.png\"\)\s*,\s*'
        r'(\([\s\S]*?\"),\s*\"screen-\d\.png\"\)\s*,\s*'
        r'(\([\s\S]*?\"),\s*\"screen-\d\.png\"\)\]',
    )

    def repl(m: re.Match[str]) -> str:
        a, b, c = m.group(1), m.group(2), m.group(3)
        return (
            f'{a}, "screen-2.png"),\n   '
            f'{b}, "screen-3.png"),\n   '
            f'{c}, "screen-4.png")]'
        )

    text2, n = item_pat.subn(repl, text)
    BUILD.write_text(text2, encoding="utf-8")
    print(f"build script: challenge->screen-1, item groups fixed={n}")


def fix_overrides() -> None:
    text = OVERRIDES.read_text(encoding="utf-8")

    # challenge images must not reuse hero (intro uses hero)
    text = re.sub(
        r'(challenge:\s*\{[\s\S]*?image:\s*asset\("[^"]+",\s*")hero\.png(")',
        r"\1screen-1.png\2",
        text,
    )

    # Within each study block, assign solution item images uniquely to 2/3/4
    study_pat = re.compile(
        r'("[\w-]+":\s*\{[\s\S]*?solution:\s*\{[\s\S]*?items:\s*\[)([\s\S]*?)(\]\s*,\s*results:)',
    )

    def fix_items(m: re.Match[str]) -> str:
        head, body, tail = m.group(1), m.group(2), m.group(3)
        imgs = ["screen-2.png", "screen-3.png", "screen-4.png"]
        i = 0

        def one(mm: re.Match[str]) -> str:
            nonlocal i
            img = imgs[min(i, 2)]
            i += 1
            return f'{mm.group(1)}"{img}"'

        body2 = re.sub(r'(image:\s*asset\("[^"]+",\s*)"[^"]+"', one, body)
        return head + body2 + tail

    text2, n = study_pat.subn(fix_items, text)
    OVERRIDES.write_text(text2, encoding="utf-8")
    print(f"overrides: unique section images; studies touched={n}")


def fix_case_studies_details() -> None:
    """Details fallback sections: use screen-2 + screen-3, not hero + screen-1."""
    text = CASE_STUDIES.read_text(encoding="utf-8")
    for slug in SLUGS:
        base = f"/assets/final-images/case-studies/{slug}"
        # Only rewrite Detail section images that still point at hero/screen-1 pairs
        text = text.replace(f'{base}/hero.png",\n          info:', f'{base}/screen-2.png",\n          info:')
        # first detail often uses hero - careful: intro also uses hero.png with different context
        # Safer: replace Details image fields specifically via regex per slug block
    # Per-slug: within Details.sections, map first image to screen-2, second to screen-3
    for slug in SLUGS:
        base = f"/assets/final-images/case-studies/{slug}"
        pattern = re.compile(
            rf'(slug:\s*"{slug}"[\s\S]*?Details:\s*\{{[\s\S]*?sections:\s*\[)'
            rf'([\s\S]*?)(\]\s*,?\s*\}})',
            re.M,
        )

        def repl(m: re.Match[str]) -> str:
            head, body, tail = m.group(1), m.group(2), m.group(3)
            imgs = [f"{base}/screen-2.png", f"{base}/screen-3.png", f"{base}/screen-4.png"]
            i = 0

            def one(mm: re.Match[str]) -> str:
                nonlocal i
                img = imgs[min(i, 2)]
                i += 1
                return f'image: "{img}"'

            body2 = re.sub(r'image:\s*"[^"]+"', one, body)
            return head + body2 + tail

        text, _ = pattern.subn(repl, text, count=1)

    CASE_STUDIES.write_text(text, encoding="utf-8")
    print("caseStudies Details images de-duplicated")


def main() -> None:
    fix_build_script()
    fix_overrides()
    fix_case_studies_details()
    print("done")


if __name__ == "__main__":
    main()
