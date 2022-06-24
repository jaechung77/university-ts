import { getActions } from '../reducers/get_reducer';

import axios from 'axios';

export const fetchUniversities = () => async (dispatch) => {
  const res = await axios.get(
    'http://universities.hipolabs.com/search?country=Australia'
  );
  dispatch(getActions.getAllUniversities(res.data));
};
