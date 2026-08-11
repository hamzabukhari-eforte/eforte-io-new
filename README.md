# eForte monorepo

pnpm workspace with Turborepo. The marketing site lives in `apps/web`. Nest (`apps/api`), Strapi (`apps/strapi`), and Admin (`apps/admin`) will be added later.

## Requirements

- Node.js 24+ (see `.nvmrc`)
- pnpm 11.21+

## Getting started

```bash
cp .env.example .env
cp apps/web/.env.example apps/web/.env
pnpm install
pnpm dev
```

Open the URL using `WEB_PORT` from the root `.env` (default [http://localhost:6001](http://localhost:6001)).

### Env layout

| File | Holds |
|------|--------|
| Root `.env` | Shared ports (`API_PORT`, `WEB_PORT`, `ADMIN_PORT`, `STRAPI_PORT`) |
| `apps/web/.env` | Web-only vars (`NEXT_PUBLIC_*`, etc.) |
| `apps/api/.env` | API-only vars (later) |

### Ports (root `.env`)

| Variable | Default |
|----------|---------|
| `API_PORT` | `6000` |
| `WEB_PORT` | `6001` |
| `ADMIN_PORT` | `6002` |
| `STRAPI_PORT` | `6003` |

### Useful scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` / `pnpm dev:web` | Start web on `WEB_PORT` |
| `pnpm build` | Build web |
| `pnpm lint` | Lint web |
| `pnpm start` | Production web on `WEB_PORT` |

### App layout

```text
apps/web       Next.js site (web)
packages/      Shared packages (reserved)
```
