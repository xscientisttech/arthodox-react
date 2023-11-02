import React from 'react'
import gridImg from "../assets/images/grid.jpg";
import { useNavigate } from "react-router";

function ProductItem() {

  const Navigate = useNavigate();


    return (
        <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] cursor-pointer hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 ">
            <img
                src={gridImg}
                alt="Avatar"
                className="w-[100%]"
                onClick={() => Navigate("/SepProduct")}
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
                <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                    wall frame
                </h3>
                <p>Attrative Wall Frames</p>
                <p className="text-[#898989] text-base flex gap-2.5">
                    <span className="text-[#3a3a3a] font-medium">Rs.1000</span>
                    <del>Rs. 1500.00</del>
                </p>
            </div>
        </div>
    )
}

export default ProductItem