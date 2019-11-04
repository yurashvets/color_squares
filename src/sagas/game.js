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
    console.log('game worker start')
    const background = yield fork(shuffleWorker)
    yield take(UPDATE_SCORE)
    console.log('game worker cancel')
    yield cancel(background)
  }
}
