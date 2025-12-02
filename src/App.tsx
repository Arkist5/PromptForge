import { useState, useEffect, useCallback } from 'react';
import type { CreationMode, Material, FeedbackMessage } from './types';
import { getRandomWord, getRandomWords } from './data/wordList';
import { buildPrompt } from './utils/promptBuilder';
import { Header } from './components/Header';
import { ModeSelector } from './components/ModeSelector';
import { MaterialTiles } from './components/MaterialTiles';
import { ActionBar } from './components/ActionBar';
import { ForgeButton } from './components/ForgeButton';
import { PromptOutput } from './components/PromptOutput';
import './App.css';

const DEFAULT_MATERIAL_COUNT = 3;
const MAX_MATERIALS = 5;
const SHUFFLE_CYCLES = 8;
const SHUFFLE_INTERVAL_MS = 50;

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
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

function App() {
  const [mode, setMode] = useState<CreationMode>('app');
  const [materials, setMaterials] = useState<Material[]>([]);
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<FeedbackMessage | null>(null);

  const isAnySpinning = materials.some(m => m.isSpinning);

  // Draw initial materials on mount
  useEffect(() => {
    const words = getRandomWords(DEFAULT_MATERIAL_COUNT);
    setMaterials(words.map(word => ({
      id: generateId(),
      word,
      isSpinning: false,
    })));
  }, []);

  const showFeedback = useCallback((message: FeedbackMessage) => {
    setFeedback(message);
    setTimeout(() => setFeedback(null), 2000);
  }, []);

  const spinWord = useCallback(async (
    tileId: string,
    finalWord: string
  ) => {
    // Mark as spinning
    setMaterials(prev => prev.map(m =>
      m.id === tileId ? { ...m, isSpinning: true } : m
    ));

    // Cycle through random words
    for (let i = 0; i < SHUFFLE_CYCLES; i++) {
      await sleep(SHUFFLE_INTERVAL_MS);
      setMaterials(prev => prev.map(m =>
        m.id === tileId ? { ...m, word: getRandomWord() } : m
      ));
    }

    // Land on final word
    setMaterials(prev => prev.map(m =>
      m.id === tileId ? { ...m, word: finalWord, isSpinning: false } : m
    ));
  }, []);

  const handleModeChange = useCallback((newMode: CreationMode) => {
    setMode(newMode);
    setGeneratedPrompt(null);
  }, []);

  const handleRefine = useCallback((id: string) => {
    if (isAnySpinning) return;

    const currentWords = materials.map(m => m.word);
    const newWord = getRandomWord(currentWords);
    spinWord(id, newWord);
    setGeneratedPrompt(null);
  }, [materials, isAnySpinning, spinWord]);

  const handleResmelt = useCallback(async () => {
    if (isAnySpinning) return;

    const newWords = getRandomWords(materials.length);

    // Start all spinning
    setMaterials(prev => prev.map(m => ({ ...m, isSpinning: true })));

    // Cycle through random words for all tiles
    for (let i = 0; i < SHUFFLE_CYCLES; i++) {
      await sleep(SHUFFLE_INTERVAL_MS);
      setMaterials(prev => prev.map(m => ({
        ...m,
        word: getRandomWord(),
      })));
    }

    // Land on final words
    setMaterials(prev => prev.map((m, idx) => ({
      ...m,
      word: newWords[idx],
      isSpinning: false,
    })));

    setGeneratedPrompt(null);
  }, [materials.length, isAnySpinning]);

  const handleAddMaterial = useCallback(async () => {
    if (isAnySpinning || materials.length >= MAX_MATERIALS) return;

    const currentWords = materials.map(m => m.word);
    const newWord = getRandomWord(currentWords);
    const newId = generateId();

    // Add new tile in spinning state
    setMaterials(prev => [...prev, {
      id: newId,
      word: getRandomWord(),
      isSpinning: true,
    }]);

    // Animate the new tile
    for (let i = 0; i < SHUFFLE_CYCLES; i++) {
      await sleep(SHUFFLE_INTERVAL_MS);
      setMaterials(prev => prev.map(m =>
        m.id === newId ? { ...m, word: getRandomWord() } : m
      ));
    }

    // Land on final word
    setMaterials(prev => prev.map(m =>
      m.id === newId ? { ...m, word: newWord, isSpinning: false } : m
    ));

    setGeneratedPrompt(null);
  }, [materials, isAnySpinning]);

  const handleForge = useCallback(() => {
    if (isAnySpinning || materials.length === 0) return;

    const words = materials.map(m => m.word);
    const prompt = buildPrompt(mode, words);
    setGeneratedPrompt(prompt);
  }, [mode, materials, isAnySpinning]);

  const handleCopy = useCallback(async () => {
    if (!generatedPrompt) return;

    const success = await copyToClipboard(generatedPrompt);
    if (success) {
      showFeedback({ type: 'success', text: 'Copied!' });
    } else {
      showFeedback({ type: 'error', text: "Couldn't copy — try selecting manually" });
    }
  }, [generatedPrompt, showFeedback]);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <ModeSelector currentMode={mode} onModeChange={handleModeChange} />
        <MaterialTiles materials={materials} onRefine={handleRefine} />
        <ActionBar
          materialCount={materials.length}
          maxMaterials={MAX_MATERIALS}
          onResmelt={handleResmelt}
          onAddMaterial={handleAddMaterial}
          disabled={isAnySpinning}
        />
        <ForgeButton
          onClick={handleForge}
          disabled={isAnySpinning || materials.length === 0}
        />
        <PromptOutput
          prompt={generatedPrompt}
          onCopy={handleCopy}
          feedback={feedback}
        />
      </main>
    </div>
  );
}

export default App;
