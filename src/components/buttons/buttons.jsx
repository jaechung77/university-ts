import React from 'react';
import styles from './buttons.module.css';
import Button from '../button/button';

const Buttons = (props) => (
  <ul className={styles.ul}>
    <li>
      <Button className={styles.btn__load} />
    </li>
    <li>
      <Button className={styles.btn__delete} />
    </li>
    <li>
      <Button className={styles.btn__add} />
    </li>
  </ul>
);

export default Buttons;
