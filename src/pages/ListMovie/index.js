/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listPokemonRequest } from '../../store/modules/mainList/actions';

import './styles.css';

import Header from '../../components/Header';
import CardMovie from '../../components/CardMovie';
import Footer from '../../components/Footer';

export default function ListMovie() {
  const { listPokemon } = useSelector((state) => state.listPokemon);
  const { page } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPokemonRequest({ page }));
  }, []);
  return (
    <>
      <Header />
      <div className="listMovie-list-container">
        <div className="listMovie-list-content">
          {
            listPokemon
              ? listPokemon.map((pokemon, index) => <CardMovie key={`Key-Card-Movie${index}`} name={pokemon.name} image={pokemon.image} />)
              : ''
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
