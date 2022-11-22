import React, { useEffect, useState } from "react";
import "./myAccount.css";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions/userActions";
import LoaderComponent from "../common/Loader";

const MyAccount = () => {
	const { user, loading, isAuthenticated } = useSelector((state) => state.user);
	const userFirstName = user?.first_name || user?.customer?.first_name || "";
	const userLastName = user?.last_name || user?.customer?.last_name || "";
	const userEmail = user?.email || user?.customer?.email || "";
	const userPhone = user?.phone || user?.customer?.phone || "";

	const [firstName, setFirstName] = useState(userFirstName);
	const [lastName, setLastName] = useState(userLastName);
	const [email, setEmail] = useState(userEmail);
	const [phone, setPhone] = useState(userPhone);

	useEffect(() => {
		if (user) {
			setFirstName(userFirstName);
			setLastName(userLastName);
			setEmail(userEmail);
			setPhone(userPhone);
		}
	}, [user, isAuthenticated]);

	const dispatch = useDispatch();

	const update = () => {
		let payload = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			phone: phone,
		};

		dispatch(updateProfile(payload));
	};
	return (
		<>
			{loading ? (
				<LoaderComponent />
			) : (
				<div class="wrapper bg-white mt-sm-5">
					<Link to="/" className="text-decoration-none">
						<button class="d-flex align-items-center btn border">
							<MdArrowBackIos size="1rem" /> Go Back
						</button>
					</Link>
					<h4 class="pb-4 pt-3 border-bottom">Account settings</h4>
					{/* <div class="d-flex align-items-start py-3 border-bottom">
						<img
							src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							class="img"
							alt=""
						/>
						<div class="pl-sm-4 pl-2 profile-text" id="img-section">
							<b>Profile Photo</b>
							<p>Accepted file type .png. Less than 1MB</p>
							<button class="btn button border">
								<b>Upload</b>
							</button>
						</div>
					</div> */}
					<div class="py-2">
						<div class="row py-2">
							<div class="col-md-6">
								<label for="firstname">First Name</label>
								<input
									type="text"
									class="bg-light form-control"
									placeholder="Enter First Name"
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</div>
							<div class="col-md-6 pt-md-0 pt-3">
								<label for="lastname">Last Name</label>
								<input
									type="text"
									class="bg-light form-control"
									placeholder="Enter Last Name"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>
							</div>
						</div>
						<div class="row py-2">
							<div class="col-md-6">
								<label for="email">Email Address</label>
								<input
									type="text"
									class="bg-light form-control"
									placeholder="Enter Email Address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div class="col-md-6 pt-md-0 pt-3">
								<label for="phone">Phone Number</label>
								<input
									type="tel"
									class="bg-light form-control"
									placeholder="Enter Phone Number"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</div>

						<div class="py-3 pb-4 border-bottom">
							<button class="btn btn-primary mr-3" onClick={update}>
								Save Changes
							</button>
							<button
								class="btn border button profile-text"
								onClick={() => (window.location.href = "/")}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MyAccount;
