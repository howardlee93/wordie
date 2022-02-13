// status.js

const status =  'absent' | 'present' | 'correct'


const getCharStatus = (answer, guess) =>{
    let statsArr = [];

    for (let i = 0; i < 4 ;i ++){
        if (guess[i] == answer[i]){
            statsArr.push(true)
        }else{
            push(false);
        };
    }
    return statsArr;

}