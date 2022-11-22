import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../../redux/actions/productAction";
import { AddToCartBtn } from "../../common/Buttons";
import LoaderComponent from "../../common/Loader";
import SliderCard from "../../common/SliderCard";
import NavbarBack from "../../layout/NavbarBack";
import OptionSelect from "./OptionSelect";
import "./TrialProductDetails.css";
import isEqual from "lodash/isEqual";
import { addItemsToCart } from "../../../redux/actions/cartAction";
import { ShowAlert } from "../../common/Alert";

const TrialProductDetails = (props) => {
	const { isTrial = false } = props;
	const { id } = useParams();
	const dispatch = useDispatch();
	const { product, loading, error } = useSelector((state) => {
		return state.productDetails;
	});
	const { createdTrialCart } = useSelector((state) => {
		return state.cart;
	});
	const { error: loadedUserError, isAuthenticated } = useSelector(
		(state) => state.user
	);

	const [options, setOptions] = useState({});

	const [quantity, setQuantity] = useState(1);

	const increaseQuantity = () => {
		// if (product.stock <= quantity) {
		// 	return alert.error("You cannot add this item more!");
		// }
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if (quantity <= 1) return;
		else setQuantity(quantity - 1);
	};

	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [id]);

	const isSampleThere = product?.variants?.some(
		(item) => item.metadata.isSample
	);

	const updateOptions = (update) => {
		setOptions({ ...options, ...update });
	};

	// memoized record of the product's variants
	const variants = product?.variants;
	const variantRecord = useMemo(() => {
		const map = {};

		for (const variant of variants || []) {
			const tmp = {};

			for (const option of variant.options) {
				tmp[option.option_id] = option.value;
			}

			map[variant.id] = tmp;
		}

		return map;
	}, [variants]);

	// memoized function to check if the current options are a valid variant
	const variant = useMemo(() => {
		let variantId = undefined;

		for (const key of Object.keys(variantRecord)) {
			if (isEqual(variantRecord[key], options)) {
				variantId = key;
			}
		}

		return variants?.find((v) => v.id === variantId);
	}, [options, variantRecord, variants]);

	const priceFromVariant = useMemo(() => {
		return (
			variant && variant?.prices?.find((price) => price?.currency_code === "usd")
		);
	}, [variant]);

	const addToCart = () => {
		const payload = {
			variant_id: variant?.id,
			quantity,
		};
		dispatch(addItemsToCart(createdTrialCart?.id, payload));
	};

	console.log(variant);

	return (
		<div>
			{loading ? (
				<LoaderComponent />
			) : (
				<>
					<NavbarBack title={product?.title || ""} />
					<SliderCard slidesToShow={1}>
						{product &&
							product?.images?.map((item, id) => {
								return <img src={item.url} key={id} alt={product.title} />;
							})}
					</SliderCard>

					<div className="px-3">
						<div className="d-flex mt-5">
							<div className="product-name d-flex flex-column">
								<h6>{product?.title || ""} </h6>
								<span>
									Price:{" "}
									{variant === undefined ? (
										<span className="price-variant-text">Select variants to see</span>
									) : (
										`$ ${priceFromVariant?.amount || 0}`
									)}
								</span>
								<span>Weight: {product?.weight || 0} gm</span>
							</div>

							{isSampleThere && (
								<button className="try-sample-btn btn btn-primary" size="sm">
									Try Sample
								</button>
							)}
						</div>

						{product?.variants?.length > 0 && (
							<div className="product-variants my-3">
								{product?.options?.map((option) => {
									return (
										<div key={option.id}>
											<OptionSelect
												option={option}
												current={options[option.id]}
												updateOption={updateOptions}
												title={option.title}
											/>
										</div>
									);
								})}
							</div>
						)}

						<div className="d-flex mt-3 mb-3 justify-content-between">
							<div className="d-flex align-items-center" style={{ gap: "10px" }}>
								<AiOutlineMinusCircle onClick={decreaseQuantity} size="1.5rem" />
								<span className="font-quantity">{quantity}</span>
								<AiOutlinePlusCircle onClick={increaseQuantity} size="1.5rem" />
							</div>
							<AddToCartBtn
								btnClass="btn-block"
								onClick={() => {
									if (!isAuthenticated) ShowAlert("Please login to add items!", "error");
									else if (variant === undefined)
										ShowAlert("Please select variant!", "error");
									else {
										if (variant?.metadata?.isSample) addToCart();
										else ShowAlert("Select other variant for sample order!", "error");
									}
								}}
							/>
						</div>

						<div className="mt-3">
							<div className="mb-2">Details</div>

							<div>{product?.description || ""}</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default TrialProductDetails;
