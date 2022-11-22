import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Success = () => {
	return (
		<div className="payment-success">
			<BiCheckCircle size="3rem" style={{ color: "rgb(3 9 56 / 90%)" }} />
			<span>Success</span>
			<Link to="/myorders">
				<button className="payment-success-btn">Check Orders</button>
			</Link>
		</div>
	);
};

export default Success;
