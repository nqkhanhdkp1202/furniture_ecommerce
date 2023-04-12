import React from 'react'
import MainLayout from '../layouts/MainLayouts';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
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
                element: <Shop/>
            },
            {
                path: '/checkout',
                element: <Checkout/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    }
]

export default router