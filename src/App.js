import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './RouterPages/Home';
import Products from './RouterPages/Products';
import Category from './RouterPages/Category';
import Checkout from './RouterPages/Checkout';
import Cart from './RouterPages/Cart';
import About from './RouterPages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SepProduct from './RouterPages/SepProduct';
import { CartProvider } from './Components/CartContext';


const App = () => {

  return (
    <Fragment>
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Category' element={<Category />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/About' element={<About />} />
            <Route path='/SepProduct' element={<SepProduct />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </Fragment>
  )
}
export default App;