// status.js

export const getCharStatus = (answer, guess) =>{
    let statsArr = [];
    for (let i = 0; i < 5 ;i++){
        if (guess[i] === answer[i]){
            statsArr.push('correct');
            // statsArr.push(true)
        }else if(answer.includes(guess[i])){
            statsArr.push('present');
        }else{
            statsArr.push('absent');

            // statsArr.push(false);
        };
    }
    // console.log(statsArr);
    return statsArr;

}