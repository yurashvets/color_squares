export const SHUFFLE_COLORS = 'SHUFFLE_COLORS';
export const START_GAME = 'START_GAME';

export const shuffleColors = data => ({ type: SHUFFLE_COLORS, data });
export const startGame = () => ({ type: START_GAME });
