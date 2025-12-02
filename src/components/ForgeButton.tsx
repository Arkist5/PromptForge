import './ForgeButton.css';

interface ForgeButtonProps {
  disabled: boolean;
  onClick: () => void;
}

export function ForgeButton({ disabled, onClick }: ForgeButtonProps) {
  return (
    <button
      className="forge-button"
      onClick={onClick}
      disabled={disabled}
    >
      Forge Prompt
    </button>
  );
}
