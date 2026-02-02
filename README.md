# Maher Abaza – Portfolio

Nuxt 4 site (Vue, Tailwind, Pinia). Deploys to Cloudflare Workers on push to `main`.

**Run locally:** `pnpm install` then `pnpm dev`  
**Build:** `pnpm build`  
**Lint / format:** `pnpm lint`, `pnpm format`

## CI/CD

Workflow: `.github/workflows/deploy-cloudflare.yml`

**Secrets** (Settings → Secrets and variables → Actions):

| Secret | Purpose |
|--------|--------|
| `CLOUDFLARE_API_TOKEN` | Deploy to Workers. Create: [API tokens](https://dash.cloudflare.com/?to=/:account/api-tokens) → Edit Cloudflare Workers template. |
| `CLOUDFLARE_ACCOUNT_ID` | Account ID from Workers & Pages overview. |
| `NUXT_GITHUB_TOKEN` | GitHub API. |
