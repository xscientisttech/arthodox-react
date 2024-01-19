// CartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

const initialCollection = {
  cart: [],
  product: null
}

export function CartProvider({ children }) {
  const [collection, setCollection] = useState(JSON.parse(localStorage.getItem('collection')) || initialCollection);
  const cart = collection.cart;
  const localCart = localStorage.getItem('collection');

  const initCart = (items) => {
    setCollection(({ cart: items, product: null }));
    localStorage.setItem('collection', JSON.stringify(collection));
  }

  const addToCart = (product) => {
    const copiedCart = [...collection.cart];
    const index = copiedCart.findIndex(item => item.id === product.id)
    // console.log("product",product,"index",index);
    if (index !== -1) {
      copiedCart[index].quantity += product.quantity;
      console.log('copiedCart : ', copiedCart);
    } else {
      copiedCart.push(product);
    }
    // console.log(copiedCart);
    setCollection({ ...collection, cart: copiedCart });
    setLocalCart({ ...collection, cart: copiedCart });
  }

  const removeFromCart = (product) => {
    console.log('product removed : ', product.id)
    const copiedCart = [...collection.cart];
    const index = copiedCart.findIndex(item => item.id === product.id)
    if (index !== -1) {
      copiedCart.splice(index, 1);
      setCollection({ ...collection, cart: copiedCart });
      setLocalCart({ ...collection, cart: copiedCart });
      console.log(localStorage.getItem("collection"));
    }
    //  else {
    //   copiedCart.push(product);
    // }
    // localStorage.setItem('collection', JSON.stringify(collection));
  }


  const cartTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    // console.log(total);
    return total;
  };

  // useEffect(() => { 
  //   initCart();
  // },[])

  const setLocalCart = (collection) => {
    localStorage.setItem('collection', JSON.stringify(collection));
  }

  useEffect(() => {
    // localStorage.setItem('collection', JSON.stringify(collection));
    // setCollection(JSON.parse(localStorage.getItem('collection')));
    
    // localStorage.setItem('collection', JSON.stringify(collection));
    console.log("localstorage : ", JSON.parse(localStorage.getItem('collection')));
  }, [collection])


  return (
    <CartContext.Provider value={{ cart, addToCart, cartTotal, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}