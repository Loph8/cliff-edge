# Cliff Edge

A bilingual (English / 中文) explorer of 46 English- and Chinese-language sources on autism support in mainland China, built around one finding: research and services concentrate on children, and support drops off at age 18 (the "cliff edge").

Live: https://www.sophiali.us/cliff-edge/index.html

Built by Sophia Li from the annotated bibliography she compiled as a 2026 Non-Trivial Fellow.

## Features
- Full-text search across titles, authors, venues and annotations
- Filters by theme (9), language and life stage
- A clickable chart of which life stages the research covers
- One-click citation copy and links to each source
- Interface toggles between English and Chinese

## Stack
React 19 + TypeScript, built with Vite. Static site, no backend. Deployed on Vercel.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
```

## Add or edit a source
Everything lives in `src/data/sources.ts`. Copy an entry, give it the next `id`, and fill in every field. The chart and counts update automatically. Add the Simplified Chinese version of its note to `src/data/notes.zh.ts` under the same `id`.

## Deploy
The site lives at https://www.sophiali.us/cliff-edge/index.html, served as static files by the `my-website` repo. To publish a change:

```bash
npm run build -- --base=/cliff-edge/
```

Replace `public/cliff-edge/` in `my-website` with the contents of `dist/`, then merge to `main` there.

`deploy.sh` is the reusable script that publishes a static app to GitHub and Vercel. Running it here would create a second public address.
