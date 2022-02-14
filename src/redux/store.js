import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './wordSlice';
import statusReducer from './statusSlice';
// import logger from 'redux-logger';


export default configureStore({
  reducer: {
    word: wordReducer,
    status: statusReducer
  }
})