import React from 'react';

const Key = (props) =>{

    const handleClick = (e)=>{
        props.onclick(props.letter)
    }

    return(
        <div>
            <p className='border-4 text-lg'>{props.letter}</p>
        </div>
    )

};

export default Key;
