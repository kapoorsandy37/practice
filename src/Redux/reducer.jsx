import { combineReducers } from "redux";

function data(state = {}, action) {
  switch (action.type) {
    case "LOAD_DATA":
      return action.data;

    default:
      return state;
  }
}

function setLoadingState(state = false, action) {
  switch (action.type) {
    case "SET_LOADING_STATE":
      return action.condition;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ data, setLoadingState });

export default rootReducer;
