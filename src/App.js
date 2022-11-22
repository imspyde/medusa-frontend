import "./App.css";
import Login from "./components/user/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/user/SignUp";
import Home from "./components/home/Home";
import { useEffect } from "react";
import store from "./store";
import { loadUser } from "./redux/actions/userActions";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrialProductDetails from "./components/home/Products/TrialProductDetails";
import { checkForPathName } from "./components/common/Helper";
import MyAccount from "./components/user/MyAccount";
import Cart from "./components/user/cart/Cart";
import Orders from "./components/user/orders/Orders";

function App() {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Router>
			{/* {!checkForPathName && <Header />} */}
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<SignUp />} />
				<Route exact path="/myaccount" element={<MyAccount />} />
				<Route exact path="/trial/:id" element={<TrialProductDetails />} />
				<Route exact path="/mycart" element={<Cart />} />
				<Route exact path="/myorders" element={<Orders />} />
			</Routes>
			{!checkForPathName && <Footer />}
			<ToastContainer />
		</Router>
	);
}

export default App;
