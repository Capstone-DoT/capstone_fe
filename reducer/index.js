import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import login from "./login"

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;


    default:
      return combineReducers({ login })(state, action);
  }
};

export default rootReducer;