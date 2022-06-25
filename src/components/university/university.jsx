import React from 'react';

const University = ({ domains, web_pages, name, country, alpha_two_code }) => (
  <>
    <h1>{name}</h1>
    <p>Domains: {domains}</p>
    <p>Country: {country}</p>
    <p>Webpage: {web_pages}</p>
    <p>Country Code: {alpha_two_code}</p>
  </>
);
export default University;
