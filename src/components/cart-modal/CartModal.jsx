import React, { useContext, useEffect, useState } from "react";
import PropsType, { element } from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import QuantityInput from "../quantity-input/QuantityInput";
import { UserContext } from "../../context/UserContext";
import LoginModal from "../login-modal/LoginModal";

const CartModal = ({ show, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    calculateTotal,
    handleQuantityChange,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const handleCheckout = (e) => {
    if(Object.keys(user).length === 0){
    setShowLogin(true);
    }
    else{
      navigate("/checkout")
    }
  }

  const handleCloseLogin = () => {
    setShowLogin(false)
  }

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
              <div className="cart-wrapper">
                {cartItems.map((e, i) => (
                  <div className="basket-item" key={i}>
                    <div
                      className="basket-item-close"
                      onClick={() => removeFromCart(e.ID)}
                    />
                    <a href="#" className="img-hover-2">
                      <img src={e.Image} alt="" />
                    </a>
                    <div className="description">
                      <article>
                        <a href="#">
                          <h6 className="h6 hover-1">{e.DisplayName}</h6>
                        </a>
                        <p>{e.MoreInfo}</p>
                      </article>
                    </div>
                    <QuantityInput
                      product={e}
                      quantity={e.quantity}
                      onQuantityChange={handleQuantityChange}
                      decreaseQuantity={decreaseQuantity}
                      increaseQuantity={increaseQuantity}
                    />
                    <div className="price">
                      <span>{e.Price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-basket-price price">
                total price: <span>{calculateTotal(cartItems) + " $"}</span>
              </div>
              <div className="btn-wrap">
                {" "}
                <a onClick={(e) => handleCheckout(e)} className="btn-2">
                  <span>proceed to checkout</span>
                </a>
              </div>
            </div>
            <div className="button-close" onClick={onClose} />
          </div>
        </div>
      </div>
      <LoginModal show={showLogin} onClose={handleCloseLogin} />
    </>
  );
};

CartModal.propsType = {
  show: PropsType.bool,
  onClose: PropsType.func,
};

export default CartModal;
