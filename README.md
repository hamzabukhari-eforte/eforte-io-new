# eForte monorepo

pnpm workspace with Turborepo. The marketing site lives in `apps/web`. Nest (`apps/api`) and Strapi (`apps/strapi`) will be added later.

## Requirements

- Node.js 24+ (see `.nvmrc`)
- pnpm 11.21+

## Getting started

From the repo root:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` / `pnpm dev:web` | Start the Next.js web app |
| `pnpm build` | Build web |
| `pnpm lint` | Lint web |
| `pnpm start` | Start the production web server |

### App layout

```text
apps/web       Next.js site (@eforte/web)
packages/      Shared packages (reserved)
```

Web env vars live in `apps/web/.env` (see `apps/web/.env.example`).
