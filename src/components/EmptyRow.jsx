import React, {useEffect} from 'react';
import Cell from './Cell';

const EmptyRow = () =>{

    //useeffect

    const createEmptyRow = ()=>{
        let cells = [];
        for (let i = 0; i < 5; i++){
            cells.push(<Cell key={i} letter={'x'}/>)
        }
        return cells;
    }

    return(
        <div className="flex flex-row pb-6">
            {createEmptyRow()}
        </div>
    )
}

export default EmptyRow;