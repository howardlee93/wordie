import './App.css';
import React, {useEffect, useState} from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard'

function App() {

  return (
    <div className="App">
      <header>
        Wordie - a Wordle clone
      </header>
      <Grid/>
      <Keyboard/>
    </div>
  );
}

export default App;
