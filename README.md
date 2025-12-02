
---

# Prompt Forge 🔥

Forge buildable ideas from raw, random words.
Prompt Forge is a small web app that helps you break creative blocks by turning random word “materials” into polished prompts you can paste into ChatGPT (or any LLM).

---

## What Prompt Forge Does

1. You pick what you’re making:

   * **App**, **Game**, **Image**, **Video**, **Story**, or **Random**.
2. Prompt Forge draws **3–5 word “materials”** for you.
3. You can:

   * **Refine** a single material (reroll that word).
   * **Re-smelt** everything (reroll all words).
   * **Add more materials** (up to 5 total).
4. You hit **Forge Prompt**:

   * The app generates a **well-structured, one-paragraph prompt** that:

     * Uses **all** of your words as core concept elements.
     * Describes something a solo creator could realistically build or generate with AI.
5. You click **Copy Prompt** and paste it into ChatGPT to get a detailed idea.

The vibe: less slot machine, more **workbench**. You’re not gambling for ideas; you’re crafting them.

---

## Tech Stack

* **Framework:** React + TypeScript (Vite)
* **Styling:** Plain CSS (mobile-first, minimal, modern)
* **Build Tool:** Vite
* **Hosting (planned):** GitHub Pages (static build)

No backend or database in Phase 1.

---

## Core UX Flow

1. Open Prompt Forge.
2. Choose a **Creation Type**:

   * App / Game / Image / Video / Story / Random.
3. Click **Draw Materials**:

   * 3 word tiles appear with a slight staggered reveal.
4. Adjust your materials:

   * Tap ↻ on a tile to **refine** that word.
   * Click **Re-smelt all** to redraw all words.
   * Click **Add material** to add up to **5 total words**.
5. Click **Forge Prompt**:

   * Prompt Forge builds a single paragraph prompt that:

     * Names the type (e.g., “app idea”).
     * Requires all chosen words to be used meaningfully.
     * Emphasizes practicality and AI-buildability.
6. Click **Copy Prompt** and paste into ChatGPT.

---

## Project Structure (Phase 1)

```txt
prompt-forge/
├─ src/
│  ├─ main.tsx        # React entry point
│  ├─ App.tsx         # Main UI and forge logic
│  ├─ wordList.ts     # Word list + getRandomWord()
│  └─ index.css       # Global styling (dark, minimal, forge-flavored)
├─ index.html
├─ package.json
└─ vite.config.ts
```

---

## Phase 1 – Local MVP (Prompt Builder Only)

**Goal:** A polished, single-page app that runs locally, looks good on mobile & desktop, and generates copyable prompts.

### Features

* [x] React + TypeScript app scaffolded via Vite.
* [x] **Forge identity**:

  * Title: *Prompt Forge*
  * Copy uses forge language: materials, smelt, refine, forge prompt.
* [x] Creation types:

  * `app`, `game`, `image`, `video`, `story`, `random`.
* [x] Word materials system:

  * [x] **3 materials by default**.
  * [x] Add materials up to **5 max**.
  * [x] Draw materials (random words for all tiles).
  * [x] Refine a single material via ↻.
  * [x] Re-smelt all materials (reroll all).
* [x] Prompt forging:

  * [x] Builds a one-paragraph prompt string.
  * [x] Uses all current materials as required “core” words.
  * [x] Mode-aware (e.g., “idea for a Game / Image / Video / Story”).
  * [x] “Forge Prompt” button.
  * [x] “Copy Prompt” button using Clipboard API.
* [x] UI / styling:

  * [x] Dark, minimal, modern, with faint **forge / ember** vibes.
  * [x] Mobile-first single-column layout.
  * [x] Looks centered and clean on desktop.

### Dev Steps (Phase 1)

1. Scaffold project:
   `npm create vite@latest prompt-forge -- --template react-ts`
2. Implement:

   * `App.tsx` with:

     * State for mode, materials, count, prompt, and spinning state.
     * Handlers for draw, refine, re-smelt, add material, forge prompt, copy.
   * `wordList.ts` with curated word list and `getRandomWord()`.
   * `index.css` with dark forge styling and responsive layout.
3. Test locally:
   `npm install` → `npm run dev`
4. Initialize git + push to GitHub.

---

## Phase 2 – Direct Idea Generation (API Integration)

**Goal:** Click **Forge Idea** and get the finished idea paragraph back directly from the ChatGPT API.

### Planned Features

* **Backend or serverless function** that:

  * Accepts `{ words, mode }`.
  * Constructs a “Prompt Forge” style instruction prompt.
  * Calls the OpenAI API for a completion.
  * Returns exactly one paragraph of idea text.
* **Frontend changes**:

  * Add a **“Forge Idea”** button:

    * Shows loading state (e.g., “Forging…”).
    * Displays AI-generated paragraph in a result card.
  * Keep **Forge Prompt + Copy** as a manual/backup option.
* Keep API key **only server-side** (never exposed in browser).

---

## Phase 3 – Polish & Extras

Nice-to-have enhancements once the core experience feels good:

### Prompt & UX

* **Mode-specific prompting**:

  * App: focus on problem, user, feature, monetization.
  * Game: genre, mechanics, progression, art style.
  * Image: vivid visual description, style, lighting.
  * Video: hook, premise, simple structure.
  * Story: character, conflict, setting, twist.
* **Difficulty / scope controls**:

  * Small slider or presets: “Tiny side project” → “Big concept”.
* **Better feedback**:

  * Toasts/snackbars instead of `alert()` for copy success/failure.

### Persistence & History

* **Local idea history**:

  * Record: `mode`, `materials`, and `prompt`.
  * Store in `localStorage`.
  * Show a sidebar or separate “History” section on desktop:

    * “Reforge this combo”
    * “Copy last prompt”

### Visual Flair

* **Smoother animation**:

  * Fake “slot” spin: quickly cycling words before settling.
  * Small glow when materials change (like heated metal).
* **Subtle forge touches**:

  * Ember gradient in header/card borders.
  * Tiny animation when clicking “Forge Prompt” (e.g., ripple / pulse).

### Future Extras

* Export prompts as markdown / JSON.
* “Workspace presets” (e.g., “SaaS mode”, “Game jams”, “Image prompts”).
* Optional “Kid mode” later with a safer word list if needed.

---

## How to Use Prompt Forge (Phase 1)

1. Run `npm run dev`.
2. Open the local URL in your browser.
3. Choose what you’re making (App/Game/Image/Video/Story/Random).
4. Click **Draw Materials**, refine or add materials until it feels fun.
5. Click **Forge Prompt**.
6. Copy the prompt and paste it into ChatGPT to generate your idea.

---

