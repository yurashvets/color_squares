import * as ACTIONS from "../actions/shuffleColors";

const initialState = {
  rounds: 1,
  currentColor: {
    name: "white",
    color: "rgb(255, 255, 255)"
  },
  colorSet: [
    {
      name: "red",
      color: "rgb(200, 0, 0)"
    },
    {
      name: "yellow",
      color: "rgb(255, 255, 0)"
    },
    {
      name: "green",
      color: "rgb(0, 128, 0)"
    }
  ],
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