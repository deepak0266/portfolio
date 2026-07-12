# Deepak Baghel — Portfolio

A production-ready personal portfolio built with **React, TypeScript, Tailwind CSS, and Framer Motion**. Content is sourced entirely from Deepak Baghel's resume — no fabricated metrics or projects.

Live sections: Hero, About, Experience (expandable timeline), Projects (with case-study modals), Skills, Achievements, Education, Contact (mailto-based form, no backend), Footer.

## Tech stack

- **React 19 + TypeScript** — component architecture
- **Vite 8** — build tooling
- **Tailwind CSS v4** — styling via the `@tailwindcss/vite` plugin and CSS `@theme` design tokens
- **Framer Motion** — scroll reveals, page-load sequence, micro-interactions
- **react-icons** — iconography

No backend, no database, no external API calls at runtime — fully static, so it deploys cleanly to GitHub Pages.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Deploying to GitHub Pages

This repo ships with `.github/workflows/deploy.yml`, which builds and deploys `dist/` to GitHub Pages automatically on every push to `main`.

**One-time setup:**

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**.
3. Open `vite.config.ts` and set `BASE_PATH` to match your repository name exactly:
   ```ts
   const BASE_PATH = '/your-repo-name/'
   ```
   (If you deploy to a custom domain or a `username.github.io` root repo, set this to `/`.)
4. Update the two hardcoded canonical URLs to match your final domain:
   - `index.html` — `<link rel="canonical">`, Open Graph `og:url`, and the JSON-LD `url` field
   - `public/robots.txt` and `public/sitemap.xml`
5. Push to `main`. The Action will build and publish automatically. Your site will be live at `https://<username>.github.io/<repo-name>/`.

**Manual deploy (alternative):** run `npm run build`, then push the contents of `dist/` to a `gh-pages` branch using a tool like `gh-pages` or by configuring Pages to serve from `/docs` after copying `dist` there.

## Customization

| What | Where |
|---|---|
| All resume content (experience, projects, skills, education, achievements) | `src/data/resume.ts` — single source of truth, edit here only |
| Color palette / typography tokens | `src/index.css` (`@theme` block) |
| Section order | `src/App.tsx` |
| Resume PDF served by the "Resume" button | `public/resume-deepak-baghel.pdf` — replace with an updated export when your resume changes |
| Role ticker text in the hero | `src/components/RoleTicker.tsx` |
| Nav links | `src/components/Nav.tsx` |

## Folder structure

```
src/
  components/     Reusable UI: Nav, Section wrapper, ProjectModal, Toast, LoadingScreen, ScrollProgress, RoleTicker
  sections/       Page sections: Hero, About, Experience, Projects, Skills, Achievements, Education, Contact, Footer
  hooks/          useTheme (dark/light persistence), useScroll (progress + active-section tracking)
  data/           resume.ts — all real content, typed
public/           favicon, manifest, robots.txt, sitemap.xml, resume PDF, 404 fallback
.github/workflows/deploy.yml   GitHub Actions → GitHub Pages pipeline
```

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`)
- Visible focus states on all interactive elements
- `prefers-reduced-motion` respected — animations and smooth scroll are disabled for users who request it
- ARIA labels on icon-only buttons, `aria-expanded`/`aria-current` on interactive nav/timeline elements
- Color palette checked for contrast against the dark background

## What's intentionally out of scope

To keep this a genuinely maintainable, real deliverable rather than dead boilerplate, the following from a typical "everything" portfolio brief were **not** included, since they had no real content or purpose yet:

- Blog and testimonials (no posts/quotes exist yet — add a `src/sections/Blog.tsx` following the existing `Section` pattern when you have content)
- Three.js/GSAP scenes and a command palette (added complexity with no functional payoff for a resume-driven single page)
- Full offline-capable PWA (manifest + icon are in place; add a service worker if you need offline caching)

## License

Personal portfolio — content and resume data belong to Deepak Baghel. Code structure free to reference for your own portfolio.
