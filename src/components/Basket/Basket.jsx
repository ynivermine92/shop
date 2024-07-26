import React, { useState, useEffect } from "react";
import Counter from "../../components/Counter/Counter";

const Basket = ({ setOrder, cartProduct, setCartProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [basketSum, setBasketSum] = useState(0);

  useEffect(() => {
    const calculateSum = () => {
      const sum = cartProduct.reduce(
        (total, item) => total + item.heal * (item.count || 1),
        0
      );
      setBasketSum(sum);
    };
    calculateSum();
  }, [cartProduct]);

  const closeCart = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const openCart = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const cartWrapperStyle = {
    display: isOpen ? "flex" : "none",
  };

  const removeCart = (item) => {
    setCartProduct((prevCartProduct) =>
      prevCartProduct.filter((cartItem) => cartItem.id !== item.id)
    );
    setOrder((prevOrder) => prevOrder.filter((orderId) => orderId !== item.id));
    setBasketSum((prevSum) => prevSum - item.heal * (item.count || 1));
  };

  const handleCountChange = (id, newCount) => {
    setCartProduct((prevCartProduct) => {
      const newCartProduct = prevCartProduct.map((item) => {
        if (item.id === id) {
          item.count = newCount;
        }
        return item;
      });
      return newCartProduct;
    });
  };

  useEffect(() => {
    if (typeof window.DynamicAdapt === "function") {
      const da = new window.DynamicAdapt("max");
      da.init();
    }
  }, [cartProduct, isOpen]);

  return (
    <div className="basket" onClick={openCart}>
      <i className="large material-icons basket__icon">shopping_cart</i>
      <span className="basket__sum">{cartProduct.length}</span>
      <div className="cart__wrapper" style={cartWrapperStyle}>
        <div className="cart">
          <div className="cart__close" onClick={closeCart}>
            <i className="large material-icons">close</i>
          </div>

          {cartProduct.length === 0 ? (
            <div className="cart__product">
              <span>NO PRODUCT</span>
            </div>
          ) : (
            <>
              <div className="cart__title">
                <span>Your product</span>
              </div>
              <div className="cart__body">
                <ul className="cart__items">
                  {cartProduct.map((item) => (
                    <li className="cart__item" key={item.id}>
                      <div className="cart__item-box">
                        <div className="cart__item-name">{item.name}</div>
                        <div className="cart__image">
                          <img
                            className="cart__item-image"
                            src={item.image}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="cart__item-price">${item.heal}</div>

                      <Counter
                        id={item.id}
                        handleCountChange={handleCountChange}
                      />
                      <div
                        className="cart__item-remove"
                        onClick={() => removeCart(item)}
                      >
                        delete
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="cart__box">
                  <div className="cart__total-amount">Total: ${basketSum}</div>
                  <button className="cart__design btn">checkout</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Basket;
