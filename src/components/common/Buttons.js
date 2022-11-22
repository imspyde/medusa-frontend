import { AiOutlineShopping } from "react-icons/ai";

export let greyBtnCls =
	"bg-light-grey-100 text-black text-small w-xsmall h-xsmall round-border-s font-weight-bold";
export let redBtnCls =
	"bg-white text-danger text-small w-xsmall h-xsmall round-border-s font-weight-bold";
export let blueBtnCls =
	"btn-default bg-prime text-white text-small w-xsmall h-xsmall round-border-s font-weight-bold";

export const AddToCartBtn = ({ btnClass = "", onClick }) => {
	return (
		<button
			size="sm"
			className={`btn btn-dark d-flex justify-content-center ${btnClass}`}
			style={{ gap: "8px" }}
			onClick={onClick}
		>
			Add To Cart <AiOutlineShopping size="1.5em" />
		</button>
	);
};
