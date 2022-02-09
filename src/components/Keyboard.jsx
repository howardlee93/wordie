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
        dispatch(removeLetter);
      }

    useEffect(()=>{
        const eventListenter = (event) =>{
            if (event.code === "Backspace"){
                onDelete()
            }else{
                onChar(event.key)
            }
        }
        
        window.addEventListener("keyup", eventListenter);
        
        //unsubscribe
        return() =>{
            window.removeEventListener("keyup", eventListenter)
        }

    },[])

    const onClick =(value)=>{
        if(value === "delete"){
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