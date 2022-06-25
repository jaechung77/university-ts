import React, { useState, useEffect } from 'react';
import styles from './buttons.module.css';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
  getUniversities,
  deleteUniversity,
  addUniversity,
} from '../../redux/actions/actions';

const Buttons = (props) => {
  const dispatch = useDispatch();
  const universities = useSelector(
    (state) => state.getUniversities.universities
  );

  const handleClick = (e) => {
    const action = e.currentTarget.textContent;
    if (action === 'LOAD') {
      dispatch(getUniversities());
    } else if (action === 'DELETE') {
      dispatch(deleteUniversity(universities)); //
    } else if (action === 'ADD') {
      dispatch(addUniversity(universities));
    }
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
          <button className={styles.btn__delete} onClick={handleClick}>
            DELETE
          </button>
          <button className={styles.btn__add} onClick={handleClick}>
            ADD
          </button>
        </li>
        <li></li>
      </ul>
    </>
  );
};

export default Buttons;
