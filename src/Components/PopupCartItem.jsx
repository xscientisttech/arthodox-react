import React from 'react';
import { useNavigate } from "react-router";
import DummyData from "../assets/data/DummyData";
import { FaRegCircleXmark } from "react-icons/fa6";

const PopupCartItem = (props) => {

    const product = props.product;

    const Navigate = useNavigate();


    return (
        <>
            <div className=" group/item flex min-w-[300px] justify-between items-center  px-5 py-5 w-full border hover:bg-slate-100 cursor-pointer" >
                <div className="flex flex-grow" onClick={() => props.closeCart("/Cart")} >
                    <div className="image rounded-lg w-[50px] max-w-[50px] aspect-square">
                        <img className=" rounded-lg shadow-lg border w-full aspect-square" src={product.img} alt="cart-img" />
                    </div>
                    <div className=" ml-5" >
                        <h4 className="text-lg font-semibold text-gray-600">{product.title}</h4>
                        <p className=" text-red-700 text-sm" >&#8377; {product.price}</p>
                    </div>
                </div>
                <div className="w-10 aspect-square flex justify-end items-center" onClick={() => props.removeFromCart(props.index)}>
                    <FaRegCircleXmark className='group/edit invisible group-hover/item:visible text-lg text-gray-400' />
                </div>
            </div>
        </>
    )
}

export default PopupCartItem