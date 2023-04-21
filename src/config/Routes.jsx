import { element } from 'prop-types';
import React from 'react'
import MainLayout from '../layouts/MainLayouts';
import About from '../pages/About';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import Profile from '../pages/Profile';
import Shop from '../pages/Shop'

const router = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop/>,
            },
            {
                path: '/shop/:id',
                element: <Detail/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/checkout',
                element: <Checkout/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/orders',
                element: <Orders/>
            },
        ]
    }
]

export default router