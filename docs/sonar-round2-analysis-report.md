# SonarQube Round 2 Analysis Report — eForte New

| Field | Value |
|-------|-------|
| **Project key** | `eforte-new` |
| **Dashboard** | http://localhost:9000/dashboard?id=eforte-new |
| **Analysis date** | 2026-10-29 |
| **Profiles** | Sonar way comprehensive |
| **Sources** | `apps/web`, `apps/api` (strapi + `apps/web/scripts` excluded) |
| **Bugs** | **0** |
| **Vulnerabilities** | **0** |
| **Code smells (report)** | **202** |
| **Security hotspots** | **0** |
| **Reliability / Security ratings** | **A (1.0)** / **A (1.0)** |

---

## Round 1 → Round 2 comparison

| Metric | Round 1 (filtered) | Round 2 | Delta |
|--------|--------------------|---------|-------|
| Open issues (report) | 447 | **202** | **-245** |
| Bugs | 13 | **0** | **-13** |
| Vulnerabilities | 2 | **0** | **-2** |
| Code smells | 432 | **202** | **-230** |
| Security hotspots | 0 | 0 | — |
| Reliability rating | D (4.0) | **A (1.0)** | improved |
| Security rating | C (3.0) | **A (1.0)** | improved |

---

## Fixes applied before this scan

- **Vulnerabilities:** `crypto.randomBytes` for mail `X-Entity-Ref-ID`; Docker runner non-root `USER nestjs`
- **Bugs:** `localeCompare` sorts; `bootstrap().catch(...)`; Navbar mega/mobile backdrops → native `<button>` (clears S1082 / S6848)
- **Intentional keep:** Navbar active link text stays white (underline = active) — `typescript:S3923` ignored for `Navbar.tsx`
- **Hygiene:** `node:` imports; `replaceAll`; `formString()` for FormData; `SyntheticEvent` / `RefObject` / `fetchPriority`; unused imports removed
- **Maintainability:** many component props wrapped in `Readonly<>` (S6759)
- **Scope:** excluded `apps/web/scripts/**` and `docs/**` from analysis

---

## Remaining issues (202 code smells)

No bugs or vulnerabilities remain in this report scope.

### By severity

| Severity | Count |
|----------|-------|
| CRITICAL | 5 |
| MAJOR | 86 |
| MINOR | 111 |

### Top remaining rules

| Count | Rule | Theme |
|-------|------|--------|
| 106 | `typescript:S6759` | Mark component props as `Readonly<>` (partially fixed; more left) |
| 26 | `typescript:S6772` | JSX ambiguous spacing around elements |
| 24 | `typescript:S3358` | Nested ternaries |
| 10 | `typescript:S6479` | Array index used as React `key` |
| 8 | `css:S125` | Commented-out CSS |
| 6 | `css:S4658` | Empty CSS blocks |
| 4 | `typescript:S6819` | Prefer native elements over ARIA roles |
| 4 | `typescript:S6481` | (React-related) |
| 4 | `typescript:S3776` | Cognitive complexity |
| 1 | `typescript:S6551` | FormData stringification edge case |
| 1 | `typescript:S8786` | Regex backtracking |

---

## Suggested Round 3 focus (optional)

1. Finish remaining `Readonly<>` props (`S6759`)
2. Un-nest ternaries (`S3358`) and JSX spacing (`S6772`)
3. Stable React keys (`S6479`)
4. Clean commented/empty CSS

---

## Artifacts

- Round 1: [`sonar-full-analysis-report.md`](./sonar-full-analysis-report.md)
- Round 2 raw: [`sonar-round2-scan-raw.json`](./sonar-round2-scan-raw.json)
- UI: http://localhost:9000/dashboard?id=eforte-new · `admin` / `admin`
