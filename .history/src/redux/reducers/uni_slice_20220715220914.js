import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  universities: [],
};

const uniSlice = createSlice({
  name: 'getUniversities',
  initialState,
  reducers: {
    getAllUniversities(state, action) {
      state.universities = action.payload;
    },
    deleteUniversity(state, action) {
      let copiedUniversities = JSON.parse(JSON.stringify(action.payload));
      state.universities = copiedUniversities.slice(0, -1);
    },
    addUniversity(state, action) {
      let copiedUniversities = JSON.parse(JSON.stringify(action.payload));
      state.universities = copiedUniversities.concat(copiedUniversities[0]);
    },
  },
  // extraReducers: {
  //   [getUniversities.fulfilled]: (state, action) => {
  //     state.status = 'Fulfilled';
  //     state.data = action.payload;
  //   },
  // },
});

export const actions = uniSlice.actions;
export default uniSlice.reducer;
