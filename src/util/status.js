// status.js

const status =  'absent' | 'present' | 'correct'


export const getCharStatus = (answer, guess) =>{
    let statsArr = [];
    for (let i = 0; i < 4 ;i++){
        if (guess[i] == answer[i]){
            statsArr.push(true)
        }else{
            statsArr.push(false);
        };
    }
    return statsArr;

}