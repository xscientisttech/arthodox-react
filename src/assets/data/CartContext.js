// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [buy, setBuy] = useState([]);

  const addToCart = (item) => {
    let existingProduct = cart.findIndex((product) => product.id == item.id);
    if (existingProduct < 0) {
      setCart([...cart, item]);
    } else {
      if (cart[existingProduct].quantity < item.quantity) {
        cart[existingProduct].quantity = item.quantity;
      } else if (cart[existingProduct].quantity < 10) {
        cart[existingProduct].quantity++;
      }
      // setCart([...cart, item]);
    }

    console.log();
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

  const buyNow = (item) => {
    setBuy([item]);
    console.log(buy);
  };

  return (
    <CartContext.Provider
      value={{ cart, buy, addToCart, cartTotal, removeFromCart, buyNow }}
    >
      {children}
    </CartContext.Provider>
  );
}