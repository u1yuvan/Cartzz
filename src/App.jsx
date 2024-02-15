import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';



function App() {
  return (
    <div className='App'>
     
        <Router>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Shop />}/>
              <Route path='/Cart' element={<Cart />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App;