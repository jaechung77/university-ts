import { configureStore } from '@reduxjs/toolkit';
import uniReducer from './reducers/uni_slice';

const store = configureStore({
  reducer: {
    getUniversities: uniReducer,
  },
});

export default store;
