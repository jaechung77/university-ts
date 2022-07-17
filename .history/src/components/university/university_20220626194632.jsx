import React from 'react';
import styles from './university.module.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const University = ({ uni }) => {
  const { domains, web_pages, name, country, alpha_two_code } = uni;
  return (
    <Card className={`col-lg-4 col-md-6 ${styles.card}`}>
      <Card.Title className={styles.title}>{name}</Card.Title>
      <Card.Text className={styles.text}>
        <i className="fa-solid fa-house"></i>&nbsp; {domains}
      </Card.Text>
      <Card.Text className={styles.text}>
        <i className="fa-solid fa-globe"></i>&nbsp; {country}
      </Card.Text>
      <Card.Text className={styles.text}>
        <i className="fa-brands fa-chrome"></i>&nbsp; {web_pages}
      </Card.Text>
      <Card.Text className={styles.text}>
        <i className="fa-solid fa-code"></i>
        &nbsp; {alpha_two_code}
      </Card.Text>
    </Card>
  );
};
export default University;
