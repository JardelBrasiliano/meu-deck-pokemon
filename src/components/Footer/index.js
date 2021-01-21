import React from 'react';

import './styles.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>
          Algo interesante para colocar no footer feito por:
          {' '}
          <a href="https://github.com/JardelBrasiliano">Jardel Brasiliano</a>
        </p>
      </div>
    </div>
  );
}
