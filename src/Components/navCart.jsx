import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import DummyData from "../assets/data/DummyData";
import PopupCartItem from "./PopupCartItem";
import { useCart } from "../assets/data/CartContext";
import { FaCartShopping } from "react-icons/fa6";

const NavCart = () => {

  const Navigate = useNavigate();

  const { cart, cartTotal, removeFromCart, Quantity } = useCart();

  const popupCartRef = useRef();




  // const cartTotal = () => {
  //   let total = 0;
  //   for (const item of cart) {
  //     total += item.price;
  //   }
  //   return total;
  // };

  // const [cartTotal, setCartTotal] = useState(0);

  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = (page) => {
    Navigate(page);
    toggleCart();
  };

  useEffect(() => {
    let handler = (e) => {
      if (!popupCartRef.current.contains(e.target) && cartOpen) {
        toggleCart();
        // console.log(menuRef.current.contains(e.target));
      }
    }
    document.addEventListener("mousedown", handler);
  });


  return (


    <div className=" font-Poppins">
      <div
        className="relative text-2xl hover:scale-110 flex"
        onClick={toggleCart}
      >

        <FaCartShopping
          id="menu"
          className={cartOpen ? <FaCartShopping /> : <FaCartShopping />}
        />
        <h1 className="absolute -top-4 left-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">{Quantity()}</h1>
      </div>
      {cartOpen && (
        <div className=" transition shadow-lg absolute top-10 md:top-14 right-0 md:right-10 w-full sm:w-fit h-fit min-h-[96px]  flex flex-col justify-start items-center font-semibold bg-white text-base ">
          <div className="flex min-w-[300px] justify-between px-5 py-5 w-full border cursor-pointer">
            <div className=" flex items-center gap-2">
              <h3>Shopping Cart</h3>
            </div>
          </div>

          <div className=" max-h-[360px] overflow-y-auto ">
            {cart.map((item, index) => (
              <li className=" list-none" key={index}>
                <PopupCartItem
                  product={item}
                  closeCart={closeCart}
                  index={index}
                  removeFromCart={removeFromCart}
                />
              </li>
            ))}
          </div>

          <div className="flex min-w-[300px] justify-between px-5 py-5 w-full border cursor-pointer">
            <div className=" flex items-center gap-2">
              <h3>Total : </h3>
              <p className=" text-red-700 text-sm"> Rs {cartTotal()}</p>
            </div>
            <button
              className="border p-2 px-3 text-xs bg-gray-100 hover:bg-gray-200"
              onClick={() => closeCart("/Cart")}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavCart;
