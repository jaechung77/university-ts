import React from 'react';
import { useSelector } from 'react-redux';
import University from '../university/university';

const Universities = (props) => {
  const universities = useSelector(
    (state) => state.getUniversities.universities
  );
  const renderUnis = universities.map((uni, i) => {
    const { name } = uni;

    return (
      <div>
        <ul>{uni.name && <University name={name} />}</ul>
      </div>
    );
  });
  return <>{renderUnis}</>;
};

export default Universities;
