import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './wordSlice';


export default configureStore({
  reducer: {
    word: wordReducer
  }
})