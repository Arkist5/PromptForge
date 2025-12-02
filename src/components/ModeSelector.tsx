import type { CreationMode } from '../types';
import './ModeSelector.css';

interface ModeSelectorProps {
  currentMode: CreationMode;
  onModeChange: (mode: CreationMode) => void;
}

const modes: { value: CreationMode; label: string }[] = [
  { value: 'app', label: 'App' },
  { value: 'game', label: 'Game' },
  { value: 'image', label: 'Image' },
  { value: 'video', label: 'Video' },
  { value: 'story', label: 'Story' },
  { value: 'random', label: 'Random' },
];

export function ModeSelector({ currentMode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="mode-selector">
      <p className="mode-selector__label">What are you making?</p>
      <div className="mode-selector__buttons">
        {modes.map(({ value, label }) => (
          <button
            key={value}
            className={`mode-selector__button ${currentMode === value ? 'mode-selector__button--active' : ''}`}
            onClick={() => onModeChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
