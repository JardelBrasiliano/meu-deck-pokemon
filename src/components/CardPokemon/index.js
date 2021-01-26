import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function CardMovie({ name, image }) {
  return (
    <div className="cardMovie-container">
      <div className="cardMovie-image">
        <img src={image} alt="" />
      </div>
      <div className="cardMovie-name">
        <p>{name}</p>
      </div>
    </div>
  );
}

CardMovie.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
