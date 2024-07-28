import React from 'react';
import './index.css'; // Import the CSS file

const partners = [
  'logo','logo','logo','logo','logo','logo','logo','logo','logo','logo','logo','logo',
];

const Table = () => {
  return (
    <div className="partners-grid">
      {partners.map((logo, index) => (
        <div key={index} className="partner-logo">
          {logo}
          </div>
      ))}
    </div>
  );
};

export default Table;
