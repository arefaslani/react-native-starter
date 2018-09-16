import { FETCH_PRODUCTS_SUCCEEDED } from "store/actions/products";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCEEDED:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
