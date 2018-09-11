import { combineReducers } from "redux";

import postsReducer from "store/reducers/posts";
import shoppingCartReducer from "store/reducers/shoppingCart";

const reducers = {
  posts: postsReducer,
  shoppingCart: shoppingCartReducer
};

export default combineReducers(reducers);
