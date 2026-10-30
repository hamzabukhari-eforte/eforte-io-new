# SonarQube Full Analysis Report — eForte New

| Field | Value |
|-------|-------|
| **Project key** | `eforte-new` |
| **Dashboard** | http://localhost:9000/dashboard?id=eforte-new |
| **SonarQube** | Community 26.10.0.133078 (local) |
| **Analysis date** | 2026-10-29 |
| **Profiles** | Sonar way **comprehensive** (ts/js/css/py/web/docker/secrets/text) |
| **Sources** | `apps/web`, `apps/api` (**strapi excluded**) |
| **Report filter** | Issues under any `*strapi*` path omitted from this document |
| **Quality Gate** | **OK** |

> Comprehensive rules + secrets/security sensors. `apps/strapi` is not scanned, and this report also **omits** findings in `apps/web/lib/strapi/*`.

---

## Summary

| Metric | Value |
|--------|-------|
| Lines of code (ncloc, server) | 59199 |
| Bugs (in this report) | **13** |
| Vulnerabilities (in this report) | **2** |
| Code smells (in this report) | **432** |
| Security hotspots (to review) | **0** |
| Open issues listed here | **447** |
| Coverage | 0.0% |
| Duplicated lines | 14.2% |
| Technical debt (server) | 2785 min |
| Reliability rating (server) | 4.0 |
| Security rating (server) | 3.0 |
| Maintainability rating (server) | 1.0 |

_Filtered out of this report: **4** strapi-path issue(s)._

### By severity

| Severity | Count |
|----------|-------|
| CRITICAL | 16 |
| MAJOR | 114 |
| MINOR | 317 |

### By type

| Type | Count |
|------|-------|
| CODE_SMELL | 432 |
| BUG | 13 |
| VULNERABILITY | 2 |

---

## Security findings

Security sensors run: **secrets detection**, **vulnerability rules**, **Docker IaC**, comprehensive TS/JS security rules. No committed secrets were flagged.

### Vulnerabilities

#### V1. `typescript:S2245` — [MAJOR]

**File:** `apps/api/src/mail/mail.service.ts`  
**Line:** 179  
**Tags:** cwe, cryptography, former-hotspot  

Make sure that using this pseudorandom number generator is safe here.

#### V2. `docker:S6471` — [MINOR]

**File:** `apps/api/Dockerfile`  
**Line:** 17  
**Tags:** cwe, dockerfile, former-hotspot  

The "node" image runs with "root" as the default user. Make sure it is safe here.

### Other security-tagged / CWE-related notes

| Severity | Type | Rule | Location | Message | Tags |
|----------|------|------|----------|---------|------|
| MINOR | VULNERABILITY | `docker:S6471` | `apps/api/Dockerfile:17` | The "node" image runs with "root" as the default user. Make sure it is safe here. | cwe, dockerfile, former-hotspot |
| MAJOR | VULNERABILITY | `typescript:S2245` | `apps/api/src/mail/mail.service.ts:179` | Make sure that using this pseudorandom number generator is safe here. | cwe, cryptography, former-hotspot |

---

## Bugs

| Severity | Rule | Location | Message |
|----------|------|----------|---------|
| CRITICAL | `typescript:S2871` | `apps/web/data/capabilities/studioBrands.ts:39` | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. |
| CRITICAL | `typescript:S2871` | `apps/web/data/sitemap.ts:161` | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. |
| MAJOR | `typescript:S9383` | `apps/api/src/main.ts:35` | Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored wi |
| MAJOR | `typescript:S3923` | `apps/web/components/sections/Navbar.tsx:1876` | This conditional operation returns the same value whether the condition is "true" or "false". |
| MINOR | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:961` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| MINOR | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1107` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| MINOR | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1193` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| MINOR | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1291` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| MINOR | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1417` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| MINOR | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1519` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| MINOR | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1657` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| MINOR | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1929` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| MINOR | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1944` | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |

---

## Accessibility-related (bugs + smells)

**Count:** 22

| Severity | Type | Rule | Location |
|----------|------|------|----------|
| MAJOR | CODE_SMELL | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:961` |
| MAJOR | CODE_SMELL | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:1107` |
| MAJOR | CODE_SMELL | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:1193` |
| MAJOR | CODE_SMELL | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:1291` |
| MAJOR | CODE_SMELL | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:1417` |
| MAJOR | CODE_SMELL | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:1519` |
| MAJOR | CODE_SMELL | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:1657` |
| MAJOR | CODE_SMELL | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:1929` |
| MAJOR | CODE_SMELL | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:1944` |
| MAJOR | CODE_SMELL | `typescript:S6819` | `apps/web/components/sections/about-us/OurTimelineSection.tsx:135` |
| MAJOR | CODE_SMELL | `typescript:S6819` | `apps/web/components/sections/financial-services/FinancialServicesOurWorkSection.tsx:163` |
| MAJOR | CODE_SMELL | `css:S7924` | `apps/web/components/sections/impact-studies/impact-studies.module.css:483` |
| MAJOR | CODE_SMELL | `typescript:S6819` | `apps/web/components/sections/industries-overview/IndustriesMethodologyCard.tsx:55` |
| MINOR | BUG | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:961` |
| MINOR | BUG | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1107` |
| MINOR | BUG | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1193` |
| MINOR | BUG | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1291` |
| MINOR | BUG | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1417` |
| MINOR | BUG | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1519` |
| MINOR | BUG | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1657` |
| MINOR | BUG | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1929` |
| MINOR | BUG | `typescript:S1082` | `apps/web/components/sections/Navbar.tsx:1944` |

