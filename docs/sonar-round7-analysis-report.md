# SonarQube Round 7 Analysis Report — eForte New

| Field | Value |
|-------|-------|
| **Dashboard** | http://localhost:9000/dashboard?id=eforte-new |
| **Date** | 2026-10-29 |
| **Bugs** | **0** |
| **Vulnerabilities** | **0** |
| **Code smells (server)** | **0** |
| **Open issues** | **0** |
| **Security hotspots** | **0** |
| **Reliability / Security / Maintainability** | **1.0 / 1.0 / 1.0** |

## Round progression

| Round | Issues | Bugs | Vulns | Smells |
|-------|--------|------|-------|--------|
| 1 (baseline) | 447 | 13 | 2 | 432 |
| 2 | 202 | 0 | 0 | 202 |
| 3 | 40 | 0 | 0 | 40 |
| 4 | 4 | 0 | 0 | 4 |
| 5 | 1 | 0 | 0 | 1 |
| 6 | 1 | 0 | 0 | 1 |
| **7** | **0** | **0** | **0** | **0** |

## Fixes in Round 7

- Split `markdownBlockToHtml` into `tryBoldHeadingBlock` / `tryTitleBodyPairs` / `tryBulletList` helpers to clear `S3776` cognitive complexity
- Removed remaining newline regex in favor of `stripLeadingNewlines`

## Remaining issues

_None in report scope (`apps/web`, `apps/api`)._

## Quality gate note

`alert_status` may still show **ERROR** if the gate requires coverage (this project reports **0%** coverage with no test sensors configured). That is independent of bugs/vulnerabilities/code smells, which are all clear.

---

Artifacts: `docs/sonar-round7-scan-raw.json` · UI: http://localhost:9000/dashboard?id=eforte-new (`admin` / `admin`)
