export async function mainGuard(to, from, next) {
	const user = localStorage.getItem("accessToken") ? JSON.parse(localStorage.getItem("accessToken")) : null,
		redirectingPage = to,
		redirecingPagePermissions = redirectingPage["meta"] && redirectingPage["meta"]["permissions"] ? redirectingPage["meta"]["permissions"] : [];

	if (user) {
		if (to.name === "Login") {
			return next({ name: "Profile" });
		}
		if (redirecingPagePermissions.length && !redirecingPagePermissions.some(permission => user.permissions.includes(permission))) {
			return next({ name: "Profile" });
		}
	} else {
		if (to.name !== "Login" && to.meta?.layout === "dashboard") {
			return next({ name: "Login" });
		}
	}
	next();
}
