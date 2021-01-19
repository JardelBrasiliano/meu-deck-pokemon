import React from 'react';

import logo from '../../assets/logo.png';

import './styles.css';

export default function Header() {
  return (
    <header className="Header-container">
      <div className="Header-content">
        <div className="Header-content-left">
          <div className="Header-content-left-logo">
            <img src={logo} alt="" />
          </div>
          <a href="/">Filmes</a>
          <a href="/">Series</a>
        </div>
        <div className="Header-content-right">
          <a href="/">Login</a>
          <div className="Header-content-right-register">
            <a href="/">Cadastrar</a>
          </div>
        </div>
      </div>
    </header>
  );
}
