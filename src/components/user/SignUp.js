import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, register } from "../../redux/actions/userActions";
import { ShowAlert } from "../common/Alert";
import { checkForPathName } from "../common/Helper";
import "./login.css";

const SignUp = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const { error, isAuthenticated } = useSelector((state) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const signUp = (e) => {
		e.preventDefault();

		const payload = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			password: password,
			phone: phoneNumber,
		};

		dispatch(register(payload));
	};

	useEffect(() => {
		if (!checkForPathName) {
			if (error) {
				ShowAlert(error, "error");
				dispatch(clearErrors());
			}
		}

		if (isAuthenticated) {
			navigate("/");
		}
	}, [dispatch, error, isAuthenticated]);

	return (
		<div className="auth-wrapper">
			<div className="auth-inner">
				<form>
					<h3>Sign Up</h3>
					<div className="mb-3">
						{/* <label>First name</label> */}
						<input
							type="text"
							className="form-control"
							placeholder="First name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Last name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							type="password"
							className="form-control"
							placeholder="Enter password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<input
							type="number"
							className="form-control"
							placeholder="Enter phone number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</div>
					<div className="d-grid">
						<button type="submit" className="btn btn-primary" onClick={signUp}>
							Sign Up
						</button>
					</div>
					<p className="forgot-password text-right">
						Already registered <a href="/login">Login?</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
