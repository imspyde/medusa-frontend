import React from "react";
import SliderCard from "../SliderCard";
import "./TrialCardSlider.css";

const TrialCardSlider = ({ user, slidesToShow, width, height, dots }) => {
	return (
		<div>
			<SliderCard slidesToShow={slidesToShow} dots={dots}>
				{user &&
					user?.map((item, id) => {
						return (
							<div class="container">
								<div class="card">
									<div class="card-header">
										<img src={item.url} alt="rover" />
									</div>
									<div class="card-body">
										<p>{item.text1}</p>
										{/* <p>{item.text2}</p> */}
									</div>
								</div>
							</div>
						);
					})}
			</SliderCard>
		</div>
	);
};

export default TrialCardSlider;
