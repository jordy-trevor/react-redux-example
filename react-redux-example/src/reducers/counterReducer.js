import { counterAction } from "../actions/counterAction";

/* reducers related to the counter */
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            /* '...state' will take in the existing state and replace only the element 
            after the comma */
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default counterReducer;
