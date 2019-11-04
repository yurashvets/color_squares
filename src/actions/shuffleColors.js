export const SHUFFLE_COLORS = 'SHUFFLE_COLORS';
export const SHUFFLE_COLORS_TRIGGER = 'SHUFFLE_COLORS_TRIGGER';

export const shuffleColors = data => ({ type: SHUFFLE_COLORS, data });
export const shuffleColorsTrigger = () => ({ type: SHUFFLE_COLORS_TRIGGER });
