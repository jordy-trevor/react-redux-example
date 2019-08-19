import React from "react";

/* a flexable button component that changes based on inputs */
const OptionButton = ({ text, color, effect }) => {
    return (
        <button
            className="optionButton"
            style={{ "background-color": `${color}` }}
            onClick={effect}
        >
            <h3>{text}</h3>
        </button>
    );
};

export default OptionButton;
