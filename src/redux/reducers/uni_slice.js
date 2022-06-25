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
      console.log('LOAD >>>>> ' + action.payload.length);
    },
    deleteUniversity(state, action) {
      let copiedUniversities = JSON.parse(JSON.stringify(action.payload));
      state.universities = copiedUniversities.slice(0, -1);
      console.log('before' + action.payload.length);
      console.log('after' + state.universities.length);
    },
    addUniversity(state, action) {
      let copiedUniversities = JSON.parse(JSON.stringify(action.payload));
      state.universities = copiedUniversities.concat(copiedUniversities[0]);
      console.log('before' + action.payload.length);
      console.log('after' + state.universities.length);
    },
  },
});

export const actions = uniSlice.actions;
export default uniSlice.reducer;
