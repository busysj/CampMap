import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basedData: [],
  homeSearchData: [],
  homeSearchValue: "",
};

const basedDataSlice = createSlice({
  name: "basedData",
  initialState,
  reducers: {
    addBasedData: (state, action) => {
      state.basedData = action.payload;
    },

    addHomeSearchData: (state, action) => {
      state.homeSearchData = action.payload;
    },
    addHomeSearchValue: (state, action) => {
      state.homeSearchValue = action.payload;
    },
  },
});
export const { addBasedData, addHomeSearchData, addHomeSearchValue } =
  basedDataSlice.actions;
export default basedDataSlice;
