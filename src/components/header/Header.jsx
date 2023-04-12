import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useRef } from "react";
import CartModal from "../cart-modal/CartModal";
import MobileMenu from "../mobile-menu/MobileMenu";
import LoginModal from "../login-modal/LoginModal";
import SignupModal from "../signup-modal/SignupModal";

const Header = () => {

    const location = useLocation();
    useEffect(() => {
      setShowCart(false);
      setShowMenu(false);
      setShowLogin(false);
    }, [location]);


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
      display: "Checkout",
      path: "/checkout",
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
    if(showLogin){
      setShowLogin(false);
    }
    setShowCart(!showCart)
  }

  const handleCloseCart = () => {
    setShowCart(false)
  }

  const handleShowLogin = () => {
    if(showCart){
      setShowCart(false)
    }
    setShowLogin(!showLogin)
  }

  const handleCloseLogin = () => {
    setShowLogin(false)
  }


  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  
  return (
    <>
      {/* HEADER */}
      <header ref={headerRef} className="header-style-2">
        <div className="wide-container-fluid">
          <div className="row">
            <div className="col-xs-2">
              <Link className="logo" to="/">
                <img src="./src/assets/img/logo.png" alt="" />
              </Link>
            </div>
            <div className="col-xs-10 text-right">
              <ul className="header-menu">
                {headerNav.map((e, i) => (
                  <li key={i} className={`${i === active ? "active" : ""}`}>
                    <Link to={e.path}>
                      <span>{e.display}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* basket */}
              <div className={`basket open-popup ${showCart ? "active" : ''}`} data-rel={1} onClick={handleShowCart}>
                <div className="img-wrapper">
                  <span>1</span>
                </div>
              </div>
              {/* login */}
              <div className="login-wrapper">
                <div className="login hover-1 open-popup"  onClick={handleShowLogin} data-rel={2}>
                  Log in / Sing up
                </div>
              </div>
              <div className="hamburger-icon" onClick={handleShowMenu}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* HEADER */}
      <MobileMenu show={showMenu} onClose={handleCloseMenu} />
      <LoginModal show={showLogin} onClose={handleCloseLogin} />
      <SignupModal/>
      <CartModal show={showCart} onClose={handleCloseCart}/>
    </>
  );
};

export default Header;
