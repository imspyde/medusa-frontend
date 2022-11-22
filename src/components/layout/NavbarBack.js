import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarBack = ({ title }) => {
	return (
		<div className="d-flex justify-content-between px-3 py-3">
			<Link to="/" className="text-dark">
				<MdArrowBack size="1.5rem" />
			</Link>
			<h6>{title}</h6>
			<AiOutlineShoppingCart
				size="1.5em"
				onClick={() => (window.location.href = "/mycart")}
			/>
		</div>
	);
};

export default NavbarBack;
