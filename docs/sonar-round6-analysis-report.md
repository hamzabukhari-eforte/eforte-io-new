# SonarQube Round 6 Analysis Report — eForte New

| Field | Value |
|-------|-------|
| **Dashboard** | http://localhost:9000/dashboard?id=eforte-new |
| **Date** | 2026-10-29 |
| **Bugs** | **0** |
| **Vulnerabilities** | **0** |
| **Code smells (server)** | **1** |
| **Issues in this report** | **1** |
| **Reliability / Security** | 1.0 / 1.0 |

## Round progression

| Round | Issues | Bugs | Vulns | Smells |
|-------|--------|------|-------|--------|
| 1 (baseline) | 447 | 13 | 2 | 432 |
| 2 | 202 | 0 | 0 | 202 |
| 3 | 40 | 0 | 0 | 40 |
| 4 | 4 | 0 | 0 | 4 |
| 5 | 1 | 0 | 0 | 1 |
| **6** | **1** | **0** | **0** | **1** |

## Fixes in Round 6

- Replaced remaining backtracking bold-heading regex with string `indexOf` / slice parsing (`S8786` cleared)

## Remaining by rule

| Count | Rule |
|-------|------|
| 1 | `typescript:S3776` — `markdownBlockToHtml` cognitive complexity 32 → target ≤15 (helpers extracted for Round 7) |

## Remaining bugs / vulnerabilities

_None._

---

Artifacts: `docs/sonar-round6-scan-raw.json` · UI: http://localhost:9000/dashboard?id=eforte-new
