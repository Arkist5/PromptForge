import type { FeedbackMessage } from '../types';
import { InlineMessage } from './InlineMessage';
import './PromptOutput.css';

interface PromptOutputProps {
  prompt: string | null;
  onCopy: () => void;
  feedback: FeedbackMessage | null;
}

export function PromptOutput({ prompt, onCopy, feedback }: PromptOutputProps) {
  if (!prompt) return null;

  return (
    <div className="prompt-output">
      <div className="prompt-output__header">
        <h2 className="prompt-output__title">Your Prompt</h2>
        <div className="prompt-output__actions">
          <InlineMessage message={feedback} />
          <button className="prompt-output__copy" onClick={onCopy}>
            Copy Prompt
          </button>
        </div>
      </div>
      <div className="prompt-output__content">
        <p className="prompt-output__text">{prompt}</p>
      </div>
    </div>
  );
}
