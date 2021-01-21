import React from 'react';

import './styles.css';

import Header from '../../components/Header';
import CardMovie from '../../components/CardMovie';
import Footer from '../../components/Footer';

export default function ListMovie() {
  const list = [true, true, false, false, false, true, false];

  return (
    <>
      <Header />
      <div className="listMovie-list-container">
        <div className="listMovie-list-content">
          {
          list.map((a) => <CardMovie inList={a} />)
        }
        </div>
      </div>
      <Footer />
    </>
  );
}
