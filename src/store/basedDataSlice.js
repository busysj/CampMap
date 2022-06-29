import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basedData : [],
}

const basedDataSlice = createSlice({
  name : 'basedData',
  initialState,
  reducers : {
    addBasedData : (state, action) => {
      state.basedData = action.payload
    }
  }
});
export const { addBasedData } = basedDataSlice.actions;
export default basedDataSlice;