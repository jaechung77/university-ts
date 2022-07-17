import { actions } from '../reducers/uni_slice';
import axios from 'axios';

// Equivalent to CreateAsncThunk
export const getUniversities = () => async (dispatch) => {
  const res = await axios.get(
    'http://universities.hipolabs.com/search?country=Australia'
  );
  return dispatch(actions.getAllUniversities(res.data));
};

export const deleteUniversity = (universities) => (dispatch) => {
  return dispatch(actions.deleteUniversity(universities));
};

export const addUniversity = (universities) => async (dispatch) => {
  return dispatch(actions.addUniversity(universities));
};
