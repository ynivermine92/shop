import React, { useState, useEffect } from 'react';


import Counter from "../../components/Counter/Counter";

const Basket = ({ order, cartProduct }) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log(cartProduct);
    useEffect(() => {


        const handleClickOutside = (e) => {
            if (isOpen && !e.target.closest('.cart')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const closecart = (e) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    const opencart = (e) => {
        e.stopPropagation();
        setIsOpen(true);
    };

    const cartWrapperStyle = {
        display: isOpen ? 'flex' : 'none'
    };

    return (
        <div className='basket' onClick={opencart}>
            <i className="large material-icons basket__icon">shopping_cart</i>
            <span className='basket__sum'>{order}</span>
            <div className="cart__wrapper" style={cartWrapperStyle}>
                <div className="cart">
                    <div className="cart__close" onClick={closecart}>
                        <i className="large material-icons">close</i>
                    </div>
                    <div className="cart__title"><span>Your product</span></div>
                    <div className="cart__body">


                        <ul className="cart__items">
                            {cartProduct.map((item) => (
                                <li className="cart__item" key={item.id}>
                                    <div className="cart__item-name">{item.name}</div>
                                    <img className='cart__item-image' src={item.image} alt="" />
                                    <div className="cart__item-price">${item.heal}</div>
                                    <Counter/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket;
