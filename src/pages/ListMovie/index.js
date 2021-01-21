import React from 'react';

import './styles.css';

import Header from '../../components/Header';
import CardMovie from '../../components/CardMovie';
import Footer from '../../components/Footer';

export default function ListMovie() {
  const list = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <Header />
      <div className="listMovie-list-container">
        <div className="listMovie-list-content">
          {
          list.map(() => <CardMovie />)
        }
        </div>
      </div>
      <Footer />
    </>
  );
}
