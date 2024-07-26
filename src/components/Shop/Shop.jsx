// Shop.js

import React from "react";
import GoodItem from "../../components/GoodItem/GoodItem";

const Shop = ({ filteredGoods }) => {
  return (
    <main>
      <div className="container">
        <GoodItem filteredGoods={filteredGoods} />
      </div>
    </main>
  );
};

export default Shop;
