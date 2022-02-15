import {createSlice } from '@reduxjs/toolkit';
import { MAX_GUESSES, MAX_WORD_LENGTH } from '../constant/constant';
import {getAnswer} from '../util/util';

export const wordSlice = createSlice({

    name:'word',
    
    initialState:{
        answer: "hello", //getAnswer(),//
        guess:"",
        correct: false,
        numGuesses: 0,
        pastGuesses:[],
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
            if(state.guess.length === MAX_WORD_LENGTH && state.pastGuesses.length < MAX_GUESSES){
                state.numGuesses ++;
                state.pastGuesses.push(state.guess)
                state.guess = "";
            };

        }


        // compareWord(state){
        //     state.correct = state.word === state.answer;
        // }


    }

});

export const { addLetter, removeLetter, addGuess } = wordSlice.actions

export default wordSlice.reducer


