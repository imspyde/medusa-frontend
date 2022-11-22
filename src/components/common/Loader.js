import React from "react";
import loader from "../../images/loader.gif";

const LoaderComponent = () => {
	return (
		<div className="w-75" style={{ height: "70vh" }}>
			<img style={{ translate: "56% 65%" }} src={loader} alt="loading" />
		</div>
	);
};

export default LoaderComponent;
