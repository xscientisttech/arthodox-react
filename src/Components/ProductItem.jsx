import React from 'react'
import { useNavigate } from "react-router";
import DummyData from '../assets/data/DummyData';


function ProductItem(props) {

    const Navigate = useNavigate();

    // Function to navigate to a specific product page
    const navigateToProduct = (productId) => {
        Navigate(`/SepProduct/${productId}`);
    };


    return (
        <div className="relative bg-[#f4f5f7] overflow-hidden max-w-[350px] max-h-[450px] shadow-[3px_3px_10px_2px_rgb(232,232,235)] cursor-pointer hover:transition-[0.20s] hover:shadow-[3px_3px_15px_2px_rgb(188,188,189)] hover:scale-105 "
            onClick={() => navigateToProduct(props.id)}
            key={props.id}
        >
            <img
                src={props.Img}
                alt="Avatar"
                className="w-[100%] h-[70%]"
            />
            <div className="flex flex-col gap-[5px] w-full justify-start p-[3%]">
                <h3 className="font-semibold text-2xl text-[#3a3a3a]">
                    {props.Title}
                </h3>
                <p>{props.Description}</p>
                <p className="text-[#898989] text-base flex gap-2.5">
                    <span className="text-[#3a3a3a] font-medium">{props.Dprice}</span>
                    <del>{props.Oprice}</del>
                </p>
            </div>
        </div>
    )
}

export default ProductItem