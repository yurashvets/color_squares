import {
  select,
  put,
  takeEvery,
} from "redux-saga/effects";

import {
  UPDATE_SCORE,
  incScore,
} from "../actions/score";
import {
  startGame,
  finishGame
} from "../actions/game";
import { 
  getCurrentColor,
  getRounds,
} from '../selectors';
import { 
  MAX_ROUDNS, 
} from '../constants';

function* worker({ clickedColor }) {
  const currentColor = yield select(getCurrentColor)
  const rounds = yield select(getRounds)
  if (currentColor.name === clickedColor) {
    yield put(incScore())
  }
  if (rounds <= MAX_ROUDNS) {
    yield put(startGame())
  } else {
    yield put(finishGame())
  }
}

export default function* watcher() {
  yield takeEvery(UPDATE_SCORE, worker)
}