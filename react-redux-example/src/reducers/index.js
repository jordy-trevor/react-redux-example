import { combineReducers } from "redux";

/* import reducers to be combined */
import counterReducer from "./counterReducer";

/**
 * Combine Reducers into one to be input into the store in index.js
 */

const combinedReducers = combineReducers({
    counter: counterReducer
});

export default combinedReducers;
