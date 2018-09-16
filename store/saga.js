import { all } from "redux-saga/effects";

import productsSaga from "store/sagas/products";

export default function* rootSaga() {
  yield all([productsSaga()]);
}
