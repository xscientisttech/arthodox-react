import React, { useState } from "react";
import { useNavigate } from "react-router";
import DummyData from "./DummyData";

const NavCart = () => {
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
          <div className=" group/item flex min-w-[300px] justify-between items-center  px-5 py-5 w-full border hover:bg-slate-100 cursor-pointer" onClick={() => closeCart("/Cart")}>
            <div className="flex">
              <img className=" shadow-lg border" src={DummyData.GridImgUrl} alt="5" width="50rem" />
              <div className=" ml-5" >
                <h4 className="text-lg font-semibold text-gray-600">{DummyData.Title}</h4>
                <p className=" text-red-700 text-sm" >{DummyData.Dprice}</p>
              </div>
            </div>
            <i class="fa-solid fa-circle-xmark group/edit invisible group-hover/item:visible text-lg text-gray-400"></i>
          </div>

          <div className=" group/item flex min-w-[300px] justify-between items-center  px-5 py-5 w-full border hover:bg-slate-100 cursor-pointer" onClick={() => closeCart("/Cart")}>
            <div className="flex">
              <img className=" shadow-lg border" src={DummyData.GridImgUrl} alt="cart-img" width="50rem" />
              <div className=" ml-5" >
                <h4 className="text-lg font-semibold text-gray-600">{DummyData.Title}</h4>
                <p className=" text-red-700 text-sm" >{DummyData.Dprice}</p>
              </div>
            </div>
            <i class="fa-solid fa-circle-xmark group/edit invisible group-hover/item:visible text-lg text-gray-400"></i>
          </div>

          <div className=" group/item flex min-w-[300px]  justify-between items-center px-5 py-5 w-full border hover:bg-slate-100 cursor-pointer" onClick={() => closeCart("/Cart")}>
            <div className="flex">
              <img className=" shadow-lg border" src={DummyData.GridImgUrl} alt="cart-img" width="50rem" />
              <div className=" ml-5" >
                <h4 className="text-lg font-semibold text-gray-600">{DummyData.Title}</h4>
                <p className=" text-red-700 text-sm" >{DummyData.Dprice}</p>
              </div>
            </div>
            <i class="fa-solid fa-circle-xmark group/edit invisible group-hover/item:visible text-lg text-gray-400"></i>
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
