import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/modules/auth/actions';
import { resetPokemonInDeckFest } from '../../store/modules/myFastDeck/actions';

import logo from '../../assets/logo.png';

import './styles.css';

export default function Header() {
  const { isSignedIn, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  function clickLogOut() {
    dispatch(logOut());
    dispatch(resetPokemonInDeckFest());
  }

  return (
    <header className="Header-container">
      <div className="Header-content">
        <div className="Header-content-left">
          <div className="Header-content-left-logo">
            <img src={logo} alt="" />
          </div>
          <Link to="/pokemon/">Pokémons</Link>
          <Link to="/my-fast-deck">Deck rápido</Link>
        </div>
        <div className="Header-content-right">
          {isSignedIn ? (
            <>
              <div>
                <p className="Header-content-name">{user.name}</p>
              </div>
              <button
                type="button"
                className="Header-content-logout"
                onClick={() => clickLogOut()}
              >
                {' '}
                Sair{' '}
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/login" className="Header-content-right-register">
                <p>Cadastro</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
