import { ApiService } from "../ApiService";

class RoleService extends ApiService {
  constructor() {
    super();
  }
  async GetAll() {
    const params = { skip: 0, take: 100000 };
    const response = await this.api.get("/Role/GetAll", { params });
    return response["content"];
  }
  async GetAllPermissions() {
    const params = { skip: 0, take: 10000 };
    const response = await this.api.get("/Role/GetAllPermissions", { params });
    return response["content"];
  }
}

const roleService = new RoleService();

export { roleService, RoleService };
