import { takeLatest, fork, call, put } from "redux-saga/effects";

import api from "services/api";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCEEDED
} from "store/actions/products";

function* fetchProducts() {
  const products = yield call(api.fetchAllProducts);
  yield put({ type: FETCH_PRODUCTS_SUCCEEDED, payload: products.data });
}

function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}

export default function* ProductsSagas() {
  yield fork(watchFetchProducts);
}
