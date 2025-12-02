# Prompt Forge 🔥

**Raw words. Refined ideas.**

Prompt Forge is a web app that helps developers and makers break creative blocks by turning random word "materials" into polished prompts for ChatGPT and other LLMs.

---

## Table of Contents

1. [Vision & Core Concept](#vision--core-concept)
2. [User Persona](#user-persona)
3. [Tech Stack](#tech-stack)
4. [Design System](#design-system)
5. [Project Structure](#project-structure)
6. [TypeScript Interfaces](#typescript-interfaces)
7. [Component Breakdown](#component-breakdown)
8. [Core UX Flow](#core-ux-flow)
9. [Word List Strategy](#word-list-strategy)
10. [Prompt Templates](#prompt-templates)
11. [Animation Specifications](#animation-specifications)
12. [Error Handling](#error-handling)
13. [Accessibility](#accessibility)
14. [Phase 1 Implementation Tasks](#phase-1-implementation-tasks)
15. [Phase 2 — API Integration](#phase-2--api-integration)
16. [Phase 3 — Polish & Extras](#phase-3--polish--extras)
17. [Starter Word List](#starter-word-list)

---

## Vision & Core Concept

Prompt Forge is a **workbench, not a slot machine**. Users aren't gambling for ideas — they're crafting them.

The app draws random word "materials" that users can refine, re-smelt, or add to. When ready, they "forge" these materials into a well-structured prompt optimized for their chosen creation type (App, Game, Image, Video, Story).

**The vibe:** Industrial-creative. A digital blacksmith's workshop where raw words become refined ideas.

---

## User Persona

**Primary User:** A developer or maker looking for side project inspiration.

- Has technical skills to build what they imagine
- Occasionally stuck in "what should I build?" paralysis
- Appreciates tools that respect their time
- Likely at a computer, but may also browse on mobile

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18+ with TypeScript |
| Build Tool | Vite |
| Styling | Plain CSS (no framework) |
| State Management | React useState (no external library) |
| Hosting | GitHub Pages (static build) |
| Repository | `prompt-forge` → `username.github.io/prompt-forge` |

**No backend or database in Phase 1.**

---

## Design System

### Color Palette

```css
:root {
  /* Backgrounds */
  --bg-primary: #0f1419;       /* Near-black base */
  --bg-secondary: #1a2332;     /* Dark slate panels */
  --bg-elevated: #243044;      /* Cards, tiles */
  
  /* Accent — Warm Gold */
  --accent-primary: #d4a254;   /* Primary gold */
  --accent-hover: #e8b968;     /* Lighter gold for hover */
  --accent-muted: #8b7355;     /* Subdued gold for borders */
  
  /* Text */
  --text-primary: #f0f0f0;     /* Primary text */
  --text-secondary: #a0a8b4;   /* Secondary/muted text */
  --text-on-accent: #0f1419;   /* Text on gold buttons */
  
  /* Feedback */
  --success: #4ade80;          /* Green for "Copied!" */
  --error: #f87171;            /* Red for errors */
  
  /* Misc */
  --border-subtle: #2a3a4f;    /* Subtle borders */
  --glow-gold: rgba(212, 162, 84, 0.3); /* Subtle glow effect */
}
```

### Typography

```css
:root {
  /* Font Families */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 2rem;      /* 32px */
  
  /* Font Weights */
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
}
```

**Usage:**
- Body text: `var(--font-body)` at `var(--text-base)`
- Word tiles: `var(--font-mono)` at `var(--text-lg)` — reinforces "raw materials" feel
- Headers: `var(--font-body)` at `var(--weight-semibold)`
- Buttons: `var(--font-body)` at `var(--weight-medium)`

### Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
}
```

### Border Radius

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
  --shadow-glow: 0 0 20px var(--glow-gold);
}
```

---

## Project Structure

```
prompt-forge/
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Main application component
│   ├── App.css               # App-specific styles
│   ├── index.css             # Global styles, CSS variables, reset
│   ├── components/
│   │   ├── Header.tsx        # Logo, tagline
│   │   ├── ModeSelector.tsx  # Creation type buttons
│   │   ├── MaterialTiles.tsx # Word tile container
│   │   ├── WordTile.tsx      # Individual word tile with refine button
│   │   ├── ActionBar.tsx     # Re-smelt, Add material buttons
│   │   ├── ForgeButton.tsx   # Main forge action
│   │   ├── PromptOutput.tsx  # Generated prompt display + copy
│   │   └── InlineMessage.tsx # Success/error feedback
│   ├── hooks/
│   │   └── useWordDrawer.ts  # Word selection logic with no-repeat handling
│   ├── utils/
│   │   └── promptBuilder.ts  # Prompt generation per mode
│   ├── data/
│   │   └── wordList.ts       # Word array + getRandomWord()
│   └── types/
│       └── index.ts          # TypeScript interfaces
├── public/
│   └── favicon.svg           # Forge-themed favicon
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## TypeScript Interfaces

```typescript
// src/types/index.ts

/** The types of creations users can forge */
export type CreationMode = 'app' | 'game' | 'image' | 'video' | 'story' | 'random';

/** A single word material */
export interface Material {
  id: string;          // Unique ID for React keys
  word: string;        // The actual word
  isSpinning: boolean; // Animation state
}

/** Application state */
export interface ForgeState {
  mode: CreationMode;
  materials: Material[];
  generatedPrompt: string | null;
  isForging: boolean;
  feedback: FeedbackMessage | null;
}

/** Inline feedback messages */
export interface FeedbackMessage {
  type: 'success' | 'error';
  text: string;
}

/** Word drawer hook return type */
export interface UseWordDrawerReturn {
  drawWord: (excludeWords: string[]) => string;
  drawMultiple: (count: number, excludeWords: string[]) => string[];
}
```

---

## Component Breakdown

### `App.tsx`
**Responsibility:** Main container, state management, orchestration.

**State:**
```typescript
const [mode, setMode] = useState<CreationMode>('app');
const [materials, setMaterials] = useState<Material[]>([]);
const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
const [feedback, setFeedback] = useState<FeedbackMessage | null>(null);
```

**Behavior:**
- On mount: Auto-draw 3 materials
- Manages all state updates
- Passes handlers down to children

---

### `Header.tsx`
**Responsibility:** Display logo and tagline.

**Props:** None

**Renders:**
- "Prompt Forge" title with optional 🔥 icon
- "Raw words. Refined ideas." tagline

---

### `ModeSelector.tsx`
**Responsibility:** Let user choose creation type.

**Props:**
```typescript
interface ModeSelectorProps {
  currentMode: CreationMode;
  onModeChange: (mode: CreationMode) => void;
}
```

**Renders:**
- 6 buttons: App, Game, Image, Video, Story, Random
- Active state styling on selected mode

---

### `MaterialTiles.tsx`
**Responsibility:** Container for word tiles.

**Props:**
```typescript
interface MaterialTilesProps {
  materials: Material[];
  onRefine: (id: string) => void;
}
```

**Renders:**
- Grid/flex container of `WordTile` components

---

### `WordTile.tsx`
**Responsibility:** Display single word with refine button.

**Props:**
```typescript
interface WordTileProps {
  material: Material;
  onRefine: () => void;
}
```

**Renders:**
- Word text (monospace font)
- "↻" refine button
- Spinning animation state when `isSpinning` is true

---

### `ActionBar.tsx`
**Responsibility:** Secondary actions.

**Props:**
```typescript
interface ActionBarProps {
  materialCount: number;
  maxMaterials: number;
  onResmelt: () => void;
  onAddMaterial: () => void;
}
```

**Renders:**
- "Re-smelt all" button (always visible)
- "Add material" button (hidden when at max 5)

---

### `ForgeButton.tsx`
**Responsibility:** Primary forge action.

**Props:**
```typescript
interface ForgeButtonProps {
  disabled: boolean;
  isForging: boolean;
  onClick: () => void;
}
```

**Renders:**
- "Forge Prompt" button
- Disabled state when no materials or during forging
- Gold accent styling

---

### `PromptOutput.tsx`
**Responsibility:** Display generated prompt with copy functionality.

**Props:**
```typescript
interface PromptOutputProps {
  prompt: string | null;
  onCopy: () => void;
  feedback: FeedbackMessage | null;
}
```

**Renders:**
- Prompt text in a styled container
- "Copy Prompt" button
- Inline feedback message

---

### `InlineMessage.tsx`
**Responsibility:** Show transient success/error messages.

**Props:**
```typescript
interface InlineMessageProps {
  message: FeedbackMessage | null;
}
```

**Renders:**
- Fade-in text, auto-clears after 2 seconds
- Green for success, red for error

---

## Core UX Flow

### On App Load
1. App mounts
2. Auto-draw 3 random materials
3. Default mode: "App"
4. User sees 3 word tiles, ready to interact

### User Interactions

| Action | Result |
|--------|--------|
| Click mode button | Updates `mode` state, clears generated prompt |
| Click "↻" on tile | That tile shuffles (400-500ms animation), lands on new word (excluding currently visible words) |
| Click "Re-smelt all" | All tiles shuffle simultaneously, all new words |
| Click "Add material" | New tile appears (up to 5 max), with shuffle animation to reveal word |
| Click "Forge Prompt" | Generates prompt string based on mode + materials, displays in output area |
| Click "Copy Prompt" | Copies to clipboard, shows "Copied!" inline message |

### Forge Button State
- **Disabled** when: `materials.length === 0` OR any material is spinning
- **Enabled** when: All tile slots have settled words

---

## Word List Strategy

### Phase 1 Specifications
- **Total words:** 200-300
- **Repeat handling:** Avoid repeats only among currently visible materials
- **Future:** Category packs (office, garage, chemical, etc.)

### Categories
| Category | Examples | ~Count |
|----------|----------|--------|
| Objects/Nouns | lighthouse, calendar, mirror, vault, shark | 80 |
| Actions/Verbs | chase, negotiate, excavate, broadcast | 50 |
| Qualities/Adjectives | ancient, portable, forbidden, layered | 40 |
| Domains/Themes | ocean, finance, childhood, underground | 40 |
| Wildcards | glitch, paradox, ritual, echo, fist | 40 |

### Required Words
The following words **must** be included:
- `shark`
- `fist`

### `getRandomWord()` Implementation

```typescript
// src/data/wordList.ts

export const wordList: string[] = [
  // ... 200-300 words
];

/**
 * Get a random word, excluding specified words.
 * @param exclude - Words to exclude (currently visible materials)
 * @returns A random word not in the exclude list
 */
export function getRandomWord(exclude: string[] = []): string {
  const available = wordList.filter(word => !exclude.includes(word));
  
  // Fallback if somehow all words are excluded
  if (available.length === 0) {
    return wordList[Math.floor(Math.random() * wordList.length)];
  }
  
  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Get multiple random words, none repeating.
 * @param count - Number of words to draw
 * @param exclude - Additional words to exclude
 * @returns Array of unique random words
 */
export function getRandomWords(count: number, exclude: string[] = []): string[] {
  const words: string[] = [];
  const excluded = [...exclude];
  
  for (let i = 0; i < count; i++) {
    const word = getRandomWord(excluded);
    words.push(word);
    excluded.push(word);
  }
  
  return words;
}
```

---

## Prompt Templates

### Overview
Each mode generates a different prompt optimized for its target output.

**Tone:** Casual and friendly ("Hey! I need...")

**Structure:** All prompts include:
1. Greeting/context
2. The creation type
3. The required words
4. Output format instructions

---

### App Mode

```typescript
function buildAppPrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need an app idea that incorporates these words: ${wordList}. 

Please create a detailed markdown project specification that includes:
- **Overview/Concept**: What the app does and the problem it solves
- **Core Features (MVP)**: The essential features for a first version
- **Tech Stack Suggestions**: Recommended technologies to build it
- **Future Enhancements**: Ideas for v2 and beyond

Make it something a solo developer could realistically build. Be creative with how the words connect to the concept — they don't have to be literal!`;
}
```

---

### Game Mode

```typescript
function buildGamePrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need a game idea that incorporates these words: ${wordList}.

Please create a detailed markdown project specification that includes:
- **Overview/Concept**: The core game premise and what makes it fun
- **Core Features (MVP)**: Essential mechanics for a playable first version
- **Tech Stack Suggestions**: Recommended engine/framework to build it
- **Future Enhancements**: Ideas for expanded content and features

Make it something an indie developer or small team could realistically build. Be creative with how the words influence the mechanics, story, or aesthetic!`;
}
```

---

### Image Mode (Optimized for Nano Banana Pro)

```typescript
function buildImagePrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need a detailed image prompt for AI image generation (Nano Banana Pro / Gemini) that incorporates these words: ${wordList}.

Please create a vivid, detailed image prompt that includes:
- **Subject**: The main focus of the image
- **Setting/Environment**: Where the scene takes place
- **Style**: Artistic style, mood, lighting
- **Details**: Specific visual elements, colors, composition

Format the final prompt as a single paragraph I can paste directly into the image generator. Be creative and unexpected with how the words combine visually!`;
}
```

---

### Video Mode (Optimized for Sora)

```typescript
function buildVideoPrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need a video concept for AI video generation (Sora) that incorporates these words: ${wordList}.

Please create a compelling video prompt that includes:
- **Scene Description**: What's happening in the video
- **Visual Style**: Cinematography, color grading, mood
- **Movement**: Camera motion, subject action
- **Duration Suggestion**: How long the clip should be

Format the final prompt as a single paragraph I can paste directly into Sora. Focus on motion and visual storytelling!`;
}
```

---

### Story Mode

```typescript
function buildStoryPrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need you to write a complete short story (approximately 1,500 words) that incorporates these words: ${wordList}.

Requirements:
- All the words should appear meaningfully in the story
- Include a clear beginning, middle, and end
- Create at least one memorable character
- Build to a satisfying conclusion or twist

Be creative with genre and tone — surprise me!`;
}
```

---

### Random Mode

```typescript
function buildRandomPrompt(words: string[]): string {
  const modes: CreationMode[] = ['app', 'game', 'image', 'video', 'story'];
  const randomMode = modes[Math.floor(Math.random() * modes.length)];
  
  // Use the appropriate builder
  switch (randomMode) {
    case 'app': return buildAppPrompt(words);
    case 'game': return buildGamePrompt(words);
    case 'image': return buildImagePrompt(words);
    case 'video': return buildVideoPrompt(words);
    case 'story': return buildStoryPrompt(words);
  }
}
```

---

### Master Prompt Builder

```typescript
// src/utils/promptBuilder.ts

import type { CreationMode } from '../types';

export function buildPrompt(mode: CreationMode, words: string[]): string {
  switch (mode) {
    case 'app':
      return buildAppPrompt(words);
    case 'game':
      return buildGamePrompt(words);
    case 'image':
      return buildImagePrompt(words);
    case 'video':
      return buildVideoPrompt(words);
    case 'story':
      return buildStoryPrompt(words);
    case 'random':
      return buildRandomPrompt(words);
  }
}
```

---

## Animation Specifications

### Word Tile Shuffle Animation

**Duration:** 400-500ms total

**Behavior:**
1. Tile enters "spinning" state
2. Word text rapidly cycles through 6-8 random words (every 50-60ms)
3. Final word "lands" with a subtle settle effect
4. Spinning state ends

**CSS Implementation:**

```css
.word-tile {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.word-tile.spinning .word-text {
  animation: shuffle 0.5s steps(8) forwards;
}

.word-tile.settled {
  animation: settle 0.15s ease-out;
}

@keyframes settle {
  0% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
```

**JavaScript Implementation:**

```typescript
async function spinWord(
  tileId: string, 
  finalWord: string,
  setMaterials: React.Dispatch<React.SetStateAction<Material[]>>
): Promise<void> {
  const shuffleCount = 8;
  const intervalMs = 50;
  
  // Mark as spinning
  setMaterials(prev => prev.map(m => 
    m.id === tileId ? { ...m, isSpinning: true } : m
  ));
  
  // Cycle through random words
  for (let i = 0; i < shuffleCount; i++) {
    await sleep(intervalMs);
    setMaterials(prev => prev.map(m => 
      m.id === tileId ? { ...m, word: getRandomWord() } : m
    ));
  }
  
  // Land on final word
  setMaterials(prev => prev.map(m => 
    m.id === tileId ? { ...m, word: finalWord, isSpinning: false } : m
  ));
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
```

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  .word-tile,
  .word-tile.spinning .word-text,
  .word-tile.settled {
    animation: none !important;
    transition: none !important;
  }
}
```

When reduced motion is preferred, words swap instantly without shuffle.

---

## Error Handling

### Clipboard API

```typescript
async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch {
      return false;
    }
  }
}
```

### Feedback Messages

| Scenario | Message | Type |
|----------|---------|------|
| Copy success | "Copied!" | success |
| Copy failure | "Couldn't copy — try selecting manually" | error |

### Inline Message Behavior

```typescript
function showFeedback(message: FeedbackMessage) {
  setFeedback(message);
  setTimeout(() => setFeedback(null), 2000);
}
```

---

## Accessibility

### Phase 1 (Minimal)
- All interactive elements are native `<button>` elements (keyboard accessible by default)
- Focus states visible (use browser defaults or subtle gold outline)
- Color is not the only indicator of state

### Reduced Motion
- Respect `prefers-reduced-motion` media query
- Skip shuffle animation, swap words instantly

### Future Phases
- Full keyboard navigation flow
- ARIA labels for screen readers
- WCAG AA color contrast compliance

---

## Phase 1 Implementation Tasks

### Task 1: Project Scaffold
**File:** Project root

**Steps:**
1. Run `npm create vite@latest prompt-forge -- --template react-ts`
2. Navigate into directory, run `npm install`
3. Clear boilerplate from `App.tsx`, `App.css`, `index.css`
4. Verify dev server works: `npm run dev`

**Acceptance:** Empty React app renders without errors.

---

### Task 2: Design System Setup
**File:** `src/index.css`

**Steps:**
1. Add CSS reset (box-sizing, margin reset)
2. Add all CSS custom properties from Design System section
3. Import fonts (Inter from Google Fonts, JetBrains Mono)
4. Set base styles (body background, font-family, color)
5. Add reduced-motion media query

**Acceptance:** App has dark background, correct fonts load.

---

### Task 3: Type Definitions
**File:** `src/types/index.ts`

**Steps:**
1. Create file with all interfaces from TypeScript Interfaces section
2. Export all types

**Acceptance:** No TypeScript errors, types importable.

---

### Task 4: Word List
**File:** `src/data/wordList.ts`

**Steps:**
1. Create array of 200-300 words (see Starter Word List section)
2. Ensure "shark" and "fist" are included
3. Implement `getRandomWord()` function
4. Implement `getRandomWords()` function

**Acceptance:** Functions return random words, exclusion works correctly.

---

### Task 5: Prompt Builder
**File:** `src/utils/promptBuilder.ts`

**Steps:**
1. Implement all mode-specific prompt functions
2. Implement master `buildPrompt()` function
3. Handle 'random' mode selecting a random other mode

**Acceptance:** Each mode returns correctly formatted prompt string.

---

### Task 6: Header Component
**File:** `src/components/Header.tsx`

**Steps:**
1. Create component with title "Prompt Forge" and optional 🔥
2. Add tagline "Raw words. Refined ideas."
3. Style with design system tokens

**Acceptance:** Header renders with correct styling.

---

### Task 7: ModeSelector Component
**File:** `src/components/ModeSelector.tsx`

**Steps:**
1. Create 6 mode buttons
2. Accept `currentMode` and `onModeChange` props
3. Style active state with gold accent
4. Style inactive states with subtle appearance

**Acceptance:** Clicking buttons calls handler, active state visible.

---

### Task 8: WordTile Component
**File:** `src/components/WordTile.tsx`

**Steps:**
1. Display word in monospace font
2. Add "↻" refine button
3. Handle spinning state (conditional class)
4. Style tile with elevated background, gold border-subtle

**Acceptance:** Tile renders word, button clickable, spinning class applies.

---

### Task 9: MaterialTiles Component
**File:** `src/components/MaterialTiles.tsx`

**Steps:**
1. Map over materials array
2. Render WordTile for each
3. Style as responsive grid/flex (1-3 columns based on viewport)

**Acceptance:** Multiple tiles render in grid layout.

---

### Task 10: ActionBar Component
**File:** `src/components/ActionBar.tsx`

**Steps:**
1. "Re-smelt all" button (always visible)
2. "Add material" button (hidden when count >= 5)
3. Style as secondary buttons (outlined, not filled)

**Acceptance:** Buttons render, Add hides at max count.

---

### Task 11: ForgeButton Component
**File:** `src/components/ForgeButton.tsx`

**Steps:**
1. Primary gold button "Forge Prompt"
2. Accept `disabled` and `onClick` props
3. Disabled state styling (muted, no pointer)
4. Prominent styling when enabled

**Acceptance:** Button disabled until materials ready, gold when enabled.

---

### Task 12: InlineMessage Component
**File:** `src/components/InlineMessage.tsx`

**Steps:**
1. Conditionally render message text
2. Style success (green) vs error (red)
3. Fade-in animation

**Acceptance:** Message appears and has correct color.

---

### Task 13: PromptOutput Component
**File:** `src/components/PromptOutput.tsx`

**Steps:**
1. Display prompt text in styled container
2. "Copy Prompt" button
3. Include InlineMessage for feedback
4. Only render when prompt exists

**Acceptance:** Prompt displays, copy button visible, feedback shows.

---

### Task 14: App Integration
**File:** `src/App.tsx`

**Steps:**
1. Set up all state (mode, materials, prompt, feedback)
2. Auto-draw 3 materials on mount (useEffect)
3. Implement all handlers:
   - `handleModeChange`
   - `handleRefine`
   - `handleResmelt`
   - `handleAddMaterial`
   - `handleForge`
   - `handleCopy`
4. Wire up all components
5. Add layout styling (centered, max-width, padding)

**Acceptance:** Full flow works — draw, refine, resmelt, add, forge, copy.

---

### Task 15: Shuffle Animation
**File:** `src/App.tsx` + `src/index.css`

**Steps:**
1. Implement `spinWord` function with cycling effect
2. Add CSS classes for spinning state
3. Add settle animation
4. Test reduced-motion behavior

**Acceptance:** Words shuffle before landing, instant swap if reduced motion.

---

### Task 16: Responsive Polish
**File:** `src/App.css` and component styles

**Steps:**
1. Mobile layout (single column, full-width buttons)
2. Desktop layout (centered, max-width ~600px)
3. Test both viewports

**Acceptance:** Looks intentional on both mobile and desktop.

---

### Task 17: Build & Deploy Setup
**File:** `vite.config.ts`, `package.json`

**Steps:**
1. Set `base: '/prompt-forge/'` in Vite config
2. Add deploy script or GitHub Action
3. Test production build: `npm run build && npm run preview`

**Acceptance:** Build succeeds, preview works, ready for GitHub Pages.

---

## Phase 2 — API Integration

**Goal:** Click "Forge Idea" and get the finished idea directly from an AI API.

### Planned Features
- Backend serverless function (Vercel/Netlify) or API route
- Accepts `{ words, mode }` payload
- Constructs prompt, calls OpenAI/Anthropic API
- Returns generated idea text
- API key stored server-side only (never in browser)

### Frontend Changes
- Add "Forge Idea" button alongside "Forge Prompt"
- Loading state: "Forging..." with animation
- Display AI response in result card
- Keep "Forge Prompt + Copy" as manual backup

---

## Phase 3 — Polish & Extras

### Mode-Specific Prompt Refinements
- **App:** Focus on problem, user, feature, monetization
- **Game:** Genre, mechanics, progression, art style
- **Image:** Vivid visual description, style, lighting
- **Video:** Hook, premise, structure
- **Story:** Character, conflict, setting, twist

### Difficulty/Scope Control
- Slider or presets: "Tiny side project" → "Big concept"

### Better Feedback
- Toast notifications instead of inline messages
- Subtle sound effects (optional)

### Local History
- Store in `localStorage`: mode, materials, prompt
- "Reforge this combo" button
- Sidebar on desktop for history

### Visual Flair
- Ember gradient on header/borders
- Glow pulse on "Forge Prompt" click
- Tile "heat" effect when shuffling

### Future Extras
- Export prompts as markdown/JSON
- Workspace presets ("SaaS mode", "Game jam", "Image prompts")
- Word category packs (office, garage, chemical, etc.)
- Optional "Kid mode" with safer word list

---

## Starter Word List

Here's a curated list of ~250 words across all categories. All words are lowercase for consistency.

```typescript
export const wordList: string[] = [
  // === REQUIRED ===
  'shark', 'fist',
  
  // === OBJECTS / NOUNS ===
  'lighthouse', 'calendar', 'mirror', 'vault', 'compass',
  'umbrella', 'lantern', 'telescope', 'anchor', 'hourglass',
  'typewriter', 'vinyl', 'camera', 'suitcase', 'ladder',
  'bridge', 'tunnel', 'fountain', 'statue', 'windmill',
  'rocket', 'submarine', 'helicopter', 'bicycle', 'skateboard',
  'piano', 'guitar', 'drum', 'microphone', 'speaker',
  'mask', 'crown', 'key', 'lock', 'chain',
  'sword', 'shield', 'bow', 'arrow', 'hammer',
  'candle', 'flame', 'smoke', 'ash', 'ember',
  'crystal', 'gem', 'pearl', 'coin', 'treasure',
  'map', 'scroll', 'book', 'letter', 'stamp',
  'clock', 'bell', 'whistle', 'horn', 'siren',
  'nest', 'web', 'hive', 'cocoon', 'shell',
  'bone', 'skull', 'tooth', 'claw', 'feather',
  'seed', 'root', 'vine', 'thorn', 'petal',
  'storm', 'lightning', 'thunder', 'rainbow', 'fog',
  
  // === ACTIONS / VERBS ===
  'chase', 'negotiate', 'excavate', 'broadcast', 'calibrate',
  'dissolve', 'ignite', 'shatter', 'weave', 'carve',
  'whisper', 'shout', 'sing', 'dance', 'sprint',
  'climb', 'dive', 'float', 'sink', 'soar',
  'build', 'destroy', 'repair', 'transform', 'evolve',
  'hide', 'seek', 'discover', 'reveal', 'conceal',
  'capture', 'release', 'escape', 'pursue', 'evade',
  'connect', 'disconnect', 'merge', 'split', 'collide',
  'brew', 'ferment', 'distill', 'extract', 'infuse',
  'summon', 'banish', 'conjure', 'enchant', 'curse',
  
  // === QUALITIES / ADJECTIVES ===
  'ancient', 'portable', 'forbidden', 'layered', 'hollow',
  'luminous', 'shadowy', 'crisp', 'molten', 'frozen',
  'silent', 'deafening', 'fragile', 'unbreakable', 'elastic',
  'bitter', 'sweet', 'sour', 'spicy', 'bland',
  'rapid', 'glacial', 'instant', 'eternal', 'fleeting',
  'massive', 'tiny', 'infinite', 'precise', 'chaotic',
  'sacred', 'profane', 'mundane', 'exotic', 'familiar',
  'synthetic', 'organic', 'hybrid', 'pure', 'corrupt',
  
  // === DOMAINS / THEMES ===
  'ocean', 'finance', 'childhood', 'underground', 'orbit',
  'jungle', 'desert', 'arctic', 'volcano', 'swamp',
  'casino', 'hospital', 'library', 'factory', 'theater',
  'kitchen', 'garage', 'attic', 'basement', 'rooftop',
  'wedding', 'funeral', 'birthday', 'holiday', 'reunion',
  'heist', 'trial', 'election', 'revolution', 'exodus',
  'dream', 'nightmare', 'memory', 'prophecy', 'illusion',
  'gravity', 'magnetism', 'radiation', 'frequency', 'wavelength',
  
  // === WILDCARDS ===
  'glitch', 'paradox', 'ritual', 'echo', 'void',
  'cipher', 'anomaly', 'threshold', 'catalyst', 'remnant',
  'specter', 'golem', 'chimera', 'phoenix', 'kraken',
  'oracle', 'vagrant', 'sentinel', 'nomad', 'hermit',
  'karma', 'entropy', 'serendipity', 'vendetta', 'exodus',
  'vertigo', 'euphoria', 'melancholy', 'hysteria', 'apathy',
  'algorithm', 'protocol', 'syntax', 'loop', 'recursion',
  'bandwidth', 'latency', 'cache', 'buffer', 'overflow',
  'leverage', 'pivot', 'disrupt', 'scale', 'iterate',
  'manifesto', 'blueprint', 'prototype', 'artifact', 'relic',
];
```

**Total: ~250 words**

Feel free to add, remove, or recategorize as you see fit. The categories are just for organization during curation — at runtime, all words are in one flat array.

---

## Quick Reference

| Item | Value |
|------|-------|
| App Name | Prompt Forge |
| Tagline | Raw words. Refined ideas. |
| Default Materials | 3 |
| Max Materials | 5 |
| Word List Size | ~250 |
| Animation Duration | 400-500ms |
| Feedback Duration | 2 seconds |
| Target Platforms | Mobile & Desktop (equal priority) |
| Repository | `prompt-forge` |
| Deploy URL | `username.github.io/prompt-forge` |

---

**Happy forging! 🔥**
