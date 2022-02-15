import React from 'react';
import Cell from './Cell';
import { MAX_WORD_LENGTH } from '../constant/constant';
import { useSelector } from 'react-redux';

const Row = ({key, guess}) =>{

    const keyRow = useSelector((state) => state.status[key])
    const charStatus = useSelector(state => state.status.charStatus);
    const guessLetters = guess.split("");
    const lettersRemaining = Array.from(Array(MAX_WORD_LENGTH - guessLetters.length));

    return(
        <div className="flex flex-row justify-center items-center pb-6">

        {/* {Array.from(guess).map((letter, i) =>(
                <Cell key={i} letter={letter} charStatus={'correct'} />
            )
        )} */}

        {Array.from(guess).map((letter, i) =>(
                <Cell key={i} letter={letter} charStatus={charStatus? charStatus[i]: ''} />
            )
        )}


        {lettersRemaining.map((_,i)=>(
            <Cell key={i}  letter={'x'}/>
            )
        )}
        
        </div>
    )
}

export default Row;
