export const fullNameFromRedux = (user) => {
	const userFirstName = user?.first_name || user?.customer?.first_name || "";
	const userLastName = user?.last_name || user?.customer?.last_name || "";
	const userFullName = userFirstName + " " + userLastName;
	return userFullName;
};

export const checkForPathName =
	window.location.pathname === "/login" ||
	window.location.pathname === "/signup" ||
	window.location.pathname === "/trial/" ||
	window.location.pathname === "/";

export const onlyUnique = (value, index, self) => self.indexOf(value) === index;

export const truncatedTitle = (title, length) =>
	title?.length > length ? title.slice(0, length).trim() + "..." : title || "";

export const getSpecificLetters = (str, character) => {
	if (str === undefined || character === undefined) return "";
	else return str && str.substr(0, str.indexOf(character));
};
