import {createSlice } from '@reduxjs/toolkit';
import {getCharStatus} from '../util/status';

export const statusSlice = createSlice({
    name:'status',
    initialState:{
        row1:[],
        row2:[],
        row3:[],
        row4:[],
        row5:[],
        
    }


});

export default statusSlice.reducer

