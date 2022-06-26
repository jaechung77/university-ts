import React, { useState, useEffect } from 'react';
import styles from './buttons.module.css';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
  getUniversities,
  deleteUniversity,
  addUniversity,
} from '../../redux/actions/actions';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <section className={styles.container}>
      <Button className={styles.button__load} onClick={handleClick}>
        LOAD
      </Button>
      <Button className={styles.button__delete} onClick={handleClick}>
        DELETE
      </Button>
      <Button className={styles.button__add} onClick={handleClick}>
        ADD
      </Button>
    </section>
  );
};

export default Buttons;
