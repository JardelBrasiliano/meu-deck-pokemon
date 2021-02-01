/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import CardPokemon from '../CardPokemon';
import Pagination from '../Pagination';

function ModelContainerCards({ listPokemon, page, url }) {
  const ifFullList = listPokemon.length > 0;
  const totalPokemon = listPokemon.length;
  const maxPage = Math.ceil(totalPokemon / 8);

  return (
    <>
      <div
        className="fastdeckmodel-list-content"
        style={{ display: `${!ifFullList ? 'none' : ''}` }}
      >
        {ifFullList
          ? listPokemon.map((pokemon, index) =>
              index + 1 > page * 8 - 8 && index + 1 <= page * 8 ? (
<<<<<<< HEAD
                <>
                  <CardPokemon
                    key={`key-fastdeck-${index}`}
                    name={pokemon.name
                      .substring(0, 1)
                      .toUpperCase()
                      .concat(pokemon.name.substring(1))}
                    image={pokemon.image}
                    onClick="remove"
                  />
                </>
=======
                <CardPokemon
                  key={`key-fastdeck-${index}`}
                  name={pokemon.name
                    .substring(0, 1)
                    .toUpperCase()
                    .concat(pokemon.name.substring(1))}
                  image={pokemon.image}
                  onClick="remove"
                />
>>>>>>> 77a092721d2265e9053665916de4ecc071de9e12
              ) : (
                ''
              ),
            )
          : ''}
      </div>
      {!ifFullList ? <h1>Essa pagina não existe</h1> : ''}
      {ifFullList && page <= maxPage ? (
        <Pagination
          urlPokemon={url}
          page={page || 1}
          totalPokemon={listPokemon.length}
        />
      ) : (
        ''
      )}
    </>
  );
}

ModelContainerCards.propTypes = {
  listPokemon: PropTypes.arrayOf.isRequired,
  page: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default ModelContainerCards;
