import { configureStore } from '@reduxjs/toolkit';
import postSlice from './reducers/post_reducer';
import dateSlice from './reducers/date_reducer';

const store = configureStore({
  reducer: {
    allJobs: postSlice,
    saveDates: dateSlice,
  },
});

export default store;
