import './app.css';
import Buttons from './components/buttons/buttons';
import Universities from './components/universities/universities';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <section className={styles.content}>
        <Buttons />
      </section>
      <section className={styles.content}>
        <Universities />
      </section>
    </div>
  );
}

export default App;
