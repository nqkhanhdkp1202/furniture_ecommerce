import React, { useEffect, useState } from "react";
import PropsType from "prop-types";
import { Link } from "react-router-dom";

const CartModal = ({ show, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
        name: "CHAIR WITH OPEN SPACE",
        desc: "Lorem ipsum dolor sit amet, cons adipisicing elit",
        price: 572,
        quantity: 1,
    },
  ]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const updateQuantity= (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
  }

  const removeFromCart = (item) =>{
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  }

//   useEffect(() => {
//     const cartItemsFromStorage = localStorage.getItem('cartItems');
//     if (cartItemsFromStorage) {
//       setCartItems(JSON.parse(cartItemsFromStorage));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);


  return (
    <>
      {/* POPUPS */}
      <div className={`popup-wrapper ${show ? "active z-lower" : ""}`}>
        <div className="bg-layer" />
        <div
          className={`popup-content basket-popup ${show ? "active" : ""}`}
          data-rel={1}
        >
          <div className="layer-close" />
          <div className="popup-container size-2 right">
            <div className="popup-align">
                {
                    cartItems.map((e,i) => (
                        <div className="basket-item" key={i}>
                        <div className="basket-item-close" onClick={(e) => removeFromCart(e)} />
                        <a href="#" className="img-hover-2">
                          <img src="img/shop/item-1-sm.jpg" alt="" />
                        </a>
                        <div className="description">
                          <article>
                            <a href="#">
                              <h6 className="h6 hover-1">{e.name}</h6>
                            </a>
                            <p>{e.desc}</p>
                          </article>
                        </div>
                        <div className="quantity-wrapper">
                          <div className="quantity">
                            <input type="number" defaultValue={e.quantity} onChange={(e) => updateQuantity(e,e.target.value)} />
                            <i className="fa fa-caret-left" aria-hidden="true" />
                            <i className="fa fa-caret-right" aria-hidden="true" />
                          </div>
                        </div>
                        <div className="price">
                          <span>
                            ${e.price}<sup>00</sup>
                          </span>
                        </div>
                      </div>
                    ))
                }
              <div className="total-basket-price price">
                total price:{" "}
                <span>
                  $1139<sup>00</sup>
                </span>
              </div>
              <div className="btn-wrap">
                <Link to="/checkout" className="btn-2">
                  <span>proceed to checkout</span>
                </Link>
              </div>
            </div>
            <div className="button-close" onClick={onClose} />
          </div>
        </div>
      </div>
    </>
  );
};

CartModal.propsType = {
  show: PropsType.bool,
  onClose: PropsType.func,
};

export default CartModal;
