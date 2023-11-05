import React from 'react';
import DummyData from "../Components/DummyData";

const CartItem = (props) => {
  return (
    <>
      <td
        className="p-2  text-right block text-[1em] before:content-[attr(data-title)':'] before:font-bold  before:float-left sm:before:content-none sm:text-center font-Poppins"
        data-title="Product"
      >
        {" "}
        <div className="flex justify-center flex-col items-end md:flex-row sm:items-center gap-10">
          <img
            src={DummyData.GridImgUrl}
            alt=""
            className="w-[6rem] rounded-lg"
          />
          <p>Wall Frame</p>
        </div>
      </td>
      <td
        className="p-2  text-right block text-[1em] before:content-[attr(data-title)':'] before:font-bold  before:float-left sm:before:content-none sm:text-center"
        data-title="Price"
      >
        Rs. 100
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
          <p>Rs. 1000</p>

        </div>
      </td>
      <td
        className="p-2  text-right block text-[1em] before:content-[attr(data-title)':'] before:font-bold  before:float-left sm:before:content-none sm:text-center"
        data-title="Subtotal"
      >
        <i className="fa-solid fa-trash text-orange-600 cursor-pointer"
          onClick={() => props.removeFromCart(props.index)}
        ></i>

      </td>
    </>
  )
}

export default CartItem