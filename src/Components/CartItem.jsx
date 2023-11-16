import React from "react";
import DummyData from "../assets/data/DummyData";
import { FaTrash } from "react-icons/fa";

const CartItem = (props) => {
  const product = props.product;

  return (
    <>
      <td
        className="p-2  text-right block text-[1em] before:content-[attr(data-title)':'] before:font-bold  before:float-left sm:before:content-none sm:text-center font-Poppins"
        data-title="Product"
      >
        {" "}
        <div className="flex justify-center flex-col items-end md:flex-row sm:items-center gap-10">
          <img src={product.img} alt="" className="w-[6rem] rounded-lg" />
          <p> {product.title} </p>
        </div>
      </td>
      <td
        className="p-2  text-right block text-[1em] before:content-[attr(data-title)':'] before:font-bold  before:float-left sm:before:content-none sm:text-center"
        data-title="Price"
      >
        {product.price}
      </td>
      <td
        className="p-2  text-right block text-[1em] before:content-[attr(data-title)':'] before:font-bold  before:float-left sm:before:content-none sm:text-center"
        data-title="Quantity"
      >
        1
      </td>
      <td
        className="p-2  text-right block text-[1em] before:content-[attr(data-title)':'] before:font-bold  before:float-left sm:before:content-none sm:text-center"
        data-title="Subtotal"
      >
        <div className="flex justify-between flex-col items-end md:flex-row sm:before:content-none sm:items-center gap-14">
          <p> {product.price} </p>
        </div>
      </td>
      <td
        className="p-2  text-right block text-[1em] before:content-[attr(data-title)':'] before:font-bold  before:float-left sm:before:content-none sm:text-center"
        data-title="Remove"
      >
        <div className="flex justify-between flex-col items-end md:flex-row sm:before:content-none sm:items-center gap-14">
          <FaTrash
            className="text-orange-600 cursor-pointer"
            onClick={() => props.removeFromCart(props.index)}
          />
        </div>
      </td>
    </>
  );
};

export default CartItem;
