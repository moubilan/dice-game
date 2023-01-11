import React from "react";

function Timer (props) {
    const [timer, setTimer] = React.useState(props.time)
    let tenzies = props.tenzies
    React.useEffect( () => {
        let timeout;
        if (timer>0 && !tenzies) {
            timeout = setTimeout(()=> setTimer( timer - 1), 1000)
        }
        return () => clearTimeout(timeout)
    }, [timer, tenzies])
    return (
        <div>
            <h3>Timer : {timer}</h3>
        </div>
    ) 
}
export default Timer;