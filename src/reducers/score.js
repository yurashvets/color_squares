import * as ACTIONS from "../actions/score";

const initialState = {
  score: 0,
  clicked: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case ACTIONS.INC_SCORE:
    return {
      ...state,
      score: state.score + 1
    };

  case ACTIONS.UPDATE_SCORE:
    return {
      ...state,
      clicked: true
    };

  case ACTIONS.SCORE_UPDATED:
    return {
      ...state,
      clicked: false
    };

  default:
    return state;
  }
};