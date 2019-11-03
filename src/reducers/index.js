import { combineReducers } from 'redux';

import shuffleReducer from './shuffle';
import scoreReducer from './score';

const AppReducer = combineReducers({
  shuffleReducer,
  scoreReducer,
});

export default AppReducer;