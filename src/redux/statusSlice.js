import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getCharStatus} from '../util/status';

export const addCharStatus = createAsyncThunk('status/addCharStatus', async(_, { getState} )=>{
    const {answer} = getState().word;
    const  {guess} = getState().word;
    const res = getCharStatus(answer, guess);
    console.log(res, answer, guess);
    return res;
});

export const statusSlice = createSlice({
    name:'status',
    initialState:{
        pastGuessesStatus:[],
        charStatus:[]
    },
   
    reducers:{
        addPastGuessStatus(state, action){
            state.pastGuessesStatus.push(state.charStatus)
        }
    },

    extraReducers: builder => {
        builder
        .addCase(addCharStatus.fulfilled, (state, action) =>{
            let newState = state.charStatus.concat(action.payload);
            state.charStatus = newState;
            state.pastGuessesStatus.push(newState);

        })
       .addCase(addCharStatus.pending, (state, action) => {
            // state.pastGuessesStatus.push( state.charStatus);
            state.charStatus = [];
        })
    },

});


export default statusSlice.reducer

