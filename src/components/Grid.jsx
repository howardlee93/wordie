// import Cell from './Cell';
import Row from './Row';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useState, useEffect } from 'react';
// import { compareWord } from '../redux/wordSlice';
import Modal from './Modal';


const Grid =() =>{
    
    // const correct = useSelector(state => state.correct)
    const guess = useSelector(state => state.word.guess);
    const answer = useSelector(state => state.word.answer)
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    useEffect(()=>{

    },[guess, answer])

    return(
        <div>
           {Array.from(new Array(5*5),(_, ind)=>{
               return(
                   <div key={ind}>Test</div>
               )
           })}
            {/* <Modal open={open}/> */}
            {guess === answer ? <h1>Good job!</h1> : <h1> Try again!</h1>}
        </div>
    )
    
};

export default Grid;