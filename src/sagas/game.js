import {
  cancel,
  take,
  fork,
} from "redux-saga/effects";

import {
  UPDATE_SCORE,
} from "../actions/score";
import {
   START_GAME, 
} from '../actions/game';

import shuffleWorker from './shuffle'


export default function* game() {
  while(yield take(START_GAME)) {
    const background = yield fork(shuffleWorker)
    yield take(UPDATE_SCORE)
    yield cancel(background)
  }
}
