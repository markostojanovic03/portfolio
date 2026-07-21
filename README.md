# Portfolio — Marko Stojanović

Personal portfolio site built with React, TypeScript, and Tailwind CSS.

**Live:** _add link here once deployed_

## Design concept

The site borrows its visual language from football — the world I competed in
professionally before moving into software engineering. Projects are presented
as "match cards" (fixture, formation, result), and the About section includes
a short timeline of the transition from professional football to code.

## Tech stack

React + TypeScript, Vite, Tailwind CSS v4.

## Running locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Building for production

```bash
npm run build      # outputs to dist/
npm run preview     # preview the production build locally
```

## Structure

```
src/
├── components/
│   ├── Hero.tsx        Name, tagline, contact links
│   ├── About.tsx        Bio + career-transition timeline
│   ├── Skills.tsx        Grouped skill tags
│   ├── Projects.tsx      Project "match cards"
│   └── Footer.tsx
├── App.tsx
└── index.css             Design tokens (colors, fonts) + Tailwind import
```

## Customizing

- **Colors/fonts:** all defined as CSS variables in `src/index.css` under `@theme`
- **Projects:** edit the `projects` array in `src/components/Projects.tsx` to add new ones
- **Timeline:** edit the `timeline` array in `src/components/About.tsx`
