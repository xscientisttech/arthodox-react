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
import img12 from '../images/items/ram1.png'
import k1 from '../images/items/k1.jpg'
import r3 from '../images/items/r3.jpg'
import m1 from '../images/items/m1.jpg'
import r4 from '../images/items/r4.jpg'
import g1 from '../images/items/g1.jpg'
import ram2 from '../images/items/ram2.jpg'
import anime1 from '../images/items/anime1.jpg'
import anime2 from '../images/items/anime2.jpg'
import anime3 from '../images/items/anime3.jpg'
import anime4 from '../images/items/anime4.jpg'
import anime5 from '../images/items/anime5.jpg'
import anime6 from '../images/items/anime6.jpg'
import pubg1 from '../images/items/pubg1.jpg'
import pubg2 from '../images/items/pubg2.jpg'
import pubg3 from '../images/items/pubg3.jpg'
import gta1 from '../images/items/gta1.jpg'
import gta2 from '../images/items/gta2.jpg'
import virat1 from '../images/items/Virat-Kohli-HD-Wallpaper-Money-Heist.jpg'
import virat2 from '../images/items/Virat-Kohli-HD-Wallpaper-scaled.jpg'
import ronaldo1 from '../images/items/4k-Cristiano-Ronaldo-Wallpaper-For-iPhone.jpg'
import ronaldo2 from '../images/items/Cristiano-Ronaldo-Wallpaper-1920x1080-4k.jpg'
import messi1 from '../images/items/Lionel-Messi-Inter-Miami-CF-Pfp-HD.jpg'
import messi2 from '../images/items/Lionel-Messi-Inter-Miami-CF-Profile-Photo.jpg'
import trans1 from '../images/items/Transformers-Full-HD-Wallpaper.jpg'
import avenger from '../images/items/Avengers-Endgame-Android-Wallpaper.jpeg'
import avatar from '../images/items/Neytiri-Avatar-2-Wallpaper.jpg'

const ProductContext = createContext();

export function ProductProvider({ children }) {


    const products = [
        
        {
            id: 10,
            img: g1,
            quantity: 1,
            title: 'Product 10',
            price: 2000,
            Discount: 1300,
            description: 'Description for Product 10',
            category: 5
        },
        {
            id: 11,
            img: k1,
            quantity: 1,
            title: 'Product 11',
            price: 2000,
            Discount: 1450,
            description: 'Description for Product 11',
            category: 5
        },
        {
            id: 12,
            img: ram2,
            quantity: 1,
            title: 'Product 12',
            price: 2000,
            Discount: 1700,
            description: 'Description for Product 12',
            category: 5
        },
        
        {
            id: 7,
            img: avenger,
            quantity: 1,
            title: 'Product 7',
            price: 2000,
            Discount: 1200,
            description: 'Description for Product 7',
            category: 2
        },
        {
            id: 8,
            img: trans1,
            quantity: 1,
            title: 'Product 8',
            price: 2000,
            Discount: 1300,
            description: 'Description for Product 8',
            category: 2
        },
        {
            id: 9,
            img: avatar,
            quantity: 1,
            title: 'Product 9',
            price: 2000,
            Discount: 1300,
            description: 'Description for Product 9',
            category: 2
        },
        {
            id: 13,
            img: img12,
            quantity: 1,
            title: 'Product 13',
            price: 2000,
            Discount: 1100,
            description: 'Description for Product 13',
            category: 5
        },
        {
            id: 14,
            img: r3,
            quantity: 1,
            title: 'Product 14',
            price: 2000,
            Discount: 1250,
            description: 'Description for Product 14',
            category: 5
        },
        {
            id: 15,
            img: m1,
            quantity: 1,
            title: 'Product 15',
            price: 2000,
            Discount: 1050,
            description: 'Description for Product 15',
            category: 5
        },
        {
            id: 16,
            img: r4,
            quantity: 1,
            title: 'Product 16',
            price: 2000,
            Discount: 1600,
            description: 'Description for Product 16',
            category: 5
        },
        {
            id: 17,
            img: anime1,
            quantity: 1,
            title: 'Product 17',
            price: 2000,
            Discount: 1650,
            description: 'Description for Product 17',
            category: 3
        },
        {
            id: 18,
            img: anime2,
            quantity: 1,
            title: 'Product 18',
            price: 2000,
            Discount: 1450,
            description: 'Description for Product 18',
            category: 3
        },
        {
            id: 19,
            img: anime3,
            quantity: 1,
            title: 'Product 19',
            price: 2000,
            Discount: 1250,
            description: 'Description for Product 19',
            category: 3
        },
        {
            id: 20,
            img: anime4,
            quantity: 1,
            title: 'Product 20',
            price: 2000,
            Discount: 1550,
            description: 'Description for Product 20',
            category: 3
        },
        {
            id: 21,
            img: anime5,
            quantity: 1,
            title: 'Product 21',
            price: 2000,
            Discount: 1150,
            description: 'Description for Product 21',
            category: 3
        },
        {
            id: 22,
            img: anime6,
            quantity: 1,
            title: 'Product 22',
            price: 2000,
            Discount: 1750,
            description: 'Description for Product 22',
            category: 3
        },
        {
            id: 23,
            img: gta1,
            quantity: 1,
            title: 'Product 23',
            price: 2000,
            Discount: 1725,
            description: 'Description for Product 23',
            category: 1
        },
        {
            id: 24,
            img: pubg1,
            quantity: 1,
            title: 'Product 24',
            price: 2000,
            Discount: 1150,
            description: 'Description for Product 24',
            category: 1
        },
        {
            id: 25,
            img: gta2,
            quantity: 1,
            title: 'Product 25',
            price: 2000,
            Discount: 1475,
            description: 'Description for Product 25',
            category: 1
        },
        {
            id: 26,
            img: gta1,
            quantity: 1,
            title: 'Product 26',
            price: 2000,
            Discount: 1725,
            description: 'Description for Product 26',
            category: 1
        },
        {
            
            id: 1,
            img: virat1,
            quantity: 1,
            title: 'Product 1',
            price: 1000,
            Discount: 890,
            description: 'Description for Product 1',
            category: 4
        },
        {
            id: 2,
            img: virat2,
            quantity: 1,
            title: 'Product 2',
            price: 2000,
            Discount: 1000,
            description: 'Description for Product 2',
            category: 4
        },
        {
            id: 3,
            img: ronaldo1,
            quantity: 1,
            title: 'Product 3',
            price: 2000,
            Discount: 900,
            description: 'Description for Product 3',
            category: 4
        },
        {
            id: 4,
            img: ronaldo2,
            quantity: 1,
            title: 'Product 4',
            price: 2000,
            Discount: 1230,
            description: 'Description for Product 4',
            category: 4
        },
        {
            id: 5,
            img: messi1,
            quantity: 1,
            title: 'Product 5',
            price: 2000,
            Discount: 1150,
            description: 'Description for Product 5',
            category: 4
        },
        {
            id: 6,
            img: messi2,
            quantity: 1,
            title: 'Product 6',
            price: 2000,
            Discount: 1350,
            description: 'Description for Product 6',
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