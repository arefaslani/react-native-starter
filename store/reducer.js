import { combineReducers } from "redux";

import postsReducer from "store/reducers/posts";

const reducers = {
  posts: postsReducer
};

export default combineReducers(reducers);
