import { ApiService } from "../ApiService";

class CategoryService extends ApiService {
  constructor() {
    super();
  }

  async GetAll() {
    const response = await this.api.get("/Category/GetAll");
    return response["content"];
  }

  async Delete(id) {
    const response = await this.api.delete("/Category/Delete", { params: { id } });
    return response["content"];
  }

  async Create(data) {
    const response = await this.api.post("/Category/Create", data);
    return response["content"];
  }

  async Update(data) {
    await this.api.put("/Category/Update", data);
  }

  async GetById(id) {
    const response = await this.api.get("/Category/GetById", { params: { id } });
    return response["content"];
  }
}

const categoryService = new CategoryService();

export { categoryService, CategoryService };
