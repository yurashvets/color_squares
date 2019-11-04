export const UPDATE_SCORE = 'UPDATE_SCORE';
export const INC_SCORE = 'INC_SCORE';
export const SCORE_UPDATED = 'SCORE_UPDATED';

export const updateScore = clickedColor => ({ type: UPDATE_SCORE, clickedColor });
export const incScore = () => ({ type: INC_SCORE });
export const scoreUpdated = () => ({ type: SCORE_UPDATED });