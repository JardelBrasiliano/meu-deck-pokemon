import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import iconNext from '../../assets/right-arrow.svg';

import './styles.css';

export default function Pagination({ page, urlPokemon, totalPokemon }) {
  const [numberLeft, setNumberLeft] = useState(null);
  const [numberMid, setNumberMid] = useState(1);
  const [numberRight, setNumberRight] = useState(null);

  const maxPage = Math.ceil(totalPokemon / 8);

  useEffect(() => {
    setNumberLeft(+page - 1 || 0);
    setNumberMid(+page);
    setNumberRight(+page === maxPage ? 0 : +page + 1);
  }, [maxPage]);

  function mudarNumero(e) {
    switch (e.id) {
      case 'Left':
        if (!numberLeft) {
          break;
        } else if (numberLeft && !numberRight) {
          setNumberLeft(numberLeft - 1);
          setNumberMid(numberLeft);
          setNumberRight(numberMid);
        } else {
          setNumberLeft(numberLeft - 1);
          setNumberMid(numberMid - 1);
          setNumberRight(numberRight - 1);
        }
        break;
      case 'Mid':
        break;
      case 'Right':
        if (!numberRight) {
          setNumberLeft(maxPage - 1);
          setNumberMid(maxPage);
        } else if (maxPage === numberRight) {
          setNumberLeft(numberLeft + 1);
          setNumberMid(numberMid + 1);
          setNumberRight(0);
        } else {
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
          to={`/${urlPokemon}/${numberLeft || ''}`}
          className="Pagination-back"
          id="Left"
          onClick={(e) => mudarNumero(e.target)}
        >
          <img id="Left" src={iconNext} alt="" />
        </Link>

        <Link
          to={`/${urlPokemon}/${numberLeft}`}
          id="Left"
          onClick={(e) => mudarNumero(e.target)}
        >
          {numberLeft || ''}
        </Link>

        <Link
          to={`/${urlPokemon}/${numberMid}`}
          id="Mid"
          onClick={(e) => mudarNumero(e.target)}
        >
          {numberMid}
        </Link>

        <Link
          to={`/${urlPokemon}/${numberRight}`}
          id="Right"
          onClick={(e) => mudarNumero(e.target)}
        >
          {numberRight || ''}
        </Link>

        <Link
          to={`/${urlPokemon}/${numberRight || maxPage}`}
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
  urlPokemon: PropTypes.string.isRequired,
  totalPokemon: PropTypes.number.isRequired,
};
