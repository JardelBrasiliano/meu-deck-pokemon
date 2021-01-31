import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { seedListPokemonFirebaseRequest } from '../../store/modules/myFastDeck/actions';

import './styles.css';

export default function Button({ children, isSave }) {
  const { listPokemon, loading, modification } = useSelector(
    (state) => state.myFastDeck,
  );
  const { token, isSignedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function clickButton() {
    if (listPokemon.length > 0 && isSignedIn) {
      if (isSave && modification) {
        dispatch(seedListPokemonFirebaseRequest(listPokemon, token));
      } else if (modification && isSave === false) {
        console.log(modification, isSave === false);
        alert('Lista foi atualizada e nao salva!!');
      } else if (!modification && isSave === false) {
        navigator.clipboard.writeText(
          `http://localhost:3000/my-fast-deck/id/${token}`,
        );
        alert('Link Salvo na arae de transferencia(COPIAR E COLAR)');
      }
    } else {
      alert('Fazer login para compartilhar');
    }
  }

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <button
          type="button"
          className="Header-content-right-register margin-left-10px"
          onClick={() => clickButton()}
        >
          <p>{children}</p>
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isSave: PropTypes.bool.isRequired,
};
