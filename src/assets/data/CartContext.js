// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    console.log(cart);
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const cartTotal = () => {
    let total = 0;
    for (const item of cart) {
      total += item.Discount;
    }
    return total;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, cartTotal, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}