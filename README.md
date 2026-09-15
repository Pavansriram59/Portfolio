# PAVAN OS — Futuristic Personal Operating System & Portfolio

> A minimal, architectural, and tactile personal developer operating system built with Angular 22, TypeScript, Tailwind CSS v4, Spartan UI, and Anime.js v4.

---

## ⚡ Overview

**PAVAN OS** is an interactive, static web operating system and portfolio designed to break away from generic resume templates. It features:
- **Gateway Landing Screen:** Monumental greeting, developer tagline, custom 60fps precision reticle cursor, and live system status indicators.
- **Cinematic Desktop Transition:** Smooth Anime.js gateway exit and desktop assembly kinematics.
- **Interactive Desktop Workspace:** 6 dedicated application windows with custom titlebars, telemetry footers, and floating taskbar dock.
- **Interactive Project Files (`PROJECTS.EXE`):** Dossiers with Problem/Solution breakdown, large visual preview schematics, metrics, and technology badges.
- **Decoupled Data Architecture:** All projects, career experience logs, and about data are stored in pure TypeScript files for zero-code-change updates.
- **No Backend / Zero-DB Resilience:** Pure client-side static compilation deployable globally to Vercel and GitHub Pages.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Angular 22](https://angular.dev/) (Standalone Components, Signals, Zoneless) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Type Checking) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first engine + OKLCH Design Tokens) |
| **UI Primitives** | [Spartan UI](https://spartan.ng/) (Headless `@spartan-ng/brain` + Owned `@spartan-ng/helm`) |
| **Kinetic Engine** | [Anime.js v4](https://animejs.com/) (Modular ESM Animation & Timeline Synthesizer) |
| **Static Deployment** | Vercel Edge / GitHub Pages CI/CD |

---

## 🚀 Quick Start (Local Development)

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
```

### 2. Start Development Server
```bash
npm start
```
Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any source files.

### 3. Production Build
```bash
npm run build
```
The optimized static build output will be placed in the `dist/portfolio/browser` directory.

---

## 📁 Project Architecture

```
src/
├── app/
│   ├── core/
│   │   ├── data/                     # Decoupled Data Files (Edit content here!)
│   │   │   ├── about.data.ts         # Bio, philosophy pillars, research interests
│   │   │   ├── experience.data.ts    # Career history, telemetry metrics, logs
│   │   │   └── projects.data.ts      # Project files, problem/solution, stack
│   │   ├── models/                   # TypeScript Type Interfaces
│   │   │   ├── experience.model.ts
│   │   │   └── project.model.ts
│   │   ├── services/
│   │   │   ├── os-session.service.ts # Gateway unlock & transition state
│   │   │   ├── os-window.service.ts  # Window manager & active app registry
│   │   │   ├── system-clock.service.ts # Live UTC/Local clock & latency ticker
│   │   │   └── theme.service.ts      # Signal-based dark/light mode
│   │   └── utils/
│   │       └── animation.utils.ts    # Anime.js v4 kinetic utilities & reduced-motion
│   ├── features/
│   │   ├── desktop/
│   │   │   ├── apps/                 # The 6 Dedicated OS Applications
│   │   │   │   ├── about-app.component.ts
│   │   │   │   ├── contact-app.component.ts
│   │   │   │   ├── experience-app.component.ts
│   │   │   │   ├── playground-app.component.ts
│   │   │   │   ├── projects-app.component.ts
│   │   │   │   └── skills-app.component.ts
│   │   │   └── os-desktop.component.ts # Main desktop workspace & dock
│   │   ├── home/
│   │   │   └── home.component.ts     # Desktop container
│   │   └── landing/
│   │       └── os-landing-gate.component.ts # Minimalist landing gateway
│   ├── shared/
│   │   ├── components/
│   │   │   ├── grain-overlay/        # Procedural SVG noise texture
│   │   │   ├── os-cursor/            # 60fps custom precision cursor follower
│   │   │   ├── os-hud-nav/           # Top HUD telemetry bar & app launcher
│   │   │   ├── os-terminal-footer/   # Bottom coordinates & protocol footer
│   │   │   └── os-window/            # Reusable OS window frame & modal
│   │   └── ui/                       # Spartan Helm directives (Button, Badge)
│   ├── app.ts                        # Root application shell
│   ├── app.config.ts                 # Router & provider configurations
│   └── app.routes.ts                 # Lazy routing definitions
├── public/                           # Static Assets (favicon, sitemap, robots, 404)
│   ├── 404.html                      # GitHub Pages SPA router fallback
│   ├── favicon.svg                   # Brand SVG Favicon
│   ├── robots.txt                    # Search engine crawler permissions
│   └── sitemap.xml                   # XML Sitemap
├── styles.css                        # Design tokens, OKLCH theme, base resets
└── index.html                        # SEO, Open Graph, Twitter Card metadata
```

---

## ✏️ Personalization Guide

Adding or editing content requires **zero component modifications**:

### 1. Edit Projects
Open [`src/app/core/data/projects.data.ts`](src/app/core/data/projects.data.ts) to add or edit project records:
```ts
{
  id: 'my-new-project',
  code: 'PRJ_05.APP',
  name: 'Project Name',
  tagline: 'Short architectural tagline',
  shortDescription: 'Overview of the project...',
  problem: 'The exact bottleneck or challenge faced...',
  solution: 'The technical engineering solution...',
  technologies: ['Angular 22', 'TypeScript', 'Tailwind CSS'],
  status: 'ACTIVE_DEPLOY',
  category: 'SYSTEMS',
  fileSize: '8.4 MB',
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  metrics: [{ label: 'PERF', value: '100/100' }],
  previewType: 'OS_KERNEL',
  previewAccentColor: '#22d3ee',
  previewHighlights: ['Key highlight 1', 'Key highlight 2']
}
```

### 2. Edit Experience / Career History
Open [`src/app/core/data/experience.data.ts`](src/app/core/data/experience.data.ts) to add or edit timeline entries.

### 3. Edit About & Philosophy
Open [`src/app/core/data/about.data.ts`](src/app/core/data/about.data.ts) to update personal bio, research interests, philosophy pillars, and human details.

---

## 🌐 Production Deployment

### Option A: Deploy to Vercel (Recommended — Zero Config)
1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository. Vercel automatically detects Angular, running `ng build` and outputting `dist/portfolio/browser`.
4. The included [`vercel.json`](vercel.json) configures single-page rewrite rules and asset caching automatically.

### Option B: Deploy to GitHub Pages (Automated CI/CD)
The repository includes an automated GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. In your GitHub repository, go to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Set the branch to `gh-pages` and folder to `/ (root)`.
4. Whenever you push to `main`, GitHub Actions will automatically build and deploy the portfolio.

#### Manual GitHub Pages Deploy:
```bash
# Build with your GitHub repo name as base-href:
npm run build:gh-pages

# Deploy directly:
npm run deploy:gh
```

---

## ♿ Accessibility & Performance Verification

- **Reduced Motion:** Fully complies with `prefers-reduced-motion` across all Anime.js kinetics and CSS transitions.
- **Keyboard Navigation:** Full focus rings (`focus-visible`), `Escape` to close active windows, `Enter`/`Space` to launch applications.
- **Color Contrast:** High-contrast OKLCH color spaces in both dark and light modes.
- **Bundle Optimization:** Sub-95KB initial transferred size, zero database runtime overhead.

---

## 📄 License

MIT License &copy; 2026 Pavan. All rights reserved.
