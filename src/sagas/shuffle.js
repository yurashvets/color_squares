import {
  select,
  put,
  takeEvery,
  delay,
} from "redux-saga/effects";
import shuffle from 'lodash/shuffle';
import random from 'lodash/random';
import {
  START_GAME,
  SHUFFLE_COLORS,
  shuffleColors,
} from "../actions/shuffleColors";
import { getColorList, getRounds } from '../selectors';
import { DELAY, MAX_ROUDNS, COLORS, COLOR_NAMES } from '../constants';

function* shuffleWorker() {
    const colors = yield select(getColorList)
    const rounds = yield select(getRounds)
    const randomName = COLOR_NAMES[random(0,2)];
    const randomColor = COLORS[random(0, 2)];
    console.log('ROUNDS:::: ', rounds)
    console.log('=== randomName:::: ', randomName)
    console.log('+++ randomColor:::: ', randomColor)
    if (rounds <= MAX_ROUDNS) {
      console.log('%c SHUFFLING', 'color: red;')
      const shuffledColors = shuffle(colors);
      yield delay(DELAY);
      yield put(shuffleColors({
            colorSet: shuffledColors,
            currentColor: {name: randomName, color: randomColor}
          }
        )
      );
    }
}

export default function* shuffleWatcher() {
  yield takeEvery(START_GAME, shuffleWorker);
  yield takeEvery(SHUFFLE_COLORS, shuffleWorker)
}