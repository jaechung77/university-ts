import './app.css';
import { fetchUniversities } from './redux/actions/get_actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUniversities());
  }, []);

  return <hi>Hello :)</hi>;
}

export default App;
