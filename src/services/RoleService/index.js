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
  async Create({ name, permissions }) {
    const response = await this.api.post("/Role/Create", { name, permissions });
    return response;
  }
  async Put({ name, permissions }) {
    const response = await this.api.post("/Role/Create", { name, permissions });
    return response;
  }
  async GetById(id) {
    const response = await this.api.get("/Role/GetById", { params: { id } });
    return response["content"];
  }
  async Update({ name, permissions, id }) {
    const response = await this.api.put("/Role/Update", { name, permissions, id });
    return response["content"];
  }
  async Delete(id) {
    const response = await this.api.delete("/Role/Delete", { params: { id } });
    return response["content"];
  }
}

const roleService = new RoleService();

export { roleService, RoleService };
