import { jwtDecode } from "jwt-decode";

export async function mainGuard(to, from, next) {
  const user = localStorage.getItem("accessToken") ? jwtDecode(localStorage.getItem("accessToken")) : null,
    redirectingPage = to,
    redirecingPagePermissions = redirectingPage["meta"] && redirectingPage["meta"]["permissions"] ? redirectingPage["meta"]["permissions"] : [],
    userPermissions = user ? user.permissions.split(", ").map(e => Number(e)) : [];

  if (user) {
    if (to.name === "Login") {
      return next({ path: "/dashboard/my-transactions" });
    }
    if (redirecingPagePermissions.length && !redirecingPagePermissions.some(permission => userPermissions.includes(permission))) {
      return next({ path: "/" });
    }
  } else {
    if (to.name !== "Login" && to.meta?.layout === "dashboard") {
      return next({ name: "Login" });
    }
  }
  next();
}
