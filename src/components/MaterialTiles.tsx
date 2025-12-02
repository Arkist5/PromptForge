import type { Material } from '../types';
import { WordTile } from './WordTile';
import './MaterialTiles.css';

interface MaterialTilesProps {
  materials: Material[];
  onRefine: (id: string) => void;
}

export function MaterialTiles({ materials, onRefine }: MaterialTilesProps) {
  return (
    <div className="material-tiles">
      {materials.map((material) => (
        <WordTile
          key={material.id}
          material={material}
          onRefine={() => onRefine(material.id)}
        />
      ))}
    </div>
  );
}
