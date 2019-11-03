export const START_GAME = 'START_GAME';
export const FINISH_GAME = 'FINISH_GAME';
export const RESET_GAME = 'RESET_GAME';

export const startGame = () => ({ type: START_GAME });
export const finishGame = () => ({ type: FINISH_GAME });
export const resetGame = () => ({ type: RESET_GAME });