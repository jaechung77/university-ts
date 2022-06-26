import React from 'react';
import styles from './university.module.css';

const University = ({ uni, key }) => {
  const { domains, web_pages, name, country, alpha_two_code } = uni;
  return (
    <li className={styles.card} key={key}>
      <h1>{name}</h1>
      <p>Domains: {domains}</p>
      <p>Country: {country}</p>
      <p>Webpage: {web_pages}</p>
      <p>Country Code: {alpha_two_code}</p>
    </li>
  );
};
export default University;
