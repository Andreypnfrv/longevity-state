# Longevity State

Vite + React. 
Grid: countries × policy groups × fields. 
Cells show average claim scores; open for claims, then evidence + links.

## Launch

`npm install` → `npm run dev`

Build: `npm run build`. Preview static: `npm run preview`.

## Code

- `schema.ts` — types, enums, scoring rules.
- `countries/*.ts` — `CountryData` per country; register in `countries/index.ts`.
- `translations/` — labels for UI.
- `src/App.tsx` — view.