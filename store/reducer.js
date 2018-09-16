import { combineReducers } from "redux";

import productsReducer from "store/reducers/products";
import shoppingCartReducer from "store/reducers/shoppingCart";

const reducers = {
  products: productsReducer,
  shoppingCart: shoppingCartReducer
};

export default combineReducers(reducers);
