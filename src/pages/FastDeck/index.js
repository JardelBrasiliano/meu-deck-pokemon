import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import Button from '../../components/Button';
import ModelContainerCards from '../../components/ModelContainerCards';
import Footer from '../../components/Footer';

export default function FastDeck() {
  const [ifFullList, setIfFullList] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);

  const { page } = useParams();
  const { listPokemon, loading } = useSelector((state) => state.myFastDeck);

  const totalPokemon = listPokemon.length;
  const maxPage = Math.ceil(totalPokemon / 8);

  useEffect(() => {
    setCurrentpage(page || 1);
    setIfFullList(listPokemon.length > 0);
  }, [listPokemon, page]);
<<<<<<< HEAD

=======
>>>>>>> 77a092721d2265e9053665916de4ecc071de9e12
  return (
    <>
      <Header />
      <div className="fastdeck-list-container">
        {ifFullList && (page || 1) <= maxPage ? (
          <div className="fastdeck-container-button">
            <div className="fastdeck-content-button">
              <Button isSave={false}>Link</Button>
              <Button isSave>{loading ? 'Salvando...' : 'Salvar'}</Button>
            </div>
          </div>
        ) : (
          ''
        )}
        <ModelContainerCards
          listPokemon={listPokemon}
          page={+currentpage}
          url="my-fast-deck"
        />
      </div>
      <Footer />
    </>
  );
}
