
import React, { useState } from 'react';

import Cart from "../../components/Basket/Basket";



const GoodItem = ({ filteredGoods}) => {
    const [order, setOrder] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);


    const filteredGoodsQuantity = (item) => {
       
        if (!order.includes(item.id)) {
            setOrder(prevOrder => [...prevOrder, item.id]);
            setCartProduct(prevSelectedProducts => [...prevSelectedProducts, item]);
        }
    }

    
    return (
        <>
            <div className="container">
                <Cart setOrder={setOrder} cartProduct={cartProduct} setCartProduct={setCartProduct} />

                <div className='shop__items'>
                    {filteredGoods.map((item) => (
                        <div className='shop__item' key={item.id}>
                            <div className="shop__item-name">{item.name}</div>
                            <img src={item.image} alt="shop__item-image" />
                            <p className='shop__item-text'>{item.description} </p>
                            <div className="shop__inner">
                                <span className='shop__item-price'>price:{item.sizeMax}$</span>
                                <button className='shop__item-btn btn' onClick={() => filteredGoodsQuantity(item)}>buy</button>

                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default GoodItem
