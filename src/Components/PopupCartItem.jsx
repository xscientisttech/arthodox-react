import React from 'react';
import { useNavigate } from "react-router";
import DummyData from "../assets/data/DummyData";

const PopupCartItem = (props) => {

    const product = props.product; 

    const Navigate = useNavigate();


    return (
        <>
            <div className=" group/item flex min-w-[300px] justify-between items-center  px-5 py-5 w-full border hover:bg-slate-100 cursor-pointer" >
                <div className="flex flex-grow" onClick={() => props.closeCart("/Cart")} >
                    <img className=" shadow-lg border" src={product.img} alt="cart-img" width="50rem" />
                    <div className=" ml-5" >
                        <h4 className="text-lg font-semibold text-gray-600">{product.title}</h4>
                        <p className=" text-red-700 text-sm" >{product.price}</p>
                    </div>
                </div>
                <div className="w-10 aspect-square flex justify-end items-center" onClick={() => props.removeFromCart(props.index)}>
                    <i class="fa-solid fa-circle-xmark group/edit invisible group-hover/item:visible text-lg text-gray-400">
                    </i>
                </div>
            </div>
        </>
    )
}

export default PopupCartItem