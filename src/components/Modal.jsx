import React from 'react';
import example  from '../assets/example.png';

const Modal = ({open}) =>{
    const showHide = open ? "" : "hidden";

    return(
        <div className={ `flex justify-center items-center flex-col ${showHide} bg-black`}>
        <p className="text-sm text-white">
            Guess the word in 5 tries. After each guess, the color of the tiles will
            change to show how close your guess was to the word.
        </p>
            <img src={example} alt="example" height='500' width='500'/>
        <p className="mt-6 italic text-sm text-white ">
            This is an open source version of the word guessing game we all know and
            love.
        </p>
        </div>
    )
};

export default Modal;




