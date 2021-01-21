import React from 'react';
import PropTypes from 'prop-types';

import add from '../../assets/add.svg';
import addOk from '../../assets/add_ok.svg';

import './styles.css';

export default function CardMovie({ inList }) {
  return (
    <div className="cardMovie-container">
      <div className="cardMovie-content">
        <div className="cardMovie-add">
          <img src={inList ? addOk : add} alt="" />
        </div>
      </div>
    </div>
  );
}

CardMovie.propTypes = {
  inList: PropTypes.bool.isRequired,
};
