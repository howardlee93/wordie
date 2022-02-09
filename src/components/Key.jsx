import React from 'react';

const Key = (props) =>{

    const handleClick = (e)=>{
        props.onClick(props.letter)
    }

    return(
        <div onClick={handleClick}>
            <p className='border-4 text-lg'>{props.letter}</p>
        </div>
    )

};

export default Key;
