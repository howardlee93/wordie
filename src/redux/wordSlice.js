import {createSlice } from '@reduxjs/toolkit';

export const wordSlice =createSlice({

    name:'word',
    initialState:{
        answer:"hello",
        guess:"",
        correct: false
    },
    reducers:{
        addLetter (state, action) {
            state.guess += action.payload
        },
        removeLetter(state, action){
           state.word -= action.payload;

        },
        // compareWord(state){
        //     state.correct = state.word === state.answer;
        // }


    }

});

export const { addLetter, removeLetter } = wordSlice.actions

export default wordSlice.reducer


