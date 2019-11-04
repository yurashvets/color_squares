import {
  select,
  put,
  takeEvery,
  delay,
} from "redux-saga/effects";
import shuffle from 'lodash/shuffle';
import random from 'lodash/random';

import {
  SHUFFLE_COLORS,
  shuffleColors,
} from "../actions/shuffleColors";
import { START_GAME, finishGame } from '../actions/game';
import { getColorList, getRounds } from '../selectors';
import { DELAY, MAX_ROUDNS, COLORS, COLOR_NAMES } from '../constants';

function* getValues() {
  const colors = yield select(getColorList)
  const rounds = yield select(getRounds)
  const randomName = COLOR_NAMES[random(0,2)];
  const randomColor = COLORS[random(0, 2)];
  return {
    colors,
    rounds,
    randomName,
    randomColor,
  }
}

function* shuffleWorker() {
    const {
      colors,
      rounds,
      randomName,
      randomColor,
    } = yield getValues();
    if (rounds <= MAX_ROUDNS) {
      const shuffledColors = shuffle(colors);
      if (rounds !== 1) {
        yield delay(DELAY);
      }
      yield put(shuffleColors({
            colorSet: shuffledColors,
            currentColor: {name: randomName, color: randomColor}
          }
        )
      );
    } else {
      yield delay(DELAY);
      yield put(finishGame())
    }
}

export default function* shuffleWatcher() {
  yield takeEvery(START_GAME, shuffleWorker);
  yield takeEvery(SHUFFLE_COLORS, shuffleWorker)
}