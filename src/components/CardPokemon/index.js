import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function CardMovie({ name, image, onClick }) {
  return (
    <button type="button" className="cardMovie-container" onClick={onClick}>
      <div className="cardMovie-image">
        <img src={image} alt="" />
      </div>
      <div className="cardMovie-name">
        <p>{name}</p>
      </div>
    </button>
  );
}

CardMovie.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
