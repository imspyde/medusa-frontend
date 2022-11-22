import React, { useState } from "react";
import { MdArrowBack, MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../../../redux/actions/cartAction";
import { fullNameFromRedux } from "../../common/Helper";

const Shipping = ({ nextHandler, prevHandler, isTrial }) => {
	const { getTrialCart } = useSelector((state) => {
		return state.cart;
	});

	const address_1 = getTrialCart?.shipping_address?.address_1 || "";
	const address_2 = getTrialCart?.shipping_address?.address_2 || "";
	const userCity = getTrialCart?.shipping_address?.city || "";
	const userProvince = getTrialCart?.shipping_address?.province || "";
	const userPincode = getTrialCart?.shipping_address?.postal_code || "";
	const userPhNo = getTrialCart?.shipping_address?.phone || "";
	const userCountryCode = getTrialCart?.shipping_address?.country_code || "";
	const userFirstName = getTrialCart?.shipping_address?.first_name || "";
	const userLastName = getTrialCart?.shipping_address?.last_name || "";
	const userCompany = getTrialCart?.shipping_address?.company || "";

	const [loading, setLoading] = useState(false);
	const [firstName, setFirstName] = useState(userFirstName);
	const [lastName, setLastName] = useState(userLastName);
	const [company, setCompany] = useState(userCompany);
	const [address1, setAddress1] = useState(address_1);
	const [address2, setAddress2] = useState(address_2);
	const [countryCode, setCountryCode] = useState(userCountryCode);
	const [city, setCity] = useState(userCity);
	const [province, setProvince] = useState(userProvince);
	const [postalCode, setPostalCode] = useState(userPincode);
	const [phone, setPhone] = useState(userPhNo);

	const [updateAddress, setUpdateAddress] = useState(false);

	const dispatch = useDispatch();

	const payload = {
		shipping_address: {
			first_name: firstName,
			last_name: lastName,
			company: company,
			address_1: address1,
			address_2: address2,
			country_code: countryCode,
			city: city,
			province: province,
			postal_code: postalCode,
			phone,
		},
	};

	const addNewAddress = () => {
		setLoading(false);
		dispatch(
			saveShippingInfo(getTrialCart?.id, payload, () => {
				setLoading(false);
				setUpdateAddress(false);
			})
		);
	};

	const userName = fullNameFromRedux(getTrialCart?.shipping_address) || "";
	const userAddress =
		address_1 +
		", " +
		address_2 +
		" " +
		userCity +
		", " +
		userProvince +
		" - " +
		userPincode +
		", " +
		userPhNo +
		", Country Code - " +
		userCountryCode?.toUpperCase();

	const editAddress = () => setUpdateAddress(!updateAddress);

	return (
		<div className="cart-container">
			<div className="cart-navbar mb-3">
				<div className="d-flex align-items-center px-3 py-3">
					<MdArrowBack size="1.5rem" onClick={prevHandler} />
					<h6 className="cart-text mb-0">Address</h6>
				</div>
			</div>

			<div className="select-address">Delivery address</div>

			{getTrialCart?.shipping_address !== null && (
				<div
					className={`px-3 py-2 address-container mx-3 rounded ${
						!updateAddress && "address-payment-cont"
					}`}
				>
					<div className="d-flex">
						<div className="address">
							<div>{userName}</div>
							<div className="">{userAddress}</div>
						</div>
						<div className="action-btn">
							<div onClick={editAddress}>
								<BiEdit size="1.5rem" />
							</div>
							{/* <div onClick={editAddress}>
								<MdDeleteOutline size="1rem" />
							</div> */}
						</div>
					</div>
				</div>
			)}

			{(updateAddress || getTrialCart?.shipping_address === null) && (
				<div className="address-box px-3">
					<div className="py-2">
						<div className="row py-2">
							<div className="col-md-6">
								<label>First Name</label>
								<input
									type="text"
									className="bg-light form-control"
									placeholder="Enter First Name"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</div>
							<div className="col-md-6 pt-md-0 pt-3">
								<label>Last Name</label>
								<input
									type="text"
									className="bg-light form-control"
									placeholder="Enter Last Name"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
						</div>

						<div className="row py-2">
							<div className="col-md-6">
								<label>Company Name</label>
								<input
									type="text"
									className="bg-light form-control"
									placeholder="Enter Company Name"
									value={company}
									onChange={(e) => setCompany(e.target.value)}
								/>
							</div>
							<div className="col-md-6 pt-md-0 pt-3">
								<label>Address 1</label>
								<input
									type="tel"
									className="bg-light form-control"
									placeholder="Enter Address 1"
									value={address1}
									onChange={(e) => setAddress1(e.target.value)}
								/>
							</div>
						</div>

						<div className="row py-2">
							<div className="col-md-6">
								<label>Address 2</label>
								<input
									type="text"
									className="bg-light form-control"
									placeholder="Enter Address 2 (optional)"
									value={address2}
									onChange={(e) => setAddress2(e.target.value)}
								/>
							</div>
							<div className="col-md-6 pt-md-0 pt-3">
								<label>Country Code</label>
								<input
									type="tel"
									className="bg-light form-control"
									placeholder="Enter Country Code"
									value={countryCode}
									onChange={(e) => setCountryCode(e.target.value)}
								/>
							</div>
						</div>

						<div className="row py-2">
							<div className="col-md-6">
								<label>City</label>
								<input
									type="text"
									className="bg-light form-control"
									placeholder="Enter City"
									value={city}
									onChange={(e) => setCity(e.target.value)}
								/>
							</div>
							<div className="col-md-6 pt-md-0 pt-3">
								<label>Province</label>
								<input
									type="tel"
									className="bg-light form-control"
									placeholder="Enter Province"
									value={province}
									onChange={(e) => setProvince(e.target.value)}
								/>
							</div>
						</div>

						<div className="row py-2">
							<div className="col-md-6">
								<label>Postal Code</label>
								<input
									type="text"
									className="bg-light form-control"
									placeholder="Enter Postal Code"
									value={postalCode}
									onChange={(e) => setPostalCode(e.target.value)}
								/>
							</div>
							<div className="col-md-6 pt-md-0 pt-3">
								<label>Phone Number</label>
								<input
									type="tel"
									className="bg-light form-control"
									placeholder="Enter Phone Number"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</div>

						<div className="py-3 pb-4 border-bottom">
							<button
								className="btn btn-primary mr-3 rounded"
								disabled={loading || updateAddress}
								onClick={addNewAddress}
							>
								{loading
									? "Updating..."
									: updateAddress
									? "Update address"
									: "Add a new address"}
							</button>

							<button className="btn border rounded" onClick={editAddress}>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="process-payment-box py-3 px-2 rounded">
				<div className={`${isTrial ? "d-flex flex-row" : ""}`}>
					<div className={`${isTrial ? "strike-price" : ""}`}>
						$ {getTrialCart?.total || 0}
					</div>
					{isTrial && <span style={{ marginLeft: 10 }}>Free</span>}
				</div>
				<button onClick={nextHandler} className="proceed-payment-btn">
					Proceed To Payment
				</button>
			</div>
		</div>
	);
};

export default Shipping;
