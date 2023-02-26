import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useAxios from "../../hooks/useAxios";


const initialState = {
  file: []
};


export const fileAsync = createAsyncThunk(
  'file/axios',
  async (data) => {
     const response = await useAxios(data);

     return response[0];
  }
);

export const fileSlice = createSlice({
  name: 'file',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  // reducers: {
  //   file: (state) => {
  //     state.value += 1;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(fileAsync.fulfilled, (state, action) => {      
        state.file = action.payload;
      });
  },
});

export const { file } = fileSlice.actions;
export const selectFile = (state) => state.file;
export default fileSlice.reducer;
