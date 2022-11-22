import React, { useState } from "react";
import {
	AiFillDelete,
	AiOutlineMinusCircle,
	AiOutlinePlusCircle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	removeItemsFromCart,
	updateTrialCart,
} from "../../../redux/actions/cartAction";
import { getSpecificLetters, truncatedTitle } from "../../common/Helper";

const TrialOrder = ({ nextHandler, item, isTrial = false }) => {
	const title = truncatedTitle(item?.title, 35) || "";
	const size = getSpecificLetters(item?.variant?.title || "", "/");
	const dispatch = useDispatch();
	const [updateLoader, setUpdateLoader] = useState(false);

	const increaseQuantity = () => {
		setUpdateLoader(true);
		const newQty = item?.quantity + 1;
		// if (product.stock <= quantity) {
		// 	return alert.error("You cannot add this item more!");
		// }
		const payload = {
			quantity: newQty,
		};
		dispatch(
			updateTrialCart(item?.cart_id, item?.id, payload, () => {
				setUpdateLoader(false);
			})
		);
	};

	const decreaseQuantity = () => {
		setUpdateLoader(true);
		const newQty = item?.quantity - 1;
		if (item?.quantity <= 1) return;
		const payload = {
			quantity: newQty,
		};
		dispatch(
			updateTrialCart(item?.cart_id, item?.id, payload, () => {
				setUpdateLoader(false);
			})
		);
	};

	const removeItems = () => {
		dispatch(removeItemsFromCart(item?.cart_id, item?.id));
	};

	return (
		<div className="cart-items mx-3 mb-3 px-2 rounded justify-content-between py-2">
			<div className="cart-section d-flex align-items-center">
				<Link to={`/trial/${item?.variant?.product_id}`}>
					<div className="cart-img">
						<img
							className="img-fluid"
							src={item?.thumbnail || ""}
							alt="_image"
							width={70}
						/>
					</div>
				</Link>
				<div className="cart-title-qty">
					<div className="cart-item-brand">Brand: Hey there</div>
					<div className="cart-title">{title}</div>
					<div className="cart-size d-flex">
						{size && (
							<div>
								<span className="cart-qty-size">Size :</span> {size}
							</div>
						)}
						<div className="d-flex">
							{updateLoader ? (
								"updating..."
							) : (
								<>
									<span className="cart-qty-size" style={{ marginTop: "2px" }}>
										Qty :
									</span>
									<div
										className="d-flex align-items-center"
										style={{ gap: "5px", marginLeft: "5px" }}
									>
										<AiOutlineMinusCircle
											onClick={() => decreaseQuantity(item)}
											size="14px"
										/>
										<span>{item?.quantity || 0}</span>
										<AiOutlinePlusCircle
											onClick={() => increaseQuantity(item)}
											size="14px"
										/>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
				<div className="cart-price align-items-end pr-1">
					<div className="d-flex flex-column align-items-end">
						<div className={`${isTrial ? "strike-price" : "price"}`}>
							${item?.total || 0}
						</div>
						{isTrial && <span>Free</span>}
					</div>
					<div className="cart-delete-icon">
						<AiFillDelete size="22px" onClick={removeItems} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrialOrder;
