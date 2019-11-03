import { all } from 'redux-saga/effects';

import shuffle from './shuffle'

export default function* sagas() {
  yield all([
    shuffle(),
  ]);
}