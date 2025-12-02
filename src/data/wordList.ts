export const wordList: string[] = [
  // === REQUIRED ===
  'shark', 'fist',

  // === OBJECTS / NOUNS ===
  'lighthouse', 'calendar', 'mirror', 'vault', 'compass',
  'umbrella', 'lantern', 'telescope', 'anchor', 'hourglass',
  'typewriter', 'vinyl', 'camera', 'suitcase', 'ladder',
  'bridge', 'tunnel', 'fountain', 'statue', 'windmill',
  'rocket', 'submarine', 'helicopter', 'bicycle', 'skateboard',
  'piano', 'guitar', 'drum', 'microphone', 'speaker',
  'mask', 'crown', 'key', 'lock', 'chain',
  'sword', 'shield', 'bow', 'arrow', 'hammer',
  'candle', 'flame', 'smoke', 'ash', 'ember',
  'crystal', 'gem', 'pearl', 'coin', 'treasure',
  'map', 'scroll', 'book', 'letter', 'stamp',
  'clock', 'bell', 'whistle', 'horn', 'siren',
  'nest', 'web', 'hive', 'cocoon', 'shell',
  'bone', 'skull', 'tooth', 'claw', 'feather',
  'seed', 'root', 'vine', 'thorn', 'petal',
  'storm', 'lightning', 'thunder', 'rainbow', 'fog',

  // === ACTIONS / VERBS ===
  'chase', 'negotiate', 'excavate', 'broadcast', 'calibrate',
  'dissolve', 'ignite', 'shatter', 'weave', 'carve',
  'whisper', 'shout', 'sing', 'dance', 'sprint',
  'climb', 'dive', 'float', 'sink', 'soar',
  'build', 'destroy', 'repair', 'transform', 'evolve',
  'hide', 'seek', 'discover', 'reveal', 'conceal',
  'capture', 'release', 'escape', 'pursue', 'evade',
  'connect', 'disconnect', 'merge', 'split', 'collide',
  'brew', 'ferment', 'distill', 'extract', 'infuse',
  'summon', 'banish', 'conjure', 'enchant', 'curse',

  // === QUALITIES / ADJECTIVES ===
  'ancient', 'portable', 'forbidden', 'layered', 'hollow',
  'luminous', 'shadowy', 'crisp', 'molten', 'frozen',
  'silent', 'deafening', 'fragile', 'unbreakable', 'elastic',
  'bitter', 'sweet', 'sour', 'spicy', 'bland',
  'rapid', 'glacial', 'instant', 'eternal', 'fleeting',
  'massive', 'tiny', 'infinite', 'precise', 'chaotic',
  'sacred', 'profane', 'mundane', 'exotic', 'familiar',
  'synthetic', 'organic', 'hybrid', 'pure', 'corrupt',

  // === DOMAINS / THEMES ===
  'ocean', 'finance', 'childhood', 'underground', 'orbit',
  'jungle', 'desert', 'arctic', 'volcano', 'swamp',
  'casino', 'hospital', 'library', 'factory', 'theater',
  'kitchen', 'garage', 'attic', 'basement', 'rooftop',
  'wedding', 'funeral', 'birthday', 'holiday', 'reunion',
  'heist', 'trial', 'election', 'revolution', 'exodus',
  'dream', 'nightmare', 'memory', 'prophecy', 'illusion',
  'gravity', 'magnetism', 'radiation', 'frequency', 'wavelength',

  // === WILDCARDS ===
  'glitch', 'paradox', 'ritual', 'echo', 'void',
  'cipher', 'anomaly', 'threshold', 'catalyst', 'remnant',
  'specter', 'golem', 'chimera', 'phoenix', 'kraken',
  'oracle', 'vagrant', 'sentinel', 'nomad', 'hermit',
  'karma', 'entropy', 'serendipity', 'vendetta',
  'vertigo', 'euphoria', 'melancholy', 'hysteria', 'apathy',
  'algorithm', 'protocol', 'syntax', 'loop', 'recursion',
  'bandwidth', 'latency', 'cache', 'buffer', 'overflow',
  'leverage', 'pivot', 'disrupt', 'scale', 'iterate',
  'manifesto', 'blueprint', 'prototype', 'artifact', 'relic',
];

/**
 * Get a random word, excluding specified words.
 * @param exclude - Words to exclude (currently visible materials)
 * @returns A random word not in the exclude list
 */
export function getRandomWord(exclude: string[] = []): string {
  const available = wordList.filter(word => !exclude.includes(word));

  // Fallback if somehow all words are excluded
  if (available.length === 0) {
    return wordList[Math.floor(Math.random() * wordList.length)];
  }

  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Get multiple random words, none repeating.
 * @param count - Number of words to draw
 * @param exclude - Additional words to exclude
 * @returns Array of unique random words
 */
export function getRandomWords(count: number, exclude: string[] = []): string[] {
  const words: string[] = [];
  const excluded = [...exclude];

  for (let i = 0; i < count; i++) {
    const word = getRandomWord(excluded);
    words.push(word);
    excluded.push(word);
  }

  return words;
}
