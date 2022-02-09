import './App.css';
import React, {useEffect, useState} from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard'

function App() {

  const [CurrentGuess, setCurrentGuess] = useState("");


  const onChar = value =>{
    setCurrentGuess(`${value}`)
    console.log(value)
  };

  const onDelete =() =>{
    setCurrentGuess(CurrentGuess.slice(0,-1))
  }


  return (
    <div className="App">
      <header>
        Wordie - a Wordle clone
      </header>
      <Grid/>

      <Keyboard
        onChar={onChar}
        onDelete={onDelete}/>
    </div>
  );
}

export default App;
