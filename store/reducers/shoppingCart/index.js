import { ADD_TO_CART } from "store/actions/shoppingCart";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
}
