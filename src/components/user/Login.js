import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, login } from "../../redux/actions/userActions";
import { ShowAlert } from "../common/Alert";
import { checkForPathName } from "../common/Helper";
import "./login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { error, isAuthenticated } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const signIn = (e) => {
		e.preventDefault();

		dispatch(login(email, password));
	};

	useEffect(() => {
		// if (!checkForPathName) {
		if (error) {
			ShowAlert(error, "error");
			dispatch(clearErrors());
		}
		// }

		if (isAuthenticated) {
			navigate("/");
		}
	}, [dispatch, error, isAuthenticated]);

	return (
		<div className="auth-wrapper">
			<div className="auth-inner">
				<form>
					<h3>Login</h3>
					<div className="mb-3">
						{/* <label>Email address</label> */}
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
					<div className="d-grid">
						<button type="submit" className="btn btn-primary" onClick={signIn}>
							Login
						</button>
					</div>
					<p className="forgot-password text-right">
						Already registered <a href="/signup">Sign Up?</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
