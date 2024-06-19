// DataFetcher.js

import React, { useEffect, useState } from 'react';
import {API_KEY, API_URL} from './config';

import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

const DataFetcher = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  //server
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
       /*  console.log(data.fish); */
        setGoods(data.fish);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      });

  }, []);


  return (
    <>
      <Header />
      <Shop goods={goods}/>
      <Footer />
    </>
  );
};

export default DataFetcher;
