import React from "react";

function Dice(props) {

    const styles = { backgroundColor : props.isHeld ? "#59E391" : "white" }
    
    return (
        <div id={props.id} disabled={props.isHeld ? true : false} onClick={()=>props.holdDice(props.id)} style={styles} className="dice-face">
            <h2 className="dice-num">{props.number}</h2>    
        </div>
    );
}
export default Dice;