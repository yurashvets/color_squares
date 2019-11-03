import * as ACTIONS from "../actions/game";

const initialState = {
  isStarted: false,
  isFinished: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case ACTIONS.START_GAME:
    return {
      ...state,
      isStarted: true,
      isFinished: false,
    };
  case ACTIONS.FINISH_GAME:
    return {
      ...state,
      isStarted: false,
      isFinished: true,
    };
  default:
    return state;
  }
};