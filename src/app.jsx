import './app.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Buttons from './components/buttons/buttons';
import Universities from './components/universities/universities';
import styles from './app.module.css';

function App() {
  const universities = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Buttons />
      </section>
      <section className={styles.content}>
        <Universities universities={universities} />
      </section>
    </div>
  );
}

export default App;
