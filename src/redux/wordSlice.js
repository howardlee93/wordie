import {createSlice } from '@reduxjs/toolkit';

export const wordSlice =createSlice({

    name:'word',
    initialState:{
        answer:"hello",
        word:"",
        correct: false
    },
    reducers:{
        addLetter (state, action) {
            state.word += action.payload.toString();
        },
        removeLetter(state, action){
           state.word -= action.payload.word;

        },
        compareWord(state){
            state.correct = state.word === state.answer;
        }


    }

});

export const { addLetter, removeLetter, compareWord } = wordSlice.actions

export default wordSlice.reducer


