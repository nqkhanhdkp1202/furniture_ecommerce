import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartModal from "../cart-modal/CartModal";
import LoginModal from "../login-modal/LoginModal";
import SignupModal from "../signup-modal/SignupModal";

const MobileMenu = ({ show, onClose }) => {
  const headerNav = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Products",
      path: "/shop",
    },
    {
      display: "About Us",
      path: "/about",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];

  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowCart = () => {
    if (showLogin) {
      setShowLogin(false);
    }
    setShowCart(!showCart);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleShowLogin = () => {
    if (showCart) {
      setShowCart(false);
    }
    setShowLogin(!showLogin);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      {/* OVERLAY-MENU */}
      <div
        ref={headerRef}
        className={`overlay-wrapper ${show ? "active" : ""}`}
      >
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
                      <div className="login hover-1 open-popup" onClick={handleShowLogin} data-rel={2}>
                        Log in / Sing up
                      </div>
                    </div>
                    {/* basket */}
                    <div
                      className={`basket open-popup ${show ? "active" : ""}`}
                      data-rel={1}
                      onClick={handleShowCart}
                    >
                      <div className="img-wrapper">
                        <img src="img/shop/basket-2.png" alt="" />
                        <span>1</span>
                      </div>
                    </div>
                    <ul>
                      {headerNav.map((e, i) => (
                        <li
                          key={i}
                          className={`${i === active ? "active" : ""}`}
                        >
                          <Link to={e.path}>
                            <span>{e.display}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end OVERLAY-MENU */}
      <LoginModal show={showLogin} onClose={handleCloseLogin} />
      <SignupModal />
      <CartModal show={showCart} onClose={handleCloseCart} />
    </>
  );
};

export default MobileMenu;
