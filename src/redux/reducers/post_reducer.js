import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
};

const postSlice = createSlice({
  name: 'fetch_jobs',
  initialState,
  reducers: {
    getAllJobs(state, action) {
      state.jobs = action.payload;
    },
    // additional functions
  },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
