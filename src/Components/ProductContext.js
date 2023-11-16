import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export function ProductProvider({ children }) {

  const products = [
    {
      id: 1,
      img: '../assets/images/grid.jpg',
      title: 'Product 1',
      price: 1000,
      Discount: 890,
      description: 'Description for Product 1',
    },
    {
      id: 2,
      img: 'src',
      title: 'Product 2',
      price: 2000,
      Discount: 1400,
      description: 'Description for Product 2',
    },
    {
      id: 3,
      img: 'src',
      title: 'Product 3',
      price: 2000,
      Discount: 900,
      description: 'Description for Product 3',
    },
    {
      id: 4,
      img: 'src',
      title: 'Product 4',
      price: 2000,
      Discount: 1230,
      description: 'Description for Product 4',
    },
    {
      id: 5,
      img: 'src',
      title: 'Product 5',
      price: 2000,
      Discount: 1150,
      description: 'Description for Product 5',
    },
    {
      id: 6,
      img: 'src',
      title: 'Product 6',
      price: 2000,
      Discount: 1350,
      description: 'Description for Product 6',
    },
    {
      id: 7,
      img: 'src',
      title: 'Product 7',
      price: 2000,
      Discount: 1200,
      description: 'Description for Product 7',
    },
    {
      id: 8,
      img: 'src',
      title: 'Product 8',
      price: 2000,
      Discount: 1300,
      description: 'Description for Product 8',
    },
    {
      id: 9,
      img: 'src',
      title: 'Product 8',
      price: 2000,
      Discount: 1300,
      description: 'Description for Product 8',
    },
    
  ];

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
