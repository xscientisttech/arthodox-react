import React, { Fragment, useState } from 'react';
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
import { CartProvider } from './assets/data/CartContext';
import { ProductProvider } from './assets/data/ProductContext';


const App = () => {

  const [search , setSearch ] = useState('');
  const [typeBuy, setTypeBuy] = useState(false);

  return (
    <Fragment>
      <Router>
        <ProductProvider>
          <CartProvider>
            <Header
              search={search}
              setSearch={setSearch}
              setTypeBuy={setTypeBuy}
            />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products" element={<Products search={search} />} />
              <Route
                path="/SepProduct/:productId"
                element={<SepProduct setTypeBuy={setTypeBuy} />}
              />
              <Route
                path="/Products/category/:categoryId"
                element={<Products search={search} />}
              />
              <Route path="/Category" element={<Category />} />
              <Route
                path="/Checkout"
                element={<Checkout typeBuy={typeBuy} />}
              />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/About" element={<About />} />
              <Route path="/SepProduct" element={<SepProduct />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ProductProvider>
      </Router>
    </Fragment>
  );
}
export default App;