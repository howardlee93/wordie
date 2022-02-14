// status.js

const status =  'absent' | 'present' | 'correct'


export const getCharStatus = (answer, guess) =>{
    let statsArr = [];
    for (let i = 0; i < 5 ;i++){
        if (guess[i] === answer[i]){
            statsArr.push(true)
        }else{
            statsArr.push(false);
        };
    }
    // console.log(statsArr);
    return statsArr;

}