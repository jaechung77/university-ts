import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  universities: [],
};

const getSlice = createSlice({
  name: 'fetchUniversities',
  initialState,
  reducers: {
    getAllUniversities(state, action) {
      state.universities = action.payload;
    },
    // additional functions
  },
});

export const getActions = getSlice.actions;
export default getSlice.reducer;
