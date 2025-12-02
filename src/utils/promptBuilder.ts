import type { CreationMode } from '../types';

function buildAppPrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need an app idea that incorporates these words: ${wordList}.

Please create a detailed markdown project specification that includes:
- **Overview/Concept**: What the app does and the problem it solves
- **Core Features (MVP)**: The essential features for a first version
- **Tech Stack Suggestions**: Recommended technologies to build it
- **Future Enhancements**: Ideas for v2 and beyond

Make it something a solo developer could realistically build. Be creative with how the words connect to the concept — they don't have to be literal!`;
}

function buildGamePrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need a game idea that incorporates these words: ${wordList}.

Please create a detailed markdown project specification that includes:
- **Overview/Concept**: The core game premise and what makes it fun
- **Core Features (MVP)**: Essential mechanics for a playable first version
- **Tech Stack Suggestions**: Recommended engine/framework to build it
- **Future Enhancements**: Ideas for expanded content and features

Make it something an indie developer or small team could realistically build. Be creative with how the words influence the mechanics, story, or aesthetic!`;
}

function buildImagePrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need a detailed image prompt for AI image generation (Nano Banana Pro / Gemini) that incorporates these words: ${wordList}.

Please create a vivid, detailed image prompt that includes:
- **Subject**: The main focus of the image
- **Setting/Environment**: Where the scene takes place
- **Style**: Artistic style, mood, lighting
- **Details**: Specific visual elements, colors, composition

Format the final prompt as a single paragraph I can paste directly into the image generator. Be creative and unexpected with how the words combine visually!`;
}

function buildVideoPrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need a video concept for AI video generation (Sora) that incorporates these words: ${wordList}.

Please create a compelling video prompt that includes:
- **Scene Description**: What's happening in the video
- **Visual Style**: Cinematography, color grading, mood
- **Movement**: Camera motion, subject action
- **Duration Suggestion**: How long the clip should be

Format the final prompt as a single paragraph I can paste directly into Sora. Focus on motion and visual storytelling!`;
}

function buildStoryPrompt(words: string[]): string {
  const wordList = words.join(', ');
  return `Hey! I need you to write a complete short story (approximately 1,500 words) that incorporates these words: ${wordList}.

Requirements:
- All the words should appear meaningfully in the story
- Include a clear beginning, middle, and end
- Create at least one memorable character
- Build to a satisfying conclusion or twist

Be creative with genre and tone — surprise me!`;
}

function buildRandomPrompt(words: string[]): string {
  const modes: Exclude<CreationMode, 'random'>[] = ['app', 'game', 'image', 'video', 'story'];
  const randomMode = modes[Math.floor(Math.random() * modes.length)];

  switch (randomMode) {
    case 'app': return buildAppPrompt(words);
    case 'game': return buildGamePrompt(words);
    case 'image': return buildImagePrompt(words);
    case 'video': return buildVideoPrompt(words);
    case 'story': return buildStoryPrompt(words);
  }
}

export function buildPrompt(mode: CreationMode, words: string[]): string {
  switch (mode) {
    case 'app': return buildAppPrompt(words);
    case 'game': return buildGamePrompt(words);
    case 'image': return buildImagePrompt(words);
    case 'video': return buildVideoPrompt(words);
    case 'story': return buildStoryPrompt(words);
    case 'random': return buildRandomPrompt(words);
  }
}
