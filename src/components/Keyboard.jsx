import React, {useEffect} from 'react';

import Key from './Key';


const Keyboard = (props)=>{

    useEffect(()=>{
        const eventListenter = (event) =>{
            if (event.key === "backspace"){
                props.onDelete()
            }else{
                props.onChar(event.key)
            }
        }
        
        window.addEventListener("keyup", eventListenter);
        
        //unsubscribe
        return() =>{
            window.removeEventListener("keyup", eventListenter)
        }

    },[props, props.onChar, props.onDelete])

    const onClick =(value)=>{
        if(value === "delete"){
            props.onDelete();
        }else{
            props.onChar(value);

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
                {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
                    <Key key={key} 
                    onClick={onClick}
                    letter={key}/>
                ))}        
            </div>
            </div>
        </div>
    )

};


export default Keyboard;