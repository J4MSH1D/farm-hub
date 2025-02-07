import { ApiService } from "../ApiService";

class UsersService extends ApiService {
  constructor() {
    super();
  }

  async GetAll() {
    const response = await this.api.get("/User/GetAll");
    return response["content"];
  }
  async GetById(id) {
    const response = await this.api.get("/User/GetById", { params: { id } });
    return response["content"];
  }
  async Create({ firstName, lastName, middleName, roleId, pinfl, login, password }) {
    const response = await this.api.post("/User/Create", { firstName, lastName, middleName, roleId, pinfl, login, password });
    return response["content"];
  }
  async Update({ id, firstName, lastName, middleName, roleId, pinfl, login, password }) {
    const response = await this.api.put("/User/Update", { id, firstName, lastName, middleName, roleId, pinfl, login, password });
    return response["content"];
  }
  async Delete(id) {
    const response = await this.api.delete("/User/Delete", { params: { id } });
    return response["content"];
  }
}

const usersService = new UsersService();

export { UsersService, usersService };
