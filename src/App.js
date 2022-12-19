import React from 'react';
import Dice from './component/Dice'
import './App.css';
import {nanoid} from 'nanoid'

function App() {
  const [dice, setDice] = React.useState({
    id: nanoid(),
    value: 1,
    isHeld: false
  })

  function rollDice() {
    // var diceArray = [];
    // for(let i=0; i<10; i++) {
    //   dice.value.push(Math.ceil(Math.random() * 6))
    // }
  
    console.log(dice)
  }

  function holdDice() {
    return setDice((prevDice) => prevDice.isHeld = true)
  }
  

  return (
    <div className="App">
      <main className="main">
        <h1 className="title">Hello games</h1>
        <button className="btn-dice" onClick={rollDice}>lancer les dés</button>
      </main>
      <Dice dice={dice}
            holdDice={holdDice}/>
    </div>
  );
}

export default App;
