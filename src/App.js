import React from 'react';
import Dice from './component/Dice'
import Timer from './component/Timer'
import './App.css';
import {nanoid} from 'nanoid'

function App() {

  const [dice, setDice] = React.useState( allNewDice() )
  const [tenzies, setTenzies] = React.useState(false)
  const [count, setCount] = React.useState(0)

  React.useEffect( () => {
    const allHeld = dice.every( di => di.isHeld)
    const choosedNumber = dice[0].number
    const allNumber = dice.every( di => di.number === choosedNumber)
    if(allHeld && allNumber) { setTenzies( true) }
    console.log(choosedNumber, allHeld, allNumber)
  }, [dice])

  // React.useEffect(()=> {
  //   console.log('tenzies', tenzies)
  // }, [tenzies])

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
  //   console.log(event)
  // }

  function rollDice() {
    if(tenzies) {
      setDice(allNewDice())
      setTenzies(false)
      console.log('reload')
    }

    
    setDice( oldDice => oldDice.map(
      di => {
        return di.isHeld ? di : newDice()
      }
    ))
    setCount(count+1)
    console.log(count)
  }

  function holdDice(idDice) {
    if (!tenzies) {
      setDice( oldDice => oldDice.map(
        di => {
          return idDice === di.id ? {...di, isHeld: !di.isHeld} : di
        }
      ))
    }
    // setDice((prevDice) => {
    //   const newDice = []
    //   for(let i=0; i<prevDice.length; i++) {
    //     let oldDice = prevDice[i]
    //     if (oldDice.id === e.currentTarget.id) {
          
    //       newDice.push({...oldDice, isHeld: !isHeld})
          
    //     }else {
    //       newDice.push(oldDice)
    //       console.log(newDice)
    //     }
    //   }
    //   console.log('end set:', newDice)
    //   return newDice
    // })
  }
  console.log(dice)
  const diceElements = dice.map(
   (di)  => <Dice holdDice={holdDice} id={di.id} key={di.id} number={di.number} isHeld={di.isHeld}/>
  )

  return (
    <main className="main">
      <div className="dice-header">
        <h1>Tenzies</h1>
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
