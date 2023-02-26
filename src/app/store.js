import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import fileReducer from '../features/files/fileSlice'

export const store = configureStore({
  reducer: {
    file: fileReducer
    // counter: counterReducer,
  },
});
