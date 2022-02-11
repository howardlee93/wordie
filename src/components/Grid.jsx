import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './Modal';
import Row from './Row';
import EmptyRow from './EmptyRow';

const Grid =() =>{
    
    // const correct = useSelector(state => state.correct)
    const guess = useSelector(state => state.word.guess);
    const answer = useSelector(state => state.word.answer)
    const pastGuesses = useSelector(state => state.word.pastGuesses);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const numGuesses = useSelector(state => state.word.numGuesses);
    const numGuessesLeft = 5 - numGuesses;

    useEffect(()=>{

    },[guess, answer, numGuesses, pastGuesses])

    const createEmptyRow = () =>{
        let emptyRows = [];
        for (let i = 0; i < numGuessesLeft; i++){
            emptyRows.push(<EmptyRow key={i}/>);
        }
        return emptyRows;
    }

    return(
        <div>
        {guess === answer ? <h1>Good job!</h1> : <h1> Try again!</h1>}
        <div className="pb-6">
            
            {/* <Modal open={open}/> */}

            {pastGuesses && numGuessesLeft < 5 ? pastGuesses.map(guess =>(
                <Row guess={guess}/>
            )) : ("")}
             <Row guess={guess}/>
            {createEmptyRow()}
        </div>
        </div>
    )
    
};

export default Grid;