import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paymentTrial } from "../../../redux/actions/cartAction";
import PaymentSummary from "./PaymentSummary";

const Payment = ({ nextHandler, prevHandler, isTrial }) => {
	const { getTrialCart } = useSelector((state) => {
		return state.cart;
	});
	const dispatch = useDispatch();

	const totalProduct = getTrialCart?.items?.length || 0;
	const totalPayble = getTrialCart?.subtotal || 0;
	const cartId = getTrialCart?.id || "";

	const [trialPointId, setTrialPointId] = useState("");

	useEffect(() => {
		getTrialPoint();
	}, []);

	const getTrialPoint = async () => {
		const { data } = await axios.get("/store/shipping-options");
		if (data) {
			setTrialPointId(data?.shipping_options[0]?.id || "");
		}
	};

	const payload = {
		option_id: trialPointId,
	};

	const confirmPayment = () => {
		dispatch(
			paymentTrial(cartId, payload, () => {
				nextHandler();
			})
		);
	};
	return (
		<div className="cart-container">
			<div className="cart-navbar mb-3">
				<div className="d-flex align-items-center px-3 py-3">
					<MdArrowBack size="1.5rem" onClick={prevHandler} />
					<h6 className="cart-text mb-0">Payment</h6>
				</div>
			</div>

			<div className="address-box mx-3">
				<div className="d-flex justify-content-between my-2">
					<span>Total Product</span>
					<span>{totalProduct}</span>
				</div>
				<div className="d-flex justify-content-between my-2">
					<span>Total Payble</span>
					<div className={`${isTrial ? "d-flex flex-row" : ""}`}>
						<div className={`${isTrial ? "strike-price" : ""}`}>$ {totalPayble}</div>
						{isTrial && <span style={{ marginLeft: 10 }}>Free</span>}
					</div>
				</div>

				<div className="my-2">
					<Link to="/" className="">
						Return and cancelletion policy
					</Link>
				</div>
				<PaymentSummary isTrial={isTrial} />
			</div>

			<div className="process-payment-box py-3 px-2 rounded">
				<div className={`${isTrial ? "d-flex flex-row" : ""}`}>
					<div className={`${isTrial ? "strike-price" : ""}`}>
						$ {getTrialCart?.total || 0}
					</div>
					{isTrial && <span style={{ marginLeft: 10 }}>Free</span>}
				</div>
				<button onClick={confirmPayment} className="proceed-payment-btn">
					Proceed To Payment
				</button>
			</div>
		</div>
	);
};

export default Payment;
