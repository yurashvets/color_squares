import { all } from 'redux-saga/effects';

import game from './game'
import updateScore from './updateScore'

export default function* sagas() {
  yield all([
    game(),
    updateScore()
  ]);
}