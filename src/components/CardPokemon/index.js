import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import {
  addPokemonInDeckFestRequest,
  removePokemonInDeckFestRequest,
} from '../../store/modules/myFastDeck/actions';

import './styles.css';

export default function CardMovie({ name, image, onClick }) {
  const [taNaList, setTaNaLista] = useState(false);
  const [clicou, setClicou] = useState(false);
  const inListPokemon = onClick === 'add';

  const { listPokemon } = useSelector((state) => state.myFastDeck);

  const pokemon = {
    name,
    image,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (listPokemon.length > 0) {
      const result = listPokemon.find(
        (pokmenoFind) => pokmenoFind.name === name,
      );
      if (result) {
        setTaNaLista(true && inListPokemon);
      }
    }
  }, []);

  function seedPokemonFastDeck(pokemonCurrent) {
    setClicou(!clicou);
    if (listPokemon.length === 0) {
      dispatch(addPokemonInDeckFestRequest({ pokemon: pokemonCurrent }));
      setTaNaLista(true && inListPokemon);
    }
    if (listPokemon.length > 0) {
      const result = listPokemon.find(
        (pokmenoFind) => pokmenoFind.name === name,
      );
      if (!result) {
        dispatch(addPokemonInDeckFestRequest({ pokemon: pokemonCurrent }));
        setTaNaLista(true && inListPokemon);
      }
    }
  }

  function removePokemonFastDeck(pokemonRemove) {
    dispatch(
      removePokemonInDeckFestRequest({ pokemon: pokemonRemove, listPokemon }),
    );
  }

  const fuction =
    onClick === 'add'
      ? () => seedPokemonFastDeck(pokemon)
      : () => removePokemonFastDeck(pokemon);

  return (
    <button
      type="button"
      className="cardMovie-container"
      onClick={fuction}
      style={{ border: `${taNaList ? 'solid 5px #1FF500' : ''}` }}
    >
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
  onClick: PropTypes.string.isRequired,
};
