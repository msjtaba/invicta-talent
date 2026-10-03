# Invicta-Talent

Marketing site for the Invicta-Talent BIM academy, built with Next.js (App Router), React, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Project structure

```
.
├── src/
│   ├── app/                 Routes (App Router). Each page.tsx sets metadata and renders a view.
│   │   ├── layout.tsx       Root layout: fonts, header, footer, newsletter dock
│   │   ├── globals.css      Design tokens (@theme) and scoped component styles
│   │   ├── favicon.ico      Site favicon (picked up automatically by Next.js)
│   │   ├── not-found.tsx
│   │   └── <route>/page.tsx
│   ├── views/               Full-page components, one per route (HomePage, ProgramDetailPage, …)
│   ├── components/
│   │   ├── layout/          Header, Footer, Layout, TrustStrip
│   │   ├── common/          Site-wide widgets (NewsletterDock, CookieNotice, MotionProvider)
│   │   ├── home/            Home page sections
│   │   ├── programs/        Program track page pieces (SyllabusAccordion)
│   │   ├── tools/           Tool certificate pieces (ToolCertificateGrid)
│   │   └── ui/              Buttons and other primitives (Button, LearnMoreButton, CtaButton, OutlineButton, …)
│   ├── data/                Site content as typed TS modules (programs, tools, insights, …)
│   └── fonts/arial/         Self-hosted Arial MT files loaded via next/font/local
├── public/                  Static files served from /
│   ├── brand/logo.svg       Header logo (SVGO-optimised from docs/assets/logo.svg)
│   └── images/              Page imagery (hero-image.jpg)
├── docs/                    Design references
│   ├── design-2.md          Design system: palette, type, spacing, components
│   ├── components.md        Source specs for the third-party UI components
│   └── assets/              Source artwork (original logo.svg and hero-image.png)
├── reference/               Not part of the app; excluded from TypeScript, ESLint and Tailwind
│   ├── vite-prototype/      Original Vite/React prototype the site was ported from
│   └── arial-mt-webfont/    Full Arial MT font pack (the app uses a subset in src/fonts/arial)
└── next.config.ts           Includes the /outcomes → /programs redirect
```

### Conventions

- Routes stay thin: `src/app/<route>/page.tsx` only exports `metadata` and renders the matching view from `src/views/`.
- Copy and structured content live in `src/data/`, not in components.
- Colors come from the tokens in `globals.css` (crimson, ivory, graphite, stone, gold). Use the Tailwind classes they generate, e.g. `bg-crimson`, `text-ivory-warm`.
- Third-party components from `docs/components.md` are restyled to the brand palette and scoped under their own class names in `globals.css`.

## Button components

| Component | Spec in components.md | Used on |
|---|---|---|
| `LearnMoreButton` | button-1 | Programs cards, Insights featured note, For Employers CTA |
| `CtaButton` | button-2 | Program track pages, Tool certificate window, Insights article cards |
| `OutlineButton` | button-3 | Home page |
| `Button` | (design-2) | Everywhere else |
