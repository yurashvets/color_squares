import {
  select,
  put,
  delay,
} from "redux-saga/effects";
import shuffle from 'lodash/shuffle';
import random from 'lodash/random';

import {
  shuffleColors,
} from "../actions/shuffleColors";
import {
  scoreUpdated,
} from "../actions/score";
import {
  finishGame
} from "../actions/game";
import {
  getColorList,
  getUserClicked,
  getRounds
} from '../selectors';
import {
  DELAY,
  COLORS,
  COLOR_NAMES,
  MAX_ROUDNS
} from '../constants';

export default function* shuffleWorker(clicked) {
  let run = true;
  while (run) {
    const isUserClicked = yield select(getUserClicked)
    const rounds = yield select(getRounds)
    if (rounds > MAX_ROUDNS + 1) {
      run = false;
      yield put(finishGame())
    }
    if (!isUserClicked) yield delay(DELAY)
    const colors = yield select(getColorList)
    const randomName = COLOR_NAMES[random(0, 2)];
    const randomColor = COLORS[random(0, 2)];

    const shuffledColors = shuffle(colors);
    yield put(shuffleColors({
      colorSet: shuffledColors,
      currentColor: {
        name: randomName,
        color: randomColor
      }
    }))
    yield put(scoreUpdated())
  }
}
