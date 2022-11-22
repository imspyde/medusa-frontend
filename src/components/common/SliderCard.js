import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCard = (props) => {
	const { slidesToShow, dots = true } = props;
	const settings = {
		dots: dots,
		infinite: true,
		speed: 500,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
	};
	return <Slider {...settings}>{props.children}</Slider>;
};

export default SliderCard;
