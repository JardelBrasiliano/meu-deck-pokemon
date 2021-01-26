/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePokemonInDeckFestRequest } from '../../store/modules/myFastDeck/actions';

import './styles.css';

import Header from '../../components/Header';
import CardPokemon from '../../components/CardPokemon';
import Footer from '../../components/Footer';

export default function ListMovie() {
  const { listPokemon } = useSelector((state) => state.myFastDeck);

  const dispatch = useDispatch();

  function removePokemonFastDeck(pokemonRemove) {
    dispatch(removePokemonInDeckFestRequest({ listPokemon: pokemonRemove }));
  }

  return (
    <>
      <Header />
      <div className="fastdeck-list-container">
        <div className="fastdeck-list-content">
          {
            listPokemon ? listPokemon.map((pokemons, index) => 
              <CardPokemon 
                key={`key-fastdeck-${index}`}
                name={pokemons.name} 
                image={pokemons.image} 
                onClick={() => removePokemonFastDeck(pokemons) }
              /> 
            )
            : 
              ''
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
