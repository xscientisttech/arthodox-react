import React from 'react';
import { useNavigate } from "react-router";
import DummyData from "./DummyData";

const PopupCartItem = (props) => {

    const closeCart = (page) => {
        Navigate(page);
        // toggleCart();
      }
    
      const Navigate = useNavigate();
    

    return (
        <>
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
        </>
    )
}

export default PopupCartItem