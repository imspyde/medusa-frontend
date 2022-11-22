import {
	ADD_TO_CART,
	REMOVE_CART_ITEM,
	SAVE_SHIPPING_INFO,
	CREATE_TRIAL_CART,
	CREATE_SHOP_CART,
	GET_TRIAL_CART_REQUEST,
	GET_TRIAL_CART_SUCCESS,
	GET_TRIAL_CART_ERROR,
	GET_SHOP_CART_REQUEST,
	GET_SHOP_CART_SUCCESS,
	GET_SHOP_CART_ERROR,
	UPDATE_TRIAL_CART_ITEMS,
	UPDATE_SHOP_CART_ITEMS,
	REMOVE_TRIAL_CART_ITEMS,
	REMOVE_SHOP_CART_ITEMS,
	PAYMENT_REQUEST,
	PAYMENT_SUCCESS,
	PAYMENT_FAILED,
} from "../constants/cartConst";
import axios from "axios";
import { ShowAlert } from "../../components/common/Alert";

let server_url = process.env.REACT_APP_BASE_URL;

// Get trial cart
export const getTrialCart = (cartId) => async (dispatch) => {
	try {
		dispatch({ type: GET_TRIAL_CART_REQUEST });

		const { data } = await axios.get(`${server_url}/store/carts/${cartId}`);
		if (data) {
			dispatch({
				type: GET_TRIAL_CART_SUCCESS,
				payload: data.cart,
			});
		}
	} catch (error) {
		ShowAlert(error?.response?.data?.message || "Something went wrong!", "error");
	}
};

export const updateTrialCart =
	(cartId, lineId, payload, callBack = () => {}) =>
	async (dispatch) => {
		try {
			const config = {
				headers: [],
			};
			const { data } = await axios.post(
				`${server_url}/store/carts/${cartId}/line-items/${lineId}`,
				payload,
				config
			);
			if (data) {
				dispatch({
					type: UPDATE_TRIAL_CART_ITEMS,
					payload: data.cart,
				});
				callBack();
			}
		} catch (error) {
			ShowAlert(
				error?.response?.data?.message || "Something went wrong!",
				"error"
			);
			callBack();
		}
	};

// Add items to cart
export const addItemsToCart =
	(cartId, payload) => async (dispatch, getState) => {
		try {
			const config = {
				headers: [],
			};
			const { data } = await axios.post(
				`${server_url}/store/carts/${cartId}/line-items`,
				payload,
				config
			);
			if (data) {
				ShowAlert("Items added to cart");
			}

			dispatch({
				type: ADD_TO_CART,
				payload: data.cart,
			});

			localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
		} catch (error) {
			ShowAlert(
				error?.response?.data?.message || "Something went wrong!",
				"error"
			);
		}
	};

// Remove from cart
export const removeItemsFromCart = (cartId, lineId) => async (dispatch) => {
	try {
		const { data } = await axios.delete(
			`${server_url}/store/carts/${cartId}/line-items/${lineId}`
		);
		if (data) {
			dispatch({
				type: REMOVE_CART_ITEM,
				payload: data.cart,
			});
			ShowAlert("Items removed from cart");
			dispatch(getTrialCart(cartId));
		}
	} catch (error) {
		ShowAlert(error?.response?.data?.message || "Something went wrong!", "error");
	}
};

// Save shipping info
export const saveShippingInfo =
	(cartId, payload, callBack = () => {}) =>
	async (dispatch) => {
		try {
			const config = {
				headers: [],
			};
			const { data } = await axios.post(
				`${server_url}/store/carts/${cartId}`,
				payload,
				config
			);
			if (data) {
				dispatch({
					type: SAVE_SHIPPING_INFO,
					payload: data?.cart,
				});
				ShowAlert("Address updated");
				callBack();
			}
		} catch (error) {
			ShowAlert(
				error?.response?.data?.message || "Something went wrong!",
				"error"
			);
		}
	};

// Payment info
export const paymentTrial =
	(cartId, payload, callBack = () => {}) =>
	async (dispatch) => {
		try {
			dispatch({ type: PAYMENT_REQUEST });

			const config = {
				headers: [],
			};
			const { data } = await axios.post(
				`${server_url}/store/trial_payment/${cartId}`,
				payload,
				config
			);
			if (data) {
				dispatch({
					type: PAYMENT_SUCCESS,
					payload: data,
				});
				ShowAlert("Payment successful");
				callBack();
			}
		} catch (error) {
			ShowAlert(error?.response?.data || "Something went wrong!", "error");
			dispatch({
				type: PAYMENT_FAILED,
				payload: error?.response?.data?.message || "Something went wrong!",
			});
		}
	};
