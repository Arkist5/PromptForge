# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Prompt Forge is a React + TypeScript web app that helps users break creative blocks by turning random word "materials" into polished prompts for LLMs. The core metaphor is a "workbench, not a slot machine" - users craft ideas rather than gamble for them.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Plain CSS with CSS custom properties (no framework)
- **State Management:** React useState only
- **Hosting:** GitHub Pages (static build)

## Architecture

### Project Structure
```
src/
├── main.tsx              # React entry point
├── App.tsx               # Main app, state management, orchestration
├── App.css               # App layout styles
├── index.css             # Global styles, CSS variables, reset
├── components/           # UI components (Header, ModeSelector, WordTile, etc.)
├── utils/                # Utility functions (promptBuilder)
├── data/                 # Static data (wordList)
└── types/                # TypeScript interfaces
```

### Core Data Types
- `CreationMode`: 'app' | 'game' | 'image' | 'video' | 'story' | 'random'
- `Material`: { id: string, word: string, isSpinning: boolean }
- `FeedbackMessage`: { type: 'success' | 'error', text: string }

### Key Behaviors
- Default: 3 materials on load, maximum 5
- Words must not repeat among currently visible materials
- Shuffle animation: 400-500ms with 6-8 word cycles before landing
- Respect `prefers-reduced-motion` (instant swap, no animation)

## Design System

Uses CSS custom properties defined in `index.css`:
- Dark theme with gold accents (`--accent-primary: #d4a254`)
- Backgrounds: near-black (`--bg-primary: #0f1419`)
- Fonts: Inter for body, JetBrains Mono for word tiles
- Mobile-first responsive design

## Prompt Builder

Each mode has a specific prompt template in `src/utils/promptBuilder.ts`:
- **App/Game:** Generates project specification with Overview, Core Features, Tech Stack, Future Enhancements
- **Image:** Optimized for Nano Banana Pro / Gemini with Subject, Setting, Style, Details
- **Video:** Optimized for Sora with Scene, Visual Style, Movement, Duration
- **Story:** Generates complete ~1,500 word short stories
- **Random:** Picks a random mode and uses its template

## Required Words

The word list must always include: `shark`, `fist`

## Deployment

GitHub Pages deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`). Pushing to `main` triggers a build and deploy.

The Vite `base` is set to `/PromptForge/` in `vite.config.ts` to match the repository name.
