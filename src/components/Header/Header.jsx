import React, { useState } from 'react';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ['all', 'movies', 'series', 'login', 'registration'];

    return (
        <header>
            <div className="header">
                    <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                        <div className="logo">
                            <a href="#">
                            </a>
                        </div>
                  
                        <nav>
                            <ul className={`menu ${isMenuOpen && 'active'}`}>
                                {menuItems.map((item, index) => (
                                    <li key={index} className="menu__item">
                                        <a href="#" className="menu__item-link" data-scroll>{item}</a>
                                    </li>
                                ))}
                            </ul>
                            
                        </nav>
                     
                        <button className={`burger ${isMenuOpen && 'active'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <span></span>
                        </button>
                    </div>
                </div>

        </header>
    )
}

export default Header