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
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const numGuesses = 4;
    const emptyRows = Array.from(numGuesses -1);


    useEffect(()=>{

    },[guess, answer])

    const createEmptyRows =() =>{
        let rows =[];
        for(let i = 0; i< numGuesses; i++){
            rows.push(<EmptyRow key={i}/>)
        };
        return rows;
    }

    return(
        <div className="text-center">
        {guess === answer ? <h1>Good job!</h1> : <h1> Try again!</h1>}
        <div className="flex pb-6 content-center">
            
            {/* <Modal open={open}/> */}
            <Row className="flex-row" guess={guess}/>
            {/* <EmptyRow/> */}
            {/* {createEmptyRows()} */}

            {emptyRows.map((_,i)=>{
                return <EmptyRow key={i}/>
            })}
            
        </div>
        </div>
    )
    
};

export default Grid;