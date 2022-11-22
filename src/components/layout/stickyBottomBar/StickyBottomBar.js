import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { IoMdAddCircle } from "react-icons/io";
import { TbAward } from "react-icons/tb";
import {
	AiOutlineShopping,
	AiOutlineSearch,
	AiOutlineShoppingCart,
	AiOutlineUser,
	AiOutlineRight,
	AiFillCloseCircle,
	AiOutlineFire,
} from "react-icons/ai";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./stickyBottomBar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/userActions";
import { fullNameFromRedux } from "../../common/Helper";
import Modal from "../../common/Modal";
import CardButton from "../../common/cardButton/CardButton";
import { Link } from "react-router-dom";

const links = [
	{ name: "Trials", url: "/trials" },
	{ name: "Shop", url: "/shop" },
	// { name: "Wishlist", url: "/wishlist" },
	// { name: "FAQs", url: "/faqs" },
	{ name: "Terms Of Use", url: "/terms-of-use" },
	{ name: "Privacy Policy", url: "/privacy-policy" },
];

export const StickyBottomBar = ({ tab, setTab }) => {
	const { user, isAuthenticated } = useSelector((state) => state.user);
	const { getTrialCart } = useSelector((state) => {
		return state.cart;
	});
	const dispatch = useDispatch();

	const unAuthorizedLinks = [
		{ name: "Sign In", url: "/login" },
		{ name: "Sign Up", url: "/signup" },
	];

	const userFullName = isAuthenticated ? fullNameFromRedux(user) : "Guest User";

	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => setShowModal(!showModal);
	const cartItems = getTrialCart?.items?.length || 0;

	let expand = "sm";

	return (
		<>
			<Navbar fixed="bottom" bg="light" expand={expand}>
				<div className="bottom-menu">
					<Navbar.Toggle
						aria-controls={`offcanvasNavbar-expand-${expand}`}
						className="toggle-btn border-0"
					/>
					<Button
						onClick={() => {
							if (tab === 0) setTab(1);
							else setTab(0);
						}}
						variant="light"
					>
						{tab === 0 ? <AiOutlineShopping size="2em" /> : <TbAward size="2em" />}
					</Button>
					<Button onClick={toggleModal} variant="light">
						{!showModal ? (
							<IoMdAddCircle size="2em" />
						) : (
							<AiFillCloseCircle size="2em" />
						)}
					</Button>
					<Button variant="light">
						<AiOutlineSearch size="2em" />
					</Button>
					<Link to="/mycart" className="text-decoration-none">
						<Button variant="light">
							<AiOutlineShoppingCart size="2em" />
							<div className="cart-quantity">{cartItems}</div>
						</Button>
					</Link>
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="start"
					>
						<Offcanvas.Header closeButton></Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<div>
									<Nav.Link href="#action1" className="d-flex align-items-center">
										<AiOutlineUser className="m-2" size="1.5em" />
										<h5 style={{ marginBottom: "-3.5px" }}>{userFullName}</h5>
									</Nav.Link>
								</div>

								{!isAuthenticated &&
									unAuthorizedLinks?.map((link, id) => (
										<Nav.Link href={`${link.url}`} key={id} className="menu-btn">
											<span>{link.name}</span> <AiOutlineRight />
										</Nav.Link>
									))}

								{isAuthenticated && (
									<>
										<Nav.Link className="menu-btn" href="/myaccount">
											<span>My Account</span> <AiOutlineRight />
										</Nav.Link>
										<Nav.Link className="menu-btn" href="/myorders">
											<span>My Orders</span> <AiOutlineRight />
										</Nav.Link>
									</>
								)}

								{links?.map((link, id) => (
									<Nav.Link href={`${link.url}`} key={id} className="menu-btn">
										<span>{link.name}</span> <AiOutlineRight />
									</Nav.Link>
								))}

								{isAuthenticated && (
									<Nav.Link className="menu-btn" onClick={() => dispatch(logout())}>
										<span>Logout</span> <AiOutlineRight />
									</Nav.Link>
								)}
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</div>
			</Navbar>
			{/* modal */}
			{showModal && (
				<Modal>
					<div className="modal-view">
						<CardButton text="Shop Whats Trending" />
						<CardButton text="Shop by Category" />
						<CardButton text="Shop by Demand" />
					</div>
				</Modal>
			)}
		</>
	);
};
