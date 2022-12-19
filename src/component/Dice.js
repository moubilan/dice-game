import React from "react";

function Dice(props) {
    return (
        <div>
            <h2 className="number">{props.dice.value}</h2>
            {/* <h1 className="number">{props.n.map(
                (number) => <div>{number}</div>
            )}</h1> */}
        </div>
    );
}
export default Dice;