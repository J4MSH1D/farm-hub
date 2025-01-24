export async function mainGuard(to, from, next) {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    if (to.name === "login") {
      return next({ name: "Translations" });
    }
  } else {
    if (to.name !== "login" && to.meta?.layout === "dashboard") {
      return next({ name: "login" });
    }
  }

  next();
}
