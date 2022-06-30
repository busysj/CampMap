import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData : [],
  locationPickData : [],
}

const locationDataSlice = createSlice({
  name : 'locationData',
  initialState,
  reducers : {
    addData : (state, action) => {
      state.locationData = action.payload
    },
    addPickData : (state, action) => {
      state.locationPickData = action.payload
    },
  }
});
export const { addData, addPickData } = locationDataSlice.actions;
export default locationDataSlice;