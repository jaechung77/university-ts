import React from 'react';
import styles from './university.module.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const University = ({ uni }) => {
  const { domains, web_pages, name, country, alpha_two_code } = uni;
  return (
    <Card>
      <h1>{name}</h1>
      <p>Domains: {domains}</p>
      <p>Country: {country}</p>
      <p>Webpage: {web_pages}</p>
      <p>Country Code: {alpha_two_code}</p>
    </Card>
  );
};
export default University;
