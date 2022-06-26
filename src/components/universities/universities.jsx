import React from 'react';
import { useSelector } from 'react-redux';
import University from '../university/university';
import styles from './universities.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Universities = () => {
  const universities = useSelector(
    (state) => state.getUniversities.universities
  );

  return (
    <section className={styles.container}>
      <div className={`row ${styles.row}`}>
        {universities.map((uni, i) => (
          <University key={i} uni={uni} />
        ))}
      </div>
    </section>
  );
};

export default Universities;
