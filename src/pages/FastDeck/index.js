import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePokemonInDeckFestRequest } from '../../store/modules/myFastDeck/actions';

import './styles.css';

import Header from '../../components/Header';
import CardPokemon from '../../components/CardPokemon';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';

export default function ListMovie() {
  const page = 1;

  const { listPokemon } = useSelector((state) => state.myFastDeck);

  const dispatch = useDispatch();

  function removePokemonFastDeck(pokemonRemove) {
    dispatch(removePokemonInDeckFestRequest({ pokemon: pokemonRemove }));
  }

  return (
    <>
      <Header />
      <div className="fastdeck-list-container">
        <div className="fastdeck-list-content">
          {listPokemon.length > 0
            ? listPokemon.map((pokemon, index) =>
                index + 1 > page * 8 - 8 && index + 1 <= page * 8 ? (
                  <CardPokemon
                    key={`key-fastdeck-${index}`}
                    name={pokemon.name}
                    image={pokemon.image}
                    onClick={() => removePokemonFastDeck(pokemon)}
                  />
                ) : (
                  ''
                ),
              )
            : ''}
        </div>
      </div>
      {listPokemon.length > 0 ? <Pagination /> : ''}
      <Footer />
    </>
  );
}
