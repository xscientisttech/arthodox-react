import React from 'react';
import { useNavigate } from "react-router";
import DummyData from "../assets/data/DummyData";
import { FaRegCircleXmark } from "react-icons/fa6";

const PopupCartItem = (props) => {

    const product = props.product; 

    const Navigate = useNavigate();


    return (
      <>
        <div className=" group/item flex min-w-[300px] justify-between items-center  px-5 py-5 w-full border hover:bg-slate-100 cursor-pointer">
          <div
            className="flex flex-grow"
            onClick={() => props.closeCart("/Cart")}
          >
            <img
              className=" shadow-lg border"
              src={product.img}
              alt="cart-img"
              width="50rem"
            />
            <div className=" ml-5">
              <h4 className="text-lg font-semibold text-gray-600">
                {product.title}
              </h4>
              <p className=" text-red-700 text-sm">
                {product.quantity + "  "}x{"  " + product.discount}
              </p>
              <p className=" text-red-700 text-sm">
                {product.quantity * product.discount}
              </p>
            </div>
          </div>
          <div
            className="w-10 aspect-square flex justify-end items-center"
            onClick={() => props.removeFromCart(props.index)}
          >
            <FaRegCircleXmark className="group/edit invisible group-hover/item:visible text-lg text-gray-400" />
          </div>
        </div>
      </>
    );
}

export default PopupCartItem