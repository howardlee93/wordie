import React from 'react';

const Key = (props) =>{

    const handleClick = (e)=>{
        props.onClick(props.letter)
    }

    return(
        <div onClick={handleClick}>
            <button className='border-4 text-lg'>{props.letter}</button>
        </div>
    )

};

export default Key;
