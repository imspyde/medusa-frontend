import {
	ADD_TO_CART,
	CREATE_TRIAL_CART,
	CREATE_SHOP_CART,
	SAVE_SHIPPING_INFO,
	GET_TRIAL_CART_SUCCESS,
	GET_TRIAL_CART_REQUEST,
	UPDATE_TRIAL_CART_ITEMS,
	UPDATE_SHOP_CART_ITEMS,
	REMOVE_TRIAL_CART_ITEMS,
	REMOVE_SHOP_CART_ITEMS,
	PAYMENT_REQUEST,
	PAYMENT_SUCCESS,
	PAYMENT_FAILED,
} from "../constants/cartConst";

export const cartReducer = (
	state = { cartItems: [], createdTrialCart: {} },
	action
) => {
	switch (action.type) {
		case GET_TRIAL_CART_REQUEST:
			return {
				...state,
				loading: true,
			};
		case GET_TRIAL_CART_SUCCESS:
		case UPDATE_TRIAL_CART_ITEMS:
		case REMOVE_TRIAL_CART_ITEMS:
		case SAVE_SHIPPING_INFO:
			return {
				...state,
				loading: false,
				getTrialCart: action.payload,
			};
		case CREATE_TRIAL_CART:
			return {
				...state,
				loading: false,
				createdTrialCart: action.payload,
			};
		case ADD_TO_CART:
			const item = action.payload;
			return {
				...state,
				cartItems: item,
				loading: false,
			};
		default:
			return state;
	}
};

export const paymentReducer = (state = {}, action) => {
	switch (action.type) {
		case PAYMENT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case PAYMENT_SUCCESS:
			return {
				...state,
				loading: false,
				paymentSuccess: action.payload,
			};
		case PAYMENT_FAILED:
			return {
				...state,
				loading: false,
				paymentError: action.payload,
			};
		default:
			return state;
	}
};
