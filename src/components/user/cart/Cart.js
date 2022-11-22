import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import CartItems from "./CartItems";
import Payment from "./Payment";
import Shipping from "./Shipping";
import Success from "./Success";

const Cart = () => {
	const [step, setStep] = useState(0);
	const [isTrial, setIsTrial] = useState(false);
	// const { isAuthenticated } = useSelector((state) => state.user);
	// const navigate = useNavigate();
	// console.log(isAuthenticated);

	// useEffect(() => {
	// 	if (!isAuthenticated) navigate("/");
	// }, [isAuthenticated]);

	const nextHandler = () => setStep(step + 1);
	const prevHandler = () => {
		if (step === 0) return;
		else setStep(step - 1);
	};

	if (step === 0) {
		return (
			<CartItems
				nextHandler={nextHandler}
				prevHandler={prevHandler}
				setIsTrial={setIsTrial}
			/>
		);
	} else if (step === 1) {
		return (
			<Shipping
				nextHandler={nextHandler}
				prevHandler={prevHandler}
				isTrial={isTrial}
			/>
		);
	} else if (step === 2) {
		return (
			<Payment
				nextHandler={nextHandler}
				prevHandler={prevHandler}
				isTrial={isTrial}
			/>
		);
	} else if (step === 3) {
		return <Success />;
	}
};

export default Cart;
