import { all } from "redux-saga/effects";

import postsSaga from "store/sagas/posts";

export default function* rootSaga() {
  yield all([postsSaga()]);
}
