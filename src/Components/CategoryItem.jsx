import React from "react";
import DummyData from "../assets/data/DummyData";
import { useNavigate } from "react-router";
const CategoryItem = (props) => {

	
	const Navigate = useNavigate();

	return (
		<div className="relative overflow-hidden cursor-pointer font-Poppins" onClick={() => Navigate(`/Products/category/${props.Index}`)}>
			<div className="relative after:content-[''] after:absolute after:w-full after:h-full after:opacity-30- after:hover:opacity-0- after:rounded-3xl after:left-0 after:top-0 after:bg-gradient-to-b after:from-gray-50/0 after:to-gray-900/80">
				<img
					src={props.CategoryImgUrl}
					alt="image"
					className="w-[328px] rounded-3xl xl:w-[348px]"
				/>
			</div>
			<div className="absolute z-[1] text-center w-full h-full flex justify-center items-center top-0">
				<h2 className="text-[2rem] font-medium text-white mb-3">
					{props.Title}
				</h2>
			</div>
		</div>
	);
};

export default CategoryItem;
