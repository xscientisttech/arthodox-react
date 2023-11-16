import React from "react";
import DummyData from "../assets/data/DummyData";
import { FaGreaterThan } from "react-icons/fa6";


const Hero = (props) => {
	return (
		<>
			<div className="flex justify-center items-center font-Poppins">
				<div className="w-full h-[25rem]">
					<img
						src={DummyData.HeroImgUrl}
						alt="back-img"
						className=" bg-cover bg-no-repeat h-full w-full transform opacity-50 object-cover"
					/>
				</div>
				<div className=" absolute flex flex-col justify-center items-center">
					<h2 className="text-[3rem] font-bold ">{props.title}</h2>
					<p className="flex justify-center items-center">
						<span className="text-xl font-semibold">Home </span>
						<FaGreaterThan/>
						<span className="text-xl font-semibold">
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
