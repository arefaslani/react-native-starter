import { takeLatest, fork, call, put } from "redux-saga/effects";

import api from "services/api";
import { FETCH_POSTS, FETCH_POSTS_SUCCEEDED } from "store/actions/posts";

function* fetchPosts() {
  const posts = yield call(api.fetchAllPosts);
  yield put({ type: FETCH_POSTS_SUCCEEDED, payload: posts.data });
}

function* watchFetchPosts() {
  yield takeLatest(FETCH_POSTS, fetchPosts);
}

export default function* postsSagas() {
  yield fork(watchFetchPosts);
}
