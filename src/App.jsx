import { useState } from 'react'
import Header from './components/header/Header'
import { Router, useRoutes } from 'react-router-dom'

import router from './config/Routes'

function App() {
  const element = useRoutes(router);

  return (
    <>
      {
        element
      }
    </>
  )
}

export default App
