import React, { Componenet } from "react";

/* components */
import OptionButton from "./components/OptionButton";
/* actions */
import { counterIncrement, counterDecrement } from "./actions/counterAction";

import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";

const App = props => {
    /* hooks */
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div style={{ "text-align": "center" }}>
            <h2 style={{ color: "rgb(75, 75, 75)" }}>Count: {count}</h2>
            <OptionButton
                text="Increment"
                color="lightblue"
                effect={() => {
                    dispatch(counterIncrement());
                }}
            />
            <OptionButton
                text="Decrement"
                color="lightgray"
                effect={() => {
                    dispatch(counterDecrement());
                }}
            />
        </div>
    );
};

/* no longer needed because of new hooks
const mapStateToProps = (state, props) => {
    return { count: state.count };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            counterAction: counterAction
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App); */
export default App;
