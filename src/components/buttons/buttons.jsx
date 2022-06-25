import React from 'react';
import styles from './buttons.module.css';

const Buttons = (props) => {
  const handleClick = (e) => {
    console.log(e.currentTarget.textContent);
  };

  return (
    <>
      <ul className={styles.ul}>
        <li>
          <button className={styles.btn__load} onClick={handleClick}>
            LOAD
          </button>
        </li>
        <li>
          <button className={styles.btn__add} onClick={handleClick}>
            ADD
          </button>
        </li>
        <li>
          <button className={styles.btn__delete} onClick={handleClick}>
            DELETE
          </button>
        </li>
      </ul>
    </>
  );
};

export default Buttons;
