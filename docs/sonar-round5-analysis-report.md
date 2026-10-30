# SonarQube Round 5 Analysis Report — eForte New

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
| **5** | **1** | **0** | **0** | **1** |

## Fixes in Round 5

- `RegExp.exec` instead of `String.match` (`S6594`) in `content.ts`
- Non-regex HTML strip in `insights.ts` (`S8786`)
- Tightened bold-heading patterns (partial; one backtracking smell remained)

## Remaining by rule

| Count | Rule |
|-------|------|
| 1 | `typescript:S8786` — `apps/web/lib/strapi/content.ts:35` regex backtracking |

## Remaining bugs / vulnerabilities

_None._

---

Artifacts: `docs/sonar-round5-scan-raw.json` · UI: http://localhost:9000/dashboard?id=eforte-new
