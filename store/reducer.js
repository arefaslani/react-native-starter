import { combineReducers } from "redux";

const reducers = {
  testReducer: (state = {}, action) => { return state }
};

export default combineReducers(reducers);
