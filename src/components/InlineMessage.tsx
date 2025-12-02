import type { FeedbackMessage } from '../types';
import './InlineMessage.css';

interface InlineMessageProps {
  message: FeedbackMessage | null;
}

export function InlineMessage({ message }: InlineMessageProps) {
  if (!message) return null;

  return (
    <span className={`inline-message inline-message--${message.type}`}>
      {message.text}
    </span>
  );
}
