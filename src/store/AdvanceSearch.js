import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyType: null,
  minBudget: null,
  maxBudget: null,

  preferredRentType: null,
  gender: null,
  city: "Dubai",
  location: null,
};

const AdvancedSearchSlice = createSlice({
  name: "AdvanceSearch",
  initialState,
  reducers: {
    city(state, action) {
      state.city = action.payload;
    },
    location(state, action) {
      state.location = action.payload;
    },
    propertyType(state, action) {
      state.propertyType = action.payload;
    },
    minBudget(state, action) {
      state.minBudget = action.payload;
    },
    maxBudget(state, action) {
      state.maxBudget = action.payload;
    },
    preferredRentType(state, action) {
      state.preferredRentType = action.payload;
    },
    gender(state, action) {
      state.gender = action.payload;
    },
    clear(state, action) {
      state.city = null;
      state.location = null;
      state.propertyType = null;
      state.minBudget = null;
      state.maxBudget = null;
      state.preferredRentType = null;
      state.gender = null;

      console.log(state.minBudget);
    },
  },
});

export const AdvanceSearchActions = AdvancedSearchSlice.actions;

export default AdvancedSearchSlice.reducer;
