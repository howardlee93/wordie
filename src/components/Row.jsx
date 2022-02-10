import React from 'react';
import Cell from './Cell';

const Row = ({guess}) =>{

    return(
        <div className="flex flex-row justify-center items-center pb-6">

            {guess ? Array.from(guess).map((letter, i) =>(
                <Cell key={i} letter={letter}/>
            )) 
            :("")    
            }
        </div>
    )
}

export default Row;
