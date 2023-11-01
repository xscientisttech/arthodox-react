import React, { useState } from 'react'
import Quality from '../Components/Quality'
import Navigation from '../Components/Navigation'
import PageSection from '../Components/PageSection'
import Hero from '../Components/Hero'
import ProductGrid from '../Components/ProductGrid'
import './single_product.css'
import mainImg from '../assets/images/grid.jpg'
import img1 from '../assets/images/image 9.png'
import img2 from '../assets/images/image 81.png'
import img3 from '../assets/images/image 8.png'
import { useNavigate } from "react-router";

const Product = () => {


  const Navigate = useNavigate();

  const frames = [mainImg, img1, img2, img3];
  const [selectedImage, setSelectedImage] = useState(frames[0]);

  const changeImage = (frame) => {
    setSelectedImage(frame);
  };


  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };



  return (
    <>
      <Navigation />

      <section className="product">
        <div className="container">
          <div className="c1">
            <div className="main-img">
              <img id="main-img" src={selectedImage} alt="" />
            </div>
            <div id="frames-container" className="list">
              {frames.map((frame, index) => (
                <img
                  key={index}
                  className="room-option"
                  src={frame}
                  onClick={() => changeImage(frame)}
                  alt={`Frame ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="c2">
            <h1 id="product-title">Photo Frame</h1>
            <p id="price">Rs. 1000</p>
            <p className="description p-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, atque ducimus! Officiis rerum
              maxime eaque magnam, tempora explicabo, aliquid at tempore veritatis voluptatibus esse voluptatem id
              ab magni reprehenderit? Architecto.
            </p>
            <div className="frame-size">
              <p>Size</p>
              <button id="frame-size">Frame Size</button>
            </div>
            <div className="color-palette">
              <p>Color</p>
              <div className="colors flex gap-1">
                <div className="color w-6 rounded-xl h-6 bg-purple-500 cursor-pointer"></div>
                <div className="color w-6 rounded-xl h-6 bg-green-500 cursor-pointer"></div>
                <div className="color w-6 rounded-xl h-6 bg-red-500 cursor-pointer"></div>
                <span className='color-pick'>
                  <input className=' rounded-xl w-6 aspect-square' id="color-picker" value="#ffffff" type="color" /></span>
              </div>
            </div>
            <div className="btns">
              <div className="quantity">
                <i className="fa fa-minus" onClick={decreament}></i>
                <p id="count">{count}</p>
                <i className="fa fa-plus" onClick={increment}></i>
              </div>
              <div className="btn">
                <button className="add-to-cart">Add To Cart</button>
                <a href="./checkout.html">
                  <button className="buy" onClick={() => Navigate("/Checkout")}>BUY</button>
                </a>
              </div>
            </div>
            <div className="features">
              <div className="f1">
                <p>SKU</p>
                <p>SS001</p>
              </div>
              <div className="f1">
                <p>Category</p>
                <p>Sofas</p>
              </div>
              <div className="f1">
                <p>Tags</p>
                <p>Sofa, Chair, Home, Shop</p>
              </div>
              <div className="f1">
                <p>Share</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="description">
        <div className="container">
          <div className="c1">
            <div className="headings">
              <h3>Description</h3>
              <h3>Additional Information</h3>
            </div>
            <p className="text1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, placeat perferendis dicta quae
              corrupti velit ipsa minus inventore nihil, perspiciatis laboriosam sapiente veritatis explicabo
              deserunt. Totam perspiciatis doloribus vero sed.
            </p>
            <p className="text2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci rerum neque repellat ratione
              tempore recusandae iure architecto, rem fugiat nesciunt provident fuga, ipsum suscipit labore ipsa
              molestiae veritatis. Necessitatibus, voluptatibus? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Molestias earum impedit fugit pariatur ut obcaecati autem assumenda corporis,
              debitis, voluptatem nulla! Soluta minus sint optio delectus beatae unde eveniet repellat?
            </p>
          </div>
          <div className="c2">
            <div className="img"></div>
            <div className="img"></div>
          </div>
        </div>
      </section>

      <ProductGrid />
      <Quality />
    </>
  )
}

export default Product