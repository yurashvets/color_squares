import * as ACTIONS from "../actions/game";

const initialState = {
  isStarted: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case ACTIONS.START_GAME:
    return {
      ...state,
      isStarted: true,
    };
  case ACTIONS.FINISH_GAME:
    return {
      ...state,
      isStarted: false,
    };
  default:
    return state;
  }
};