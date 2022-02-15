import './App.css';
import React, {useEffect, useState} from 'react';
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';
import { Footer } from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <header className='App-header'>
        Wordie - a Wordle clone
        <h1>Instructions</h1>
      </header>
      <Modal/>
      <Grid/>
      <Keyboard/>
      <Footer/>
    </div>
  );
}

export default App;
