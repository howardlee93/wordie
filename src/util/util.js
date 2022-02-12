import words from '../constant/words';

export const getAnswer = () =>{
    let randNum = Math.floor(Math.random()* words.length);
    return words[randNum];
};

export const getValidGuess = (guess) =>{
    for (let i = 0; i < words.length; i++){
        if (guess !== words[i]){
            return false;
        }
    }
    return true;
}