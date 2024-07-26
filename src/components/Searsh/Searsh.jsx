// Searsh.js

import React, { useState } from "react";

const Searsh = ({ goods, setFilteredGoods }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searshFIlter = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);


    const filteredGoods = goods.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredGoods(filteredGoods);
  };

  return (
    <div className="searsh">
      <input
        className="searsh__input"
        type="text"
        onChange={searshFIlter}
        value={searchTerm}
      />
      <i class="searsh__icon iconlarge material-icons">search</i>
      </div>
 
  );
};

export default Searsh;
