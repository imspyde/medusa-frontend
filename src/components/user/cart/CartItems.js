import React, { useEffect } from "react";
import { MdArrowBack } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getTrialCart } from "../../../redux/actions/cartAction";
import { ShowAlert } from "../../common/Alert";
import LoaderComponent from "../../common/Loader";
import FullOrder from "./FullOrder";
import TrialOrder from "./TrialOrder";

const CartItems = ({ nextHandler, prevHandler, setIsTrial = () => {} }) => {
	const dispatch = useDispatch();
	const {
		createdTrialCart,
		loading,
		getTrialCart: trialCartItems,
	} = useSelector((state) => {
		return state.cart;
	});

	useEffect(() => {
		dispatch(getTrialCart(createdTrialCart?.id));
	}, []);

	const totalItem = trialCartItems?.items?.reduce(
		(acc, item) => acc + item?.quantity,
		0
	);

	const checkTrialCartItems = (e) => {
		e.preventDefault();
		const condition = trialCartItems?.items?.length > 3 || totalItem > 3;
		if (condition) {
			ShowAlert("You cannot order more than 3 trial items!", "error");
		} else {
			nextHandler();
			setIsTrial(true);
		}
	};

	return (
		<>
			<div className="cart-container">
				<div className="cart-navbar mb-3">
					<div className="d-flex align-items-center px-3 py-3">
						<MdArrowBack size="1.5rem" onClick={() => window.history.back()} />
						<h6 className="cart-text mb-0">My Shopping Cart</h6>
					</div>
				</div>
				{loading ? (
					<LoaderComponent />
				) : (
					<>
						{trialCartItems?.items?.length > 0 && (
							<>
								<div className="trial-full-order mb-3 mx-3">
									<span>Trial Order</span>
								</div>

								{trialCartItems?.items?.map((item, id) => {
									return (
										<TrialOrder
											key={id}
											nextHandler={nextHandler}
											item={item}
											isTrial={true}
										/>
									);
								})}

								<div className="process-payment-box mx-3 py-2 mb-3 px-2 rounded">
									<div className="d-flex flex-row">
										<div className="strike-price">$ {trialCartItems?.total || 0}</div>
										<span style={{ marginLeft: 10 }}>Free</span>
									</div>
									<button onClick={checkTrialCartItems} className="proceed-payment-btn">
										Proceed To Payment
									</button>
								</div>
								<hr />
							</>
						)}
						<FullOrder nextHandler={nextHandler} />
					</>
				)}
			</div>
		</>
	);
};

export default CartItems;
