import React from "react";
import { useSelector } from "react-redux";
import "./cardCarousel.css";
import TrialCardSlider from "./TrialCardSlider/TrialCardSlider";

const data = [
	{
		color: "red",
		value: "#f00",
		url: "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
		text1: "Why is the Tesla Cybertruck designed the way it is?",
		text2: "An exploration into the truck's polarising design",
	},
	{
		color: "green",
		value: "#0f0",
		url: "https://images6.alphacoders.com/312/thumb-1920-312773.jpg",
		text1: "Why is the Tesla Cybertruck designed the way it is?",
		text2: "An exploration into the truck's polarising design",
	},
	{
		color: "blue",
		value: "#00f",
		url: "https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=",
		text1: "Why is the Tesla Cybertruck designed the way it is?",
		text2: "An exploration into the truck's polarising design",
	},
	{
		color: "cyan",
		value: "#0ff",
		url: "https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=",
		text1: "Why is the Tesla Cybertruck designed the way it is?",
		text2: "An exploration into the truck's polarising design",
	},
	{
		color: "magenta",
		value: "#f0f",
		url: "https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=",
		text1: "Why is the Tesla Cybertruck designed the way it is?",
		text2: "An exploration into the truck's polarising design",
	},
	{
		color: "yellow",
		value: "#ff0",
		url: "https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=",
		text1: "Why is the Tesla Cybertruck designed the way it is?",
		text2: "An exploration into the truck's polarising design",
	},
	{
		color: "black",
		value: "#000",
		url: "https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=",
		text1: "Why is the Tesla Cybertruck designed the way it is?",
		text2: "An exploration into the truck's polarising design",
	},
];

export const CardCarousel = (props) => {
	const { user } = useSelector((state) => state.user);

	return (
		<div className="card-carousel">
			<div className="card-header mt-2 px-2">
				<div className="card-title">{props.title}</div>
				<button className="view-all-btn">View All</button>
			</div>
			<div className="card-slider mt-3 overflow-auto scrollbar-hidden">
				<TrialCardSlider
					user={data}
					slidesToShow={2}
					width={170}
					height={170}
					dots={false}
				/>
			</div>
		</div>
	);
};