---

## Code smells — top rules

Total code smells: **432**. Grouped by rule (top 20):

| Count | Rule | Example location | Sample message |
|-------|------|------------------|----------------|
| 196 | `typescript:S6759` | `apps/web/components/sections/case-studies/IntroSection.tsx:16` | Mark the props of the component as read-only. |
| 52 | `python:S7498` | `apps/web/scripts/generate-product-design-success-stories.py:210` | Replace this constructor call with a literal. |
| 26 | `typescript:S6772` | `apps/web/components/sections/case-studies/TechnologiesSection.tsx:83` | Ambiguous spacing after previous element span |
| 24 | `typescript:S3358` | `apps/web/app/sitemap.ts:25` | Extract this nested ternary operation into an independent statement. |
| 23 | `typescript:S6551` | `apps/web/components/providers/CallbackModalProvider.tsx:146` | 'formData.get("name") ?? ""' may use Object's default stringification format ('[object Object]') whe |
| 14 | `typescript:S1874` | `apps/web/components/sections/healthcare/HealthcarePortfolioSection.tsx:5` | 'FormEvent' is deprecated. |
| 10 | `typescript:S7772` | `apps/web/data/capabilities/studioBrands.ts:2` | Prefer `node:path` over `path`. |
| 10 | `typescript:S6479` | `apps/web/components/sections/InfiniteCarousel.tsx:29` | Do not use Array index in keys |
| 9 | `typescript:S6848` | `apps/web/components/sections/Navbar.tsx:1193` | Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role |
| 8 | `css:S125` | `apps/web/components/sections/industries-overview/industriesOverview.module.css:307` | Remove this commented out code. |
| 7 | `python:S1172` | `apps/web/scripts/generate-case-study-mockups.py:536` | Remove the unused function parameter "title". |
| 7 | `python:S1192` | `apps/web/scripts/build-enterprise-case-studies.py:80` | Define a constant instead of duplicating this literal "screen-3.png" 23 times. |
| 6 | `css:S4658` | `apps/web/components/sections/industries-overview/industriesOverview.module.css:259` | Empty block |
| 5 | `typescript:S7781` | `apps/api/src/mail/mail.utils.ts:5` | Prefer `String#replaceAll()` over `String#replace()`. |
| 4 | `typescript:S6481` | `apps/web/components/providers/QuoteModalProvider.tsx:499` | The object passed as the value prop to the Context provider changes every render. To fix this consid |
| 4 | `typescript:S3776` | `apps/web/components/sections/impact-studies/ImpactStudiesProjectsSection.tsx:52` | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. |
| 3 | `typescript:S6819` | `apps/web/components/sections/financial-services/FinancialServicesOurWorkSection.tsx:163` | Use <input type="button">, <input type="image">, <input type="reset">, <input type="submit">, or <bu |
| 3 | `python:S1515` | `apps/web/scripts/dedupe-case-study-section-images.py:36` | Add a parameter to the parent lambda function and use variable "repl_item" as its default value; The |
| 2 | `typescript:S1128` | `apps/web/components/sections/banking/BankingHeroSection.tsx:3` | Remove this unused import of 'Image'. |
| 2 | `python:S107` | `apps/web/scripts/generate-case-study-mockups.py:247` | Function "draw_chrome" has 16 parameters, which is greater than the 13 authorized. |

---

## Suggested remediation priority

1. **Vulnerabilities** — weak PRNG / Docker root user (if present)
2. **Critical/Major bugs** — sort `localeCompare`, Navbar ternary, unhandled Promise
3. **Navbar a11y** — keyboard / native interactive elements
4. **Bulk smells** — `readonly` props and related maintainability rules

---

## How to re-run

```bash
cd /home/hamza/WORK/eforte-new
SONAR_TOKEN=<project-token> /opt/sonar-scanner/bin/sonar-scanner
```

Raw dump (strapi-filtered): `docs/sonar-full-scan-raw.json`  
UI: http://localhost:9000/dashboard?id=eforte-new · Login: `admin` / `admin`

