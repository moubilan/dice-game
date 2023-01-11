import React from 'react';
import Dice from './component/Dice'
import Timer from './component/Timer'
import './App.css';
import {nanoid} from 'nanoid'

function App() {

  const [dice, setDice] = React.useState( allNewDice() )
  const [tenzies, setTenzies] = React.useState(false)
  const [count, setCount] = React.useState(0)
  // const [niveau, setNiveau] = React.useState('')

  React.useEffect( () => {
    const allHeld = dice.every( di => di.isHeld)
    const choosedNumber = dice[0].number
    const allNumber = dice.every( di => di.number === choosedNumber)
    if(allHeld && allNumber) { setTenzies( true) }
  }, [dice])

  function allNewDice() {
    const allDice = [];
    for(let i=0; i<10; i++) {
      allDice.push( newDice() )
    } 
    return allDice
  }

  function newDice() {
    const num = Math.ceil(Math.random() * 6)
    return {id: nanoid(), number: num, isHeld: false}
  }

  // function level(event) {
  //   setNiveau(event.target.innerText)
  // }

  function rollDice() {
    if(tenzies) {
      setDice(allNewDice())
      setTenzies(false)
    }

    // if(niveau === "Facile") {
    //   var L = [0,0,0,0,0,0];
      
    //   dice.map( (di) =>  L[di.number -1] = L[di.number -1] + 1)
    //   var max = Math.max(...L)
    //   var i = L.indexOf(max)
    // }
    
    setDice( oldDice => oldDice.map(
      di => { return di.isHeld ? di : newDice() }
    ))
    setCount(count+1)
  }

  function holdDice(idDice) {
    if (!tenzies) {
      setDice( oldDice => oldDice.map(
        di => {
          return idDice === di.id ? {...di, isHeld: !di.isHeld} : di
        }
      ))
    }
  }

  const diceElements = dice.map(
   (di)  => <Dice holdDice={holdDice} id={di.id} key={di.id} number={di.number} isHeld={di.isHeld}/>
  )

  return (
    <main className="main">
      <div className="dice-header">
        <h1>Tenzies</h1>
        {/* <div>
          <button onClick={level}>Facile</button>
          <button onClick={level}>Moyen</button>
        </div> */}
        <Timer time={59} tenzies={tenzies}/>
        { tenzies ?
          <p>Congratulation, You Won !!!</p> : 
          <p>Roller pour obtenir les mêmes dés, cliquer sur un dé pour le fixer</p>
        }
      </div>
      <div className="dice-container">
        {diceElements}
      </div>
      <button 
        className='btn-roll' 
        onClick={rollDice}>
          {tenzies ? 'New Game' : 'ROLL'}</button>
      {tenzies && <p>Nombre de Roll effectué : {count}</p>}
    </main>
  );
}
export default App;