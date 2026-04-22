# Bhargav Chellu — Portfolio

A personal portfolio site that doubles as a searchable gallery for the UI
snippet library I've built up over nine years of frontend work.

**Live site:** https://bhargavch19.github.io

## What's here

- `src/` — Vite + React 19 + TypeScript + Tailwind v4 source for the portfolio
- `scripts/parse-snippets.ts` — build-time extractor that turns
  `docs/SNIPPETS-SOURCE.md` into typed snippet data the site renders
- `docs/SNIPPETS-SOURCE.md` — the original 100+ snippet reference (source of
  truth; edit here and re-run the parser to update the gallery)
- `UI-code-snippets.docx` — the original Word companion, preserved for history
- `public/resume.docx` — current resume, downloadable from the site

## Local development

```bash
npm install
npm run dev       # starts Vite on http://localhost:5173 (runs the parser first)
npm run build     # regenerates snippets, type-checks, and builds ./dist
npm run preview   # serves the production build
```

## Deploy

Pushes to `main` deploy automatically via GitHub Actions
(`.github/workflows/deploy.yml`).

**One-time Pages setup (repo Settings → Pages):**

- Source: **GitHub Actions**

After that, every push to `main` runs the build + deploy workflow and publishes
to `https://bhargavch19.github.io`.

## Updating content

| What to change | Where |
| --- | --- |
| Profile / bio / contact info | `src/data/profile.ts` |
| Experience & education | `src/data/experience.ts` |
| Tech skills | `src/data/skills.ts` |
| Personal projects cards | `src/data/projects.ts` |
| Which 12 snippets are featured up top | `src/data/featured-snippets.ts` |
| Add / edit snippets | `docs/SNIPPETS-SOURCE.md`, then update the boundary list in `scripts/parse-snippets.ts` |
| Profile photo | drop a square JPG at `public/profile.jpg` |
| Resume | replace `public/resume.docx` |

## Credits

Built with [Vite](https://vite.dev), [React](https://react.dev),
[Tailwind CSS](https://tailwindcss.com), and
[prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer).
