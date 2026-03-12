# MeetFlow Frontend Scaffold

Next.js + TypeScript + Tailwind project scaffold for a portfolio-quality SaaS product concept: MeetFlow.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Small shadcn-style UI primitives (`button`, `card`, `badge`)

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```txt
src/
  app/
    (marketing)/
      page.tsx
      product/page.tsx
      solutions/page.tsx
      pricing/page.tsx
      layout.tsx
    (app)/
      dashboard/page.tsx
      meetings/page.tsx
      meetings/[id]/page.tsx
      actions/page.tsx
      notes/page.tsx
      team/page.tsx
      settings/page.tsx
      layout.tsx
    globals.css
    layout.tsx
  components/
    layout/
    shared/
    ui/
  features/
  lib/
  styles/
  types/
```

## Design Foundations

- Typography: `Manrope` + `JetBrains Mono`
- Tokens: color, spacing, radius, and elevation in `src/styles/tokens.css`
- Reusable wrappers: `Container`, `Section`, `SectionHeader`
- Base layout shells:
  - Marketing: sticky header + footer
  - Product app: sidebar + topbar + content region

## Deployment Readiness

- Project is ready for Vercel-compatible build (`npm run build`)
- `vercel.json` included for standard Next.js build/runtime defaults
