import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useParams } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import CardPokemon from '../../components/CardPokemon';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';

export default function FastDeck() {
  const [ifFullList, setIfFullList] = useState([]);
  const [listPokemon, setListPokemon] = useState([]);

  const { user } = useParams();

  useEffect(() => {
    setIfFullList(listPokemon.length > 0);
  }, [listPokemon]);

  useEffect(() => {
    firebase
      .database()
      .ref(`users/${user}`)
      .once('value')
      .then((snapshot) => {
        setListPokemon(snapshot.val().fastDeck);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="fastdeck-list-container">
        <div
          className="fastdeck-list-content"
          style={{ display: `${!ifFullList ? 'none' : ''}` }}
        >
          {ifFullList
            ? listPokemon.map((pokemon, index) => (
                <CardPokemon
                  key={`key-fastdeckshare-${index}`}
                  name={pokemon.name
                    .substring(0, 1)
                    .toUpperCase()
                    .concat(pokemon.name.substring(1))}
                  image={pokemon.image}
                  onClick="remove"
                />
              ))
            : ''}
          {listPokemon.length === 0 ? <h1>Essa pagina não existe</h1> : ''}
        </div>
        {ifFullList ? (
          <Pagination
            urlPokemon="my-fast-deck"
            page={'1' || '1'}
            totalPokemon={listPokemon.length}
          />
        ) : (
          ''
        )}
      </div>
      <Footer />
    </>
  );
}
