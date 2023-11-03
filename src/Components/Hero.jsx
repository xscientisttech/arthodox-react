import React from "react";
import HeroImg from "../assets/images/back-img.jpg";

const Hero = (props) => {
	return (
		<>
			<div className="flex justify-center items-center">
				<div className="w-full h-[25rem]">
					<img
						src={HeroImg}
						alt="back-img"
						className=" bg-cover bg-no-repeat h-full w-full transform opacity-50 object-cover"
					/>
				</div>
				<div className=" absolute flex flex-col justify-center items-center">
					<h2 className="text-[3rem] font-bold ">{props.title}</h2>
					<p className="">
						<span className="text-xl font-semibold">Home </span>
						<i className="fa-solid fa-greater-than"></i>
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
