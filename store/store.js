import { createStore, combineReducers } from 'redux'

const store = createStore(
  combineReducers({
    testReducer: (state={}, action) => { return state }
  })
)

export default store
