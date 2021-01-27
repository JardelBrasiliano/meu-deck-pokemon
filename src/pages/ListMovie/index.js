/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listPokemonRequest } from '../../store/modules/mainList/actions';
import { addPokemonInDeckFestRequest } from '../../store/modules/myFastDeck/actions';

import './styles.css';

import Header from '../../components/Header';
import CardPokemon from '../../components/CardPokemon';
import LoadingCardPokemon from '../../components/LoadingCardPokemon';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';

export default function ListMovie() {

  const { listPokemon, loadingListPokemonRequest } = useSelector((state) => state.listPokemon);
  const { page } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const currentPage = (page || 1 );
    dispatch(listPokemonRequest({ page: currentPage }));
  }, [page]);

  function seedPokemonFastDeck(pokemon) {
    dispatch(addPokemonInDeckFestRequest({ pokemon }));
  }
  
  return (
    <>
      <Header />
      <div className="listMovie-list-container">
        <div className="listMovie-list-content">
          {
            !loadingListPokemonRequest
              ? listPokemon.map((pokemon, index) => 
                <CardPokemon 
                  key={`Key-Card-Movie${index}`} 
                  name={pokemon.name.substring(0, 1).toUpperCase().concat(pokemon.name.substring(1))} 
                  image={pokemon.image || ''}
                  onClick={() => seedPokemonFastDeck(pokemon)}
                />)
              : <LoadingCardPokemon/>
          }
          {
            listPokemon.length === 0 ? <h1>Essa pagina não existe</h1> : ''
          }
        </div>
        {listPokemon.length > 0 ? <Pagination page={page} /> : ''}  
      </div>
      <Footer />
    </>
  );
}
