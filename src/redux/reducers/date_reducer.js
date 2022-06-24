import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dates: [],
};

const dateSlice = createSlice({
  name: 'change_date',
  initialState,
  reducers: {
    changeDate(state, action) {
      state.dates = action.payload;
    },
    // additional functions
  },
});

export const dateActions = dateSlice.actions;
export default dateSlice.reducer;
