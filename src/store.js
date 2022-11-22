import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./redux/reducers/userReducer";
import { productDetailsReducer } from "./redux/reducers/productReducer";
import { cartReducer } from "./redux/reducers/cartReducer";

const reducer = combineReducers({
	user: userReducer,
	productDetails: productDetailsReducer,
	cart: cartReducer,
});

const initialState = {
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
		createdTrialCart: localStorage.getItem("createdTrialCart")
			? JSON.parse(localStorage.getItem("createdTrialCart"))
			: [],
	},
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
