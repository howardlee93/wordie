import React, {useEffect} from 'react';
import {addLetter, removeLetter} from '../redux/wordSlice';
import { useDispatch } from 'react-redux';
import Key from './Key';


const Keyboard = (props)=>{

    const dispatch = useDispatch();

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
            }else{
                const key = event.key.toLowerCase();
                if (key.length === 1 && key >= 'a' && key <='z'){
                    onChar(key);
                };
            }
        }
        
        window.addEventListener("keyup", eventListener);
        
        //unsubscribe
        return() =>{
            window.removeEventListener("keyup", eventListener)
        }
    })

    const onClick =(value)=>{
        if(value === "DELETE"){
            onDelete();
        }else{
            onChar(value);

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