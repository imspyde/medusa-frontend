import { toast } from "react-toastify";
import ToastView, { defaultToastProps } from "./ToastView";
import AlertView from "./AlertView";
import swal from "@sweetalert/with-react";
import { blueBtnCls } from "./Buttons";

const error = "error";

const showSwal = (
	titleText,
	contentText,
	callback = () => {},
	showButton = true,
	showClose = false,
	id = "alert-confirm-button"
) => {
	if (showButton)
		return swal(
			<AlertView
				showClose={showClose}
				titleText={titleText}
				contentText={contentText}
				onClose={() => {
					swal.close();
				}}
				onAction={(btnData) => {
					swal.close();
					if (btnData.id === id) {
						callback();
					}
				}}
				buttons={showButton ? [{ className: blueBtnCls, text: "OK", id }] : []}
			/>,
			{ buttons: false }
		);
	else
		swal(
			<AlertView
				showClose={showClose}
				titleText={titleText}
				contentText={contentText}
				onClose={() => {
					swal.close();
				}}
				onAction={(btnData) => {
					swal.close();
					if (btnData.id === "alert-confirm-button") {
						callback();
					}
				}}
			/>,
			{ buttons: false }
		);
};

const toastPayload = {
	position: "top-center",
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
};

const ShowAlert = (text, type = "success") => {
	if (type === "success") {
		return toast.success(text, {
			toastPayload,
		});
	} else {
		return toast.error(text, {
			toastPayload,
		});
	}
};

export { showSwal, ShowAlert, error };
