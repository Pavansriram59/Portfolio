# PAVAN // PLAYER 01

> A minimal, video-game-inspired personal developer portfolio built with **Angular 22**, **TypeScript**, **Tailwind CSS v4**, and **Anime.js v4**.

---

## 🎮 Overview

**PAVAN // PLAYER 01** reimagines the developer portfolio through a tactile AAA game interface:

- **Interactive Controller Navigation:** Centered vector game controller acting as the primary navigation hub.
- **Glowing HUD Tooltips:** Vector HUD callouts and targeting lines that react on button hover and keyboard focus.
- **Tactile Audio FX & Themes:** Web Audio API sound synthesizer with mute toggle and dark/light modes.
- **Section Modals:** Fast modal overlays for About, Experience, Skills, Projects, Playground, and Contact.
- **Kinetic Synthesizer Playground:** Interactive physics and waveform modulator built with Anime.js.
- **Decoupled Data Architecture:** All resume content, career history, and skill matrices are separated into pure TypeScript data files.

---

## 🕹️ Keyboard Controls

| Key | Controller Action | Destination |
|---|---|---|
| <kbd>A</kbd> | A Button | **Projects** (In Development) |
| <kbd>B</kbd> | B Button | **Experience** (Career History & Roles) |
| <kbd>X</kbd> | X Button | **Skills** (Technical Stack Matrix) |
| <kbd>Y</kbd> | Y Button | **Playground** (Kinetic Wave Synthesizer) |
| <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> / Arrows | D-Pad | **About** (Bio, Education & Philosophy) |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Menu Button | **Contact** (Email & Channels) |
| <kbd>Esc</kbd> | Cancel | **Close Active Section** |

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Angular 22](https://angular.dev/) (Zoneless, Signals, Standalone Components) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animation** | [Anime.js v4](https://animejs.com/) (Centralized `AnimationService`) |
| **Audio** | Native HTML5 Web Audio API Synthesizer |

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
Open `http://localhost:4200/` in your browser.

### 3. Production Build
```bash
npm run build
```
Build output is generated in `dist/portfolio/`.

---

## 📁 Project Structure

```
src/app/
├── core/
│   ├── data/                 # Static content (about, experience, skills, projects)
│   ├── models/               # Domain TypeScript interfaces
│   └── services/             # GameState, AnimationService, GameAudio, Theme
├── features/
│   ├── about/                # About bio & education view
│   ├── contact/              # Contact channels & links view
│   ├── experience/           # Career history & project impact view
│   ├── home/                 # Main homepage orchestration
│   ├── playground/           # Kinetic wave synthesizer view
│   ├── projects/             # Projects showcase view
│   └── skills/               # Technical skills matrix view
└── shared/
    └── components/
        ├── header-controls/   # Top branding, audio & theme toggle
        ├── minimal-controller/# Vector gamepad with interactive HUD tooltips
        ├── quick-nav/         # Destination callouts & footer button strip
        └── section-modal/     # Glassmorphism modal shell
```

---

## ✏️ Updating Content

Update portfolio content in `src/app/core/data/` with zero template changes:
- `about.data.ts` — Bio summary, role, contact info, and education.
- `experience.data.ts` — Company history, project metrics, and technologies.
- `skills.data.ts` — Categorized skills and tooling matrix.
- `projects.data.ts` — Personal and open-source project showcases.

---

## 📄 License

MIT &copy; 2026 Pavan Sriram. All rights reserved.
