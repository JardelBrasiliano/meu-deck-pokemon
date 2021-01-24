import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function CardMovie({ name, image }) {
  // console.log('name', name);
  // console.log('image', image);

  return (
    <div className="cardMovie-container">
      <div className="cardMovie-content">
        <div className="cardMovie-add">
          <p>{name}</p>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

CardMovie.propTypes = {
  // inList: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
