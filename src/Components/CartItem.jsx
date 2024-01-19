import React from "react";
import DummyData from "../assets/data/DummyData";
import { FaTrash } from "react-icons/fa";

const CartItem = (props) => {
  const product = props.product;
  

  return (
    <>
      <td className=" w-[6rem]" data-title="Product" >
        <img src={product.img} alt="" className="w-[6rem] mt-2 max-h-[4rem] rounded-lg" />
      </td>
      <td className=" text-center  " data-title="Product" > {product.title} </td>
      <td className=" text-center " data-title="Price" > {product.price} </td>
      <td className=" text-center " data-title="Quantity" > {product.quantity || '1'} </td>
      <td className=" text-center " data-title="Subtotal" > {product.price} </td>
      <td className=" text-center " data-title="Remove" >
        <div className="flex justify-center"> <FaTrash className="text-orange-600 cursor-pointer" onClick={() => props.removeFromCart(product)} />
        </div>
      </td>
    </>
  );
};

export default CartItem;
