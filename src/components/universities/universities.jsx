import React from 'react';
import { useSelector } from 'react-redux';
import University from '../university/university';
import styles from './universities.module.css';

const Universities = (props) => {
  const universities = useSelector(
    (state) => state.getUniversities.universities
  );

  return (
    <section className={styles.container}>
      <ul className={styles.cards}>
        {universities.map((uni, i) => {
          return (
            <li key={i} className={styles.li}>
              {uni && ( //
                <University uni={uni} />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Universities;
