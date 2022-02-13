import React from "react";

const Cell = ({letter, charStatus='absent'}) =>{ 
    let status;

    switch(charStatus){
        case 'correct':
            status = 'text-green-400';
            break
        case 'present':
            status = 'text-yellow-400';
            break;
        case 'absent':
            status = 'text-gray-400	';
            break
        default:
            status = ''
    }


    return(
        <div className={`w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-4xl font-bold rounded ${status}`}>
            <p>{letter}</p>
        </div>
    )
}

export default Cell;