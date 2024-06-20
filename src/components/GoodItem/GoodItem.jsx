
import React, { useState } from 'react';

import Cart from "../../components/Basket/Basket";



const GoodItem = ({ goods }) => {

    const [order, setOrder] = useState([]);

    const [cartProduct, setSelectedProducts] = useState([]);
    


    const goodsQuantity = (item) => {
        setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, item]);
       
        if (!order.includes(item.id)) {
            setOrder(prevOrder => [...prevOrder, item.id]);
        }
    }
   

    return (
        <>
            <div className="container">
                <Cart order={order.length} cartProduct={cartProduct}/>

                <div className='shop__items'>
                    {goods.map((item) => (
                        <div className='shop__item' key={item.id}>
                            <div className="shop__item-name">{item.name}</div>
                            <img src={item.image} alt="shop__item-image" />
                            <p className='shop__item-text'>{item.description} </p>
                            <div className="shop__inner">
                                <span className='shop__item-price'>price:{item.sizeMax}$</span>
                                <button className='shop__item-btn btn' onClick={() => goodsQuantity(item)}>buy</button>

                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default GoodItem
