# Litesoc Corporate Website

The corporate website for **Litesoc Sdn Bhd**, the Malaysian technology company
behind **LiteSOC** (cybersecurity) and **Digital Khairat** (digital khairat
management).

Live at **https://litesoc.app**

- Company: Litesoc Sdn Bhd — https://litesoc.app
- Product: LiteSOC — https://litesoc.io
- Product: Digital Khairat — https://digitalkhairat.my

> This site represents the **parent company**. LiteSOC is one of its products,
> not the company itself. Keep the capitalisation exact: `Litesoc Sdn Bhd`
> (company), `LiteSOC` (cybersecurity product), `Digital Khairat` (khairat
> management product).

## Stack

| Concern    | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | Astro 7 (static output, no adapter)           |
| Language   | TypeScript (`astro/tsconfigs/strict`)         |
| Styling    | Tailwind CSS 4 via `@tailwindcss/vite`        |
| Fonts      | IBM Plex Sans + IBM Plex Mono, self-hosted    |
| Sitemap    | `@astrojs/sitemap`                            |
| Hosting    | GitHub Pages (custom domain)                  |
| CI/CD      | GitHub Actions                                |

There is no backend, database, authentication, analytics or third-party
tracker. The only JavaScript shipped to the browser is the mobile menu
(~0.7 KB), emitted as an external module so no inline script needs to be
allowed by a content security policy.

## Development

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:4321.

## Production build

```bash
npm run build      # astro check && astro build
npm run preview    # serve ./dist locally
```

`npm run build` type-checks before building. CI uses `npm run check` and
`npm run build:ci` as separate steps so a type error is reported distinctly
from a build failure.

## Project structure

```text
litesoc-corporate/
├── .github/
│   ├── workflows/deploy.yml   # build + deploy to GitHub Pages
│   └── dependabot.yml         # weekly npm + actions updates
├── public/
│   ├── .well-known/security.txt
│   ├── fonts/                 # self-hosted woff2 (latin subset)
│   ├── images/                # logo, icons, Open Graph image
│   ├── CNAME                  # litesoc.app
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/            # Header, Hero, About, Products, Principles,
│   │                          # Ecosystem, Contact, Footer, StructureTree,
│   │                          # Wordmark
│   ├── data/site.ts           # single source of truth for company + products
│   ├── layouts/               # BaseLayout (SEO + JSON-LD), LegalLayout
│   ├── pages/                 # index, privacy, security, 404
│   └── styles/global.css      # design tokens, base, components
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Editing content

Company facts, product descriptions and navigation all live in
[`src/data/site.ts`](src/data/site.ts). Components read from it, so changing a
product description or the contact email is a one-line edit in one file.

Only publish claims that can be substantiated. The site deliberately contains
no customer counts, statistics, testimonials, client logos, certifications or
awards.

### Branding

The corporate mark is `public/images/litesoc-company-logo.png` (512 px master)
with `litesoc-company-logo-144.png` used in the header and footer. The palette
is derived from the mark: indigo `#191760` for the corporate layer, with
`#1F5FD1` and `#0B7F41` reserved as product accents for LiteSOC and Digital
Khairat respectively. Product accent colours are never used on corporate
surfaces, so colour always indicates which entity is being referred to.

## GitHub Pages deployment

`.github/workflows/deploy.yml` builds on every push to `main` and on manual
`workflow_dispatch`, then publishes with the official Pages actions
(`configure-pages`, `upload-pages-artifact`, `deploy-pages`).

### One-time repository setup

1. Push this project to a GitHub repository with `main` as the default branch.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
   The workflow will not deploy while the source is set to "Deploy from a
   branch".
3. Under **Settings → Pages → Custom domain**, enter `litesoc.app` and save.
   `public/CNAME` already contains the domain, so it is republished on every
   deploy and the setting will not be lost.
4. Once DNS validates, tick **Enforce HTTPS**. GitHub provisions the TLS
   certificate automatically; this can take up to 24 hours after the DNS
   records resolve.

### DNS configuration

`litesoc.app` is an apex (root) domain, so it needs apex records rather than a
`CNAME`:

- Create **A records** for `litesoc.app` pointing at GitHub Pages' IPv4
  addresses, and **AAAA records** for the IPv6 addresses. GitHub publishes the
  current set in *"Managing a custom domain for your GitHub Pages site"*. Take
  the addresses from that page rather than from any copy of them — GitHub has
  changed them before, and a stale address silently breaks the site.
  If your DNS provider supports `ALIAS`/`ANAME`/flattened `CNAME` at the apex,
  point that at `<user-or-org>.github.io` instead; it survives IP changes.
- Optionally add a **CNAME record** for `www.litesoc.app` pointing at
  `<user-or-org>.github.io` so the `www` form redirects to the apex.

Verify the custom domain in **Settings → Pages** to protect against takeover of
the subdomain if the repository is ever deleted.

Because the site is served from the domain root, `astro.config.mjs` sets
`site: "https://litesoc.app"` and leaves `base` at its default `/`. Do not add
a repository-name base path.

## SEO

- Canonical URLs, Open Graph and Twitter/X card metadata on every page.
- `robots.txt` and a generated `sitemap-index.xml`; canonical URLs and sitemap
  entries use the same trailing-slash form that GitHub Pages serves.
- `Organization`, `WebSite` and `WebPage` JSON-LD on the homepage. The
  Organization graph carries the SSM registration number, D-U-N-S number and
  registered address, and `owns` both products as `SoftwareApplication` nodes
  published by the company — this is what tells search engines that LiteSOC and
  Digital Khairat belong to Litesoc Sdn Bhd.
- No social profile links are declared, because no official corporate accounts
  have been provided. Add them to `sameAs` in
  [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) when they exist.

## Legal pages

`/privacy` and `/security` are intentionally narrow. They describe only this
website — which sets no cookies, runs no analytics and collects nothing — and
how to report a vulnerability. They are **not** product privacy policies;
LiteSOC and Digital Khairat publish their own. Replace them with
counsel-reviewed text before relying on them for anything beyond this site.

## Accessibility and performance

Verified against the built output:

- All text meets WCAG AA contrast; interactive targets are at least 28 px tall.
- Every focusable element has a visible 2 px focus ring, and the ring does not
  fade in.
- Semantic landmarks, one `h1` per page, no skipped heading levels, a skip
  link, and a mobile menu with `aria-expanded`, Escape-to-close and focus
  return.
- `prefers-reduced-motion` disables transitions and smooth scrolling.
- No horizontal overflow at 320, 375, 430, 768, 1024 or 1440 px.
- Images carry explicit `width`/`height`; fonts are preloaded and subset.

## Security

- No secrets, API keys or `.env` files are needed to build or deploy.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- Dependabot watches npm packages and GitHub Actions weekly.
- `public/.well-known/security.txt` points at the disclosure contact.

## Licence

© 2026 Litesoc Sdn Bhd. All rights reserved. Not licensed for reuse.
