import './ActionBar.css';

interface ActionBarProps {
  materialCount: number;
  maxMaterials: number;
  onResmelt: () => void;
  onAddMaterial: () => void;
  disabled: boolean;
}

export function ActionBar({ materialCount, maxMaterials, onResmelt, onAddMaterial, disabled }: ActionBarProps) {
  return (
    <div className="action-bar">
      <button
        className="action-bar__button"
        onClick={onResmelt}
        disabled={disabled}
      >
        Re-smelt all
      </button>
      {materialCount < maxMaterials && (
        <button
          className="action-bar__button"
          onClick={onAddMaterial}
          disabled={disabled}
        >
          + Add material
        </button>
      )}
    </div>
  );
}
