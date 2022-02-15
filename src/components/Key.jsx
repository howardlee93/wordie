import React from 'react';

const Key = (props) =>{

    const handleClick = (e)=>{
        props.onClick(props.letter)
    }

    return(
        <button className='border-4 text-4xl' onClick={handleClick}>{props.letter}</button>
    )

};

export default Key;
