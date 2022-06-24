import './app.css';
import { fetchUniversities } from './redux/actions/get_actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Buttons from './components/buttons/buttons';
import Universities from './components/universities/universities';
import styles from './app.module.css';

function App() {
  const universities = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUniversities());
  }, []);

  return (
    <div className={styles.app}>
      <Buttons />
      <section className={styles.content}>
        <Universities universities={universities} />
      </section>
    </div>
  );
}

export default App;
