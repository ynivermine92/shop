// Header.js

import React, { useState } from 'react';
import Registration from "../../components/Registration/Registration";
import Authorization from "../../components/Authorization/Authorization";
import Searsh from "../../components/Searsh/Searsh";

const Header = ({ goods, setFilteredGoods }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ModelBlock, setModelBlock] = useState(false);
  const [modelAuthorization, setmodelAuthorization] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    
  const modelRegistration = () => {
    setModelBlock(true);
  }

  const AuthorizationModel = () => {
    setmodelAuthorization(true);
  }

  return (
    <header>
      <div className="header">
        <div className="container">
          <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <div className="logo">
              <a href="#">FLOPPER</a>
            </div>
            <Searsh goods={goods} setFilteredGoods={setFilteredGoods} />
            <nav>
              <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <li className="menu__item">
                  <a onClick={AuthorizationModel} href="#" className="menu__item-link" data-scroll>login</a>
                </li>
                <li className="menu__item">
                  <a onClick={modelRegistration} href="#" className="menu__item-link" data-scroll>registration</a>
                </li>
              </ul>
            </nav>
            <button className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <Registration ModelBlock={ModelBlock} setModelBlock={setModelBlock} setmodelAuthorization={setmodelAuthorization} />
      <Authorization modelAuthorization={modelAuthorization} setmodelAuthorization={setmodelAuthorization} setModelBlock={setModelBlock} />
    </header>
  );
}

export default Header;
