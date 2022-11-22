import React from "react";

const Modal = (props) => {
	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100vw",
				height: "100vh",
				zIndex: 3,
				overflow: "hidden",
				backgroundColor: "rgb(40 40 40 / 63%)",
				overflowY: "auto",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			className={`ModalPopup flex-center`}
			onMouseDown={(e) => {
				if (e.target.classList.contains("ModalPopup")) {
					e.stopPropagation();
					props.onModalTapped && props.onModalTapped();
				}
			}}
		>
			{props.children}
		</div>
	);
};

export default Modal;
