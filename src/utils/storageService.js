const storage = {
	set: (key, value) => {
		localStorage.setItem(key, value);
	},

	get: key => {
		return localStorage.getItem(key);
	},

	getUser: () => {
		return localStorage.getItem("accessToken") ? JSON.parse(localStorage.getItem("accessToken")) : null;
	},
};

export default storage;
