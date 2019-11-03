import * as ACTIONS from "../actions/shuffleColors";
import {COLORS, COLOR_NAMES} from '../constants';

const initialState = {
  rounds: 1,
  currentColor: {
    name: COLOR_NAMES[0],
    color: COLORS[0]
  },
  colorSet: COLOR_NAMES.map((item, i) => {
    return {
      name: item,
      color: COLORS[i]
    }
  })
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case ACTIONS.SHUFFLE_COLORS:
    return {
      ...state,
      currentColor: action.data.currentColor,
      colorSet: action.data.colorSet,
      rounds: state.rounds + 1
    };
  default:
    return state;
  }
};