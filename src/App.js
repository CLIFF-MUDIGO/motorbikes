
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {
  return (
    <div className='vh-100 overflow-hidden'>
      <Navbar />
      <Main />
      
    </div>
  )
}

export default App
