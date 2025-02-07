import { storeKeys } from "@/enums/storage/index";
import { StoreService } from "../storage";
import { jwtDecode } from "jwt-decode";

class AuthService extends StoreService {
  constructor() {
    super();
  }

  GetUserPermissions() {
    let token = this.Get(storeKeys.token);
    return token
      ? jwtDecode(token)
          .permissions.split(", ")
          .map(e => Number(e))
      : [];
  }

  GetPermissions() {
    return this.GetUserPermissions().length ? this.GetUserPermissions() : [];
  }

  CheckPermission(routePermissions) {
    if (!Array.isArray(routePermissions) || !routePermissions) return true;
    if (Array.isArray(routePermissions) && !routePermissions.length) return true;
    return routePermissions.some(e => this.GetPermissions().includes(e));
  }
}

const authService = new AuthService();

export { authService, AuthService };
