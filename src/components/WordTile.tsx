import type { Material } from '../types';
import './WordTile.css';

interface WordTileProps {
  material: Material;
  onRefine: () => void;
}

export function WordTile({ material, onRefine }: WordTileProps) {
  return (
    <div className={`word-tile ${material.isSpinning ? 'word-tile--spinning' : ''}`}>
      <span className="word-tile__word">{material.word}</span>
      <button
        className="word-tile__refine"
        onClick={onRefine}
        disabled={material.isSpinning}
        aria-label={`Refine ${material.word}`}
      >
        ↻
      </button>
    </div>
  );
}
