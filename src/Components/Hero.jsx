import React from "react";
import DummyData from "../assets/data/DummyData";
import { FaGreaterThan } from "react-icons/fa6";
import { useNavigate } from "react-router";


const Hero = (props) => {
	const Navigate = useNavigate();
	return (
		<>
			<div className="flex justify-center items-center font-Poppins">
				<div className="w-full sm:h-[10rem] md:h-[25rem]">
					<img
						src={DummyData.HeroImgUrl}
						alt="back-img"
						className=" bg-cover bg-no-repeat h-full w-full transform opacity-50 object-cover"
					/>
				</div>
				<div className=" absolute flex flex-col justify-center items-center">
					<h2 className=" text-[1.5rem] sm:text-[3rem] font-bold cursor-pointer ">{props.title}</h2>
					<p className="flex justify-center items-center">
						<span className=" text-[1rem] md:text-xl font-semibold cursor-pointer" onClick={()=>Navigate('/')}>Home </span>
						<FaGreaterThan/>
						<span className="text-xl font-semibold cursor-pointer">
							{" "}
							{props.title}
						</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Hero;
