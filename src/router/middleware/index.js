import { loadLayoutMiddleware } from "./loadLayout";
import { setTitle } from "./setTitle";
import { mainGuard } from "./guard";

export async function mainMiddleware(to, from, next) {
  setTitle(to, from);
  await loadLayoutMiddleware(to, from);
  return mainGuard(to, from, next);
}
