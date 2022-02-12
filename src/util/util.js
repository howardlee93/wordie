import words from '../constant/words';



export const getAnswer = () =>{
    let randNum = Math.floor(Math.random()* words.length);
    return words[randNum];
}