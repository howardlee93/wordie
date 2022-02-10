import {createSlice } from '@reduxjs/toolkit';

export const wordSlice =createSlice({

    name:'word',
    
    initialState:{
        answer:"hello",
        guess:"",
        correct: false,
        numGuesses: 0,
    },
    reducers:{
        addLetter(state, action) {
            state.guess += action.payload
        },
        removeLetter(state){
            let newGuess = state.guess;
            newGuess = state.guess.substring(0, state.guess.length -1 );
            state.guess = newGuess;
        },
        addGuess(state){
            if(state.guess.length === 5){
                state.numGuesses ++;
                return state.numGuesse;
            }
        }


        // compareWord(state){
        //     state.correct = state.word === state.answer;
        // }


    }

});

export const { addLetter, removeLetter } = wordSlice.actions

export default wordSlice.reducer


