import * as ACTIONS from "../actions/score";

const initialState = {
  score: 0,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case ACTIONS.UPDATE_SCORE:
    return {
      ...state,
      score: state.score + 1
    };
  default:
    return state;
  }
};