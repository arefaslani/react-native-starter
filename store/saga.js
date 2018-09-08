import { all } from "redux-saga/effects";

function* testSaga() {
  yield console.log("Root Saga");
}

export default function* rootSaga() {
  yield all([testSaga()]);
}
