import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData : [],
  locationPickData : [],
}

const locationDataSlice = createSlice({
  name : 'locationData',
  initialState,
  reducers : {
    addLocationData : (state, action) => {
      state.locationData = action.payload
    },
    addPickData : (state, action) => {
      state.locationPickData = action.payload
    },
  }
});
export const { addLocationData, addPickData } = locationDataSlice.actions;
export default locationDataSlice;