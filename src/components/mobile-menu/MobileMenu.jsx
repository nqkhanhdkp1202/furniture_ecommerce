import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({show, onClose}) => {
  return (
    <>
      {/* OVERLAY-MENU */}
      <div className={`overlay-wrapper ${show ? "active" : ""}`}>
        <div className="overlay-animation" />
        <div className="flex">
          <div className="flex-in">
            <div className="overlay-menu">
              <div className="container">
                <div className="row">
                  <div className="btn-close" onClick={onClose}>
                    <span />
                    <span />
                  </div>
                  <div className="col-md-2 col-md-offset-5">
                    {/* login */}
                    <div className="login-wrapper">
                      <div className="login hover-1 open-popup" data-rel={2}>
                        Log in / Sing up
                      </div>
                    </div>
                    {/* basket */}
                    <div className={`basket open-popup ${show ? "active" : ""}`} data-rel={1}>
                      <div className="img-wrapper">
                        <img src="img/shop/basket-2.png" alt="" />
                        <span>1</span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown-plus active">
                        <Link to="/shop">Products</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end OVERLAY-MENU */}
    </>
  );
};

export default MobileMenu;
