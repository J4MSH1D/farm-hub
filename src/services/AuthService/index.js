import { ApiService } from "../ApiService";

class AuthApiService extends ApiService {
  constructor() {
    super();
  }

  async RegisterByEimzo(data) {
    const response = await this.api.post("/Auth/RegisterByEImzo", data);
    return response;
  }

  async LoginByEimzo(signature) {
    const response = await this.api.post("/Auth/LoginByEimzo", signature);
    return response;
  }

  async GetUser() {
    const response = await this.api.get("/Auth/GetUser");
    return response;
  }

  async Logout() {
    await this.api.get("/Auth/Logout");
  }

  async LoginWithEmail(data) {
    const response = await this.api.post("/Auth/LoginByEmail", data);
    return response;
  }
}

const authApiService = new AuthApiService();

export { authApiService, AuthApiService };
