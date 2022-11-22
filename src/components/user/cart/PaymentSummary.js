import React from "react";
import { useSelector } from "react-redux";

const PaymentSummary = ({ isTrial }) => {
	const { getTrialCart } = useSelector((state) => {
		return state.cart;
	});

	const subtotal = getTrialCart?.subtotal || 0;
	const totalDiscount = getTrialCart?.discount_total || 0;
	const serviceCharges = getTrialCart?.service_charges || 0;
	const productDiscount = getTrialCart?.product_discount || 0;
	const total = getTrialCart?.total || 0;

	return (
		<div className="payment-container">
			<div className="subtotal d-flex justify-content-between">
				<div className="subtotal-text">Sub Total</div>
				<div className="subtotal-value">${subtotal}</div>
			</div>
			<div className="product_discount d-flex justify-content-between">
				<div className="product_discount-text">Product Discount</div>
				<div className="product_discount-value">${productDiscount}</div>
			</div>
			<div className="total_discount d-flex justify-content-between">
				<div className="total_discount-text">Total Discount</div>
				<div className="total_discount-value">${totalDiscount}</div>
			</div>
			<div className="service_shipping_charges d-flex justify-content-between">
				<div className="service_shipping_charges-text">
					Service and Shiping Charges
				</div>
				<div className="service_shipping_charges-value">${serviceCharges}</div>
			</div>
			<div className="total_payable d-flex justify-content-between">
				<div className="total_payable-text">Total Payable</div>
				<div className={`${isTrial ? "d-flex flex-row" : ""}`}>
					<div className={`${isTrial ? "strike-price" : ""}`}>${total}</div>
					{isTrial && <span style={{ marginLeft: 10 }}>Free</span>}
				</div>
			</div>
		</div>
	);
};

export default PaymentSummary;
