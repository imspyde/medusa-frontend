import {
	CLEAR_ERROR,
	LOGIN_FAIL,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	UPDATE_USER_REQUEST,
	UPDATE_USER_SUCCESS,
	UPDATE_USER_FAIL,
	UPDATE_PASSWORD_REQUEST,
	UPDATE_PASSWORD_SUCCESS,
	UPDATE_PASSWORD_FAIL,
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_REQUEST,
	FORGOT_PASSWORD_FAIL,
	RESET_PASSWORD_SUCCESS,
	RESET_PASSWORD_REQUEST,
	RESET_PASSWORD_FAIL,
	ALL_USERS_REQUEST,
	ALL_USERS_SUCCESS,
	ALL_USERS_FAIL,
	USER_DETAILS_REQUEST,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_FAIL,
	DELETE_USER_REQUEST,
	DELETE_USER_SUCCESS,
	DELETE_USER_FAIL,
	DELETE_USER_RESET,
	UPDATE_PROFILE_REQUEST,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_RESET,
	UPDATE_PROFILE_FAIL,
} from "../constants/userConst";
import axios from "axios";
import { ShowAlert } from "../../components/common/Alert";
import { CREATE_TRIAL_CART } from "../constants/cartConst";

let server_url = process.env.REACT_APP_BASE_URL;
// Login
export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: LOGIN_REQUEST });

		const config = {
			// headers: {
			// 	Accept: "application/json",
			// 	"Content-Type": "application/json",
			// 	"Access-Control-Allow-Origin": server_url,
			// },
			headers: [],
		};

		const { data } = await axios.post(
			`${server_url}/store/auth`,
			{ email, password },
			config
		);
		if (data) {
			dispatch({ type: LOGIN_SUCCESS, payload: data });
			ShowAlert("You've successfully logged in");
			const { data: cartData } = await axios.post(`${server_url}/store/carts`);
			dispatch({ type: CREATE_TRIAL_CART, payload: cartData.cart });
			dispatch(loadUser());
			localStorage.setItem("createdTrialCart", JSON.stringify(cartData.cart));
		}
	} catch (error) {
		console.log(error);
		ShowAlert(error?.response?.data?.message || "Something went wrong!", "error");
	}
};

// Register
export const register = (userData) => async (dispatch) => {
	try {
		dispatch({ type: REGISTER_REQUEST });

		const config = { headers: [] };

		const { data } = await axios.post(
			`${server_url}/store/customers`,
			userData,
			config
		);
		if (data) {
			ShowAlert("You have successfully signed up");
			dispatch({ type: REGISTER_SUCCESS, payload: data });
			window.location.href = "/login";
		}
	} catch (error) {
		ShowAlert(error?.response?.data?.message || "Something went wrong!", "error");
	}
};

// Load user
export const loadUser = () => async (dispatch) => {
	try {
		dispatch({ type: LOAD_USER_REQUEST });

		const { data } = await axios.get(`${server_url}/store/customers/me`);
		console.log(data);

		dispatch({ type: LOAD_USER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: LOAD_USER_FAIL, payload: error });
		console.log(error?.response?.data);
	}
};

export const clearErrors = () => async (dispatch) => {
	dispatch({ type: CLEAR_ERROR });
};

// Logout
export const logout = () => async (dispatch) => {
	try {
		await axios.delete(`${server_url}/store/auth`);
		ShowAlert("You've successfully logged out");
		dispatch({ type: LOGOUT_SUCCESS });
	} catch (error) {
		// dispatch({ type: LOGOUT_FAIL, payload: error.message });
		ShowAlert(error?.response?.data?.message || "Something went wrong!", "error");
	}
};

// Profile update
export const updateProfile = (userData) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_USER_REQUEST });

		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.post(
			`${server_url}/store/customers/me`,
			userData,
			config
		);
		if (data) {
			dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
			ShowAlert("Your profile has been updated");
			window.location.href = "/";
		}
	} catch (error) {
		// dispatch({ type: UPDATE_USER_FAIL, payload: error.message });
		ShowAlert(error?.response?.data?.message || "Something went wrong!", "error");
	}
};

// Update password
export const updatePassword = (passwords) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_PASSWORD_REQUEST });

		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.put(
			`/api/v1/password/update`,
			passwords,
			config
		);

		dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: UPDATE_PASSWORD_FAIL,
			payload: error.message,
		});
	}
};

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
	try {
		dispatch({ type: FORGOT_PASSWORD_REQUEST });

		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.post(`/api/v1/password/forgot`, email, config);

		dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
	} catch (error) {
		dispatch({
			type: FORGOT_PASSWORD_FAIL,
			payload: error.message,
		});
	}
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
	try {
		dispatch({ type: RESET_PASSWORD_REQUEST });

		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.put(
			`/api/v1/password/reset/${token}`,
			passwords,
			config
		);

		dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: RESET_PASSWORD_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get All Users
export const getAllUsers = () => async (dispatch) => {
	try {
		dispatch({ type: ALL_USERS_REQUEST });
		const { data } = await axios.get(`/api/v1/admin/users`);

		dispatch({ type: ALL_USERS_SUCCESS, payload: data.users });
	} catch (error) {
		dispatch({ type: ALL_USERS_FAIL, payload: error.message });
	}
};

// get  User Details
export const getUserDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: USER_DETAILS_REQUEST });
		const { data } = await axios.get(`/api/v1/admin/user/${id}`);

		dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
	} catch (error) {
		dispatch({ type: USER_DETAILS_FAIL, payload: error.message });
	}
};

// Update User
export const updateUser = (id, userData) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_USER_REQUEST });

		const config = { headers: { "Content-Type": "application/json" } };

		const { data } = await axios.put(
			`/api/v1/admin/user/${id}`,
			userData,
			config
		);

		dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: UPDATE_USER_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Delete User
export const deleteUser = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_USER_REQUEST });

		const { data } = await axios.delete(`/api/v1/admin/user/${id}`);

		dispatch({ type: DELETE_USER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: DELETE_USER_FAIL,
			payload: error.response.data.message,
		});
	}
};
