import { loadLayoutMiddleware } from "./loadLayout";
import { setTitle } from "./setTitle";
import { mainGuard } from "./guard";

export async function mainMiddleware(to, from, next) {
	await loadLayoutMiddleware(to, from);
	setTitle(to, from);
	return mainGuard(to, from, next);
}
