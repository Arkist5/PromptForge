/** The types of creations users can forge */
export type CreationMode = 'app' | 'game' | 'image' | 'video' | 'story' | 'random';

/** A single word material */
export interface Material {
  id: string;
  word: string;
  isSpinning: boolean;
}

/** Inline feedback messages */
export interface FeedbackMessage {
  type: 'success' | 'error';
  text: string;
}
