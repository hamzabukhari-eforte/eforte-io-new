# SonarQube Round 4 Analysis Report — eForte New

| Field | Value |
|-------|-------|
| **Dashboard** | http://localhost:9000/dashboard?id=eforte-new |
| **Date** | 2026-10-29 |
| **Bugs** | **0** |
| **Vulnerabilities** | **0** |
| **Code smells (server)** | **4** |
| **Issues in this report** | **4** |
| **Reliability / Security** | 1.0 / 1.0 |

## Round progression

| Round | Issues | Bugs | Vulns | Smells |
|-------|--------|------|-------|--------|
| 1 (baseline) | 447 | 13 | 2 | 432 |
| 2 | 202 | 0 | 0 | 202 |
| 3 | 40 | 0 | 0 | 40 |
| **4** | **4** | **0** | **0** | **4** |

## Fixes in Round 4

- Nested ternaries (`S3358`) extracted to helpers / if-else across sitemap, Navbar, StrategicApproach, CapabilityStudio, VelocityAI, AI workflows diagrams, Services, testimonials, Databricks, replayMotion
- Cognitive complexity (`S3776`) reduced via helpers/layout extraction in StrategicApproach, CapabilityStudioFeatureBlock, ImpactStudiesProjectsSection
- Accessibility (`S6819`): native `<button>` overlays; native `<img>` + mask for methodology icon
- `Array#push` multi-arg (`S7778`); FormData/string typing (`S6551`); nested templates (`S4624`)
- Empty CSS removed; impact-studies contrast fallback darkened (`S7924`)
- Context `useMemo` + Readonly props leftovers

## Remaining by rule

| Count | Rule |
|-------|------|
| 2 | `typescript:S6594` (prefer `RegExp.exec`) |
| 2 | `typescript:S8786` (regex backtracking) |

All remaining issues are in `apps/web/lib/strapi/content.ts` and `apps/web/lib/strapi/insights.ts`.

## Remaining bugs / vulnerabilities

_None._

---

Artifacts: `docs/sonar-round4-scan-raw.json` · UI: http://localhost:9000/dashboard?id=eforte-new
