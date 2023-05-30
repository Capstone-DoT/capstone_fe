import { reateStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import login from "./login"
import storage from 'redux-persist/lib/storage'
import { persistReducer, PersistConfig } from "redux-persist";

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;


    default:
      return combineReducers({ login })(state, action);
  }
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
