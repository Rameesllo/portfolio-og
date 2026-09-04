# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:


## React Compiler

# Ramees Portfolio

Personal portfolio website for Ramees, a full-stack developer building modern web applications and practical digital systems.

The site showcases selected projects, technical skills, experience, statistics, contact details, and interactive project details.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Oxlint

## Getting Started

### Requirements

- Node.js 20 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Run Oxlint |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
src/
  components/       Reusable portfolio sections and interactive views
  data/             Personal, project, skills, and experience content
  types/            Shared TypeScript types
  assets/           Local images, icons, and resume files
  App.tsx           Application shell and section navigation
```

## Updating Portfolio Content

Most portfolio content is maintained in [`src/data/portfolioData.ts`](src/data/portfolioData.ts). Update the personal information, projects, skills, statistics, or experience there.

Local images in `src/assets/` should be imported into TypeScript or React files and passed to image components as imported variables. This lets Vite resolve and fingerprint the files correctly for production builds.

## Production Build

Run the build before deploying:

```bash
npm run build
```

The generated files are written to `dist/`. The site is a client-side Vite application and can be deployed to any static hosting provider that supports SPA fallback routing.
