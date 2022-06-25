import { actions } from '../reducers/uni_slice';
import axios from 'axios';
import { useSelector } from 'react-redux';

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
