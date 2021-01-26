import React from 'react';

import './styles.css';

export default function LoadingCardPokemon() {
  function Card() {
    return (
      <div className="loadingCardMovie-container">
        <div className="loadingCardMovie-image" />
        <div className="loadingCardMovie-name" />
      </div>
    );
  }
  return [0, 1, 2, 3, 4, 5, 6, 7].map((number) => (
    <Card key={`key-card-loading-${number}`} />
  ));
}
