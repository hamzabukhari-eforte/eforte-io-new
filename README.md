# eForte monorepo

pnpm workspace with Turborepo. Apps:

- `apps/web` — Next.js marketing site
- `apps/api` — NestJS API (Prisma → Supabase Postgres, schema `api`)
- `apps/strapi` — Strapi 5 CMS (Postgres schema `cms`) for blogs / categories

Admin (`apps/admin`) will be added later.

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
cp apps/strapi/.env.example apps/strapi/.env
pnpm install
```

### Local Supabase (Postgres)

`supabase/` is **local-only** (gitignored). Production/server uses a hosted Postgres instance; point Nest `DATABASE_URL` there and run `pnpm db:deploy`. Schema changes for Nest ship via Prisma under `apps/api/prisma/`.

For local Docker Postgres via the Supabase CLI, from this repo root:

```bash
# First time only (skip if supabase/ already exists on your machine)
npx supabase init
# Optional: set project_id = "eforte" and non-default ports in supabase/config.toml
# if another local Supabase stack already uses 54321/54322/etc.

npx supabase start
npx supabase status
```

Create the CMS schema once (Strapi uses `cms`; Nest uses `api`):

```bash
docker exec -i supabase_db_eforte psql -U postgres -d postgres -c 'CREATE SCHEMA IF NOT EXISTS cms;'
```

Suggested ports if another project already owns the defaults:

| Service | Port |
|---------|------|
| API / Kong | `54331` |
| DB | `54332` |
| Studio | `54333` |
| Mailpit | `54334` |
| Analytics | `54337` |

Then apply Prisma migrations (creates schema `api` + contact/quote tables):

```bash
pnpm db:deploy
# or first-time interactive: pnpm db:migrate
```

### Run locally

```bash
pnpm dev:api     # Nest on API_PORT (default 6100)
pnpm dev:strapi  # Strapi admin/API on STRAPI_PORT (default 6400)
pnpm dev         # Next.js on WEB_PORT (default 6200)
```

- Health: [http://localhost:6100/health](http://localhost:6100/health)
- Strapi admin: [http://localhost:6400/admin](http://localhost:6400/admin)
- Studio: [http://localhost:54333](http://localhost:54333)
- Web forms POST to `NEXT_PUBLIC_API_URL` (`/contact`, `/quotes`)
- Insights/blogs read from `NEXT_PUBLIC_STRAPI_URL` (`/api/blogs`, `/api/categories`)

On first Strapi start, create an admin user in the browser. Then add Blog / Category entries in Content Manager (public `find` permissions are bootstrapped automatically).

### Env layout

| File | Holds |
|------|--------|
| Root `.env` | Shared ports, Nest `DATABASE_URL`, `CORS_ORIGIN` |
| `apps/web/.env` | `NEXT_PUBLIC_*` |
| `apps/api/.env` | `API_PORT`, `DATABASE_URL`, `CORS_ORIGIN` |
| `apps/strapi/.env` | `PORT`, DB host/port, `DATABASE_SCHEMA=cms`, secrets |

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
| `pnpm dev:strapi` | Start Strapi on `STRAPI_PORT` |
| `pnpm db:generate` | Prisma generate (`api`) |
| `pnpm db:migrate` | Prisma migrate dev (`api`) |
| `pnpm db:deploy` | Prisma migrate deploy (`api`) |
| `pnpm build` / `pnpm build:web` | Build web |
| `pnpm build:api` | Build Nest API |
| `pnpm build:strapi` | Build Strapi admin |
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
apps/api       NestJS + Prisma (schema api)
apps/strapi    Strapi 5 CMS (schema cms)
supabase/      Local only (gitignored) — CLI config for `supabase start`
packages/      Shared packages (reserved)
```
