import React from 'react';

import add from '../../assets/add.svg';

import './styles.css';

export default function CardMovie() {
  return (
    <div className="cardMovie-container">
      <div className="cardMovie-content">
        <div className="cardMovie-add">
          <img src={add} alt="" />
        </div>
      </div>
    </div>
  );
}
