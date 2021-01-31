import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import CardPokemon from '../../components/CardPokemon';
import Pagination from '../../components/Pagination';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

export default function FastDeck() {
  const [ifFullList, setIfFullList] = useState([]);

  const { page } = useParams();
  const currentpage = page || 1;

  const { listPokemon } = useSelector((state) => state.myFastDeck);

  useEffect(() => {
    setIfFullList(listPokemon.length > 0);
  }, [listPokemon]);

  return (
    <>
      <Header />
      <div className="fastdeck-list-container">
        {ifFullList ? (
          <div className="fastdeck-container-button">
            <div className="fastdeck-content-button">
              <Button isSave={false}>Link</Button>
              <Button isSave>Salvar</Button>
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          className="fastdeck-list-content"
          style={{ display: `${!ifFullList ? 'none' : ''}` }}
        >
          {ifFullList
            ? listPokemon.map((pokemon, index) =>
                index + 1 > currentpage * 8 - 8 &&
                index + 1 <= currentpage * 8 ? (
                  <CardPokemon
                    key={`key-fastdeck-${index}`}
                    name={pokemon.name
                      .substring(0, 1)
                      .toUpperCase()
                      .concat(pokemon.name.substring(1))}
                    image={pokemon.image}
                    onClick="remove"
                  />
                ) : (
                  ''
                ),
              )
            : ''}
        </div>
        {listPokemon.length === 0 ? <h1>Essa pagina não existe</h1> : ''}
        {ifFullList ? (
          <Pagination
            urlPokemon="my-fast-deck"
            page={page || '1'}
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
