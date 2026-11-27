# Cliff Edge

A bilingual (English / 中文) explorer of 46 English- and Chinese-language sources on autism support in mainland China, built around one finding: research and services concentrate on children, and support drops off at age 18 (the "cliff edge").

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
```bash
chmod +x deploy.sh
./deploy.sh cliff-edge public
```
See the comments at the top of `deploy.sh` for one-time setup.
