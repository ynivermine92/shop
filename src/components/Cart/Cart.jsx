import React, { useState, useEffect } from 'react';



const Cart = ({ order }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.cart')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const closecart = () => {
        setIsOpen(false);
    };

    const opencart = () => {
        setIsOpen(true);
    };

    const cartWrapperStyle = {
        display: isOpen ? 'flex' : 'none'
    };

    return (
        <div className='cart' onClick={opencart}>
            <i className="large material-icons cart__icon">shopping_cart</i>
            <span className='cart__sum'>{order}</span>
            <div className="cart__wrapper" style={cartWrapperStyle}>
                <div className="cart">
                    <div className="cart__close" onClick={closecart}>
                        <img src="./img/cancel.svg" alt="cancel" width="10px" height="10px" />
                    </div>
                    <div className="cart__title"><span>Заголовок модального окна</span></div>
                    <div className="cart__body">Содержимое модального окна</div>
                </div>
            </div>
        </div>
    )
}

export default Cart