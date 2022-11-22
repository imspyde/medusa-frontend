import React, { useState } from "react";
import {
	AiFillDelete,
	AiOutlineMinusCircle,
	AiOutlinePlusCircle,
} from "react-icons/ai";
import { truncatedTitle } from "../../common/Helper";

const FullOrder = ({ nextHandler }) => {
	const [quantity, setQuantity] = useState(1);

	const increaseQuantity = () => {
		// if (product.stock <= quantity) {
		// 	return alert.error("You cannot add this item more!");
		// }
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity <= 1) return;
		else setQuantity(quantity - 1);
	};
	const title = truncatedTitle("Hey", 35) || "";

	return (
		<div>
			<div className="trial-full-order mb-3 mx-3">
				<span>Full Size Order</span>
			</div>
			<div className="cart-items mx-3 mb-3 px-2 rounded justify-content-between py-2">
				<div className="cart-section d-flex align-items-center">
					<div className="cart-img">
						<img
							className="img-fluid"
							src="https://i.imgur.com/ba3tvGm.jpg"
							alt="product_image"
							width={70}
						/>
					</div>
					<div className="cart-title-qty">
						<div className="cart-item-brand">Brand: Hey there</div>
						<div className="cart-title">{title}</div>
						<div className="cart-size d-flex">
							<div>
								<span className="cart-qty-size">Size :</span> 300 gm
							</div>
							<div className="d-flex">
								<span className="cart-qty-size" style={{ marginTop: "2px" }}>
									Qty :
								</span>
								<div
									className="d-flex align-items-center"
									style={{ gap: "5px", marginLeft: "5px" }}
								>
									<AiOutlineMinusCircle onClick={decreaseQuantity} size="14px" />
									<span>{quantity}</span>
									<AiOutlinePlusCircle onClick={increaseQuantity} size="14px" />
								</div>
							</div>
						</div>
					</div>
					<div className="cart-price align-items-end pr-1">
						<div className="price">INR 300</div>
						<div className="cart-delete-icon">
							<AiFillDelete size="22px" />
						</div>
					</div>
				</div>
			</div>

			<div className="process-payment-box mx-3 py-2 mb-3 px-2 rounded">
				<div>INR 450</div>
				<button onClick={nextHandler} className="proceed-payment-btn">
					Proceed To Payment
				</button>
			</div>
		</div>
	);
};

export default FullOrder;
