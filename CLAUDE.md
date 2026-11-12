# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**My Engine** — a frontend app for tracking vehicles: add cars of different types with their specs, track and remind about maintenance (ТО), log fuel records and trips. Node v24.14.0.

Current stage: **no backend** — the focus is markup/layout (верстка) and **mock data**. Don't introduce API clients or server code unless asked.

Planned backend: **Firebase** (Auth + Firestore, Cloud Functions/FCM for reminders later). There will be **no REST API backend**. Until Firebase is wired in, keep data access behind a separate layer (functions like `getCars()` / `addFuelLog()`) that returns mock data, with types in `src/shared/types`, so swapping in Firestore only replaces that layer and components stay untouched.

## Tasks / tickets

Tickets and task descriptions live in Notion (the "Projects" page). The link is intentionally not stored here because the repository is public; ask the owner for it if needed.

## Working agreement

- The owner writes the application code themselves. Do not implement features/components unprompted.
- Do not write code comments (applies to all files, including SCSS and config).
- Keep this CLAUDE.md up to date: update it whenever structure, aliases, tooling or conventions change.
- Claude's tasks, **only when explicitly requested**:
  - Build the SCSS design system (Telegram-style design system and color palette, **excluding** Liquid Glass).
  - Later: custom components.
  - Later: writing tests (no test runner is configured yet).

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (type-check, then bundle)
- `npm run lint` — ESLint over the repo (`lint:fix` to auto-fix)
- `npm run format` / `npm run format:check` — Prettier write / check
- `npm run preview` — serve the production build

No test script exists yet.

## Tests and git

Planned test levels: **unit, integration, ui, e2e** (no runner chosen or installed yet). Test files are committed; test outputs (`coverage`, `test-results`, `playwright-report`, `blob-report`, `.vitest`, screenshot actual/diff) are gitignored.

Environment files `.env`, `.env.*` (dev/stage/prod) are gitignored; only `.env.example` is committed. Keep `.env.example` in sync when adding variables.

## Stack / config notes

- React 19 + TypeScript 6 + Vite 8 (`@vitejs/plugin-react`), ESM (`"type": "module"`).
- `tsconfig.app.json` is strict about hygiene: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax` (use `import type` for types), `erasableSyntaxOnly` (no enums, namespaces, or constructor parameter properties).
- ESLint flat config (`eslint.config.js`): typescript-eslint recommended + react-hooks + react-refresh (components-only exports in component files) + `eslint-config-prettier` (last, disables formatting rules).
- Prettier (`.prettierrc.json`): no semicolons, single quotes, trailing commas, 100 columns, LF. Ignored paths in `.prettierignore`. Run `npm run format` before finishing work.
- Entry: `index.html` → `src/main.tsx` (imports `@styles/main.scss`).

## Path aliases

Defined in two places that must be kept in sync: `resolve.alias` in `vite.config.ts` and `paths` in `tsconfig.app.json`.

`@` → `src`, `@shared` → `src/shared`, `@assets` → `src/shared/assets`, `@styles` → `src/shared/assets/styles`.

Shared code lives in `src/shared` (`assets/{fonts,img,styles}`, `components`, `types`, `utils`).

## Styling / design system

The app is **desktop-first** (mobile is secondary): prefer `down()` for small-screen overrides.

Telegram-style dark-blue ("Night Blue") theme, no Liquid Glass. SCSS via `sass`.

- `src/shared/assets` is the global entry: pulls in fonts, reset, typography and emits `:root` CSS custom properties (`--color-*`, `--radius-*`, `--space-*`, `--shadow-*`) generated from the maps in `base/_vars.scss`.
- `base/_vars.scss` holds all tokens (`$theme` colour map, `$radius`, `$spacing`, `$font-size`, `$font-weight`, `$shadow`, `$breakpoints`, `$container-width`, `$z`) and accessor functions `color()`, `gradient()` (vertical gradient from `<name>-light` to `<name>`, e.g. `gradient('blue')`), `radius()`, `space()`, `fs()`, `fw()`, `shadow()`, `z()`. It must emit no CSS because it is injected everywhere. `color()` returns `var(--color-*)`.
- `core/_base.scss` (layout for `html` and `body`: `body` is the centered container with `max-width: $container-width` and safe-area padding; `html`/`body` are fixed to the viewport (`100dvh`, `overflow: hidden`) so the page never scrolls — scrolling must happen inside components (`#root` is `height: 100%`); there is no `main` element styling; also global thin scrollbars and `:focus-visible` ring), `core/_typography.scss` (fonts, headings, text utilities).
- `base/_mixins.scss` (`up`/`down`, `flex`, `center`, `truncate`, `surface`, `pressable`, `focus-ring`, ...).
- `vite.config.ts` injects `vars` and `mixins` into every `.scss` file via `css.preprocessorOptions.scss.additionalData`, so component styles use tokens and mixins without importing. This applies only to files Vite loads directly (component `.scss`, `main.scss`); partials pulled in via `@use` from `main.scss` (e.g. `core/*`) do not get the injection and must `@use '../base/vars' as *;` / mixins explicitly.
- `$theme` also contains the Telegram iOS icon palette (sampled from the Telegram mobile app): `blue`, `green`, `orange`, `cyan`, `red`, `gray`, `purple`, `indigo`, each with a `-light` variant for gradients. Surface colours (`bg`, `bg-secondary`) were also sampled from the app.
- New tokens go into `$theme` / the maps in `_vars.scss`; the `:root` variables follow automatically (add a new `@each` in `main.scss` for a new map category).
- Fonts: Inter (Light–Bold) in `src/shared/assets`, declared in `base/_fonts.scss` with `@assets/fonts` URLs (relative paths break because Vite resolves `url()` relative to the entry file).
