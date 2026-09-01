# Portfolio 2026

Modern React portfolio for Leonardt Lauenstein — three targeted variants for different job applications.

## Routes

| Path | Role focus | CV |
|------|------------|-----|
| `/` | Email Engineer | `CV_Leonardt_2026.pdf` |
| `/design` | Design Engineer | `CV_Leonardt_2026_DesignEngineer.pdf` |
| `/front-end` | Front-end Developer | `CV_Leonardt_2026_FrontEnd.pdf` |

Each route mirrors tailored hero, stack, case studies, experience copy, and CV download.

## Stack

- **React 19** + TypeScript + Vite
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Motion** (`motion/react`) for scroll reveals and micro-interactions
- **Phosphor Icons** for consistent iconography
- Self-hosted fonts: Instrument Serif, DM Sans, JetBrains Mono

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build:cvs   # rebuild CV PDFs from cv/html/ (requires Google Chrome locally)
npm run build
npm run preview
```

CV sources: `cv/html/` + `cv/html/cv.css`. Built PDFs land in `public/` and are served at `/CV_Leonardt_2026*.pdf`. On Vercel, committed PDFs in `public/` are used if Chrome is unavailable during build.

## Deploy

Connect the repo to Vercel (framework: Vite). Set `VITE_SITE_URL` to your production domain. The `dist/` output includes the SPA and CV PDFs.
