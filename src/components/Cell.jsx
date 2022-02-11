import React from "react";

const Cell = ({letter}) =>{ 
    return(
        <div className='w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded dark:text-white'>
            <p>{letter}</p>
        </div>
    )
}

export default Cell;