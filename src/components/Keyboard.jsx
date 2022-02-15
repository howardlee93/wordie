import React, {useEffect} from 'react';
import {addLetter, removeLetter, addGuess} from '../redux/wordSlice';
import { useDispatch, useSelector } from 'react-redux';
import Key from './Key';
import {MAX_GUESSES, MAX_WORD_LENGTH} from '../constant/constant';
import { checkValidGuess } from '../util/util';
import {addCharStatus} from '../redux/statusSlice';

const Keyboard = ()=>{
    const answer = useSelector(state => state.word.answer);
    const pastGuesses = useSelector(state => state.word.pastGuesses);
    const guess = useSelector(state => state.word.guess);
    const dispatch = useDispatch();

    const onEnter = ()=>{
        if(pastGuesses.length < MAX_GUESSES){
            console.log('enter guess');
            if(checkValidGuess(guess) === true){
                dispatch(addCharStatus());
                dispatch(addGuess());
                if( answer === guess){
                    alert(`game ended! You have won`);
                }
                // console.log(getCharStatus(answer, guess))
            }else{
                alert('not a valid word');
            }; 
        }else{ //if(pastGuesses.length === MAX_GUESSES)
            dispatch(addCharStatus());
            alert(`game ended! You have ${answer === pastGuesses[pastGuesses.length -1] ? 'won' : 'lost' }. 
            The answer is ${answer}`)
        }
    }

    const onChar = value =>{
        // setCurrentGuess(`${value}`)
        console.log(value);
        dispatch(addLetter(value));
      };
    
      const onDelete =() =>{
        // setCurrentGuess(CurrentGuess.slice(0,-1));
        dispatch(removeLetter());
      }

    useEffect(()=>{
        const eventListener = (event) =>{
            if (event.code === "Backspace"){
                onDelete()
            }else if(event.code === "Enter"){
                onEnter()
            }else{
                const key = event.key.toLowerCase();
                if (key.length === 1 && key >= 'a' && key <='z' && guess.length < MAX_WORD_LENGTH ){
                    onChar(key);
                };
            }
        }
        
        window.addEventListener("keyup", eventListener);
        //unsubscribe
        return() =>{
            window.removeEventListener("keyup", eventListener)
        }
    });

    useEffect(()=>{},[guess]);

    const onClick =(value)=>{
        if(value === "DELETE"){
            onDelete();
        }else if(value === "ENTER"){
            onEnter();
        }else if (guess.length < MAX_WORD_LENGTH){
            onChar(value.toLowerCase());
        }
    }

    return(
        <div>
            <div>
            <div className="flex justify-center mb-1">
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
                    <Key key={key} 
                    onClick={onClick}
                    letter={key}/>

                ))}
            </div>
            <div className="flex justify-center mb-1">
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
                    <Key key={key} 
                    onClick={onClick}
                    letter={key}/>
                ))} 
            </div>
             <div className="flex justify-center">
                <Key letter="ENTER" onClick={onClick}>
                    <p>ENTER</p>
                </Key>
                {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
                    <Key key={key} 
                    onClick={onClick}
                    letter={key}/>
                ))}  
                <Key letter="DELETE" onClick={onClick}>
                    <p>Backspace</p>
                </Key>      
            </div>
            </div>
        </div>
    )

};


export default Keyboard;