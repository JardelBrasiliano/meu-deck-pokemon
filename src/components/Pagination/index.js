import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import iconNext from '../../assets/right-arrow.svg';

import './styles.css';

export default function Pagination({ page }) {
  const [numberLeft, setNumberLeft] = useState(1);
  const [numberMid, setNumberMid] = useState(2);
  const [numberRight, setNumberRight] = useState(3);

  useEffect(() => {
    if (+page >= 3 && +page <= 160) {
      setNumberLeft(+page - 1);
      setNumberMid(+page);
      setNumberRight(+page + 1);
    } else if (+page === 161) {
      setNumberLeft(+page - 2);
      setNumberMid(+page - 1);
      setNumberRight(+page);
    }
  }, []);

  const maxPage = 161;
  function mudarNumero(e) {
    switch (e.id) {
      case 'Left':
        if (numberLeft !== 1) {
          setNumberLeft(numberLeft - 1);
          setNumberMid(numberMid - 1);
          setNumberRight(numberRight - 1);
        }
        break;
      case 'Mid':
        break;
      case 'Right':
        if (numberRight !== maxPage) {
          setNumberLeft(numberLeft + 1);
          setNumberMid(numberMid + 1);
          setNumberRight(numberRight + 1);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="Pagination-container">
      <div className="Pagination-content">
        <Link
          to={`/pokemon/${numberLeft}`}
          className="Pagination-back"
          id="Left"
          onClick={(e) => mudarNumero(e.target)}
        >
          <img id="Left" src={iconNext} alt="" />
        </Link>
        <Link
          to={`/pokemon/${numberLeft}`}
          id="Left"
          onClick={(e) => mudarNumero(e.target)}
        >
          {numberLeft}
        </Link>
        <Link
          to={`/pokemon/${numberMid}`}
          id="Mid"
          onClick={(e) => mudarNumero(e.target)}
        >
          {numberMid}
        </Link>
        <Link
          to={`/pokemon/${numberRight}`}
          id="Right"
          onClick={(e) => mudarNumero(e.target)}
        >
          {numberRight}
        </Link>
        <Link
          to={`/pokemon/${numberRight}`}
          className="Pagination-next"
          id="Right"
          onClick={(e) => mudarNumero(e.target)}
        >
          <img id="Right" src={iconNext} alt="" />
        </Link>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  page: PropTypes.string.isRequired,
};
