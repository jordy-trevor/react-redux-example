import { createStore, applyMiddleware, compose } from "redux";
import combinedReducers from "./reducers/index";

const initialState = { count: 0 };

/* add devtools */
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

/* create the store with your reducers, starting state, and devtools */
const store = createStore(combinedReducers, initialState, enhancers);

export default store;
