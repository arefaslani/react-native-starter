import { remove } from "lodash";
import { ADD_TO_CART, REMOVE_FROM_CART } from "store/actions/shoppingCart";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      remove(state, item => item.id === action.payload.id);
      return [...state];
    default:
      return state;
  }
}
