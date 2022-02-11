import './App.css';
import React, {useEffect, useState} from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className="App">
      <header>
        Wordie - a Wordle clone
      </header>
      <Grid/>
      <Keyboard/>
      <Footer/>
    </div>
  );
}

export default App;
