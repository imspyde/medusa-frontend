import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

const Orders = () => {
	const imgUrl =
		"https://static.fibre2fashion.com/MemberResources/LeadResources/1/2013/7/Seller/1333875/Images/1333875_0_201307111038550000000.jpg?tr=w-320,h-320,cm-pad_resize,bg-F3F3F3";
	return (
		<div className="cart-container">
			<div className="cart-navbar mb-3">
				<div className="d-flex align-items-center px-3 py-3">
					<Link to="/" className="text-decoration-none color-black">
						<MdArrowBack size="1.5rem" />
					</Link>
					<h6 className="cart-text mb-0">My Orders</h6>
				</div>
			</div>

			<div className="order-card">
				<div className="cart-items mx-3 px-2 rounded justify-content-between py-2">
					<div className="cart-section d-flex align-items-center">
						<Link to={`/trial/${""}`}>
							<div className="cart-img">
								<img className="img-fluid" src={imgUrl || ""} alt="_image" width={70} />
							</div>
						</Link>
						<div className="cart-title-qty">
							<div className="cart-item-brand">Brand: Hey there</div>
							<div className="cart-title">
								{"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"}
							</div>
							<div className="cart-size d-flex">
								{/* {size && ( */}
								<div>
									<span className="cart-qty-size">Size :</span>
								</div>
								{/* )} */}
								<div className="d-flex">
									<span className="cart-qty-size" style={{ marginTop: "2px" }}>
										Qty :
									</span>
									<div
										className="d-flex align-items-center"
										style={{ gap: "5px", marginLeft: "5px" }}
									>
										<span>10</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div></div>
		</div>
	);
};

export default Orders;
