import React, { createContext, useState, useContext } from 'react';
import img2 from '../images/items/2.jpg'
import img3 from '../images/items/3.jpg'
import img4 from '../images/items/4.jpg'
import img5 from '../images/items/5.jpg'
import img6 from '../images/items/6.jpg'
import img7 from '../images/items/7.jpg'
import img8 from '../images/items/8.jpg'
import img9 from '../images/items/9.jpg'
import img10 from '../images/items/10.jpg'
import img11 from '../images/items/11.jpg'

const ProductContext = createContext();

export function ProductProvider({ children }) {


    const products = [
        {
            id: 1,
            img: img10,
            title: 'Product 1',
            price: 1000,
            Discount: 890,
            description: 'Description for Product 1',
            category: 0
        },
        {
            id: 2,
            img: img2,
            title: 'Product 2',
            price: 2000,
            Discount: 1000,
            description: 'Description for Product 2',
            category: 1
        },
        {
            id: 3,
            img: img3,
            title: 'Product 3',
            price: 2000,
            Discount: 900,
            description: 'Description for Product 3',
            category: 1
        },
        {
            id: 4,
            img: img4,
            title: 'Product 4',
            price: 2000,
            Discount: 1230,
            description: 'Description for Product 4',
            category: 2
        },
        {
            id: 5,
            img: img5,
            title: 'Product 5',
            price: 2000,
            Discount: 1150,
            description: 'Description for Product 5',
            category: 2
        },
        {
            id: 6,
            img: img6,
            title: 'Product 6',
            price: 2000,
            Discount: 1350,
            description: 'Description for Product 6',
            category: 2
        },
        {
            id: 7,
            img: img7,
            title: 'Product 7',
            price: 2000,
            Discount: 1200,
            description: 'Description for Product 7',
            category: 3
        },
        {
            id: 8,
            img: img8,
            title: 'Product 8',
            price: 2000,
            Discount: 1300,
            description: 'Description for Product 8',
            category: 3
        },
        {
            id: 9,
            img: img9,
            title: 'Product 9',
            price: 2000,
            Discount: 1300,
            description: 'Description for Product 9',
            category: 4
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

export function useProductById(productId) {
    const products = useProducts();
    return products.find((product) => product.id === productId);
}