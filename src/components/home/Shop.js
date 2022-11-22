import React from "react";
import SliderCard from "../common/SliderCard";

const Shop = () => {
	const data = [
		{
			name:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			name:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			name:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			name:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
		{
			name:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
		},
	];
	return (
		<div>
			Shop
			{/* <SliderCard data={data}>
				{data.map((item) => {
					return <div>{item.name}</div>;
				})}
			</SliderCard> */}
		</div>
	);
};

export default Shop;
