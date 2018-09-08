import { FETCH_POSTS_SUCCEEDED } from "store/actions/posts";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCEEDED:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
