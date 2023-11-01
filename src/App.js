import React, { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './RouterPages/Home';
import Product from './RouterPages/Product';
import Products from './RouterPages/Products';
import Category from './RouterPages/Category';
import Checkout from './RouterPages/Checkout';
import Cart from './RouterPages/Cart';
import About from './RouterPages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return(
    <Fragment>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Product' element={<Product/>}/>
          <Route path='/Category' element={<Category/>}/>
          <Route path='/Checkout' element={<Checkout/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/About' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </Fragment>
  )
}
export default App;