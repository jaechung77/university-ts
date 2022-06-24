import { postActions } from '../reducers/post_reducer';
import { dateActions } from '../reducers/date_reducer';
import axios from 'axios';

export const fetchJobs = () => async (dispatch) => {
  const res = await axios.get('static.json');
  dispatch(postActions.getAllJobs(res.data));
};

export const saveDates = (startDate) => async (dispatch) => {
  dispatch(dateActions.changeDate(startDate));
};
