# eForte monorepo

pnpm workspace with Turborepo. Apps:

- `apps/web` — Next.js marketing site
- `apps/api` — NestJS API (Prisma → Supabase Postgres, schema `api`)

Strapi (`apps/strapi`) and Admin (`apps/admin`) will be added later.

## Requirements

- Node.js 24+ (see `.nvmrc`)
- pnpm 11.21+
- Docker (for local Supabase and optional API container)
- [Supabase CLI](https://supabase.com/docs/guides/cli)

## Getting started

```bash
cp .env.example .env
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env
pnpm install
```

### Local Supabase (Postgres)

`supabase/` is **local-only** (gitignored). Production/server uses a hosted Postgres instance; point `DATABASE_URL` there and run `pnpm db:deploy`. Schema changes ship via Prisma under `apps/api/prisma/`.

For local Docker Postgres via the Supabase CLI, from this repo root:

```bash
# First time only (skip if supabase/ already exists on your machine)
npx supabase init
# Optional: set project_id = "eforte" and non-default ports in supabase/config.toml
# if another local Supabase stack already uses 54321/54322/etc.

npx supabase start
npx supabase status   # copy DB URL into .env (use ?schema=api)
```

Suggested ports if Yuasa (or another project) already owns the defaults:

| Service | Port |
|---------|------|
| API / Kong | `54331` |
| DB | `54332` |
| Studio | `54333` |
| Mailpit | `54334` |
| Analytics | `54337` |

Then apply Prisma migrations (creates schema `api` + contact/quote tables):

```bash
pnpm db:migrate
# or: pnpm --filter api prisma:migrate
```

### Run locally

```bash
pnpm dev:api    # Nest on API_PORT (default 6100)
pnpm dev        # Next.js on WEB_PORT (default 6200)
```

- Health: [http://localhost:6100/health](http://localhost:6100/health)
- Studio: [http://localhost:54333](http://localhost:54333)
- Web forms POST to `NEXT_PUBLIC_API_URL` (`/contact`, `/quotes`)

### Env layout

| File | Holds |
|------|--------|
| Root `.env` | Shared ports, `DATABASE_URL`, `CORS_ORIGIN` |
| `apps/web/.env` | `NEXT_PUBLIC_*` |
| `apps/api/.env` | `API_PORT`, `DATABASE_URL`, `CORS_ORIGIN` (used by Prisma CLI) |

### Ports (root `.env`)

Chrome blocks port `6000` (`ERR_UNSAFE_PORT`), so defaults start at `6100`:

| Variable | Default |
|----------|---------|
| `API_PORT` | `6100` |
| `WEB_PORT` | `6200` |
| `ADMIN_PORT` | `6300` |
| `STRAPI_PORT` | `6400` |

### Useful scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` / `pnpm dev:web` | Start web on `WEB_PORT` |
| `pnpm dev:api` | Start Nest API on `API_PORT` |
| `pnpm db:generate` | Prisma generate (`api`) |
| `pnpm db:migrate` | Prisma migrate dev (`api`) |
| `pnpm db:deploy` | Prisma migrate deploy (`api`) |
| `pnpm build` / `pnpm build:web` | Build web |
| `pnpm build:api` | Build Nest API (`prisma generate` + `nest build`) |
| `pnpm lint` | Lint web |
| `pnpm start` | Production web on `WEB_PORT` |

### Docker (API only)

Supabase stays CLI-managed. Start Supabase first, then:

```bash
npx supabase start
docker compose up api --build
```

The API container reaches the host DB via `host.docker.internal:54332`.

### App layout

```text
apps/web       Next.js site (web)
apps/api       NestJS + Prisma (api)
supabase/      Local only (gitignored) — CLI config for `supabase start`
packages/      Shared packages (reserved)
```
