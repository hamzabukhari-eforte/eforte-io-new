# SonarQube Round 3 Analysis Report — eForte New

| Field | Value |
|-------|-------|
| **Dashboard** | http://localhost:9000/dashboard?id=eforte-new |
| **Date** | 2026-10-29 |
| **Bugs** | **0** |
| **Vulnerabilities** | **0** |
| **Code smells (server)** | 44 |
| **Issues in this report** | **40** |
| **Reliability / Security** | 1.0 / 1.0 |

## Round progression

| Round | Issues | Bugs | Vulns | Smells |
|-------|--------|------|-------|--------|
| 1 (baseline) | 447 | 13 | 2 | 432 |
| 2 | 202 | 0 | 0 | 202 |
| **3** | **40** | **0** | **0** | **40** |

## Fixes in Round 3

- Remaining `Readonly<>` on inline/named props (S6759)
- Explicit `{' '}` for JSX adjacent text/elements (S6772)
- CSS: removed empty rules + commented-out blocks (S125/S4658)
- Stable React keys; carousel set ids; FormData/InsightImage; category slug; `node`/RegExp.exec; context `useMemo`; IntroSection void; next.config sync rewrites

## Remaining by rule

| Count | Rule |
|-------|------|
| 24 | `typescript:S3358` |
| 4 | `typescript:S3776` |
| 3 | `typescript:S6819` |
| 2 | `css:S4658` |
| 1 | `typescript:S1128` |
| 1 | `typescript:S7778` |
| 1 | `typescript:S6551` |
| 1 | `typescript:S6759` |
| 1 | `css:S7924` |
| 1 | `typescript:S4624` |
| 1 | `typescript:S6481` |

## Remaining bugs / vulnerabilities

_None._

---

Artifacts: `docs/sonar-round3-scan-raw.json` · UI: http://localhost:9000/dashboard?id=eforte-new

