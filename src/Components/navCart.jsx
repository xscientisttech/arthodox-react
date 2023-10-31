import React, { useState } from "react";
import { useNavigate } from "react-router";
import gridImg from "../assets/images/grid.jpg";

const NavCart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

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
        <div className=" absolute top-14 right-10 w-96 gap-3 flex flex-col justify-center items-center py-5 font-semibold text-lg bg-[rgba(255,255,255,0.5)] rounded-xl">
          <div className="flex justify-center items-center gap-10">
            <img src={gridImg} alt="" width="100rem" />
            <div>
              <h3 className="text-xl font-semibold">Wall Frame</h3>
              <p>1 &#215; rs. 1000</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10">
            <img src={gridImg} alt="" width="100rem" />
            <div>
              <h3 className="text-xl font-semibold">Wall Frame</h3>
              <p>1 &#215; rs. 1000</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10">
            <p>subtotal</p>
            <p>Rs. 2000</p>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-10">
              <li
                className="text-xl bg-black text-white rounded-lg px-4 py-1 cursor-pointer"
                onClick={() => Navigate("/Cart")}
              >
                Cart
              </li>
              <li
                className="text-xl bg-black text-white rounded-lg px-4 py-1 cursor-pointer"
                onClick={() => Navigate("/Checkout")}
              >
                Checkout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavCart;
