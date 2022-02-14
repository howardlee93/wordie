import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getCharStatus} from '../util/status';

export const addCharStatus = createAsyncThunk('status/getCharStatus', async(answer, guess)=>{
    const res = getCharStatus(answer, guess);
    return res;
});




export const statusSlice = createSlice({
    name:'status',
    initialState:{
        // row1:[],
        // row2:[],
        // row3:[],
        // row4:[],
        // row5:[],
        charStatus:[]
    },
   
    reducers:{

    },

    extraReducers: builder => {
        builder.addCase(addCharStatus.fulfilled, (state, action) =>{
            let newState = state.charStatus.concat(action.payload);
            state.charStatus = newState;
        })
    },

});


export default statusSlice.reducer

