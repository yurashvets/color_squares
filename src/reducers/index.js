import { combineReducers } from 'redux';

import shuffleReducer from './shuffle';
import scoreReducer from './score';
import gameReducer from './game';

const AppReducer = combineReducers({
  shuffleReducer,
  scoreReducer,
  gameReducer,
});

export default AppReducer;