import React, { useState } from "react";
import { useNavigate } from "react-router";
import DummyData from "./DummyData";
import PopupCartItem from "./PopupCartItem";
import { useCart } from "./CartContext";

const NavCart = () => {

  const { cart, removeFromCart } = useCart();

  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = (page) => {
    Navigate(page);
    toggleCart();
  }

  const Navigate = useNavigate();

  return (
    <div className="">
      <div className="relative text-2xl hover:scale-110" onClick={toggleCart}>
        <i
          id="menu"
          className={
            cartOpen ? "fa-solid fa-cart-shopping" : "fa-solid fa-cart-shopping"
          }
        ></i>
      </div>
      {cartOpen && (
        <div className=" transition shadow-lg absolute top-10 md:top-14 right-0 md:right-10 w-full sm:w-fit h-fit min-h-[96px]  flex flex-col justify-start items-center font-semibold bg-white text-base ">
          <div className=" max-h-[360px] overflow-y-auto ">

            {cart.map((item, index) => (
              <li className=" list-none" key={index}>
                <PopupCartItem closeCart={closeCart} index={index} removeFromCart={removeFromCart} />
              </li>
            ))}
          </div>

          <div className="flex min-w-[300px] justify-between px-5 py-5 w-full border cursor-pointer" >
            <div className=" flex items-center gap-2">
              <h3>Total : </h3>
              <p className=" text-red-700 text-sm"> Rs 3000</p>
            </div>
            <button className="border p-2 px-3 text-xs bg-gray-100 hover:bg-gray-200" onClick={() => closeCart("/Checkout")}>CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavCart;
