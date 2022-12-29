import React from "react";

function Timer (props) {
    // console.log(props.firstRoll)
    const [timer, setTimer] = React.useState(props.time)
    console.log('timer', timer)
    let tenzies = props.tenzies
    // let counter = props.firstRoll
    React.useEffect( () => {
        let interval;
        if (timer>0 && !tenzies) {
            interval = setInterval(()=> setTimer( timer - 1), 1000)
            console.log('interval', interval)
        }
        return () => clearInterval(interval)
        
    }, [timer, tenzies])

    return (
        <div>
            <h3>Timer : {timer}</h3>
        </div>
    ) 
}
export default Timer;