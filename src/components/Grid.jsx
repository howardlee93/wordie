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

    const createRows =()=> {
        let rows =[];
        for (let i = 0; i < 5; i++){
            rows.push(<Row key={i}/>)
        }
        return rows;
    };

   
    return(
        <div>
            <Modal open={open}/>
            {guess === answer ? <h1>Good job!</h1> : <h1> Try again!</h1>}
            {createRows()}
            {/* <Row/> */}
        </div>
    )
    
};

export default Grid;