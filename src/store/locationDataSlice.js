import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationData : [],
  locationPickData : [],
  loading : true
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
    loadingState : (state, action) => {
      state.loading = action.loading
    },
  }
});
export const { addLocationData, addPickData, loadingState } = locationDataSlice.actions;
export default locationDataSlice;