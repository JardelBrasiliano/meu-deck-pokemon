import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useParams } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import ModelContainerCards from '../../components/ModelContainerCards';
import Footer from '../../components/Footer';

export default function FastDeck() {
  const [listPokemon, setListPokemon] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);

  const { user, page } = useParams();

  useEffect(() => {
    setCurrentpage(page || 1);
  }, [page]);

  console.log(user);
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
      <div className="fastdeck-list-share-container">
        <ModelContainerCards
          listPokemon={listPokemon}
          page={currentpage}
          url={`my-fast-deck/id/${user}`}
        />
      </div>
      <Footer />
    </>
  );
}
