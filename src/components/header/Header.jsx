import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import CartModal from "../cart-modal/CartModal";
import MobileMenu from "../mobile-menu/MobileMenu";
import LoginModal from "../login-modal/LoginModal";
import SignupModal from "../signup-modal/SignupModal";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { user, setUser } = useContext(UserContext);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false)


  const location = useLocation();
  useEffect(() => {
    setShowCart(false);
    setShowMenu(false);
    setShowLogin(false);
    setShowDropdown(false);
  }, [location]);

  const navigate = useNavigate();
  
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

  const handleDropDown = () => {
    setShowDropdown(!showDropdown)
  }
  const handleLogOut = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
    setUser({});
    setShowDropdown(false);
    navigate("/")
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
              <div
                className={`basket open-popup ${showCart ? "active" : ""}`}
                data-rel={1}
                onClick={handleShowCart}
              >
                <div className="img-wrapper">
                  <span>{cartItems.length}</span>
                </div>
              </div>
              {/* login */}
              <div className="login-wrapper">
                {Object.keys(user).length !== 0  ? (
                  <>
                    <div class="login login-account" onClick={handleDropDown}>
                      <img src="/src/assets/img/account.png" alt="" />
                      <span>Hello {user.DisplayName}</span>
                    </div>
                    <div className="dropdown-container" style={{display: `${showDropdown ? "block" : "none"}`}}>
                      <ul>
                        <li>
                          My Profile
                        </li>
                        <hr />
                        <li>
                          My Orders
                        </li>
                        <hr />
                        <li>
                          My Address
                        </li>
                        <hr />
                        <li onClick={handleLogOut}>
                          Logout
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <div
                    className="login hover-1 open-popup"
                    onClick={handleShowLogin}
                    data-rel={2}
                  >
                    Log in / Sing up
                  </div>
                )}
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
      <SignupModal />
      <CartModal show={showCart} onClose={handleCloseCart} />
    </>
  );
};

export default Header;
