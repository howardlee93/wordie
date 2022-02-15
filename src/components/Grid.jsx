import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from './Row';
import EmptyRow from './EmptyRow';
import {MAX_GUESSES} from '../constant/constant';

const Grid =() =>{
    const guess = useSelector(state => state.word.guess);
    const answer = useSelector(state => state.word.answer);
    const pastGuesses = useSelector(state => state.word.pastGuesses);
    const pastGuessesStatus = useSelector(state => state.status.pastGuessesStatus);

    const numGuessesLeft = MAX_GUESSES - pastGuesses.length -1;

    useEffect(()=>{

    },[guess, answer, pastGuesses]) // charStatus

    return(
        <div>
        {guess === answer ? <h1><b>Good job!</b></h1> : <h1> Try again!</h1>}
        <div className="pb-6">            

            {pastGuesses && numGuessesLeft <= 5 ? pastGuesses.map((guess, i) =>(
                <Row key={i} guess={guess} pastGuessStatus={pastGuessesStatus[i]}/>
            )) : ("")}
            
             <Row guess={guess} />
             {Array.from(new Array(numGuessesLeft)).map((_,i)=>(
                 <EmptyRow key={i}/>
             ))}
        </div>
        </div>
    )
    
};

export default Grid;