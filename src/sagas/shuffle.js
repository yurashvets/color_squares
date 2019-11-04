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
  getColorList,
  getUserClicked,
} from '../selectors';
import {
  DELAY,
  COLORS,
  COLOR_NAMES
} from '../constants';

export default function* shuffleWorker(clicked) {
  while (true) {
    console.log('shuffleWorker clicked:', clicked)
    const isUserClicked = yield select(getUserClicked)
    console.log('isUserClicked:', isUserClicked)
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
