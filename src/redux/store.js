import { configureStore } from '@reduxjs/toolkit';
import getSlice from './reducers/get_reducer';

const store = configureStore({
  reducer: {
    allUniversities: getSlice,
  },
});

export default store;
