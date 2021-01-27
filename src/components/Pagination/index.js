import React from 'react';
import { Link } from 'react-router-dom';

import iconNext from '../../assets/right-arrow.svg';

import './styles.css';

export default function Pagination() {
  return (
    <div className="Pagination-container">
      <div className="Pagination-content">
        <div className="Pagination-back">
          <img src={iconNext} alt="" />
        </div>
        <Link to="/pokemon/1">1</Link>
        <Link to="/pokemon/2">2</Link>
        <Link to="/pokemon/3">3</Link>
        <div className="Pagination-next">
          <img src={iconNext} alt="" />
        </div>
      </div>
    </div>
  );
}
