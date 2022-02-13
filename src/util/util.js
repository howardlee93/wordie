import {words} from '../constant/words';

export const getAnswer = () =>{
    let randNum = Math.floor(Math.random()* words.length);
    return words[randNum];
};

export const checkValidGuess = (guess) =>{
    for (let i = 0; i < words.length; i++){
        if (guess === words[i]){
            return true;
        }
    }
    return false;
}

