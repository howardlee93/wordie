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
        row1:[],
        row2:[],
        row3:[],
        row4:[],
        row5:[],
        charStatus:[]
    },
   
    reducers:{

    },

    extraReducers: builder => {
        builder
        .addCase(addCharStatus.fulfilled, (state, action) =>{
            let newState = state.charStatus.concat(action.payload);
            state.charStatus = newState;
        })
       .addCase(addCharStatus.pending, (state, action) => {
            state.row1 = state.charStatus
            state.charStatus = [];
        })
    },

});


export default statusSlice.reducer

