import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import MobileMenu from '../components/mobile-menu/MobileMenu.jsx'
import { useEffect } from "react";
import { useLocation } from "react-router";
import CartModal from '../components/cart-modal/CartModal.jsx'

export default function MainLayout() {
    const ScrollToTop = (props) => {
        const location = useLocation();
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
      
        return <>{props.children}</>
      };

    return (
        <React.Fragment>
            <ScrollToTop >
            <Header />
            <MobileMenu />
            <Outlet />
            <Footer />
            </ScrollToTop>
        </React.Fragment>
    )
}