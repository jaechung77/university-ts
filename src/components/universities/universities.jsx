import React from 'react';
import { useSelector } from 'react-redux';
import University from '../university/university';

const Universities = (props) => {
  const universities = useSelector(
    (state) => state.getUniversities.universities
  );

  return (
    <>
      <div>
        <ul>
          {universities.map((uni, i) => {
            const { domains, web_pages, name, country, alpha_two_code } = uni;
            return (
              <li key={i}>
                {uni.name && ( //
                  <University
                    name={name}
                    domains={domains}
                    web_pages={web_pages}
                    name={name}
                    country={country}
                    alpha_two_code={alpha_two_code}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Universities;
