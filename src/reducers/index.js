import { combineReducers } from 'redux';

import shuffleReducer from './shuffle';
import scoreReducer from './score';
import gameReducer from './game';
import { RESET_GAME } from '../actions/game';

const appReducer = combineReducers({
  shuffleReducer,
  scoreReducer,
  gameReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_GAME) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;