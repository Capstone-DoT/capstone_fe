import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import { rootReducer, persistedReducer } from "./";
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';

const isProduction = process.env.NODE_ENV === "production";

const makeConfiguredStore = (reducer) => createStore(reducer, undefined, applyMiddleware(logger));

const makeStore = () => {
  const isServer = typeof window === 'undefined';
    const store = makeConfiguredStore(persistedReducer);
    let persistor = persistStore(store);
    return { persistor, ...store };
};

const wrapper = createWrapper(makeStore, { debug: !isProduction });


export default wrapper;