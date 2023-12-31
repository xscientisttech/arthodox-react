// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let existingProduct = cart.find((product) => product.id == item.id);
    // console.log("sdsdsd", existingProduct);
    if (existingProduct == undefined) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const cartTotal = () => {
    let total = 0;
    for (const item of cart) {
      total += item.quantity * item.discount;
    }
    return total;
  };

  const value = () => {
    let val = 0;
    // let len = cart.length();
    val = cart[cart.length - 1].quantity * cart[cart.length - 1].discount;
    return val;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartTotal, removeFromCart, value }}
    >
      {children}
    </CartContext.Provider>
  );
}