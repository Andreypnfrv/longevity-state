# Longevity State

Vite + React. 
Grid: countries × policy groups × fields. 
Cells show average claim scores; open for claims, then evidence + links.

## Launch

`npm install` → `npm run dev`

Build: `npm run build`. Preview static: `npm run preview`.

## Code

- `src/schema/` — types, enums, scoring rules (`index.ts`, `policyGroups.ts`).
- `src/countries/*.ts` — `CountryData` per country; register in `src/countries/index.ts`.
- `src/translations/` — labels for UI.
- `src/App.tsx` — view.

## QA
- not sure that IP is valued properly. So far from what i remember in Switzerland u have to buy it out, and in US it belongs to univerisities.

