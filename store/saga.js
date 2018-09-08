function* testSaga() {
  console.log('Root Saga')
}

import { all } from "redux-saga/effects";

export default function* rootSaga(services = {}) {
  yield all([testSaga()]);
}
