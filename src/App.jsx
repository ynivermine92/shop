// DataFetcher.js

import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from './config';
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

const DataFetcher = () => {
  const [goods, setGoods] = useState([]);
  const [filteredGoods, setFilteredGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // Загрузка данных с сервера
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка HTTP: ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setGoods(data.fish); //product item
        setFilteredGoods(data.fish); // filter
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header goods={goods} setFilteredGoods={setFilteredGoods} />
      <Shop filteredGoods ={filteredGoods} />
      <Footer />
    </>
  );
};

export default DataFetcher;
