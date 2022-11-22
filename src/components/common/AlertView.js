import React, { memo } from "react";
import { blueBtnCls, greyBtnCls } from "./Buttons";

const AlertView = (props) => {
	const {
		titleText,
		contentText,
		confirmText,
		cancelText,
		onAction,
		onClose,
		showClose = true,
		confirmcls = "",
		cancelcls = "",
		className,
		message = false,
		xbuttonClass,
		createTeamBtn,
		confirmButtonId = null,
		confirmButtonText = null,
		buttons = [
			!message && {
				id: "alert-cancel-button",
				className: `${greyBtnCls} ${cancelcls} m-2`,
				text: "Cancel",
			},
			{
				id: confirmButtonId ? confirmButtonId : "alert-confirm-button",
				className: `${blueBtnCls} ${confirmcls} m-2`,
				text: confirmButtonText ? confirmButtonText : "Confirm",
			},
		],
	} = props;

	const getButtonText = (button) => {
		if (button.id === "alert-cancel-button" && cancelText) {
			return cancelText;
		} else if (button.id === "alert-confirm-button" && confirmText) {
			return confirmText;
		} else {
			return button.text;
		}
	};

	return (
		<div className={`AlertView bg-white `}>
			<div className={`alert-title-div w-100 d-flex justify-content-end`}>
				<h2 className={`text-black w-100 font-weight-bold text-center`}>
					{titleText}
				</h2>

				{showClose ? (
					<button
						className={`h1 m-0 h-100 flex-center position-absolute ${xbuttonClass}`}
						onClick={onClose}
					>
						&times;
					</button>
				) : null}
			</div>
			<div className="alert-content-div w-100">
				<h2 className="my-5 text-black fw-500">{contentText}</h2>
			</div>
			<div
				className={`alert-actions-div w-100 flex-center ${className} ${createTeamBtn}`}
			>
				{buttons.map((btn) => (
					<button
						key={btn.id}
						onClick={() => onAction && onAction(btn)}
						id={btn.id}
						{...btn}
					>
						{getButtonText(btn)}
					</button>
				))}
			</div>
		</div>
	);
};

export default memo(AlertView);
